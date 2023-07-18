import { z } from "zod";

export const schema = z
  .object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Email must be valid" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    passwordRepeat: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Passwords must match",
    path: ["passwordRepeat"], // field which will have the error assigned
  });
