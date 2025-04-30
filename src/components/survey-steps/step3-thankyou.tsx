export function Step3Thankyou() {
  return (
    <div className="flex flex-col md:py-8 py-4 px-4 max-w-2xl mx-auto">
      <h1 className="md:text-5xl text-3xl font-bold text-primary mb-6">
        Thank You!
      </h1>

      <div className=" text-gray-600 space-y-4">
        <p className="md:text-2xl text-xl">
          We value your interest and appreciate you taking out the time.
        </p>
        <p className="md:text-2xl text-xl">
          For research-related conversations, feel free to get in touch with
          Paul DiGioia at{' '}
          <a href="mailto:pdigioia@nutanix.com" className="text-primary">
            pdigioia@nutanix.com
          </a>
          .
        </p>
        <p className="md:text-2xl text-xl">
          We look forward to connecting with you!
        </p>
      </div>

      <div className="mt-10 flex items-center text-primary space-x-2">
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
