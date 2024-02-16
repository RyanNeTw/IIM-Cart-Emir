import { useParams } from 'react-router-dom'
import CommentCard from '../../components/CommentCard'
import FormComment from '../../components/FormComment'
import ProductCard from '../../components/ProductCard'
import Loader from '../../components/UI/Loader'
import Title from '../../components/UI/Title'
import {
    useGetProductCommentsQuery,
    useGetProductsQuery,
} from '../../services/getData'

const ArticlePage = () => {
    const { id } = useParams()
    const { data } = useGetProductCommentsQuery(id)
    const { data: products, isLoading } = useGetProductsQuery()
    const product = products?.filter((i) => i?.id === id)

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <div className="px-page py-big flex flex-col gap-y-4 items-start">
                <ProductCard product={product?.[0]} link={false} />
                <Title title="Commentaires :" />
                <FormComment />
                <ul className="flex flex-wrap gap-big pt-big">
                    {data
                        ?.slice()
                        ?.reverse()
                        ?.filter((comment) => comment?.comment?.length < 150)
                        ?.map((comment, index) => (
                            <li key={index}>
                                <CommentCard comment={comment} index={index} />
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export default ArticlePage
