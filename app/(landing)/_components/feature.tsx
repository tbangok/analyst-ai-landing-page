import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  PresentationChartBarIcon,
  AdjustmentsVerticalIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  DocumentIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Built for Investors.",
    description:
      "AI agents and tools already adjusted to the needs of investors. Reviewing decks, building financial models, writing memos and more.",
    icon: BriefcaseIcon,
  },
  {
    name: "Security and Data Privacy.",
    description:
      "We mask your data while sending any information to LLMs. This means, the name of the Target Company, key terms and financials are never passed on.",
    icon: LockClosedIcon,
  },
  {
    name: "Relentless Research Analysts.",
    description:
      "We have AI Analysts that reads every news, article, industry report on your domain and summarize the info for you, every day.",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Excel Ninjas.",
    description:
      "We have AI Analysts that reads every news, article, industry report on your domain and summarize the info for you, every day.",
    icon: DocumentIcon,
  },
  {
    name: "Legal and Compliance.",
    description:
      "No need to ask a law firm every detail and get charged $400 for an hour of research. Our AI agents dig through all legal docs, in any country and give specific answers.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Deal Podcast and Memos.",
    description:
      "We process all the Deal information, and create podcasts and Investment Memorandum's in your Company's style, within minutes.",
    icon: AdjustmentsVerticalIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-gray-900 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="text-base font-semibold leading-7 text-indigo-400 ">
            Analyze faster
          </h3>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Super Sustainable, Super Safe
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-left text-lg font-semibold leading-7 text-gray-200 md:text-left sm:text-left">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="text-left mt-2 text-base leading-7 text-gray-200 md:text-left sm:text-left">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
