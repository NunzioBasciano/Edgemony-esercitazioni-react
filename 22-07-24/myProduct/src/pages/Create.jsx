import { useState, useEffect } from 'react'
import React from 'react'
import { addProduct } from '../api/productClient'
import { useNavigate } from 'react-router-dom'
import FormProduct from '../components/formProduct/FormProduct'
import { labels } from '../assets/data/labels'


function Create() {

    const navigate = useNavigate();

    const [isError, setIsError] = useState({ message: "", isError: false });

    const handleSubmit = async (value) => {
        try {
            const res = await addProduct(value);
            console.log(res);
            navigate('/')

        } catch (error) {
            console.log(error)
            setIsError({ message: error.message, isError: true })
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">{labels.productTableCreate}</h1>
                <FormProduct
                    onSubmit={handleSubmit}
                    isError={isError}
                />
            </div>
        </div>
    )
}

export default Create