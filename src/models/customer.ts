import * as z from "zod";

export const CustomerSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmedPassword: z.string(),
  companyName: z.string(),
  taxId: z.string(),
  fullName: z.string(),
  country: z.string(),
  phoneNumber: z.string(),
  website: z.string(),
  address: z.string(),
  province: z.string(),
  subDistrict: z.string(),
  district: z.string(),
  zipCode: z.string(),
});
export type Welcome = z.infer<typeof CustomerSchema>;