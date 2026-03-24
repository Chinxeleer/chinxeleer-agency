import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles.css";
import { useGSAP } from "@gsap/react";
import NavBar from "@/components/NavBar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 2,
			effects: true,
			normalizeScroll: true,
		});
	});
	return (
		<main id="smooth-content">
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
