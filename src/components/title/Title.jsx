import TypingAnimation from "../animations/TypingAnimation";

export default function Title(props) {

    return (
        <h1 className="text-[9vw] md:text-[4.3vw] font-bold">
            {
                props.animation
                    ?
                    <TypingAnimation>
                        {
                            [
                                "Eu Sou Desenvolvedor Web",
                                "Eu Sou Desenvolvedor Full Stack",
                                "Eu Sou Desenvolvedor Front-End",
                                "Eu Sou Desenvolvedor Back-End",
                            ]
                        }
                    </TypingAnimation>
                    :
                    <>
                        {props.children}
                    </>
            }
        </h1>
    )
}