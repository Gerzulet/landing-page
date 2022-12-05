import './Form.css'
import puzzleImg from '../Assets/puzzle.png'
import { useState } from 'react'
import { Report } from 'notiflix/build/notiflix-report-aio';

export default function Form() {

  const [isActivated, activate] = useState(false)

  function responseMessage(event) {
    event.preventDefault()
    activate(true)
    setTimeout(() => {
      activate(false)
    }, 3000);
    document.getElementById(("form")).reset()
  }

  return (
    <>
      <div className="formulary h-96 md:my-0 my-[66rem] text-white flex flex-col items-center md:items-start md:flex-row mb-5">
        <form id="form" onSubmit={responseMessage} className='flex flex-col md:m-48' action="submit">
          <h1 class="text-3xl text-yellow-400">Contactanos!</h1>
          <label htmlFor="name">Nombre y Apellido</label>
          <input required className='bg-slate-300 p-1 placeholder-slate-700 outline  focus:outline-yellow-500 text-black' placeholder='German Soto' type="text" maxLength={20}></input>
          <label htmlFor="Telefono">Telefono</label>
          <input required className='bg-slate-300 p-1 placeholder-slate-700  outline  focus:outline-yellow-500  text-black' type="tel" pattern='[0-9]{2}-[0-9]{4}-[0-9]{4}' maxLength={12} placeholder='11-4232-5234'></input>
          <label htmlFor="email">Email</label>
          <input required className='outline  bg-slate-300 p-1 placeholder-slate-700  focus:outline-yellow-500 text-black' placeholder='mail@company.com' type="email"></input>
          <button className="my-10 bg-yellow-500 text-black hover:bg-yellow-300 p-2 rounded-full">Enviar!</button>
        </form>
        <div className="respuestaForm">
          {isActivated ?
            
              Report.info(
                'Gracias por contactarnos',
                'Su mensaje ha sido enviado!',
                'Ok'
              )
            
            : null
          }


        </div>
        <div className="text-white invisible md:visible mt-60 ml-16">
          <img className='h-80' src={puzzleImg} alt="puzzleimage"></img>
        </div>
      </div>
    </>
  )
}
