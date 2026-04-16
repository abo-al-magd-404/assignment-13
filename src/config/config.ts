import { resolve } from "node:path";
import { config } from "dotenv";

config({ path: resolve(`./.env.${process.env.NODE_ENV}`) });

export const PORT = process.env.PORT || 30000;
export const DB_URI = process.env.DB_URI as string;
export const REDIS_URL = process.env.REDIS_URL as string;

export const SALT_ROUND = parseInt(process.env.SALT_ROUND ?? "12");
export const ENC_IV_LENGTH = parseInt(process.env.ENC_IV_LENGTH ?? "16");
export const ENC_KEY = process.env.ENC_KEY as string;

export const USER_ACCESS_TOKEN_SIGNATURE = process.env
  .USER_ACCESS_TOKEN_SIGNATURE as string;
export const USER_REFRESH_TOKEN_SIGNATURE = process.env
  .USER_REFRESH_TOKEN_SIGNATURE as string;

export const SYSTEM_ACCESS_TOKEN_SIGNATURE = process.env
  .SYSTEM_ACCESS_TOKEN_SIGNATURE as string;
export const SYSTEM_REFRESH_TOKEN_SIGNATURE = process.env
  .SYSTEM_REFRESH_TOKEN_SIGNATURE as string;

export const ACCESS_EXPIRES_IN = parseInt(
  process.env.ACCESS_TOKEN_EXPIRES_IN ?? "1800",
);
export const REFRESH_EXPIRES_IN = parseInt(
  process.env.REFRESH_TOKEN_EXPIRES_IN ?? "31536000",
);

export const EMAIL_APP = process.env.APP_EMAIL;
export const EMAIL_APP_PASSWORD = process.env.APP_EMAIL_PASSWORD;
export const APPLICATION_NAME = process.env.APPLICATION_NAME;

export const FACEBOOK = process.env.FACEBOOK;
export const INSTAGRAM = process.env.INSTAGRAM;
export const TWITTER = process.env.TWITTER;
export const ORIGINS = process.env.ORIGINS?.split(",") || [];
export const CLIENT_IDS = process.env.CLIENT_IDS?.split(",") || [];
