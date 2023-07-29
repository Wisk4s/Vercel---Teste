import Capa from "@/components/Capa"
import Video from "@/components/Video"
import { useRouter } from "next/router"

export default function DetalhamentoVideo() {
    const router = useRouter()

    return(
        <div>
            <Capa/>
            <Video id={router.query.video}/>
        </div>
    )
}