import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [name, setName] = useState("")
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [data, setData] = useState([])




    const addProduct = async () => {
        try {
            const url = "https://workshop-react-api.vercel.app/product"
            const user_id = localStorage.getItem('user_id')

            const res = await axios.post(url, { name, qty, price, image, user_id })
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    const fetchData = async () => {
        try {
            const user_id = localStorage.getItem('user_id')
            const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`;

            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const url = `https://workshop-react-api.vercel.app/product/${id}`;
            const res = await axios.delete(url)
            fetchData()
           

        } catch (error) {
            console.log(error)
        }
    }


        useEffect(() => { fetchData() }, [])


        return (

            <div className="bg-gray-200 h-screen">

                <div className="flex justify-center items-center flex-col">

                    <div className="bg-white rounded-lg shadow-lg mt-5 ">
                        <input placeholder="ชื่อสินค้า" className="border border-gray-400 py-2 m-4 px-2 rounded-lg" type="text" name="name" onChange={(e) => setName(e.target.value)}></input>
                        <input placeholder="จำนวน" className="border border-gray-400 py-2 m-4 px-2 rounded-lg" type="text" name="qty" onChange={(e) => setQty(e.target.value)}></input>
                        <input placeholder="ราคา" className="border border-gray-400 py-2 m-4 px-2 rounded-lg" type="text" name="price" onChange={(e) => setPrice(e.target.value)}></input>
                        <input placeholder="รูปภาพ" className="border border-gray-400 py-2 m-4 px-2 rounded-lg" type="text" name="image" onChange={(e) => setImage(e.target.value)}></input>
                        <button className="bg-gray-900 text-white py-2 px-3 m-3 rounded" onClick={addProduct} >บันทึกข้อมูล</button>
                    </div>

                </div>


                <div className="bg-white rounded-lg shadow-lg mt-5 py-2 m-20 px-2 flex-col">

                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        รูปภาพ
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ชื่อสินค้า
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        จำนวน
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ราคา
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        แก้ไข/ลบ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>


                                {data.map((item, index) => (

                                    <tr key={index}>
                                        <td>
                                            <img className="w-20" src={item.image} alt="" />
                                        </td>
                                        <td className="text-gray-900 px-6">{item.name}</td>
                                        <td className="text-gray-900 px-6">{item.qty}</td>
                                        <td className="text-gray-900 px-6">{item.price}</td>
                                        <td><button className="bg-yellow-500 m-1 rounded px-3 text-white">แก้ไข</button>
                                            <button onClick={() => deleteProduct(item.id)} className="bg-red-600 px-3 rounded text-white">ลบ</button>
                                        </td>
                                        <td></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }



export default Product
