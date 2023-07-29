import Link from "next/link";
import Video from "./Video"

export default function CardVideo(props) {
    return(
        <div className="text-justify bg-rose-500 p-6 rounded-md border-b-4 border-rose-400">
            <h2 className="text-lg m-2 ml-0 font-semibold"><Link href={"/videos/" + props.id}>{props.titulo}</Link></h2>
            <h2 className="text-sm">{props.descricao}</h2>
            <Video id={props.id}/>
            <h2 className="text-right"><span className="font-semibold">{props.autor}</span> — {props.linguagem}</h2>
        </div>
    )
}