"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../common/enums");
const config_1 = require("../../config/config");
const exceptions_1 = require("../../common/exceptions");
const services_1 = require("../../common/services");
class UserService {
    redis;
    tokenService;
    constructor() {
        this.redis = services_1.redisService;
        this.tokenService = new services_1.TokenService();
    }
    async profile(user) {
        return user.toJSON();
    }
    async logout({ flag }, user, { jti, iat, sub }) {
        let status = 200;
        switch (flag) {
            case enums_1.LogoutEnum.ALL:
                user.changeCredentialsTime = new Date();
                await user.save();
                await this.redis.deleteKey(await this.redis.keys(this.redis.baseRevokeTokenKey(sub)));
                break;
            default:
                await this.tokenService.createRevokeToken({
                    userId: sub,
                    jti,
                    ttl: iat + config_1.REFRESH_EXPIRES_IN,
                });
                status = 201;
                break;
        }
        return status;
    }
    async rotateToken(user, { sub, jti, iat }, issuer) {
        if ((iat + config_1.ACCESS_EXPIRES_IN) * 1000 >= Date.now() + 30000) {
            throw new exceptions_1.ConflictException("current access token still valid");
        }
        await this.tokenService.createRevokeToken({
            userId: sub,
            jti,
            ttl: iat + config_1.REFRESH_EXPIRES_IN,
        });
        return await this.tokenService.createLoginCredentials(user, issuer);
    }
}
exports.default = new UserService();
