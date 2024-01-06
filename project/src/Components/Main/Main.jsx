import React, {useEffect} from 'react'
import './main.scss'
import img from '../../Assets/vacc.jpeg'
import img1 from '../../Assets/medser.jpg'
import img2 from '../../Assets/surgery.jpg'
import img3 from '../../Assets/anes.jpg'
import img4 from '../../Assets/lab.jpg'
import img5 from '../../Assets/wellness.jpg'
import img6 from '../../Assets/petpharm.jpg'
import img7 from '../../Assets/home.jpg'
import img8 from '../../Assets/equ.jpg'
import {BsClipboardPlusFill} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Vaccinations',
    description: 'When you get those vaccination reminder cards from your vet’s office, you see a list of dog vaccines that your pet is due for.'
  },

  {
    id:2,
    imgSrc: img1,
    destTitle: 'Companion Animal Medical Services',
    description: 'A companion animal clinic is a veterinary clinic that provides medical care to pets such as dogs, cats, birds, and other small animals. These clinics offer a range of services such as routine check-ups, vaccinations, surgeries, dental care, and emergency care. Companion Animal Clinic is an example of such a clinic that provides state-of-the-art veterinary care and hospital services for pets'
  },

  
  {
    id:3,
    imgSrc: img2,
    destTitle: 'Companion Animal Surgery',
    description: 'Surgeries are conducted in a sterile, fully equipped, and state-of-the-art theatre. Our highly qualified team of surgeons and nursing staff has many years of experience – both internationally and locally.'
  },

  {
    id:4,
    imgSrc: img3,
    destTitle: 'Advanced Anesthesia',
    description: 'When absolutely required, PetVet will suggest companion animals undergo surgery. Our experience, both as pet owners and clinicians, has taught us that suggesting it, even as a last resort, is met with some degree of reluctance.'
  },

  {
    id:5,
    imgSrc: img4,
    destTitle: 'Laboratory Services',
    description: 'Blue pet’s state-of-the-art laboratory is operated by staff who bring experience with animals. This ensures accurate, precise laboratory results at all times. Our clinicians work as teams with our lab technicians to make sure these results are converted to a good diagnosis.'
  },

  {
    id:6,
    imgSrc: img5,
    destTitle: 'Complete Wellness Consultation',
    description: 'As pet owners ourselves, we understand the tangible and intangible benefits of having an animal companion in your life. Bringing a pet inside a home calls for responsible ownership – one that will result in an endlessly positive for you and your pet.'
  },

  {
    id:7,
    imgSrc: img6,
    destTitle: 'In-house Pharmacy',
    description: 'For your convenience blue pet well-stocked pharmacy includes animal-specific medication as well as a wide array of food for dogs and cats, including specialized diets. Our veterinary team is constantly learning about new and innovative products and we strive to obtain these, often from international suppliers because we know your pet deserves the best.'
  },

  {
    id:8,
    imgSrc: img7,
    destTitle: 'House Visits',
    description: 'Modern life often leads to rough and tough days for us all. Regardless we know your pet is constantly on your mind. If you need us on a busy day, our teams are happy to help you out by bringing our services to your doorstep.'
  },

  {
    id:9,
    imgSrc: img8,
    destTitle: 'Equine Services',
    description: 'Equine Services is a broad term that encompasses a  range of services related to dogs. These services can include veterinary care, best medicine and more.'
  },

  


]

const Main = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])




  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className="title">
          Our Services
        </h3>
      </div>

      <div className="secContent grid">
        
        {
          Data.map(({
            id,imgSrc,destTitle,description
          })=>{
            return(
              <div key={id}
              data-aos="fade-up"
              className="singleService">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                  </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>

                  
                    <div className="desc">
                      <p>{description}</p>
                  </div>
                  <button className='btn flex'>Details 
                  <BsClipboardPlusFill className="icon"/>
                  </button>
                    </div>
                </div>
            )
          })
        }
      </div>


    </section>

  )
}

export default Main