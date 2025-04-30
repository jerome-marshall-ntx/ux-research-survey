import { createFileRoute } from '@tanstack/react-router'
import { SurveyForm } from '@/components/survey-form'
import { SurveyLayout } from '@/components/survey-layout'

export const Route = createFileRoute('/survey')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SurveyLayout>
      <SurveyForm />
    </SurveyLayout>
  )
}
