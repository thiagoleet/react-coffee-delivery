import * as zod from "zod";

export const cartFormDataValidationSchema = zod.object({
  delivery: zod.object({
    zipCode: zod.string().length(8),
    address: zod.string(),
    addressNumber: zod.string(),
    addressComplement: zod.string().optional(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string(),
  }),
  paymentMethod: zod.string(),
});

export type CartFormData = zod.infer<typeof cartFormDataValidationSchema>;
