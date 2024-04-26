import Link from "./link/Link";
import Span from "./span/Span";
import Title from "./title/Title";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <div className="scrollAlign w-full flex items-center h-screen">
            <div className="flex items-center m-auto w-[98%] justify-center">
                <div className="flex flex-col justify-around w-[30%] mr-40 h-[400px]">
                    <div className="w-[45vw] h-[25vh]">
                        <Title />
                    </div>
                    <div className="w-[38vw]">
                        <Span>
                            Construindo interfaces com designs inteligentes,
                            desenvolvendo APIs para lógicas de negócio,
                            tratando dados na nuvem
                            e desenvolvendo experiências unicas em sites.
                        </Span>
                    </div>
                    <div className="flex justify-between w-14">
                        <a target="blank" href="https://www.linkedin.com/in/eduardo-kropniczki-67295a267/">
                            <LinkedInIcon />
                        </a>
                        <a target="blank" href="https://github.com/Dudukrop">
                            <GitHubIcon />
                        </a>
                    </div>
                    <div>
                        <Link>
                            Sobre mim
                        </Link>
                    </div>
                </div>
                <div className="w-[600px] z-50">
                    <img src="dektup.svg" className="w-[50vw]" />
                </div>
            </div>
        </div>
    )
}