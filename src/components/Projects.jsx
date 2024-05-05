import Link from "./link/Link";
import Span from "./span/Span";
import Title from "./title/Title";

export default function Projects() {
	return (
		<div id="Projects" className="scrollAlign2 w-full flex my-10 items-center h-screen">
			<div className="flex flex-col items-start md:items-center
            m-auto relative h-[240px] md:h-[270px] md:top-2 w-[92%] md:w-[540px] justify-between md:justify-around md:text-center">
				<div>
					<Title>
						Portfólio & Projetos
					</Title>
				</div>
				<div>
					<Span>
						Eu construí diversos projetos para atender diferentes aspectos do negócio do cliente. Se você deseja ver mais exemplos do meu trabalho além dos apresentados neste site, por favor, visite meu <a
							className="text-[#9c27b0]"
							target="blank" href="https://github.com/Dudukrop">
							GitHub!</a>
					</Span>
				</div>
				<div>
					<Link>
						Ver Projetos
					</Link>
				</div>

			</div>
		</div>
	)
}