import { z } from "zod";

export const schema = z.object({
  price: z
    .string()
    .refine(
      (value) => !isNaN(Number(value)) && Number.isInteger(Number(value)),
      {
        message: "Input should be a valid integer",
      }
    )
    .refine((value) => Number(value) > 0, {
      message: "Price should be at least 1$ or higher",
    })
    .transform(Number),
});
