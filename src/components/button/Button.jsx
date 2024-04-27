export default function Button(props) {
    return (
        <button className="text-base border-2 font-semibold 
        rounded-lg w-[22vw] lg:w-[10vw] lg:h-[8vh] h-[40px] hover:bg-white hover:text-black transition-all">
            {props.children}
        </button>
    )
}