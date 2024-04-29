import Span from "./span/Span";
import Title from "./title/Title";

export default function About() {
	return (
		<div id="about" className="scrollAlign w-full flex items-center h-screen">
			<div className="flex flex-col md:flex-row items-center 
            m-auto relative h-[680px] md:h-auto bottom-[2vh] md:top-8 w-[92%] md:w-[98%] justify-center md:justify-around">
				<div className="md:mt-0 flex flex-col items-center md:items-center justify-between w-[200px] md:w-[400px] rounded-full overflow-hidden">
					<img src="FotoPerfil.jpg" className="w-[400px]" />
				</div>
				<div className="h-[450px] relative bottom-5 md:bottom-2 md:h-[420px] mt-10 md:mt-0 flex flex-col justify-between md:w-[600px] w-[90vw] z-50">
					<div className="h-[120px] relative top-5 md:top-0 md:h-[27vh] md:w-[38vw]">
						<Title animation="bounce">
							Olá, Eu Sou
						</Title>
						<Title animation="bounce">
							Eduardo Kropniczki
						</Title>
					</div>
					<div>
						<span className="md:text-2xl text-xl text-[#9c27b0] ">
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
							Solução de problemas, organizado, funcionário leal com grande atenção aos detalhes. Fã de academia, atividades ao ar livre, videogames e, é claro, codificação.
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