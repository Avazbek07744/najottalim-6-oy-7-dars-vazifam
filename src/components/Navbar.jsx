import { Routes, Route, Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import Products from './pages/Home'
import Galerey from './pages/Galerey'


const Navbar = () => {
    return (
        <div>
            <nav className='bg-[#F0F6FF] p-4'>
                <div className='container flex justify-between font-[16px] items-center text-[#394E6A] max-w-[1300px] w-full mx-auto'>
                    <div className="bg-[#057AFF] px-4 text-3xl rounded-md font-semibold py-[2px]">
                        <h1 className='text-[#DBE1FF]'>C</h1>
                    </div>
                    <div className='flex gap-5 font-[16px] items-center'>
                        <NavLink className='name' to='/'>Home</NavLink>
                        <NavLink className='name' to='/galerey'>Galerey</NavLink>
                    </div>
                    <div></div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Products />}></Route>
                <Route path='/galerey' element={<Galerey />}></Route>
            </Routes>
        </div>
    )
}

export default Navbar
