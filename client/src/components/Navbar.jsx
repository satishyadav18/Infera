import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {
    
    const navigate = useNavigate()
    const {user} = useUser()
    const {openSignIn} = useClerk()

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'> 
        <img src={assets.logo} alt='Logo' className='w-28 h-sm:w-44 cursor-pointer' onClick={() => navigate('/')} />

        {
            user ? <UserButton /> 
            : 
            (
                <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white  px-6 py-2 text-xsv'><span className="inline-block">Get Started</span><ArrowRight className='w-4 h-4'/> </button>
            )
        }

    </div>
  )
}

export default Navbar
