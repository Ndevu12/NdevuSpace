"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PERSONAL_INFO } from "@/lib/constants";

interface LogoProps {
  shortName?: string;
}

export const Logo = (props: LogoProps = { shortName: "" }) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div
        className={cn(
          "relative w-9 h-9 rounded-xl overflow-hidden",
          "ring-1 ring-border",
          "transition-transform duration-300 group-hover:scale-105"
        )}
      >
        <Image
          src={PERSONAL_INFO.profileImage}
          alt={PERSONAL_INFO.fullName}
          fill
          sizes="36px"
          className="object-cover grayscale"
          priority
        />
      </div>
      <span className="text-gray-900 dark:text-white font-semibold hidden sm:block">
        {props?.shortName}
      </span>
    </Link>
  );
};
