import { Link } from "react-router-dom"

export default function HeaderFooter({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className='flex bg-gray-50 shadow-md h-12 items-center p-4'>
                <Link to="/">
                    <img alt="Logo"></img>
                </Link>
                <Link to="/">
                    <h2 className="text-4xl font-bold text-gray-850 text-[1.8rem] pl-2">Conquerium</h2>
                </Link>
                <h1 className='hidden text-transparent'>App de conquistas e desenvolvimento pessoal estilo escotismo e exército com habilidades, insígnias, broches e metas. Self-improvement application.</h1>
            </header>
            <main className='flex-1 p-4 flex items-center flex-col'>
                {children}
            </main>
            <footer>
                <p>foobar</p>
            </footer>
        </div>
    )
}