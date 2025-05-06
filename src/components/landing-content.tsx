import { Button } from '@/components/ui/button'

const LandingContent = ({
  setView,
}: {
  setView: (view: 'landing' | 'form') => void
}) => {
  return (
    <div className="container px-4 py-8 text-center sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 flex flex-col gap-2 text-4xl leading-tight font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
          Join the Nutanix Research Community
        </h1>

        <div className="mb-6 flex flex-col gap-2 md:mb-8">
          <p className="mx-auto max-w-2xl px-4 text-base text-white sm:px-0 sm:text-lg">
            Help us build better products with your feedback
          </p>

          <p className="text-sm text-white/90 md:text-base">
            Be a part of exclusive UX research sessions and test our unreleased
            products
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 px-4 sm:px-0">
          <Button
            variant="default"
            size="lg"
            className="h-12 text-lg"
            onClick={() => setView('form')}
          >
            Sign Up Here
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingContent
