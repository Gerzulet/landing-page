import './NavBar.css'
import { AiOutlineSearch } from 'react-icons/ai'

function NavBar() {






  return (

    <nav className="navbar text-white flex justify-between hover:border-solid hover:border-slate-50 border-1 w-full p-8">


      <h1 id="logo" className="text-5xl ">GameNews</h1>
      <div className='underline-animation'>
       <input className='bg-black text-white focus:outline-none  p-3' type="text"></input>
      </div>
      <div className='flex items-center cursor-pointer'><AiOutlineSearch size='2rem' /> </div>
      <ul className="navItems flex text-xl justify-around items-center mx-4">
        <li className=" underline-animation  mx-14" >Categorias</li>
        <li className="underline-animation  mx-5" >Contactanos</li>
        <li className="underline-animation  mx-5" >Iniciar Sesion</li>
      </ul>










    </nav>



  )

}

export default NavBar;
