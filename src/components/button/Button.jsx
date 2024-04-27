export default function Button(props) {
    return (
        <button className="text-base border-2 font-semibold 
        rounded-md w-[22vw] md:w-[10vw] md:h-[8vh] h-[5vh] hover:bg-white hover:text-black
        transition-all">
            {props.children}
        </button>
    )
}