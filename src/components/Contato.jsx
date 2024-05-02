import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from '../../public/Earth'

export default function Contato() {
	return (
		<div id="Contato" className="scrollAlign2 w-full flex items-center h-screen">
			<div className="flex flex-col md:flex-row items-center
            m-auto relative h-[710px] md:h-[470px] md:top-2 w-[92%] md:w-[70%] justify-start md:justify-between">
				<div className="md:w-[500px] w-[300px] h-[300px] md:h-full">
					<Canvas className="cursor-pointer">
						<ambientLight />
						<OrbitControls rotateSpeed={0.2} autoRotateSpeed={0.5} autoRotate enableZoom={false} />
						<Suspense fallback={null}>
							<Earth scale={3} />
						</Suspense>
						<Environment preset="night" />
					</Canvas>
				</div>
				<div className="w-[380px] h-72">
				</div>
			</div>
		</div>
	)
}