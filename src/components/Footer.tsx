import Logo from "./Logo";

function Footer() {
	return (
		<section className="section-color-2 flex flex-col items-center">
			<div className="container container-sm flex items-center justify-between">
				<Logo />
				<p>
					&copy; {new Date().getFullYear()} Chinxeleer. All rights reserved.
				</p>
				<div className="flex gap-2">
					<p>LinkedIn</p>
					<p>Chinxeleer.com</p>
				</div>
			</div>
		</section>
	);
}

export default Footer;
