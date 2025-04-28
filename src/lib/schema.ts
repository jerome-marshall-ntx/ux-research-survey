import { z } from "zod"

export const relationshipSchema = z.enum(["partner", "customer", "future-customer", "employee", "other"])

export const step1Schema = z.object({
  relationship: relationshipSchema,
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  jobRole: z.string().optional(),
})

export const customerWorkAreasSchema = z.object({
  workAreas: z.array(z.string()).min(1, { message: "Please select at least one work area" }),
})

export const partnerLifecycleSchema = z.object({
  customerLifecycle: z.array(z.string()).min(1, { message: "Please select at least one lifecycle area" }),
})

export const employeeRoleSchema = z.object({
  employeeRole: z.array(z.string()).min(1, { message: "Please select at least one role" }),
})

export const otherSchema = z.object({})

export type Step1FormValues = z.infer<typeof step1Schema>
export type CustomerWorkAreasFormValues = z.infer<typeof customerWorkAreasSchema>
export type PartnerLifecycleFormValues = z.infer<typeof partnerLifecycleSchema>
export type EmployeeRoleFormValues = z.infer<typeof employeeRoleSchema>
