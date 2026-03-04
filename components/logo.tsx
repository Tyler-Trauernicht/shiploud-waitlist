'use client';

import * as React from "react"

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={`shrink-0 ${className || ''}`}
      aria-label="ShipLoud logo"
    >
      <rect x="4" y="4" width="72" height="72" rx="16" fill="#6366F1" />
      <path
        d="M25 25 Q50 20, 50 35 Q50 45, 30 45 Q20 45, 20 55 Q20 65, 45 60"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M52 30 Q62 40, 52 50"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M58 25 Q72 40, 58 55"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

export function LogoWithWordmark({ size = 32, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <Logo size={size} />
      <div className="flex items-baseline">
        <span className="font-semibold text-gray-900">Ship</span>
        <span className="font-semibold text-indigo-500">Loud</span>
      </div>
    </div>
  )
}
