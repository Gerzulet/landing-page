import './Testimonies.css'
import ProfilePicture1 from '../Assets/profilePicture1.jpeg'
import ProfilePicture2 from '../Assets/profilePicture2.png'
import ProfilePicture3 from '../Assets/profilePicture3.png'


function Testimonies() {

  return (
    <div class="testimonies w-full mt-14 text-white h-96 flex  flex-col items-center ">
      <h1 class="text-3xl text-yellow-300">Testimonios</h1>
      <div className="md:flex md:flex-row mt-28">

        <div className=" text-sm h-80 mx-36  mb-32 md:flex flex-col items-center">
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
          </p>
          <img className='h-28 w-20 rounded-full mt-6' src={ProfilePicture1} alt="profilePicture"></img>
        </div>
        <div className="text-sm  h-80 mx-36  mb-32 md:flex md:flex-col md:items-center">
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
          </p>
          <img className='h-34 w-20 rounded-full mt-6' src={ProfilePicture2} alt="profilePicture"></img>

        </div>
        <div className="text-sm  h-80 mx-36   mb-32 md:flex md:flex-col md:items-center">
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
          </p>
          <img className='h-28 w-20 rounded-full mt-6' src={ProfilePicture3} alt="profilePicture"></img>

        </div>
      </div>




    </div>
  )
}

export default Testimonies;
