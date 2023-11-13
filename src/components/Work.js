import React from "react";
import { experiences } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 relative">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-16 mb-4 text-green-500" />
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-white">
            My Work Experience
          </h1>
        </div>
        <div className="flex flex-col items-center relative">
          {experiences.map((experience, index) => (
            <div key={index} className="relative p-4 w-full mb-8">
              {index !== experiences.length - 1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                  <div className="bg-green-500 w-1 h-6 mt-1"></div>
                </div>
              )}
              <div className="h-full bg-gray-800 p-8 rounded-md shadow-lg relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 text-green-500">
                    {experience.position}
                  </h3>
                  <p className="text-gray-300">
                    <strong className="text-white">{experience.company}</strong> | {experience.startDate} -{" "}
                    {experience.endDate}
                  </p>
                </div>
                <ul className="list-disc ml-4 text-left">
                  {experience.description.map((point, i) => (
                    <li key={i} className="text-gray-300 text-left">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
