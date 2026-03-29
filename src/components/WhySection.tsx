function WhySection() {
	// Idea: Have the X move across the whole page and make area of focus in every section

	const valueProps = [
		{
			title: "01",
			subtitle: "Built for SA, not copy pasted",
			description:
				"Mobile first by default. Data conscious design. SA buyer behavior baked in. We know the market because we are in it.",
		},
		{
			title: "02",
			subtitle: "Premium stack, not WordPress",
			description:
				"Every site is custom built with modern tech fast, secure and scalable. No plugins breaking at 2am. No template ransom.",
		},
		{
			title: "03",
			subtitle: "Results, not deliverables",
			description:
				"I measure success by enquiries, conversions, and clients gained. Not lines of code or pages delivered.",
		},
		{
			title: "04",
			subtitle: "You stay in control",
			description:
				"Edit your own content after handoff. No dependency on a developer for every blog post change. Full ownership, zero lock in.",
		},
		{
			title: "05",
			subtitle: "Transparent, fixed pricing",
			description:
				"No surprise invoices. No hidden scope. You know the cost upfront, scoped to your actual business needs, not a bloated agency retainer.",
		},
		{
			title: "06",
			subtitle: "One person, full ownership",
			description:
				"You deal directly with the person building your site, not a sales rep who vanishes after sign off.",
		},
	];

	return (
		<section className="section section-sm section-color-1 min-h-screen">
			<div className="container container-sm">
				<h3 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
					It does not have to be like that. Here's the difference.
				</h3>
				<p>
					We are not a template shop. We are a team of qualified Computer
					Scientists from the University of the Witwatersrand who understand the
					South African market and builds accordingly.
				</p>
			</div>
			<div className="container container-sm mt-20 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-15 w-full">
				{valueProps.map((prop, index) => (
					<div className="p-4 md:w-3/3" key={index}>
						<h3 className="title text-4xl text-start md:text-6xl lg:text-8xl font-bold leading-tight w-full md:w-2/3">
							{prop.title}
						</h3>
						<h4 className="subtitle text-xl md:text-2xl lg:text-3xl font-bold">
							{prop.subtitle}
						</h4>
						<p className="md:w-2/3">{prop.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default WhySection;
