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
    <div className="relative min-h-dvh flex flex-col pt-12 md:pt-16">
      <div className="flex flex-col justify-start items-center mx-auto">
        <img src={NutanixLogo} alt="Nutanix Logo" className="h-9 w-fit" />
        <p className="text-white/80 text-2xl md:text-3xl font-grotesque font-[200] mt-2">
          UX Research
        </p>
      </div>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-2xl">{children}</div>
      </div>

      <div className="flex items-center justify-between text-center py-2 px-4 text-white mt-auto bg-[#1C1C1C]">
        <p className="text-sm font-montserrat font-semibold">
          Washington, D.C. | May 7-9, 2025
        </p>
        <img
          src={NutanixNextLogo}
          alt="Nutanix Next Logo"
          className="h-6 w-fit"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#131313] block md:hidden">
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
          className="absolute top-0 left-0 w-full h-full "
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#131313] hidden md:block">
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
          className="absolute top-0 left-0 "
        />
        <img
          src={DesktopGradientRight}
          alt="Desktop Gradient Right"
          className="absolute bottom-0 right-0 "
        />
      </div>
    </div>
  )
}
