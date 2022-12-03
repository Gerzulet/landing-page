import './NavBar.css'
import { Divide as Hamburger } from 'hamburger-react'
import {useState} from 'react'

function NavBar() {

 const [isOpen, setOpen] = useState('hidden'); 
 const [animation, setAnimation] = useState('');

function scrollToContact() {
    window.scrollTo(24,84)
  }


  return (

    <nav className="navbar text-white flex flex-col md:flex-row items-center justify-between  w-full p-8">

      <div class="flex flex-row">
        <h1 id="logo" className="text-5xl ">ITSolutions</h1>
        <span className='ml-28  md:invisible'> <Hamburger onToggle={toggled => {
          if (toggled) {
            setOpen('visible')
            setAnimation('slide-down')
          } else {
            setOpen('hidden')
          }
        }}/> </span>
      </div>
      <ul className={`navItems ${animation}   mt-5 flex-col ${isOpen} md:invisible w-full md:flex-row flex text-l justify-end items-center mx-4 z-40`}>
        <li className=" underline-animation  my-3 mx-14" >Servicios</li>
        <li className="underline-animation  my-3 mx-5" >Sobre Nosotros</li>
        <li onClick={scrollToContact} className="cursor-pointer underline-animation  my-3 mx-5" >Contacto</li>
      </ul>
        <ul className={`navItems invisible flex md:visible w-full md:flex-row text-l justify-end items-center mx-4 z-40`}>
        <li className=" underline-animation  my-3 mx-14" >Servicios</li>
        <li className="underline-animation  my-3 mx-5" >Sobre Nosotros</li>
        <li onClick={scrollToContact} className="cursor-pointer underline-animation  my-3 mx-5" >Contacto</li>
      </ul>










    </nav>



  )

}

export default NavBar;
