import { z } from 'zod'

// Step 1 Schema
export const step1Schema = z
  .object({
    relationship: z.enum(
      ['partner', 'customer', 'future-customer', 'employee', 'other'],
      {
        required_error: 'Select how you work with Nutanix',
      },
    ),
    otherRelationship: z.string().optional(),
    firstName: z.string().min(1, { message: 'Enter your first name' }),
    lastName: z.string().optional(),
    companyName: z.string().min(1, { message: 'Enter your company name' }),
    email: z.string().min(1, { message: 'Enter your email' }).email({
      message: 'Enter a valid email',
    }),
    jobRole: z.string().min(1, { message: 'Enter your job role' }),
  })
  .refine(
    (data) => {
      // If relationship is "other", otherRelationship should be provided
      return (
        data.relationship !== 'other' ||
        (data.otherRelationship && data.otherRelationship.trim().length > 0)
      )
    },
    {
      message: 'Please specify your relationship',
      path: ['otherRelationship'],
    },
  )

export type Step1FormValues = z.infer<typeof step1Schema>

// Step 2 Schema
export const step2Schema = z.object({
  roleWorkAreas: z
    .array(z.string())
    .min(1, { message: 'Please select at least one option' }),
})

export type Step2FormValues = z.infer<typeof step2Schema>

const customerTitle = 'What areas do you work in?'
const customerWorkAreas = [
  'Infrastructure Administration',
  'Storage',
  'Cluster Management',
  'Disaster Recovery',
  'Networking',
  'Database Administration',
  'Kubernetes',
  'Cost Governance / Cost Management',
  'Licensing and Lifecycle Management',
  'Security and Compliance',
  'Identity and Access Management',
  'Troubleshooting and Maintenance',
]
// Form data options for step 2
export const STEP2_FORM_OPTIONS: Record<
  Exclude<Step1FormValues['relationship'], 'other'>,
  {
    title: string
    options: Array<string>
  }
> = {
  customer: {
    title: customerTitle,
    options: [...customerWorkAreas, 'Other'],
  },
  'future-customer': {
    title: customerTitle,
    options: [...customerWorkAreas, 'Other'],
  },
  partner: {
    title: 'Which part of the customer lifecycle are you involved in?',
    options: [
      'Sales Strategy',
      'Lead Generation',
      'Customer Acquisition - Field Sales',
      'Customer Acquisition - Technical Demo and Solutioning',
      'Onboarding and Implementation',
      'Customer Support and maintenance',
      'Renewal and Retention',
      'Upselling and Cross-selling',
      'Customer Success',
      'Vendor/Supplier Management',
      'Not directly involved',
      'Other',
    ],
  },
  employee: {
    title: 'What would best describe your role at Nutanix?',
    options: [
      'Resident/Professional Services',
      'Nutanix IT',
      'Sales - Technical (SE)',
      'Sales - Field Sales',
      'Channel Sales',
      'Marketing',
      'Research & Development (R&D)',
      'SRE - Support Engineer',
      'Other',
    ],
  },
}
