import React from 'react'
import { Layout } from '../../components/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'

const ProductPage = ({ product }) => {
    const router = useRouter()
    const handleDelete = async (id) => {
        const res = await axios.delete(`/api/products/${id}`)
        router.push('/')
        console.log(res)

    }


    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <button className="bg bg-red-700 hover:red-500 text-white py-2 px-3 mt-3" onClick={() => handleDelete(product.id)}>
                Delete
            </button>
            <button className="bg bg-green-700 hover:green-500 text-white py-2 px-3 mt-3 ml-8"
                onClick={() => router.push('/products/edit/' + product.id)}>
                update
            </button>
        </Layout>

    )
}
export const getServerSideProps = async (context) => {


    const { data: product } = await axios.get('http://localhost:3000/api/products/ ' + context.query.id)

    return {
        props: {
            product
        }
    }
}



export default ProductPage