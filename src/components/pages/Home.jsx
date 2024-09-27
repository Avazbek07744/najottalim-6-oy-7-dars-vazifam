import React, { useEffect, useState } from 'react'

const Products = () => {
    let [user, setUser] = useState([])
    useEffect(function () {
        fetch('https://strapi-store-server.onrender.com/api/products', {
            method: 'GET'
        })
            .then(function (salom) {
                if (salom.status == 200) {
                    return salom.json()
                }
            })
            .then(data => {
                setUser(data.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])
    return (
        <div>
            <div className='flex flex-wrap gap-5 max-w-[1050px] mt-20 w-full m-auto'>
                {
                    user.length > 0 && user.map(function (v, i) {
                        return (
                            <div key={i} className='text-center shadow-xl rounded-2xl hover:shadow-2xl transition duration-300'>
                                <div className='px-4 pt-4'>
                                <img className='w-[297px] h-[192px] object-cover rounded-xl' src={v.attributes.image} alt="" />
                                </div>
                                <div className='p-8'>
                                    <h3 className='text-[#394E6A] text-[20px] capitalize font-semibold mb-1'>{v.attributes.title}</h3>
                                    <p className='text-[#436AA1]'>{v.attributes.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
