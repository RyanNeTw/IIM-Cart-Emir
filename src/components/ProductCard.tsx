import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store/store'
import { Products } from '../types'

const ProductCard: FC<{ product: Products; addOrRemoveCart?: boolean }> = ({
    product,
    addOrRemoveCart = true,
}) => {
    const [done, setDone] = useState<boolean>(false)

    if (done) {
        setTimeout(() => {
            setDone(!done)
        }, 800)
    }

    return (
        <>
            <div className="bg-yellow px-big py-mid rounded-xl flex flex-col gap-mid shadow hover:shadow-lg hover:scale-105 cursor-pointer">
                <Link
                    to={`/product/${product.id}`}
                    className="flex flex-col gap-mid"
                >
                    <h3 className="text-dark">{product.title}</h3>
                    <img
                        className="w-16 h-16 bg-center rounded-lg bg-no-repeat bg-cover bg-white-color shadow-sm"
                        src={product.image}
                    />
                    <h3 className="text-dark">{product.price}$</h3>
                </Link>
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
            className={`${done ? 'animate-ping' : ''} bg-cyan text-white rounded-xl py-small px-big hover:opacity-80 ${parseInt(product.quantity) <= 0 ? 'cursor-not-allowed' : ''}`}
            onClick={() => addToCart(product)}
            disabled={parseInt(product.quantity) <= 0 ? true : false}
        >
            Add to cart
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
            className={`bg-cyan text-white rounded-xl py-small px-big hover:opacity-80`}
            onClick={() => removeToCart(product)}
        >
            remove from cart
        </button>
    )
}

export default ProductCard
