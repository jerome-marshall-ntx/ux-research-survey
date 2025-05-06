import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SurveyLayout } from '@/components/survey-layout'
import LandingContent from '@/components/landing-content'
import { SurveyForm } from '@/components/survey-form'

export const Route = createFileRoute('/ux-research-community/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [view, setView] = useState<'landing' | 'form'>('landing')

  return (
    <SurveyLayout>
      {view === 'landing' && <LandingContent setView={setView} />}
      {view === 'form' && <SurveyForm />}
    </SurveyLayout>
  )
}
