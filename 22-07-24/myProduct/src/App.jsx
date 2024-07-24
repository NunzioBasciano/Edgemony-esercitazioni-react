import { useEffect, useState } from "react"
import { labels } from "./assets/data/labels"
import { getProductList } from './api/productClient'
import { NavLink } from 'react-router-dom'




function App() {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');

  const getProducts = async () => {
    try {
      const data = await getProductList();
      setProductList(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  }

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    console.log(productList);
  }, [productList])


  if (isLoading) return <p>{labels.isLoading}</p>
  return (
    <>


      <div className="flex justify-center">
        <main className="w-[1200px]">
          <div className="p-8">
            <h1 className="">{labels.productList}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <h2>{labels.filterProductTitle}</h2>
            <input
              className="p-1 border border-black border-solid"
              type="text"
              onChange={handleChange}
              placeholder={labels.filterProductPlaceHolder}
              value={filter}
            />
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableName}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableBrand}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableBarcode}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableCost}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTablePrice}</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{labels.productTableQuantity}</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

              {productList
                .filter(product => product.name.toLowerCase().includes(filter) ||
                  product.brand.toLowerCase().includes(filter) ||
                  product.barcode.toLowerCase().includes(filter))
                .map((product) => {
                  return (

                    <tr key={product.id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.name}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.brand}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.barcode}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">€{product.cost}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">€{product.price}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.quantity}</td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <NavLink
                          to={`/products/${product.id}`}
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          {labels.productTableDetail}
                        </NavLink>
                      </td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </main>
      </div>


    </>
  )
}

export default App
