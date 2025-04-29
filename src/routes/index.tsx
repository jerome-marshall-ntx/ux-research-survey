import { SurveyLayout } from "@/components/survey-layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
    <SurveyLayout>
      <div className="container px-4 py-8 text-center sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          <h1 className="flex flex-col gap-2 text-white text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Join the Nutanix Research Community
          </h1>

          <p className="mx-auto max-w-2xl px-4 text-base text-white sm:px-0 sm:text-lg">
            Help us build better products with your feedback
          </p>

          <div className="flex flex-col items-center gap-4 px-4 sm:px-0">
            <Link
              to="/survey"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-12 text-lg"
              )}
            >
              Sign Up Here
            </Link>

            <p className="text-sm text-white/90">
              Be a part of exclusive UX research sessions and test our
              unreleased products
            </p>
          </div>
        </div>
      </div>
    </SurveyLayout>
  )
}
