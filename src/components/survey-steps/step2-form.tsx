import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	STEP2_FORM_OPTIONS,
	type Step1FormValues,
	type Step2FormValues,
	step2Schema,
} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Step2FormProps {
	relationshipType: Exclude<Step1FormValues["relationship"], "other">;
	onSubmit: (data: Step2FormValues) => void;
	onBack: () => void;
}

export function Step2Form({
	relationshipType,
	onSubmit,
	onBack,
}: Step2FormProps) {
	const form = useForm<Step2FormValues>({
		resolver: zodResolver(step2Schema),
		defaultValues: {
			roleWorkAreas: [],
		},
	});

	// Handle form submission
	const handleSubmit = (data: Step2FormValues) => {
		onSubmit(data);
	};

	const formOptions = STEP2_FORM_OPTIONS[relationshipType];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="roleWorkAreas"
					render={() => (
						<FormItem>
							<FormLabel className="mb-3 flex leading-normal">
								{formOptions.title} <span className="text-red-500">*</span>
							</FormLabel>
							<div className="space-y-3">
								{formOptions.options.map((option) => (
									<FormField
										key={option}
										control={form.control}
										name={"roleWorkAreas"}
										render={({ field: innerField }) => {
											// Safely handle array value
											const values = Array.isArray(innerField.value)
												? innerField.value
												: [];

											return (
												<FormItem
													key={option}
													className="flex flex-row items-center space-x-3 space-y-0"
												>
													<FormControl>
														<Checkbox
															checked={values.includes(option)}
															onCheckedChange={(checked) => {
																if (checked) {
																	innerField.onChange([...values, option]);
																} else {
																	innerField.onChange(
																		values.filter((v) => v !== option),
																	);
																}
															}}
														/>
													</FormControl>
													<FormLabel className="text-lg font-normal! font-sans!">
														{option}
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
					<Button type="button" variant="outline" onClick={onBack}>
						Back
					</Button>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Form>
	);
}
