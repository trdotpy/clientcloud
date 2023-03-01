import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col justify-between border-t pt-5 pb-10 sm:flex-row">
        <p className="text-xs">
          © Copyright 2023 ClientCloud Inc. All rights reserved.
        </p>
        <div className="mt-4 flex items-center justify-center space-x-4 sm:mt-0 ">
          <a
            href="https://github.com/trdotpy"
            className="text-gray-400 transition-colors duration-300 hover:text-error"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/trdotpy/"
            className="text-gray-400 transition-colors duration-300 hover:text-error"
          >
            <IconBrandLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
