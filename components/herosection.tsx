"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const navigation = [
  { name: "Platform", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="bg-white min-h-screen">
      {/* Two column hero section */}
      <div className="relative isolate pt-24 lg:pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 lg:min-h-screen">
            {/* Left column - Content */}
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8 lg:py-24">
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-8 self-start">
                <BoltIcon className="w-4 h-4 mr-1" />
                Introducing TalentBrigde 1.0
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Unlock the expertise
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  of our resume writers
                </span>
              </h1>

              <p className="mt-6 text-3xl text-gray-600 max-w-lg">
                Land more interviews and get hired faster with a professional resume that highlights your full potential.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-gray-900">
                      Recruitment and staffing
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Includes sourcing, screening, interviewing, and hiring candidates for permanent or temporary positions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BoltIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-gray-900">
                      Job Market
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      A home for job seekers to kick start their careers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-gray-900">
                      Organizational Design:
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Supports restructuring, and redesigning organizational structures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex-none w-full sm:w-auto text-center"
                >
                  Get started for free
                </a>
                <a
                  href="#"
                  className="rounded-full px-6 py-3 text-base font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-x-2 flex-none w-full sm:w-auto"
                >
                  Talk to sales
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Join 2,500+ companies already using <span className="font-bold">TalentBridge</span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-6 w-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative flex items-center justify-center lg:h-auto">
              <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-50 to-indigo-50 z-0 lg:block hidden"></div>
              <div className="relative z-10 px-6 py-12 lg:px-8 lg:py-0 flex items-center justify-center w-full h-full">
                <img
                  src="https://14j7oh8kso.ufs.sh/f/HLxTbDBCDLwfZ4gu2wU9C3gHFdyzTE0q7PpDnjchu6XsKk1l"
                  alt="Analytics dashboard"
                  className="w-full max-w-lg xl:max-w-xl rounded-xl h-[80%] shadow-2xl lg:translate-y-0 object-cover object-center"
                />
                {/* Floating stats card */}
                <div className="absolute top-140  bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4 border border-gray-100">

                  <div className="flex items-center justify-center w-full bottom-2">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#9bc7] d2dark:bg-gray-700 hover:bg-[#2f6b8a77] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}