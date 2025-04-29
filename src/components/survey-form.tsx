import type { Step1FormValues, Step2FormValues } from "@/lib/schema";
import { useState } from "react";
import { Step1Form } from "./survey-steps/step1-form";
import { Step2Form } from "./survey-steps/step2-form";
import { Step3Thankyou } from "./survey-steps/step3-thankyou";
import { Card } from "./ui/card";

type FormDataType = Step1FormValues & Step2FormValues;

export function SurveyForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormDataType>({
		firstName: "",
		lastName: "",
		email: "",
		companyName: "",
		jobRole: "",
		relationship: "partner",
		roleWorkAreas: [],
		otherRelationship: "",
	} as FormDataType);

	const sendSurvey = async (data: FormDataType) => {
		setStep(3);

		const formData = new FormData();
		formData.append("Name", `${data.firstName} ${data.lastName}`.trim());
		formData.append("Email", data.email);
		formData.append("Company", data.companyName);
		formData.append("Role", data.jobRole ?? "");
		
		// Add relationship with "Other" specification if applicable
		const relationshipText = data.relationship === "other" && data.otherRelationship
			? `Other: ${data.otherRelationship}`
			: data.relationship;
		formData.append("Relationship", relationshipText);
		
		// Work areas will already have "Other: [text]" if the user specified other
		formData.append("Work Areas", data.roleWorkAreas.join(", "));

		fetch(
			"https://script.google.com/macros/s/AKfycbwEgox6SGY0Durv2jzkj5OtMKPvR75D4GrDsYtzKFu-ao3GV0gRRMifU5D9ztm8L-vjsQ/exec",
			{
				method: "POST",
				body: formData,
			},
		)
			.then((res) => {
				console.log("🚀 ~ handleSubmit ~ res:", res);
			})
			.catch((err) => {
				console.error("🚀 ~ handleSubmit ~ err:", err);
			});
	};

	const handleStep1Submit = (data: Step1FormValues) => {
		const updatedFormData = { ...formData, ...data };
		setFormData(updatedFormData);

		if (data.relationship === "other") {
			sendSurvey(updatedFormData);
			return;
		}

		setStep(2);
	};

	const handleStep2Submit = (data: Step2FormValues) => {
		const finalData = { ...formData, ...data };
		setFormData(finalData);

		sendSurvey(finalData);
	};

	const handleBack = () => {
		setStep(1);
	};

	return (
		<Card className="bg-white rounded-lg shadow-lg overflow-hidden p-5 md:p-6">
			{step === 1 && (
				<Step1Form onSubmit={handleStep1Submit} defaultValues={formData} />
			)}

			{step === 2 && formData.relationship !== "other" && (
				<Step2Form
					relationshipType={formData.relationship}
					onSubmit={handleStep2Submit}
					onBack={handleBack}
				/>
			)}

			{step === 3 && <Step3Thankyou />}
		</Card>
	);
}
