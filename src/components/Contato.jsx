import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from '../../public/Earth'
import Span from "./span/Span";

export default function Contato() {
	return (
		<div id="Contato" className="scrollAlign2 w-full flex items-center h-screen">
			<div className="flex flex-col-reverse md:flex-row items-center
            m-auto relative h-[710px] md:h-[470px] md:top-2 w-[92%] md:w-[70%] justify-start md:justify-around">
				<div className="md:min-w-[455px] w-[300px] h-[290px] md:h-full">
					<Canvas className="cursor-pointer">
						<ambientLight />
						<OrbitControls rotateSpeed={0.2} autoRotateSpeed={0.5} autoRotate enableZoom={false} />
						<Suspense fallback={null}>
							<Earth scale={3} />
						</Suspense>
						<Environment preset="night" />
					</Canvas>
				</div>
				<div className="md:ml-4 md:w-[380px] flex flex-col mb-10 md:mb-0 justify-between h-40">
					<div>
						<Span>
							O que você faria se tivesse um especialista em software disponível ao seu alcance?
						</Span>
					</div>
					<div>
						<Span>
							Quer começar um novo projeto?
						</Span>
					</div>
					<div className="text-3xl font-bold">
						<h1>
							dudukrop@gmail.com
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}