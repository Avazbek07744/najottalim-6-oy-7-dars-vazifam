import React, { useEffect, useState } from 'react'
import Card from './Card'

const Galerey = () => {
    let [arrForm, setArrForm] = useState([])
    useEffect(function () {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => setArrForm(data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className='flex flex-wrap gap-5 justify-center mt-20'>
            {
                arrForm.length > 0 && arrForm.map(function (v, i) {
                    return <Card key={i} arrForm={v} />
                })
            }
        </div>
    )
}

export default Galerey
