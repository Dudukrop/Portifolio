import { animate, color, delay, motion } from "framer-motion";

// const rotate = {

// 	initial: { scale: 1 },
// 	animate: { scale: [0.5, 1], color: ["white", "red"] },
// }

export default function BounceAnimation(props) {

	function SepararLetras(texto) {
		const letras = texto.split('');

		return letras.map((letra, index) => (
			props.children == "Olá, Eu Sou" ?
				<>
					<motion.span
						className={`inline-block cursor-default
				${index === 3 ? "mr-3" : ""}
				${index === 6 ? "mr-3" : ""}
				${index === 11 ? "mr-3" : ""}
				`}
						// initial="initial"
						// animate="initial"
						// whileHover="animate"
						// variants={rotate}
						// transition={{ duration: 1, type: "spring", stiffness: 500 }}
						key={index}>
						{letra}
					</motion.span>
				</>
				:
				<>
					<motion.span
						className={`inline-block cursor-default
				${index === 6 ? "mr-3" : ""}
				`}
						// initial="initial"
						// animate="initial"
						// whileHover="animate"
						// variants={rotate}
						// transition={{ duration: 1, type: "spring", stiffness: 500 }}
						key={index}>
						{letra}
					</motion.span>
				</>
		));
	}

	return (
		<div>
			{SepararLetras(props.children)}
		</div>
	)
}