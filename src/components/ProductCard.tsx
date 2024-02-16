import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MinusSvg from '../assets/Minus'
import PlusSvg from '../assets/Plus'
import { StoreContext } from '../store/store'
import { Products } from '../types'

const ProductCard: FC<{
    product: Products
    addOrRemoveCart?: boolean
    link?: boolean
}> = ({ product, addOrRemoveCart = true, link = true }) => {
    const [done, setDone] = useState<boolean>(false)

    if (done) {
        setTimeout(() => {
            setDone(!done)
        }, 800)
    }

    return (
        <>
            <div className="bg-yellow px-mid py-mid rounded-xl flex flex-col gap-mid shadow hover:shadow-lg hover:scale-105">
                <div className="flex flex-row gap-big">
                    <img
                        className="w-32 h-full bg-contain rounded-lg bg-no-repeat bg-cover bg-white-color shadow-sm"
                        src={product.image}
                    />
                    <div className="flex flex-col justify-between">
                        <h3 className="text-dark font-bold uppercase">
                            {product.title}
                        </h3>
                        <h3 className="text-dark">Price : {product.price}$</h3>
                        <div className="flex flex-row gap-2 items-center justify-end">
                            {link && (
                                <Link
                                    to={`/product/${product.id}`}
                                    className="flex flex-col gap-mid"
                                >
                                    {' '}
                                    <h4 className="cursor-pointer">More...</h4>
                                </Link>
                            )}
                            {addOrRemoveCart ? (
                                <AddToCartButton
                                    product={product}
                                    done={done}
                                    setDone={setDone}
                                />
                            ) : (
                                <RemoveToCartButton product={product} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const AddToCartButton: FC<{
    product: Products
    done: boolean
    setDone: Dispatch<SetStateAction<boolean>>
}> = ({ product, done }) => {
    const { cart, setCart } = useContext(StoreContext)

    const addToCart = (product: Products) => {
        const i: Products = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            index: cart?.length,
            date: null,
            quantity: null,
        }
        setCart([...cart, i])
    }

    return (
        <button
            className={`${done ? 'animate-ping' : ''} bg-cyan text-white rounded-full p-big hover:opacity-80 ${parseInt(product.quantity) <= 0 ? 'cursor-not-allowed' : ''}`}
            onClick={() => addToCart(product)}
            disabled={parseInt(product.quantity) <= 0 ? true : false}
        >
            <PlusSvg />
        </button>
    )
}

const RemoveToCartButton: FC<{ product: Products }> = ({ product }) => {
    const { cart, setCart } = useContext(StoreContext)
    const removeToCart = (product: Products) => {
        const newCart = cart.filter((i) => i.index !== product.index)
        setCart(newCart)
    }
    return (
        <button
            className={`bg-cyan text-white p-big hover:opacity-80 rounded-full`}
            onClick={() => removeToCart(product)}
        >
            <MinusSvg />
        </button>
    )
}

export default ProductCard
