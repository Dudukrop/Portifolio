import CardSobre from "./cards/CardSobre";
import H1 from "./headers/H1";
import H3 from "./headers/H3";
import PremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

export default function Sobre() {
    return (
        <div className="w-full h-screen flex items-center flex-col">
            <div className="flex text-xl font-bold text-gray-500 flex-col items-center justify-end h-40">
                <span className="mb-2">Saiba Mais</span>
                <H1 bold >Sobre Mim</H1>
            </div>
            <div className="w-full h-screen flex justify-center items-center relative bottom-2">
                <div className="w-4/5 h-96 flex justify-between">
                    <div className="overflow-hidden rounded-3xl w-96">
                        <img src='Profile2.jpg' className="w-96 h-96 object-cover" />
                    </div>
                    <div className="w-[60%] ml-10 h-96 flex flex-col justify-between">
                        <div className="flex justify-between font-bold text-gray-500 text-[18px]">
                            <CardSobre>
                                <span className="text-black"><PremiumIcon fontSize="large" /></span>
                                <H3 bold>Experiência</H3>
                                <span>1+ anos</span>
                                <span>Desenvolvimento Fullstack</span>
                            </CardSobre>
                            <CardSobre>
                                <span className="text-black"><SchoolIcon fontSize="large" /></span>
                                <H3 bold>Educação</H3>
                                <span>ADS - Tecnólogo</span>
                                <span className="text-xs underline"><a target="blank" href="https://www.catolica.edu.br/">Universidade Católica de Brasilia</a></span>
                            </CardSobre>
                        </div>
                        <span className="text-gray-500 font-bold">
                            Olá! Sou o Eduardo, um <span className="font-bold text-black">desenvolvedor fullstack</span> desde 2023. Trabalho com <span className="font-bold text-black">C#, Next.js</span> e bancos de dados como <span className="font-bold text-black">MySQL e SQLServer</span>. Tenho experiência em programação em nuvem utilizando <span className="font-bold text-black">Azure</span> e aplico a <span className="font-bold text-black" s>metodologia Scrum</span> no desenvolvimento de novas features para o site da empresa na qual trabalho. Estou sempre buscando novos desafios e oportunidades de crescimento. Vamos construir algo incrível juntos!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}