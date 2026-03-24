interface EmblemProps {
	className?: string;
	width?: number;
	height?: number;
}

const Emblem = ({ className, width = 250, height = 190 }: EmblemProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 90 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-label="Chinxeleer Logo"
			role="img"
		>
			<g clipPath="url(#clip0)">
				{/* Rings - Using 'origin-center' for GSAP rotation */}
				<path
					className="emblem-ring origin-center"
					d="M45 84.6C66.8705 84.6 84.6 66.8705 84.6 45C84.6 23.1295 66.8705 5.40002 45 5.40002C23.1295 5.40002 5.40002 23.1295 5.40002 45C5.40002 66.8705 23.1295 84.6 45 84.6Z"
					stroke="currentColor"
					strokeOpacity="0.6"
				/>
				<path
					className="emblem-ring origin-center"
					d="M45 84.6C66.8705 84.6 84.6 66.8705 84.6 45C84.6 23.1295 66.8705 5.40002 45 5.40002C23.1295 5.40002 5.40002 23.1295 5.40002 45C5.40002 66.8705 23.1295 84.6 45 84.6Z"
					stroke="currentColor"
					strokeDasharray="10 8"
					strokeOpacity="0.3"
				/>
				<path
					className="emblem-ring origin-center"
					d="M45 70.2C58.9176 70.2 70.2 58.9176 70.2 45C70.2 31.0824 58.9176 19.8 45 19.8C31.0824 19.8 19.8 31.0824 19.8 45C19.8 58.9176 31.0824 70.2 45 70.2Z"
					stroke="currentColor"
					strokeOpacity="0.6"
				/>

				{/* The Signature "X" pieces */}
				<path
					className="emblem-cross origin-center"
					d="M18.9 18.9L71.1 71.1"
					stroke="currentColor"
					strokeWidth="8"
					strokeLinecap="round"
					strokeOpacity="0.8"
				/>
				<path
					className="emblem-cross origin-center"
					d="M71.1 18.9L18.9 71.1"
					stroke="currentColor"
					strokeWidth="8"
					strokeLinecap="round"
					strokeOpacity="0.4"
				/>

				{/* Central Core */}
				<path
					className="emblem-center origin-center"
					d="M45 49.5C47.4853 49.5 49.5 47.4853 49.5 45C49.5 42.5147 47.4853 40.5 45 40.5C42.5147 40.5 40.5 42.5147 40.5 45C40.5 47.4853 42.5147 49.5 45 49.5Z"
					fill="currentColor"
					fillOpacity="0.2"
				/>
				<circle
					className="emblem-center origin-center"
					cx="45"
					cy="45"
					r="1.8"
					fill="currentColor"
				/>

				{/* Mechanical Axis Ticks */}
				<g className="emblem-axis">
					<path d="M45 4.5V9.9" stroke="currentColor" strokeWidth="2" />
					<path d="M45 80.1V85.5" stroke="currentColor" strokeWidth="2" />
					<path d="M4.5 45H9.9" stroke="currentColor" strokeWidth="2" />
					<path d="M80.1 45H85.5" stroke="currentColor" strokeWidth="2" />
					<circle cx="45" cy="3.6" r="1.2" fill="currentColor" />
					<circle cx="45" cy="86.4" r="1.2" fill="currentColor" />
					<circle cx="3.6" cy="45" r="1.2" fill="currentColor" />
					<circle cx="86.4" cy="45" r="1.2" fill="currentColor" />
				</g>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="90" height="90" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Emblem;
