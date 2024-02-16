import ProductCard from '../../components/ProductCard'
import Title from '../../components/UI/Title'
import { useGetProductsQuery } from '../../services/getData'

const MainPage = () => {
    const { data } = useGetProductsQuery()

    return (
        <>
            <div className="px-page py-big">
                <Title title="Products :" />
                <ul className="flex flex-wrap gap-big">
                    {data?.map((product, index) => (
                        <li key={index}>
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MainPage
