export default function H3(props) {
    return (
        <h3 className={`text-black text-2xl text-nowrap ${props.bold ? "font-bold" : ""}`}>{props.children}</h3>
    )
}