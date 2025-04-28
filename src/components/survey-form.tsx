import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	type CustomerWorkAreasFormValues,
	type EmployeeRoleFormValues,
	type PartnerLifecycleFormValues,
	type Step1FormValues,
	customerWorkAreasSchema,
	employeeRoleSchema,
	otherSchema,
	partnerLifecycleSchema,
	step1Schema,
} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type RelationshipType =
	| "partner"
	| "customer"
	| "future-customer"
	| "employee"
	| "other"
	| "";

type FormDataType = Step1FormValues &
	Partial<
		CustomerWorkAreasFormValues &
			PartnerLifecycleFormValues &
			EmployeeRoleFormValues
	>;

type Step2FormData =
	| CustomerWorkAreasFormValues
	| PartnerLifecycleFormValues
	| EmployeeRoleFormValues
	| z.infer<typeof otherSchema>;

export function SurveyForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

	const step1Ref = useRef<HTMLDivElement>(null);
	const step2Ref = useRef<HTMLDivElement>(null);

	// Step 1 form
	const step1Form = useForm<Step1FormValues>({
		resolver: zodResolver(step1Schema),
		defaultValues: {
			relationship: undefined,
			name: "",
			companyName: "",
			email: "",
			jobRole: "",
		},
	});

	// Customer form
	const customerForm = useForm<CustomerWorkAreasFormValues>({
		resolver: zodResolver(customerWorkAreasSchema),
		defaultValues: {
			workAreas: [],
		},
	});

	// Partner form
	const partnerForm = useForm<PartnerLifecycleFormValues>({
		resolver: zodResolver(partnerLifecycleSchema),
		defaultValues: {
			customerLifecycle: [],
		},
	});

	// Employee form
	const employeeForm = useForm<EmployeeRoleFormValues>({
		resolver: zodResolver(employeeRoleSchema),
		defaultValues: {
			employeeRole: [],
		},
	});

	// Other form (no additional fields required)
	const otherForm = useForm({
		resolver: zodResolver(otherSchema),
		defaultValues: {},
	});

	const handleStep1Submit = (data: Step1FormValues) => {
		setFormData({ ...formData, ...data });
		setStep(2);
	};

	const handleStep2Submit = (data: Step2FormData) => {
		setFormData({ ...formData, ...data });
		console.log("Form submitted:", { ...formData, ...data });
		// Here you would typically send the data to your backend
		alert("Survey submitted successfully!");
	};

	const handleBack = () => {
		setStep(1);
	};

	return (
		<>
			{step === 1 && (
				<div ref={step1Ref}>
					<Card className="bg-white rounded-lg shadow-lg overflow-hidden">
						<Form {...step1Form}>
							<form
								onSubmit={step1Form.handleSubmit(handleStep1Submit)}
								className="space-y-6 p-6"
							>
								<FormField
									control={step1Form.control}
									name="relationship"
									render={({ field }) => (
										<FormItem className="space-y-3">
											<FormLabel>
												Relationship to Nutanix{" "}
												<span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className="space-y-3"
												>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="partner" id="partner" />
														<Label htmlFor="partner">I am a Partner</Label>
													</div>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="customer" id="customer" />
														<Label htmlFor="customer">I am a Customer</Label>
													</div>
													<div className="flex items-center space-x-2">
														<RadioGroupItem
															value="future-customer"
															id="future-customer"
														/>
														<Label htmlFor="future-customer">
															I am a Future Customer
														</Label>
													</div>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="employee" id="employee" />
														<Label htmlFor="employee">
															I am a Nutanix Employee
														</Label>
													</div>
													<div className="flex items-center space-x-2">
														<RadioGroupItem value="other" id="other" />
														<Label htmlFor="other">Other...</Label>
													</div>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={step1Form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Name <span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<Input placeholder="Short answer text" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={step1Form.control}
									name="companyName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Company Name <span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<Input placeholder="Short answer text" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={step1Form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Email ID <span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<Input
													placeholder="Short answer text"
													type="email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={step1Form.control}
									name="jobRole"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												What is your role in your organization? Job Role
											</FormLabel>
											<FormControl>
												<Input placeholder="Short answer text" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="pt-4">
									<Button type="submit" className="w-full">
										Next
									</Button>
								</div>
							</form>
						</Form>
					</Card>
				</div>
			)}

			{step === 2 && (
				<div ref={step2Ref}>
					{(formData.relationship === "customer" ||
						formData.relationship === "future-customer") && (
						<Card className="bg-white rounded-lg shadow-lg overflow-hidden">
							<Form {...customerForm}>
								<form
									onSubmit={customerForm.handleSubmit(handleStep2Submit)}
									className="space-y-6 p-6"
								>
									<FormField
										control={customerForm.control}
										name="workAreas"
										render={() => (
											<FormItem>
												<FormLabel>
													(Customer + Future customer) What areas do you work
													in? <span className="text-red-500">*</span>
												</FormLabel>
												<div className="space-y-3">
													{[
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
													].map((area) => (
														<FormField
															key={area}
															control={customerForm.control}
															name="workAreas"
															render={({ field }) => {
																return (
																	<FormItem
																		key={area}
																		className="flex flex-row items-start space-x-3 space-y-0"
																	>
																		<FormControl>
																			<Checkbox
																				checked={field.value?.includes(area)}
																				onCheckedChange={(checked) => {
																					return checked
																						? field.onChange([
																								...field.value,
																								area,
																							])
																						: field.onChange(
																								field.value?.filter(
																									(value: string) =>
																										value !== area,
																								),
																							);
																				}}
																			/>
																		</FormControl>
																		<FormLabel className="text-sm font-normal">
																			{area}
																		</FormLabel>
																	</FormItem>
																);
															}}
														/>
													))}
												</div>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex justify-between pt-4">
										<Button
											type="button"
											variant="outline"
											onClick={handleBack}
										>
											Back
										</Button>
										<Button type="submit">Submit</Button>
									</div>
								</form>
							</Form>
						</Card>
					)}

					{formData.relationship === "partner" && (
						<Card className="bg-white rounded-lg shadow-lg overflow-hidden">
							<Form {...partnerForm}>
								<form
									onSubmit={partnerForm.handleSubmit(handleStep2Submit)}
									className="space-y-6 p-6"
								>
									<FormField
										control={partnerForm.control}
										name="customerLifecycle"
										render={() => (
											<FormItem>
												<FormLabel>
													(Partners) Which part of the customer lifecycle are
													you involved in?{" "}
													<span className="text-red-500">*</span>
												</FormLabel>
												<div className="space-y-3">
													{[
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
													].map((area) => (
														<FormField
															key={area}
															control={partnerForm.control}
															name="customerLifecycle"
															render={({ field }) => {
																return (
																	<FormItem
																		key={area}
																		className="flex flex-row items-start space-x-3 space-y-0"
																	>
																		<FormControl>
																			<Checkbox
																				checked={field.value?.includes(area)}
																				onCheckedChange={(checked) => {
																					return checked
																						? field.onChange([
																								...field.value,
																								area,
																							])
																						: field.onChange(
																								field.value?.filter(
																									(value: string) =>
																										value !== area,
																								),
																							);
																				}}
																			/>
																		</FormControl>
																		<FormLabel className="text-sm font-normal">
																			{area}
																		</FormLabel>
																	</FormItem>
																);
															}}
														/>
													))}
												</div>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex justify-between pt-4">
										<Button
											type="button"
											variant="outline"
											onClick={handleBack}
										>
											Back
										</Button>
										<Button type="submit">Submit</Button>
									</div>
								</form>
							</Form>
						</Card>
					)}

					{formData.relationship === "employee" && (
						<Card className="bg-white rounded-lg shadow-lg overflow-hidden">
							<Form {...employeeForm}>
								<form
									onSubmit={employeeForm.handleSubmit(handleStep2Submit)}
									className="space-y-6 p-6"
								>
									<FormField
										control={employeeForm.control}
										name="employeeRole"
										render={() => (
											<FormItem>
												<FormLabel>
													(Employees) What would best describe your role at
													Nutanix? <span className="text-red-500">*</span>
												</FormLabel>
												<div className="space-y-3">
													{[
														"Resident/Professional Services",
														"Nutanix IT",
														"Sales - Technical (SE)",
														"Sales - Field Sales",
														"Channel Sales",
														"Marketing",
														"Research & Development (R&D)",
														"SRE - Support Engineer",
													].map((role) => (
														<FormField
															key={role}
															control={employeeForm.control}
															name="employeeRole"
															render={({ field }) => {
																return (
																	<FormItem
																		key={role}
																		className="flex flex-row items-start space-x-3 space-y-0"
																	>
																		<FormControl>
																			<Checkbox
																				checked={field.value?.includes(role)}
																				onCheckedChange={(checked) => {
																					return checked
																						? field.onChange([
																								...field.value,
																								role,
																							])
																						: field.onChange(
																								field.value?.filter(
																									(value: string) =>
																										value !== role,
																								),
																							);
																				}}
																			/>
																		</FormControl>
																		<FormLabel className="text-sm font-normal">
																			{role}
																		</FormLabel>
																	</FormItem>
																);
															}}
														/>
													))}
												</div>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="flex justify-between pt-4">
										<Button
											type="button"
											variant="outline"
											onClick={handleBack}
										>
											Back
										</Button>
										<Button type="submit">Submit</Button>
									</div>
								</form>
							</Form>
						</Card>
					)}

					{(formData.relationship === "other" || !formData.relationship) && (
						<Card className="bg-white rounded-lg shadow-lg overflow-hidden">
							<Form {...otherForm}>
								<form
									onSubmit={otherForm.handleSubmit(handleStep2Submit)}
									className="space-y-6 p-6"
								>
									<div className="text-center py-8">
										<p>
											Thank you for your interest. No additional questions for
											this selection.
										</p>
									</div>

									<div className="flex justify-between pt-4">
										<Button
											type="button"
											variant="outline"
											onClick={handleBack}
										>
											Back
										</Button>
										<Button type="submit">Submit</Button>
									</div>
								</form>
							</Form>
						</Card>
					)}
				</div>
			)}
		</>
	);
}
