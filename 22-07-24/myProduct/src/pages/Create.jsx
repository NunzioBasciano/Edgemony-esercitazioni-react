import { useState, useEffect } from 'react'
import React from 'react'
import { addProduct } from '../api/productClient'
import { useNavigate } from 'react-router-dom'

const initialState = {
    name: '',
    brand: '',
    barcode: '',
    image: '',
    description: '',
    cost: '',
    price: '',
    quantity: '',
}

function Create() {

    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({ message: "", isError: false });

    const nameValidation = !form.name.length;
    const brandValidation = !form.brand.length;
    const barcodeValidation = !form.barcode.length;
    const imageValidation = !form.image.length;
    const descriptionValidation = !form.description.length;
    const costValidation = !form.cost.length;
    const priceValidation = !form.price.length;
    const quantityValidation = !form.quantity.length;

    const formValidation = nameValidation || brandValidation || barcodeValidation || imageValidation || descriptionValidation || costValidation || priceValidation || quantityValidation;

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setForm(prevState => { return { ...prevState, [name]: value } })
    }


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true)
            const res = await addProduct(form);
            setForm(initialState)
            console.log(res);
            navigate('/')

        } catch (error) {
            console.log(error)
            setIsError({ message: error.message, isError: true })
        } finally {
            setIsLoading(false)
        }
    }

    /*     useEffect(() => {
            console.log(form)
        }, [form])
     */

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Inserisci qui il nuovo prodotto</h1>
                <form onSubmit={handleSubmit} action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div>
                        <label className="sr-only">name</label>
                        <div className="relative">
                            <input
                                name='name'
                                onChange={handleChange}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">brand</label>
                        <div className="relative">
                            <input
                                name='brand'
                                onChange={handleChange}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter brand"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">barcode</label>
                        <div className="relative">
                            <input
                                name='barcode'
                                onChange={handleChange}
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm "
                                placeholder="Enter barcode"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">image</label>
                        <div className="relative">
                            <input
                                name='image'
                                onChange={handleChange}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter image"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">description</label>
                        <div className="relative">
                            <input
                                name='description'
                                onChange={handleChange}
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter description"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">cost</label>
                        <div className="relative">
                            <input
                                name='cost'
                                onChange={handleChange}
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter cost"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">price</label>
                        <div className="relative">
                            <input
                                name='price'
                                onChange={handleChange}
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter price"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">quantity</label>
                        <div className="relative">
                            <input
                                name='quantity'
                                onChange={handleChange}
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter quantity"
                            />
                        </div>
                    </div>

                    {
                        isError.isError && <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
                            <strong className="block font-medium text-red-800"> Something went wrong </strong>

                            <p className="mt-2 text-sm text-red-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi assumenda numquam deserunt
                                consectetur autem nihil quos debitis dolor culpa.
                            </p>
                        </div>
                    }
                    {!isLoading ?
                        <button
                            disabled={formValidation}
                            type="submit"
                            className={`block w-full rounded-lg bg-indigo-600 
                                ${formValidation ? "bg-slate-400" : ''}
                                px-5 py-3 text-sm font-medium text-white`}
                        >
                            Submit
                        </button> : <button disabled>Is Loading...</button>}
                </form>
            </div>
        </div>
    )
}

export default Create