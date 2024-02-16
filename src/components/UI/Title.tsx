import { FC } from 'react'

const Title: FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <h2 className="text-xl text-dark font-bold">{title}</h2>
        </>
    )
}

export default Title
