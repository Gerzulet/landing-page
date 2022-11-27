import './Purpose.css'
import AstronautCard from '../Assets/astronautCard.jpg'
import ThinkerCard from '../Assets/thinkerCard.jpg'
import LightBulb from '../Assets/lightbuldCard.jpg'
function Purpose() {




  return (
    <div className="purpose mt-20 w-full flex flex-col items-center">
      <div className="title text-white flex justify-center text-2xl  font-bold">
        <h1>Nuestro &nbsp;</h1>
        <span className='text-yellow-300'>proposito</span>
      </div>
      <div className="infoCards text-white flex flex-col md:flex-row md:justify-between w-[88%] md:w-full">
        <div className="card mt-14 flex flex-col  h-[28rem] px-5" >
          <img className='h-[50%]' src={LightBulb} alt=""></img>
          <p class="text-white mt-5"> Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. </p>
        </div>
        <div className="card mt-14  flex flex-col md:items-center h-[28rem] " >
          <img className='h-[50%] md:w-[70%] ' src={ThinkerCard} alt=""></img>
          <p className="text-white mt-5 ">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. </p>
        </div>
      </div>



    </div>
  )
}

export default Purpose;
