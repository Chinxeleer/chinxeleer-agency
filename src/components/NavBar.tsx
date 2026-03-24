import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

const navItems = [
	{ name: "Web Design", path: "/services/web-design" },
	{ name: "Web Development", path: "/services/web-development" },
	{ name: "Case Studies", path: "/case-studies" },
	{ name: "About Us", path: "/about" },
	{ name: "Blog", path: "/blog" },
];

export default function NavBar() {
	return (
		<header className="nav-base nav-transparent nav-scrolled">
			<Link to="/">
				<Logo className="h-20 w-50" />
			</Link>
			<nav>
				<ul className="flex md:gap-2">
					{navItems.map((item) => (
						<li
							key={item.path}
							className="px-3 py-2 text-sm font-medium hover:text-purple-200 transition-colors duration-500"
						>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
					<li className="px-3 py-2 text-sm font-medium hover:text-purple-200 transition-decoration duration-500 text-underline">
						blessingleer@gmail.com
					</li>
				</ul>
			</nav>
		</header>
	);
}
