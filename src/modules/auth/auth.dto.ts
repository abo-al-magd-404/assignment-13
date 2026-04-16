import { z } from "zod";
import {
  confirmEmail,
  login,
  resendConfirmEmail,
  signup,
} from "./auth.validation";

export type LoginDto = z.infer<typeof login.body>;
export type confirmEmailDto = z.infer<typeof confirmEmail.body>;
export type resendConfirmEmailDto = z.infer<typeof resendConfirmEmail.body>;
export type SignupDto = z.infer<typeof signup.body>;
