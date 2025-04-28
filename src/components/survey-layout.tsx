import type { ReactNode } from "react";

interface SurveyLayoutProps {
	children: ReactNode;
}

export function SurveyLayout({ children }: SurveyLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col relative bg-[#1A1A2E]">
			{/* Gradient lines at top */}
			<div className="absolute top-0 left-0 right-0 h-16">
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginTop: "10px" }}
				/>
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginTop: "20px" }}
				/>
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginTop: "30px" }}
				/>
			</div>

			{/* Logo */}
			<div className="pt-20 pb-8 text-center">
				<div className="inline-block">
					<h1 className="text-white text-4xl font-bold tracking-wider">
						NUTANIX
					</h1>
					<h2 className="text-white text-xl">UX Research</h2>
				</div>
			</div>

			{/* Content */}
			<div className="flex-grow flex items-center justify-center px-4 py-8">
				<div className="w-full max-w-2xl">{children}</div>
			</div>

			{/* Gradient lines at bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-16">
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginBottom: "30px" }}
				/>
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginBottom: "20px" }}
				/>
				<div
					className="h-1 w-full bg-gradient-to-r from-[#FD8F79] to-[#7855FA]"
					style={{ marginBottom: "10px" }}
				/>
			</div>

			{/* Footer */}
			<div className="pb-20 text-center text-white">
				<p>Washington, D.C. | May 7-9, 2025</p>
				<div className="mt-2">
					<span className="font-bold">NUTANIX</span>
					<span className="ml-1 text-sm">next</span>
				</div>
			</div>
		</div>
	);
}
