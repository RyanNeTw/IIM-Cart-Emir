import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store/store'
import CartModal from './CartModal'

const Header = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { cart } = useContext(StoreContext)

    const cartFunction = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <header className="bg-yellow w-full px-big py-mid flex flex-row justify-between items-center">
                <Link to={'/'}>
                    <h1 className="text-dark cursor-pointer uppercase font-bold">
                        Home
                    </h1>
                </Link>
                <button
                    onClick={() => cartFunction()}
                    className="bg-cyan px-big py-mid text-white rounded-xl"
                >
                    Cart : {cart?.length}
                </button>
            </header>
            {showModal && (
                <CartModal setShowModal={setShowModal} showModal={showModal} />
            )}
        </>
    )
}
export default Header
