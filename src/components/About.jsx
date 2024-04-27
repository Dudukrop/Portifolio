import Span from "./span/Span";

export default function About() {
	return (
		<div id="about" className="scrollAlign w-full flex items-center h-screen">
			<div className="flex flex-col-reverse lg:flex-row items-center 
            m-auto relative bottom-[4vh] lg:top-8 w-[92%] lg:w-[98%] justify-center">
				<div className="flex flex-col items-center lg:items-center justify-between w-full 
                lg:w-[350px] lg:h-[350px] lg:mr-10 h-[300px] rounded-3xl overflow-hidden">
					<img src="Perfil.jpg" className="w-[350px]" />
				</div>
				<div className="h-[300px] flex flex-col justify-around lg:w-[600px] w-[90vw] z-50">
					<div>
						<span className="text-2xl text-gray-300">
							Dev Full Stack / .Net / C# / React / Azure
						</span>
					</div>
					<div>
						<Span>
							Profissionalmente conectado à indústria de desenvolvimento web.
						</Span>
					</div>
					<div>
						<Span>
							Solução de problemas, pessoa bem organizada, funcionário leal com grande atenção aos detalhes. Fã de academia, atividades ao ar livre, videogames e, é claro, codificação.
						</Span>
					</div>
					<div>
						<Span>
							Interessado em todo o espectro de desenvolvimento web e trabalhando em projetos ambiciosos com pessoas interessantes.
						</Span>
					</div>
				</div>
			</div>
		</div>
	)
}