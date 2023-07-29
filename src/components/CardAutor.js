export default function CardAutor(props) {
    return(
        <div className="bg-rose-500 p-6 rounded-md border-b-4 border-rose-400">
            <h2>{props.nome} - <span className="font-semibold">{props.canal}</span></h2>
            <h2><a href={props.urlCanal}>{props.urlCanal}</a></h2>
        </div>
    )
}