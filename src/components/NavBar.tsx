import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import Logo from "./Logo";

gsap.registerPlugin(useGSAP);

const navItems = [
	// { name: "Web Design", path: "/services/web-design" },
	// { name: "Web Development", path: "/services/web-development" },
	{ name: "Case Studies", path: "/case-studies" },
	{ name: "About Us", path: "/about" },
	{ name: "Blog", path: "/blog" },
];

export default function NavBar() {
	useGSAP(() => {
		gsap.from(".nav-items", {
			opacity: 0,
			duration: 2,
			ease: "expo.out",
		});
	}, []);

	return (
		<header className="nav-base nav-transparent nav-scrolled">
			<Link to="/">
				<Logo className="h-20 w-50 nav-items" />
			</Link>
			<nav>
				<ul className="flex md:gap-2">
					{navItems.map((item) => (
						<li
							key={item.path}
							className="px-3 py-2 text-sm font-medium hover:text-mauve transition-colors duration-500 nav-items"
						>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
					<li className="px-3 py-2 text-sm font-medium hover:text-rosewater text-underline nav-items">
						blessingleer@gmail.com
					</li>
				</ul>
			</nav>
		</header>
	);
}
