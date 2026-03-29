import { Link } from "@tanstack/react-router";

function CTA() {
	return (
		<section className="section section-sm section-color-1 min-h-screen flex items-center">
			<div className="container container-sm flex flex-col gap-20 items-center">
				<h2 className="title text-4xl md:text-6xl lg:text-8xl text-center font-bold leading-tight">
					Your business deserves a website that works.
				</h2>
				<p>Book a free 30 minute call. No pitch. Just strategy.</p>
				<Link to="/call" className="btn btn-primary">
					Book a Call
				</Link>
				<p>by send a message: hello@chinxeleer.com · Responds within 24hrs</p>
			</div>
		</section>
	);
}

export default CTA;
