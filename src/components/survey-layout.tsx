import type { ReactNode } from 'react'
import DesktopBottomLines from '@/assets/desktop-bottom-lines.png'
import DesktopGradientLeft from '@/assets/desktop-gradient-left.png'
import DesktopGradientRight from '@/assets/desktop-gradient-right.png'
import DesktopTopLines from '@/assets/desktop-top-lines.png'
import GradientMobile from '@/assets/gradient-mobile.png'
import MobileBottomLines from '@/assets/mobile-bottom-lines.png'
import MobileTopLines from '@/assets/mobile-top-lines.png'
import NutanixNextLogo from '@/assets/nutanix-next.svg'
import NutanixLogo from '@/assets/nutanix.svg'

interface SurveyLayoutProps {
  children: ReactNode
}

export function SurveyLayout({ children }: SurveyLayoutProps) {
  return (
    <div className="relative flex min-h-dvh flex-col pt-12 md:pt-16">
      <div className="mx-auto flex flex-col items-center justify-start">
        <img src={NutanixLogo} alt="Nutanix Logo" className="h-9 w-fit" />
        <p className="mt-2 font-grotesque text-2xl font-[200] text-white/80 md:text-3xl">
          UX Research
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-grow items-center justify-center px-4 py-4">
        <div className="w-full max-w-2xl">{children}</div>
      </div>

      <div className="mt-auto flex items-center justify-between bg-[#1C1C1C] px-4 py-2 text-center text-white">
        <p className="font-montserrat text-sm font-semibold">
          Washington, D.C. | May 7-9, 2025
        </p>
        <a
          href="https://www.nutanix.com/next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={NutanixNextLogo}
            alt="Nutanix Next Logo"
            className="h-6 w-fit"
          />
        </a>
      </div>
      <div className="absolute top-0 left-0 -z-10 block h-full w-full bg-[#131313] md:hidden">
        <img
          src={MobileTopLines}
          alt="Mobile Top Lines"
          className="absolute top-0 left-0 w-full"
        />
        <img
          src={MobileBottomLines}
          alt="Mobile Bottom Lines"
          className="absolute bottom-0 left-0 w-full"
        />
        <img
          src={GradientMobile}
          alt="Gradient Mobile"
          className="absolute top-0 left-0 h-full w-full"
        />
      </div>
      <div className="absolute top-0 left-0 -z-10 hidden h-full w-full bg-[#131313] md:block">
        <img
          src={DesktopTopLines}
          alt="Desktop Top Lines"
          className="absolute top-0 left-0 w-full"
        />
        <img
          src={DesktopBottomLines}
          alt="Desktop Bottom Lines"
          className="absolute bottom-0 left-0 w-full"
        />
        <img
          src={DesktopGradientLeft}
          alt="Desktop Gradient Left"
          className="absolute top-0 left-0"
        />
        <img
          src={DesktopGradientRight}
          alt="Desktop Gradient Right"
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  )
}
