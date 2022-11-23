import './NavBar.css'
import { Divide as Hamburger } from 'hamburger-react'
import {useState} from 'react'

function NavBar() {

 const [isOpen, setOpen] = useState('invisible'); 
 const [animation, setAnimation] = useState('');




  return (

    <nav className="navbar text-white flex flex-col md:flex-row items-center justify-between  w-full p-8">

      <div class="flex flex-row">
        <h1 id="logo" className="text-5xl ">ITSolutions</h1>
        <span className='ml-28  md:invisible'> <Hamburger onToggle={toggled => {
          if (toggled) {
            setOpen('visible')
            setAnimation('slide-down')
          } else {
            setOpen('invisible')
            setAnimation('')
          }
        }}/> </span>
      </div>
      <ul className={`navItems ${animation}  mt-5 flex-col ${isOpen} w-full md:flex-row flex text-l justify-around items-center mx-4`}>
        <li className=" underline-animation  my-3 mx-14" >Servicios</li>
        <li className="underline-animation  my-3 mx-5" >Sobre Nosotros</li>
        <li className="underline-animation  my-3 mx-5" >Contacto</li>
      </ul>










    </nav>



  )

}

export default NavBar;
