import Link from "next/link";

export default function Capa() {
    return(
            <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-zinc-950">
                    <ul class="space-y-2 font-medium">
                        <li className="pb-6 al">
                            <span class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white"><Link href="/">thur.video</Link></span>
                        </li>
                        <li className="pb-4">
                            <span class="ml-3 text-lg"><Link href="/cadastro/CadastroVideo">Cadastrar Videos</Link></span>
                        </li>
                        <li className="pb-4">
                            <span class="ml-3 text-lg"><Link href="/listagem/ListagemVideo">Listagem de Vídeos</Link></span>
                        </li>
                        <li className="pb-4">
                            <span class="ml-3 text-lg"><Link href="/cadastro/CadastroAutor">Cadastrar Autor</Link></span>
                        </li>
                        <li className="pb-4">
                            <span class="ml-3 text-lg"><Link href="/listagem/ListagemAutor">Listagem de Autores</Link></span>
                        </li>
                    </ul>
                </div>
            </aside>
    )
}