"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const MainNav = () => {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          Kartare
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/planner/step-1"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/planner/step-1" ? "text-foreground" : "text-foreground/60"
          )}
        >
          New trip
        </Link>
      </nav>
    </div>
  )
}

export default MainNav;
