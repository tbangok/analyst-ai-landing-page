

import { Footer } from "../(landing)/_components/footer"; 
import Partners from "../(landing)/_components/partners";

const DemoRegister = () => {
  return (
    <div className="bg-gray-900 w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl ">
          Get your AnalystAI now
      
        </h1>
      </div>
      <div className="mx-auto  py-24 sm:px-6 sm:py-12 lg:px-20 w-full ">
        <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J4RqCSD--Dg?si=ewzPSvhdYn4PPpFl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            {/* <video
              className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
              controls
            >
              <source
                src="https://www.youtube.com/watch?v=J4RqCSD--Dg"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div className="relative m-auto h-70 lg:my-8 border w-full text-gray-200">
            Form o day
          </div>
        </div>
      </div>
      <Partners />
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
};

export default DemoRegister;
