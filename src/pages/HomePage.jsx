import { Link } from "react-router-dom"

export default function HomePage() {

    return (
        <>
            <header className='flex bg-gray-50 shadow-md h-12 items-center p-4'>
                <img alt="Logo"></img>
                <h2 className="text-4xl font-bold text-gray-850 text-[1.8rem] pl-2">Conquerium</h2>
            </header>

            <main className='p-4 flex items-center justify-center flex-col'>
                <h1 className='hidden text-white'>O app de conquistas e desenvolvimento pessoal estilo escotismo e exército com habilidades, insígnias e metas.</h1>
                
                <p className='text-xl sm:text-2xl text-center sm:pt-5'><b>Jogue o jogo da sua vida</b>, com conquistas próprias, insígnias do exército, movimento escoteiro e muito mais!</p>
            </main>
        </>
    )
}