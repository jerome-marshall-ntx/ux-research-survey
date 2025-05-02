export function Step3Thankyou() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col px-4 py-4 md:py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary md:text-5xl">
        Thank You!
      </h1>

      <div className="space-y-4 text-gray-600">
        <p className="text-xl md:text-2xl">
          We value your interest and appreciate you taking out the time.
        </p>
        <p className="text-xl md:text-2xl">
          For research-related conversations, feel free to get in touch with the
          UX Research team at{' '}
          <a
            href="mailto:ux-research@nutanix.com"
            className="text-primary text-nowrap
            "
          >
            ux-research@nutanix.com
          </a>
          .
        </p>
        <p className="text-xl md:text-2xl">
          We look forward to connecting with you!
        </p>
      </div>

      <div className="mt-10 flex items-center space-x-2 text-primary">
        <a href="https://www.nutanix.com" className="text-xl hover:underline">
          Nutanix.com
        </a>
        <span className="text-xl">|</span>
        <a href="https://nutanix.design" className="text-xl hover:underline">
          Nutanix.design
        </a>
      </div>
    </div>
  )
}
