export default function Partners() {
  return (
    <div className="bg-gray-900 py-12 sm:py-20">
      <div className=" isolate px-6 -top-80 lg:px-8">
        <div
          className="absolute inset-x-0 -top-100 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-200"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-gray-200">
            Trusted by deal teams at:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/ggKh1cq/white-brand-circle-png-pic-intel-logo-8c77ef027d9505caf5504a73306b183a.png"
              alt="Transistor"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://analystai.ai/image/spfz.svg"
              alt="Transistor"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://ml.globenewswire.com/Resource/Download/069763a8-d55f-4c1d-a109-39cd16753517"
              alt="Transistor"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://i.ibb.co/2vXvkXQ/logo.jpg"
              alt="Transistor"
            />

            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="https://analystai.ai/_next/image?url=%2Fimage%2Fthinkcell.png&w=640&q=75"
              alt="Transistor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
