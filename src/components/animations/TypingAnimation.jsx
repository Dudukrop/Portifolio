import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function TypingAnimation(props) {

    function TextosRenderizados() {
        let textos = []

        Array.from(props.children).map(texto => {
            textos.push(texto, 3000)
        })

        return textos
    }

    return (
        <TypeAnimation
            sequence={TextosRenderizados()}
            wrapper="span"
            speed={200}
            repeat={Infinity}
        />
    );
};