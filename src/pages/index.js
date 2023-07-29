import { autores, videos } from "../dados/memoriaLocal"
import Capa from "@/components/Capa"
import CardAutor from "@/components/CardAutor"
import CardVideo from "@/components/CardVideo"
import ListaCard from "@/components/ListaCard"
import { useEffect, useState } from "react"

export default function Home() {
  const [listaAutores, setListaAutores] = useState([])
  const [listaVideos, setListaVideos] = useState([])

  useEffect(() => {
    const temRegistroAutor = JSON.parse(localStorage.getItem("listadeautores")) != null
    let autoresExistentes = temRegistroAutor ? JSON.parse(localStorage.getItem("listadeautores")) : []
    setListaAutores(autoresExistentes.concat(autores))

    const temRegistroVideo = JSON.parse(localStorage.getItem("listadevideos")) != null
    let videosExistentes = temRegistroVideo ? JSON.parse(localStorage.getItem("listadevideos")) : []
    setListaVideos(videosExistentes.concat(videos))
  }, [])        

  return (
    <main>
      <Capa/>
      <ListaCard titulo="Novos Autores">
        {listaAutores.map(autor => <CardAutor key={autor.id} id={autor.id} nome={autor.nome} canal={autor.canal} urlCanal={autor.urlCanal}/>)}
      </ListaCard>
      <ListaCard titulo="Novos Vídeos">
        {listaVideos.map(video => <CardVideo key={video.id} id={video.id} titulo={video.titulo} descricao={video.descricao} autor={video.autor} linguagem={video.linguagem} url={video.url}/>)}
      </ListaCard>
    </main>
  )
}
