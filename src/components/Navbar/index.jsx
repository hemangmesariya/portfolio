import React from 'react'

const Navbar = () => {
  return (
    <div>  
    <nav className='flex flex-row justify-between items-center p-6 max-w-[1200px] mx-auto text-white '>
        <a href="/" className='font-bold text-3xl'>Hemang</a>
        <ul className='flex flex-row gap-12 font-bold'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar


// https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1