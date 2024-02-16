import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct, Product, removeProduct } from '../services/productSlice'
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
                    <div
                        className="w-16 h-16 bg-center rounded-lg bg-no-repeat bg-cover bg-white-color shadow-sm"
                        style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
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
}> = ({ product, done, setDone }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.products)

    const addToCart = (product: Products) => {
        const i: Product = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            index: cart?.length,
        }
        dispatch(addProduct(i))
        setDone(!done)
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
    const dispatch = useDispatch()
    const removeToCart = (product) => {
        dispatch(removeProduct(product))
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
