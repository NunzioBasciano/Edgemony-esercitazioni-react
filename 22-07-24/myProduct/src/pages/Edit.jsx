import { useEffect, useState } from "react";
import { editProduct, getProductDetail } from "../api/productClient";
import FormProduct from "../components/formProduct/FormProduct";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [product, setProduct] = useState(null);
    const [isError, setIsError] = useState({ message: "", isError: false });
    const [isLoading, setIsLoading] = useState(true);

    const getProduct = async (id) => {
        try {
            const data = await getProductDetail(id);
            setProduct(data);
        } catch (error) {
            console.log(error);
            setIsError({ message: error.message, isError: true });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProduct(id);
    }, []);

    const handleSubmit = async (value) => {
        try {
            setIsLoading(true);
            const res = await editProduct({ ...value, id });
            console.log(res);
            navigate('/');
        } catch (error) {
            console.log(error);
            setIsError({ message: error.message, isError: true });
        }
    }

    if (isLoading) return <p>is loading...</p>;

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Edit product from here</h1>
                <FormProduct
                    value={product}
                    onSubmit={handleSubmit}
                    isError={isError}
                />
            </div>
        </div>
    )
}

export default Edit