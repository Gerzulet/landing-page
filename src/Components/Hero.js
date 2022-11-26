import './Hero.css'
import heroImg from '../Assets/heroImage.jpg'
function Hero() {



  return (
    <div className='flex flex-col items-center md:flex-row'>
      <div className="hero w-full h-[14rem] md:h-[20rem]  flex flex-col justify-center">
        <h1 className='text-3xl ml-4 text-white font-bold'> Asegura tu</h1>
        <span className='text-white ml-40 mt-4 text-4xl font-bold'> informacion</span>
      </div>
      <div className=" heroImage  w-full h-[14rem] md:h-[20rem]  ">
        <img src={heroImg} className="h-65" alt="bombilla"></img>
      </div>

    </div>
  )
}


export default Hero;
