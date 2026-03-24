import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeroSection />
			<section className="section section-sm section-color-1 -mt-px h-screen">
				<div className="flex flex-col gap-8">
					<h2 className="md:text-5xl">
						Your digital presence should open <strong>doors</strong> — not close
						them.
					</h2>
					<p className="text-lg text-muted-foreground">
						Chinxeleer builds high-performance websites and digital products for
						African businesses that are serious about growth. We bring
						engineering depth, intentional design, and a genuine understanding
						of this market.
					</p>
				</div>
			</section>
		</>
	);
}
