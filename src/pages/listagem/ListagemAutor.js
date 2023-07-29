import { autores } from "../../dados/memoriaLocal"
import Capa from "@/components/Capa"
import CardAutor from "@/components/CardAutor"
import ListaCard from "@/components/ListaCard"
import { useState, useEffect } from "react"

export default function ListagemAutor() {
  const [listaAutores, setListaAutores] = useState([])

  useEffect(() => {
    const temRegistro = JSON.parse(localStorage.getItem("listadeautores")) != null
    let lista = temRegistro ? JSON.parse(localStorage.getItem("listadeautores")) : []

    setListaAutores(lista.concat(autores))
  }, [])

  return (
    <main>
      <Capa/>
      <ListaCard titulo="Autores Cadastrados">
        {listaAutores.map(autor => <CardAutor key={autor.id} nome={autor.nome} canal={autor.canal} urlCanal={autor.urlCanal}/>)}
      </ListaCard>
    </main>
  )
}