import React from "react";
import linkedinLogo from "../../../public/images/linkedin.png";
import githubLogo from "../../../public/images/github.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10 text-center items-center p-20 justify-between bg-black text-white sm:h-[150px]">
      <p className="text-2xl">BookFinder</p>
      <p>©Copyright 2023 Antisocial_Dev. All rights reserved</p>
      <div className="flex min-w-[80px] gap-5">
        <a target="_blank" href="https://github.com/AntisocialDev">
          <Image
            src={githubLogo}
            width={30}
            height={30}
            quality={100}
            alt="Github Logo"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/victor-banjo-935088163">
          <Image
            src={linkedinLogo}
            width={30}
            height={30}
            quality={100}
            alt="Linkedin Logo"
          />
        </a>
      </div>
    </footer>
  );
}
