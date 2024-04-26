"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Footer = () => {
   
  return (
    <footer className="bg-gray-900  border-t border-gray-400 shadow-sm ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://analystai.ai/" className="flex items-center">
              <img
                src="https://i.ibb.co/crsyw99/bitzuist1-startup-logo-black-background-in-front-writes-Analy-19893e2b-b006-417d-91b6-67528c9afb8e-1.png"
                className="h-32 me-3"
                alt="AnalystAI Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Resources
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <a href="https://analystai.ai/" className="hover:underline">
                    AnalystAI
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <a
                    href="https://github.com/Vietnam-VoDich"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Legal
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            © 2023 AnalystAI™. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Media Links */}
            <a
              href="https://facebook.com"
              className="text-gray-200 hover:text-indigo-400 dark:hover:text-white"
            >
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,12 C22,6.477 17.523,2 12,2 C6.477,2 2,6.477 2,12 C2,16.991 5.657,21.128 10.438,21.879 L10.438,14.89 L7.898,14.89 L7.898,12 L10.438,12 L10.438,9.797 C10.438,7.291 11.932,5.907 14.215,5.907 C15.309,5.907 16.451,6.102 16.451,6.102 L16.451,8.562 L15.016,8.562 C13.594,8.562 13.313,9.333 13.313,10.176 L13.313,12 L16.337,12 L15.893,14.89 L13.313,14.89 L13.313,21.879 C18.043,21.129 22,16.99 22,12" />
              </svg>
            </a>
            <a
              href="https://github.com/Vietnam-VoDich"
              className="text-gray-200 hover:text-indigo-400 dark:hover:text-white ml-4"
            >
              {/* GitHub Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.07-.01-1.94-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.54 2.34 1.1 2.91.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.578 9.578 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10.001 10.001 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
