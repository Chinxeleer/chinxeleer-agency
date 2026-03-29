function CommonQuestionsSection() {
	const questions = [
		{
			question: "I've been burned by a freelancer before.",
			answer:
				"Fixed price proposals. Defined scope. Milestone payments. You never pay for work you haven't seen. And I actually show up after launch.",
		},
		{
			question: "I don't know what I need.",
			answer:
				"The discovery call is free. We ask the right questions and tell you what you actually need, not the most expensive option.",
		},
		{
			question: "It's too expensive",
			answer:
				"A bad website costs you clients every day it's live. We price on the outcome, not on hours and We will show you how to calculate what a better site is worth.",
		},
		{
			title: "What happens after launch ?",
			answer:
				"You own everything. Monthly retainer available if you want ongoing growth. Or take the site and run - no strings, no lock in.",
		},
	];

	return (
		<section className="section section-sm section-color-2 min-h-screen">
			<div className="container container-sm flex flex-col lg:flex-row ">
				<div className="flex-1 flex-col gap-20">
					<div>
						<h2 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
							Heard these before ?
						</h2>
						<h2 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
							Let's address them.
						</h2>
					</div>
					<p className="w-2/3">
						Every concern is valid. Here's how I handle each one directly,
						before you even have to ask.
					</p>
				</div>
				<div className="mt-20 flex-1 flex flex-col gap-10 w-full">
					{questions.map((q, index) => (
						<div key={index} className="flex flex-col gap-5">
							<h3 className="title text-xl md:text-2xl font-bold">
								"{""} {q.question || q.title} "
							</h3>
							<p className="text-lg">{q.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default CommonQuestionsSection;
