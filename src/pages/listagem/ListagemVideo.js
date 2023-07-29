import { videos } from "../../dados/memoriaLocal"
import Capa from "@/components/Capa"
import CardVideo from "@/components/CardVideo"
import ListaCard from "@/components/ListaCard"
import { useState, useEffect } from "react"

export default function ListagemVideo() {
  const [listaVideos, setListaVideos] = useState([])

  useEffect(() => {
    const temRegistro = JSON.parse(localStorage.getItem("listadevideos")) != null
    let lista = temRegistro ? JSON.parse(localStorage.getItem("listadevideos")) : []

    setListaVideos(lista.concat(videos))
  }, [])

  return (
    <main>
      <Capa/>
      <ListaCard titulo="Vídeos Cadastrados">
        {listaVideos.map(video => <CardVideo key={video.id} id={video.id} titulo={video.titulo} descricao={video.descricao} autor={video.autor} linguagem={video.linguagem} url={video.url}/>)}
      </ListaCard>
    </main>
  )
}