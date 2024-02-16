export type Products = {
    id: string
    title: string
    date: Date
    image: string
    price: string
    quantity: string
    unit_of_measurement: null | string
    measure: null | string
    price_per_measure: null | string
}

export type ProdutComments = {
    id: number
    product_id: string
    username: string
    comment: string
}

export type Comment = {
    username: string
    comment: string
}

export enum QueryResult {
    NONE = 'NONE',
    DONE = 'DONE',
    ERROR = 'ERROR',
}
