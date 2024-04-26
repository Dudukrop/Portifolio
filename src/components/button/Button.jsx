export default function Button(props) {
    return (
        <button className="text-base border-2 font-semibold 
        rounded-md w-32 h-11 hover:bg-white hover:text-black
        transition-all">
            {props.children}
        </button>
    )
}