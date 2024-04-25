import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="mx-auto  py-12 sm:px-6 sm:pt-12 sm:pb-4 lg:px-8 w-full sm:mb-8">
        <div className="relative mt-0 h-80 lg:mt-8  ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center ">
            <h2 className="text-center text-3xl font-semibold leading-8 text-gray-200">
              Supported by
            </h2>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0  lg:grid-cols-2 justify-center ">
              <Button variant="secondary" size="lg" asChild>
                <img
                  className="col-span-2 max-h-40 w-full object-contain lg:col-span-1 h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Google_for_Startups_logo.svg/2560px-Google_for_Startups_logo.svg.png"
                  alt="Google for Startups"
                />
              </Button>
              <Button variant="secondary" asChild>
                <img
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 h-16"
                  src="https://upload.wikimedia.org/wikipedia/en/7/75/ElevenLabs_logo_2.png"
                  alt="Eleven Labs"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
