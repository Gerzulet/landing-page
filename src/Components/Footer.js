import './Footer.css'
import { ImInstagram } from 'react-icons/im'
import { ImFacebook2 } from 'react-icons/im'
import { ImTwitter } from 'react-icons/im'
import { ImGoogle3 } from 'react-icons/im'
import { FiArrowUpCircle } from 'react-icons/fi'


export default function Footer() {

  function scrollUp() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="footer w-full md:flex md:justify-around  text-white h-14 my-24 md:my-[18rem] border-t-slate-200">
      <div className='md:w-[25%] h-6 m-12 '>
        <h1 class="text-2xl">Comprometidos con la </h1>
        <h2 class="text-yellow-400 text-3xl">seguridad</h2>
        <p class="text-sm mt-4">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. </p>

        <div class="icons ">
          <ul className='flex mt-8'>
            <li className='mx-6 cursor-pointer'><ImInstagram size={40} /></li>
            <li className=' mx-6 cursor-pointer'><ImFacebook2 size={40} /></li>
            <li className=' mx-6 cursor-pointer '><ImGoogle3 size={40} /></li>
            <li className='mx-6 cursor-pointer'><ImTwitter size={40} /></li>
          </ul>
        </div>
      </div>
      <div onClick={scrollUp} className="md:mt-32 md:visible invisible cursor-pointer"> <FiArrowUpCircle size={44} />
      </div>
      <div>
        <ul className='md:m-10 mt-[18rem] mb-12 flex flex-col items-center'>
          <li className='text-3xl text-yellow-400  my-4'>Más sobre Nosotros</li>
          <li className='my-2 text-xl cursor-pointer hover:underline'>Noticias</li>
          <li className='my-2  text-xl cursor-pointer hover:underline'>Proyectos</li>
          <li className='my-2 text-xl cursor-pointer hover:underline'>Nuestra historia</li>
          <li className='my-2 text-xl cursor-pointer hover:underline'>Trabajá con nosotros</li>
        </ul>
      </div>
    </div>



  )
}
