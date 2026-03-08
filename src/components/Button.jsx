export default function Button(props) {
    return (
        <button
            className="bg-slate-500 text-white ps-4 py-2 rounded-md font-medium"
            {...props}
        >
            {props.children}
        </button>
    )
}