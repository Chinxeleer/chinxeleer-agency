const Services = () => {
	const serviceList = [
		{
			title: "Creative Website",
			description:
				"A beautiful, fast, high converting site that makes your business look like a serious player. Custom designed not a template. Built to rank on Google and load fast on any SA data connection.",
			price: "R 8.000 - R 45.000",
			billing: "Once-off",
			category: "Most Popular",
		},
		{
			title: "Digital System",
			description:
				"Move your business fully online, e-commerce stores, client portals, booking systems, internal dashboards. Replace the WhatsApp back and forth with systems that work while you sleep.",
			price: "R 60.000 - R 150.000+",
			billing: "Project-based",
			category: "Growth stage",
		},
		{
			title: "Growth Retainer",
			description:
				"Monthly partnership: site maintenance, speed optimization, content updates and iterative improvements based on real performance data. Your site should get better every month - not stagnate.",
			price: "R 3.000 - R 8.000",
			billing: "Monthly",
			category: "Ongoing",
		},
	];

	return (
		<section className="section section-sm section-color-2 min-h-screen">
			<div className="container container-sm flex flex-col gap-20">
				<h2 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
					Three ways we can grow your business online.
				</h2>
				<div className="flex flex-col items-center gap-15 w-full divide-y divide-overlay1">
					{serviceList.map((service, index) => (
						<div className="flex flex-col p-4 gap-3 md:w-2/3" key={index}>
							<h3 className="text-2xl font-black text-base">
								{service.category}
							</h3>
							<h4 className="text-7xl font-bold">{service.title}</h4>
							<p className="flex-wrap">{service.description}</p>
							<div className="flex flex-col items-end w-full">
								<h5 className="self-end">{service.price}</h5>
								<h6>{service.billing}</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
