import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context'
import { auth } from '../firebase/firebase'
import { signOut } from 'firebase/auth'
import { BiSolidHome } from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcBusinessContact } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";


function Navbar() {

    const { userLoggedIn } = useAuth()
    const { navigate } = useNavigate()

     if(!userLoggedIn){
        return null
     }

     async function handleLogout(){
        try{
            await signOut(auth)
            navigate('/login')
        } catch (error){
            console.error('logout failed:',error.message)
        }
     }

  return (
    <nav className=' fixed left-1/2 -translate-1/2 bottom-3 rounded-full gap-4 shadow-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-lg border border-purple-200/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 '>
        <div className=' flex space-x-4 gap-6 justify-around items-center p-3'>
        <Link className='hover: text-purple-400 transition' to='/home'><BiSolidHome className='ml-2'size={20} /> Home</Link>
        <Link className='hover: text-purple-400 transition' to='/category'><BiSolidCategory size={20} className='ml-6' /> Categories</Link>
        <Link className='hover: text-purple-400 transition' to='/profile'><CgProfile size={20} className='ml-2.5'/> Profile</Link>
        <Link className='hover: text-purple-400 transition' to='/contact'><FaPhoneAlt size={20} className='ml-2.5' /> contact</Link>

        {/* <button onClick={handleLogout} className='hover:text-purple-300 hover:cursor-pointer' >Logout</button> */}
       </div>
    </nav>
  )
}

export default Navbar