import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles.css";
import { useGSAP } from "@gsap/react";
import NavBar from "@/components/NavBar";
import ShaderGradientBackground from "@/components/ShaderGradient";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 4,
			effects: true,
			normalizeScroll: true,
		});
	});
	return (
		<main id="smooth-content">
			<ShaderGradientBackground />
			<NavBar />
			<Outlet />
			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</main>
	);
}
