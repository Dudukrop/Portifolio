export default function H1(props) {
    return (
        <h1 className={`text-black text-5xl text-nowrap ${props.bold ? "font-bold" : ""}`}>{props.children}</h1>
    )
}