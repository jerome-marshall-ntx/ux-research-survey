import { SurveyForm } from "@/components/survey-form";
import { SurveyLayout } from "@/components/survey-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/survey")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SurveyLayout>
			<SurveyForm />
		</SurveyLayout>
	);
}
