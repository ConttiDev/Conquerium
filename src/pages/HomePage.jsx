import Button from "../components/Button"
import { ArrowIcon } from "../components/Icons"
import HeaderFooter from "../components/HeaderFooter"

export default function HomePage() {

    return (
        <>
            <HeaderFooter>
                <p className='text-xl sm:text-2xl text-center sm:pt-5'><b>Jogue o jogo da sua vida</b>, com conquistas próprias, insígnias do exército, movimento escoteiro e muito mais!</p>
                <Button path="/app" type="action" icon={ArrowIcon}>Começar</Button>
            </HeaderFooter>
        </>
    )
}