"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  shortName: string;
}

export const Logo = (props: LogoProps = { shortName: "N" }) => {
    return (
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br from-blue-500 to-purple-500",
                  "text-white font-bold text-lg",
                  "group-hover:shadow-lg group-hover:shadow-blue-500/25",
                  "transition-all duration-300"
                )}
              >
                N
              </div>
              <span className="text-gray-900 dark:text-white font-semibold text-lg hidden sm:block">
                {props?.shortName}
              </span>
            </Link>
    )
};