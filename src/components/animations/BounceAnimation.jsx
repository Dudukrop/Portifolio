export default function BounceAnimation(props) {

	function SepararLetras(texto) {
		const letras = texto.split('');

		return letras.map((letra, index) => (
			props.children == "Olá, Eu Sou" ?
				<>
					<span
						className={`inline-block cursor-default
				${index === 3 ? "mr-3" : ""}
				${index === 6 ? "mr-3" : ""}
				${index === 11 ? "mr-3" : ""}
				`}
						key={index}>
						{letra}
					</span>
				</>
				:
				<>
					<span
						className={`inline-block cursor-default
				${index === 6 ? "mr-3" : ""}
				`}
						key={index}>
						{letra}
					</span>
				</>
		));
	}

	return (
		<div>
			{SepararLetras(props.children)}
		</div>
	)
}