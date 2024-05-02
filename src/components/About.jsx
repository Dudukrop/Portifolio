import Span from "./span/Span";
import Title from "./title/Title";

export default function About() {
	return (
		<div id="about" className="scrollAlign w-full flex items-center my-2  h-screen">
			<div className="flex flex-col md:flex-row items-center 
            m-auto relative h-[680px] md:h-auto bottom-[2vh] md:top-8 w-[92%] md:w-[98%] justify-center md:justify-around">
				<div>
					<div className="md:mt-0 mt-5 flex flex-col items-center md:items-center justify-between w-[220px] md:w-[400px] rounded-full overflow-hidden">
						<img src="FotoPerfil.jpg" className="md:w-[400px]" />
					</div>
				</div>
				<div className="h-[450px] relative bottom-5 md:bottom-2 md:h-[420px] mt-5 md:mt-0 flex flex-col justify-between md:w-[600px] w-[90vw] z-50">
					<div className="h-[120px] relative top-3 md:top-0 md:h-[27vh] md:w-[38vw]">
						<Title>
							Olá, Eu Sou
						</Title>
						<Title>
							Eduardo Kropniczki
						</Title>
					</div>
					<div>
						<span className="md:text-2xl text-xl text-[#9c27b0] ">
							Desenvolvedor Full Stack / Freelancer / Web
						</span>
					</div>
					<div className="mt-4">
						<Span>
							Entusiasta da programação, mergulhado na jornada do aprendizado constante.
						</Span>
					</div>
					<div className="my-4">
						<Span>
							Sempre pronto para liderar e compartilhar conhecimento. Amante de academia e atividades ao ar livre, perfeccionista quando se trata de programação.
						</Span>
					</div>
					<div>
						<Span>
							Interessado em todo o espectro de desenvolvimento web,
							encontrando alegria e satisfação em cada projeto.
						</Span>
					</div>
				</div>
			</div>
		</div>
	)
}