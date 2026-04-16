import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";
import { successResponse } from "../../common/response";
import userService from "./user.service";
import { authentication, authorization } from "../../middleware";
import { endpoint } from "./user.authorization";
import { TokenTypeEnum } from "../../common/enums";

const router = Router();

router.get(
  "/",
  authentication(),
  authorization(endpoint.profile),
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await userService.profile(req.user);
    return successResponse({ res, data });
  },
);

router.post(
  "/logout",
  authentication(),
  async (req: Request, res: Response, next: NextFunction) => {
    const status = await userService.logout(
      req.body,
      req.user,
      req.decoded as { sub: string; jti: string; iat: number },
    );
    return successResponse({ res, status });
  },
);

router.post(
  "/rotate-token",
  authentication(TokenTypeEnum.REFRESH),
  async (req: Request, res: Response, next: NextFunction) => {
    const credentials = await userService.rotateToken(
      req.user,
      req.decoded as { sub: string; jti: string; iat: number },
      `${req.protocol}://${req.host}`,
    );
    return successResponse({ res, status: 201, data: { ...credentials } });
  },
);

export default router;
