export default function ListaCard(props) {
    return(
        <div className="ml-72 bg-rose-600 m-6 rounded p-6">
            <h2 className="text-xl p-6 pl-0 pt-0">{props.titulo}</h2>
            <ul className="grid grid-cols-3 gap-6">
                {props.children}
            </ul>
        </div>
    )
}