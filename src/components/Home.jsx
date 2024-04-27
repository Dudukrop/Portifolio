import Link from "./link/Link";
import Span from "./span/Span";
import Title from "./title/Title";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <div className="scrollAlign w-full flex items-center h-screen">
            <div className="flex flex-col-reverse lg:flex-row items-center 
            m-auto relative bottom-[4vh] lg:top-8 w-[92%] lg:w-[98%] justify-center">
                <div className="flex flex-col items-center lg:items-start justify-around w-full 
                lg:w-[30%] lg:mr-40 h-[300px] lg:h-[400px]">
                    <div className="lg:w-[45vw] h-[120px] lg:h-[25vh]">
                        <Title />
                    </div>
                    <div className="w-full lg:w-[38vw]">
                        <Span>
                            Construindo interfaces com designs inteligentes,
                            desenvolvendo APIs para lógicas de negócio,
                            tratando dados na nuvem
                            e desenvolvendo experiências unicas em sites.
                        </Span>
                    </div>
                    <div className="flex lg:justify-between w-full lg:w-14">
                        <a className="mr-2" target="blank" href="https://www.linkedin.com/in/eduardo-kropniczki-67295a267/">
                            <LinkedInIcon />
                        </a>
                        <a target="blank" href="https://github.com/Dudukrop">
                            <GitHubIcon />
                        </a>
                    </div>
                    <div className="w-full">
                        <Link>
                            Sobre mim
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[500px] w-[90vw] z-50">
                    <img src="dektup.svg" className="w-[90vw] lg:w-[50vw]" />
                </div>
            </div>
        </div>
    )
}