import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'

const Header = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const products = useSelector((state) => state.cart.products)

    const cartFunction = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <header className="bg-yellow w-full px-big py-mid flex flex-row justify-between">
                <Link to={'/'}>
                    <h1 className="text-dark cursor-pointer">
                        Welcome to your market
                    </h1>
                </Link>
                <button
                    onClick={() => cartFunction()}
                    className="bg-cyan px-big py-mid text-white rounded-xl"
                >
                    Cart : {products?.length}
                </button>
            </header>
            {showModal && (
                <CartModal setShowModal={setShowModal} showModal={showModal} />
            )}
        </>
    )
}
export default Header
