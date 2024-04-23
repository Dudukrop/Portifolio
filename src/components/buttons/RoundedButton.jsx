export default function RoundedButton(props) {
    return (
        <button className={`border-2 rounded-full border-black 
                           w-36 h-12 text-black font-bold
                           ${props.bg ? props.bg : ""}
                           ${props.textColor ? props.textColor : "text-black"}
                           hover:text-white hover:bg-black
                           duration-200`}>
            {props.children}
        </button>
    )
}