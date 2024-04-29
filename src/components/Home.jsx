import Link from "./link/Link";
import Span from "./span/Span";
import Title from "./title/Title";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <div id="Home" className="scrollAlign2 w-full flex items-center h-screen">
            <div className="flex flex-col-reverse md:flex-row items-center 
            m-auto relative h-[680px] md:h-auto bottom-[4vh] md:top-8 w-[92%] md:w-[98%] justify-center md:justify-around">
                <div className="flex flex-col items-center md:items-start justify-around w-full 
                md:w-[30%] h-[300px] md:h-[400px]">
                    <div className="md:w-[45vw] mb-3 cursor-default h-[120px] md:h-[25vh]">
                        <Title />
                    </div>
                    <div className="w-full md:w-[38vw]">
                        <Span>
                            Construindo interfaces com designs inteligentes,
                            desenvolvendo APIs para lógicas de negócio,
                            tratando dados na nuvem
                            e desenvolvendo experiências únicas em sites.
                        </Span>
                    </div>
                    <div className="flex my-4 md:my-0 md:justify-between w-full md:w-14">
                        <a className="mr-2" target="blank" href="https://www.linkedin.com/in/eduardo-kropniczki-67295a267/">
                            <LinkedInIcon />
                        </a>
                        <a target="blank" href="https://github.com/Dudukrop">
                            <GitHubIcon />
                        </a>
                    </div>
                    <div className="w-full">
                        <Link href="#about">
                            Sobre mim
                        </Link>
                    </div>
                </div>
                <div className="md:w-[500px] w-[90vw] z-50">
                    <img src="desktup-galego.svg" className="w-[90vw] md:w-[50vw]" />
                </div>
            </div>
        </div>
    )
}