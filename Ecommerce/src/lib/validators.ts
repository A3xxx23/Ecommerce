import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z
  .string()
  .email('Invalid email address'),

  password: z
  .string()
  .min(6, 'Password must be at least 6 characters long'),

  fullname: z
  .string()
  .min(1, 'Full name is required'),

  phone: z
  .string()
  .optional(),
});

export const addressSchema = z.object({
  addressLine1: z
  .string()
  .min(1, 'Address line 1 is required')
  .max(100, 'Address line 1 must be less than 100 characters long'),

  addressLine2: z
  .string()
  .max(100, 'Address line 1 must be less than 100 characters long')
  .optional(),

  state: z
  .string()
  .min(1, 'State is required')
  .max(50, 'State must be less than 100 characters long'),

  postalCode: z
  .string()
  .max(10, 'State must be less than 100 characters long')
  .optional(),

  city: z
  .string()
  .min(1, 'City is required')
  .max(25, 'City must be less than 25 characters long'),

  country: z
  .string()
  .min(1, 'Country is required')
  .max(25, 'country must be less than 25 characters long'),

})

export type UserRegisterFormValues = z.infer<
    typeof userRegisterSchema
>;

export type AddressFormValues = z.infer<typeof addressSchema>;