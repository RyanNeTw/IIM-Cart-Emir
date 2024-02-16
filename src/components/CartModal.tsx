import { Dispatch, FC, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const CartModal: FC<{
    setShowModal: Dispatch<SetStateAction<boolean>>
    showModal: boolean
}> = ({ setShowModal, showModal }) => {
    const products = useSelector((state) => state.cart.products)
    const closeModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="font-bold text-xl mb-4">Cart</h2>
                    <ul className="max-h-72 overflow-hidden overflow-scroll flex flex-col gap-y-big px-big">
                        {products?.length > 0 ? (
                            products?.map((product, index) => (
                                <li key={index}>
                                    <ProductCard
                                        product={product}
                                        addOrRemoveCart={false}
                                    />
                                </li>
                            ))
                        ) : (
                            <h4>No article</h4>
                        )}
                    </ul>
                    <button
                        onClick={() => closeModal()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartModal
