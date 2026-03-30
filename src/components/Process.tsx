const Process = () => {
	const steps = [
		{
			number: "01",
			title: "Discovery Call",
			description:
				"30 minutes. No selling. We talk about your business, your customers, and what a great website should actually do for your revenue.",
		},
		{
			number: "02",
			title: "Strategy and Scope",
			description:
				"We send a clear, fixed price proposal with a defined scope. You know exactly what you are getting and for how much, before anything begins.",
		},
		{
			number: "03",
			title: "Visual Direction",
			description:
				"We design the look and feel of your site, from colours, type, layout, structure. We align on direction before a single line of code is written.",
		},
		{
			number: "04",
			title: "Development",
			description:
				"We build your site on a premium technical stack, fast, secure, scalable. You get progress updates as it takes shape, not a big reveal at the end.",
		},
		{
			number: "05",
			title: "Review & Refine",
			description:
				"Two rounds of revisions included. We test on mobile, check page speed and make sure every detail is right before you sign off.",
		},
		{
			number: "06",
			title: "Launch & Handoff",
			description:
				"Your site goes live. We walk you through how to manage your content. Ongoing support available, We are not the type that disappears after handoff.",
		},
	];

	return (
		<section className="section section-sm min-h-screen">
			<div className="container container-sm flex flex-col gap-20">
				<h2 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
					The process - no mystery, no surprises
				</h2>
				<p>Six steps from the first call to live site.</p>
				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-15 w-full">
					{steps.map((step, index) => (
						<div
							className="w-full border border-overlay0 p-4 rounded-lg"
							key={index}
						>
							<div className="flex items-center justify-between">
								<h3 className="text-2xl font-bold mb-4">{step.title}</h3>
								<h3 className="text-2xl font-black text-overlay0 mb-6">
									 {step.number}
								</h3>
							</div>
							<p>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;
