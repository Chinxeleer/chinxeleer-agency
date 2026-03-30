import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function ShaderGradientBackground() {
	return (
		<div className="fixed inset-0 -z-10">
			<ShaderGradientCanvas
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<ShaderGradient
					animate="on"
					axesHelper="off"
					brightness={1.6}
					cAzimuthAngle={179}
					cDistance={3.6}
					cPolarAngle={90}
					cameraZoom={1}
					color1="#1e1e2e"
					color2="#24273a"
					color3="#363a4f"
					destination="onCanvas"
					embedMode="off"
					envPreset="city"
					format="gif"
					fov={50}
					frameRate={10}
					gizmoHelper="hide"
					grain="on"
					lightType="3d"
					pixelDensity={1}
					positionX={-1.4}
					positionY={0}
					positionZ={0}
					range="enabled"
					rangeEnd={40}
					rangeStart={1}
					reflection={0.5}
					rotationX={0}
					rotationY={10}
					rotationZ={50}
					shader="defaults"
					type="waterPlane"
					uAmplitude={1}
					uDensity={1.3}
					uFrequency={5.5}
					uSpeed={1}
					uStrength={4}
					uTime={1}
					wireframe={false}
				/>
			</ShaderGradientCanvas>
		</div>
	);
}

export default ShaderGradientBackground;
