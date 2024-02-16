import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useSendProductCommentMutation } from '../services/getData'
import { Comment, QueryResult } from '../types'

const FormComment = () => {
    let { id } = useParams()
    const [done, setDone] = useState<QueryResult>(QueryResult.NONE)
    const [createComment] = useSendProductCommentMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Comment>()
    const onSubmit: SubmitHandler<Comment> = (data) => {
        createComment({ body: data, id })
            .then(() => {
                reset()
                setDone(QueryResult.DONE)
            })
            .catch(() => {
                setDone(QueryResult.ERROR)
            })
    }

    if (done) {
        setTimeout(() => {
            setDone(QueryResult.NONE)
        }, 1000)
    }

    const inputStyle =
        'bg-yellow rounded-xl border focus:outline-none focus:border-blue px-4 py-2'

    const errorStyle = 'text-cyan'

    return (
        <>
            {done === QueryResult.DONE && <h3>Envoyé avec succes</h3>}
            {done === QueryResult.ERROR && <h3>Probleme lors de l'envoie</h3>}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full"
            >
                <input
                    placeholder="Username"
                    className={`${inputStyle} w-1/4`}
                    {...register('username', { required: true })}
                />

                <input
                    placeholder="Add a comment..."
                    className={`${inputStyle}`}
                    {...register('comment', { required: true })}
                />
                <div className="flex flex-col">
                    {errors.comment && (
                        <span className={`${errorStyle}`}>
                            Comment field is required *
                        </span>
                    )}
                    {errors.username && (
                        <span className={`${errorStyle}`}>
                            Username field is required *
                        </span>
                    )}
                </div>
                <input
                    type="submit"
                    className="bg-cyan w-1/6 self-end rounded-full text-white py-mid cursor-pointer hover:scale-105"
                />
            </form>
        </>
    )
}

export default FormComment
