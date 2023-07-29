import { useState } from "react"

export default function FormAutor() {

    const [nome, setNome] = useState("")
    const [canal, setCanal] = useState("")
    const [urlCanal, setUrlCanal] = useState("")

    const salvarAutor = (evento) => {
        evento.preventDefault();
        const novoAutor = {
            id: Math.random().toString(36).slice(2, 7),
            nome: nome, 
            canal: canal,
            urlCanal: urlCanal
        }   
        const temRegistro = JSON.parse(localStorage.getItem("listadeautores")) != null
        const autores = temRegistro ? JSON.parse(localStorage.getItem("listadeautores")) : []
        autores.unshift(novoAutor)
        localStorage.setItem("listadeautores", JSON.stringify(autores))
        setNome("")
        setCanal("")
        setUrlCanal("")
    }

    return(
        <div className="bg-rose-600 ml-72 rounded p-6">
            <h2 className="text-xl p-6 pl-0 pt-0">Cadastro de Autores</h2>
            <form className="grid grid-cols-1 gap-2" onSubmit={salvarAutor}>
                <label htmlFor="nome">Nome Completo</label>
                <input required className="text-black" type="text" value={nome} onChange={e => setNome(e.target.value)} id="nome"/>
                <label htmlFor="canal">Nome do Canal</label>
                <input required className="text-black" type="text" value={canal} onChange={e => setCanal(e.target.value)} id="canal"/>
                <label htmlFor="url">URL do Canal</label>
                <input required className="text-black" type="text" value={urlCanal} onChange={e => setUrlCanal(e.target.value)} id="url"/>
                <button className="mt-6 bg-rose-500 p-6 text-xl rounded-md border-b-4 border-rose-400">Cadastrar</button>
            </form>
        </div>
    )
}