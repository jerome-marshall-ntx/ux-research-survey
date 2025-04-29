import { Button } from "@/components/ui/button";
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
import { type Step1FormValues, step1Schema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Step1FormProps {
	onSubmit: (data: Step1FormValues) => void;
	defaultValues?: Partial<Step1FormValues>;
}

export function Step1Form({ onSubmit, defaultValues }: Step1FormProps) {
	const form = useForm<Step1FormValues>({
		resolver: zodResolver(step1Schema),
		defaultValues: defaultValues || {
			relationship: undefined,
			firstName: "",
			lastName: "",
			companyName: "",
			email: "",
			jobRole: "",
		},
	});

	const RequiredIndicator = <span className="text-red-500">*</span>;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="relationship"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>
								How would you describe your relationship with Nutanix?{" "}
								{RequiredIndicator}
							</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="space-y-3 mt-2"
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
										<Label htmlFor="employee">I am a Nutanix Employee</Label>
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

				<div className="grid md:grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name {RequiredIndicator}</FormLabel>
								<FormControl>
									<Input placeholder="Enter your first name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your last name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Company Name {RequiredIndicator}</FormLabel>
							<FormControl>
								<Input placeholder="Enter your company name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email ID {RequiredIndicator}</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your work email ID"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="jobRole"
					render={({ field }) => (
						<FormItem>
							<FormLabel>What is your role in your organization?</FormLabel>
							<FormControl>
								<Input placeholder="Enter your job role" {...field} />
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
	);
}
