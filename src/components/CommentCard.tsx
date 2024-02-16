import { FC } from 'react'
import { ProdutComments } from '../types'

const CommentCard: FC<{ comment: ProdutComments; index: number }> = ({
    comment,
    index,
}) => {
    return (
        <>
            <div className="bg-yellow rounded-xl px-big py-mid flex flex-row items-start gap-x-big shadow hover:shadow-lg hover:scale-105">
                <div
                    className={`${index % 2 == 0 ? 'bg-brown' : 'bg-dark'} w-4 h-4 rounded-full flex justify-center items-center p-big`}
                >
                    <h3 className="text-white">
                        {comment.username.charAt(0).toUpperCase()}
                    </h3>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <h3>
                        {comment.username.charAt(0).toUpperCase() +
                            comment.username.slice(1, comment.username.length)}
                    </h3>
                    <p>{comment.comment}</p>
                </div>
            </div>
        </>
    )
}

export default CommentCard
