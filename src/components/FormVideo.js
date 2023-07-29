import { useState } from "react"

export default function FormVideo() {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [linguagem, setLinguagem] = useState("")
    const [autor, setAutor] = useState("")
    const [url, setURL] = useState("")

    const salvarVideo = (evento) => {
        evento.preventDefault();

        let idVideo;
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        var match = url.match(regExp)
        if (match && match[2].length == 11) {
            idVideo = match[2]
        }

        const novoVideo = {
            id: idVideo,
            titulo: titulo,
            descricao: descricao,
            linguagem: linguagem,
            autor: autor,
            url: url
        }
        const temRegistro = JSON.parse(localStorage.getItem("listadevideos")) != null
        const videos = temRegistro ? JSON.parse(localStorage.getItem("listadevideos")) : []
        videos.unshift(novoVideo)
        localStorage.setItem("listadevideos", JSON.stringify(videos))
        setTitulo("")
        setDescricao("")
        setLinguagem("")
        setAutor("")
        setURL("")
    }
    
    return(
        <div className="bg-rose-600 ml-72 m-6 rounded p-6">
            <h2 className="text-xl p-6 pl-0 pt-0">Cadastro de Vídeos</h2>
            <form className=" grid grid-cols-1 gap-2" onSubmit={salvarVideo}>
                <label htmlFor="titulo">Título</label>
                <input required className="text-black" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} id="titulo"/>
                <label htmlFor="descricao">Descrição</label>
                <input required className="text-black" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao"/>
                <label htmlFor="linguagem">Linguagem</label>
                <select name="linguagem" className="text-black" type="text" value={linguagem} onChange={e => setLinguagem(e.target.value)} id="linguagem" required>
                    <option value=""></option>  
                    <option value="Javascript">Javascript</option>
                    <option value="HTML/CSS">HTML/CSS</option>
                    <option value="C#">C#</option>
                    <option value="PHP">PHP</option>
                </select>
                <label htmlFor="linguagem">Autor</label>
                <input required className="text-black" type="text" value={autor} onChange={e => setAutor(e.target.value)} id="autor"/>
                <label htmlFor="linguagem">URL</label>
                <input required className="text-black" type="text" value={url} onChange={e => setURL(e.target.value)} id="url"/>
                <button className="mt-6 bg-rose-500 p-6 text-xl rounded-md border-b-4 border-rose-400">Cadastrar</button>
            </form>
        </div>
    )
}