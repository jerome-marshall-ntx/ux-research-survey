import { z } from "zod";

// Step 1 Schema
export const step1Schema = z.object({
	relationship: z.enum(
		["partner", "customer", "future-customer", "employee", "other"],
		{
			required_error: "Select how you work with Nutanix",
		},
	),
	firstName: z.string().min(1, { message: "Enter your first name" }),
	lastName: z.string().optional(),
	companyName: z.string().min(1, { message: "Enter your company name" }),
	email: z.string().min(1, { message: "Enter your email" }).email({
		message: "Enter a valid email",
	}),
	jobRole: z.string().optional(),
});

export type Step1FormValues = z.infer<typeof step1Schema>;

// Step 2 Schema
export const step2Schema = z.object({
	roleWorkAreas: z
		.array(z.string())
		.min(1, { message: "Please select at least one option" }),
});

export type Step2FormValues = z.infer<typeof step2Schema>;

const customerTitle = "What areas do you work in?";
const customerWorkAreas = [
	"Infrastructure Administration (Infra)",
	"Storage (Infra)",
	"Cluster Management (Infra)",
	"Disaster Recovery (Infra)",
	"Networking (Infra)",
	"Database Administration (Infra)",
	"Kubernetes (Cloud)",
	"Cost Governance /Cost Management",
	"Licensing and Lifecycle Management (Common services)",
	"Security and Compliance (Common services)",
	"Identity and Access Management (Common Services)",
	"Troubleshooting and Maintenance",
];
// Form data options for step 2
export const STEP2_FORM_OPTIONS: Record<
	Exclude<Step1FormValues["relationship"], "other">,
	{
		title: string;
		options: string[];
	}
> = {
	customer: {
		title: customerTitle,
		options: customerWorkAreas,
	},
	"future-customer": {
		title: customerTitle,
		options: customerWorkAreas,
	},
	partner: {
		title: "Which part of the customer lifecycle are you involved in?",
		options: [
			"Sales Strategy",
			"Lead Generation",
			"Customer Acquisition - Field Sales",
			"Customer Acquisition - Technical Demo and Solutioning",
			"Onboarding and Implementation",
			"Customer Support and maintenance",
			"Renewal and Retention",
			"Upselling and Cross-selling",
			"Customer Success",
			"Vendor/Supplier Management",
			"Not directly involved",
		],
	},
	employee: {
		title: "What would best describe your role at Nutanix?",
		options: [
			"Resident/Professional Services",
			"Nutanix IT",
			"Sales - Technical (SE)",
			"Sales - Field Sales",
			"Channel Sales",
			"Marketing",
			"Research & Development (R&D)",
			"SRE - Support Engineer",
		],
	},
};
