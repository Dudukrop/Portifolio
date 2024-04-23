export default function CardSobre(props) {
    return (
        <div className="w-[48%] h-48 border-2 border-gray-500 rounded-3xl flex flex-col items-center justify-around p-[20px]">
            {props.children}
        </div>
    )
}