import RoundedButton from "./buttons/RoundedButton";
import H1 from "./headers/H1";
import H2 from "./headers/H2";
import Link from "./links/Link";

export default function Home() {
    return (
        <div className="h-screen flex justify-center flex-wrap">
            <div className="w-screen h-20 flex items-end justify-around">
                <H2>Eduardo Kropniczki</H2>
                <div className="flex justify-around ">
                    <Link text="Sobre" />
                    <Link text="Experiência" />
                    <Link text="Projetos" />
                    <Link text="Contato" />
                </div>
            </div>
            <div className="w-2/4 h-96 relative flex items-center justify-between" style={{ minWidth: '900px' }}>
                <div className="overflow-hidden rounded-full w-96 h-96">
                    <img src='Profile2.jpg' className="" />
                </div>
                <div>
                    <div className="text-gray-500 flex flex-col items-center text-3xl font-bold">
                        <span className="text-xl relative top-2">Olá, eu sou </span> <br />
                        <H1>Eduardo Kropniczki</H1> <br />
                        Desenvolvedor FullStack
                    </div>
                    <div className="flex justify-evenly mt-7 w-3/4 mx-auto">
                        <RoundedButton>Baixar CV</RoundedButton>
                        <RoundedButton textColor='text-white' bg='bg-gray-900'>Contato</RoundedButton>
                    </div>
                </div>
            </div>
        </div>
    )
}