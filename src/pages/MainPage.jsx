import Button from "../components/Button"
import { ArrowIcon } from "../components/Icons"
import HeaderFooter from "../components/HeaderFooter"

export default function MainPage() {

    return (
        <>
            <HeaderFooter>
                <p className='text-xl sm:text-2xl text-center sm:pt-5'>Status</p>
                <p className='text-xl sm:text-2xl text-center sm:pt-5'>Missões</p>
                <Button type="action" icon={ArrowIcon}>Começar</Button>
            </HeaderFooter>
        </>
    )
}