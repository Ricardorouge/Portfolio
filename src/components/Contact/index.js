import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm(
        'service_q7qrpqp',
        'template_8p5ykhv',
        refForm.current,
        'LVIfPnr0B291BDfn6'
    )
    .then(()=>{
        alert('Message successfully sent!')
        window.location.reload(false)
    },
    ()=>{
        alert('Failed to send the message, please try again')
    })
  }


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in entry level Web Developer roles as well as full
            stack roles, please feel free to contact me!
          </p>
          <div className="contact-form">
            <form ref ={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="" half>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="" half>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                    <input placeholder= 'Subject' type= 'text' name='subject' required/>
                </li>
                <li>
                    <textarea placeholder= 'Message' name = 'message' required/>
                </li>
                <li>
                    <input type ='submit' className='flat-button' value = 'SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Ricardo Gonzalez,
            <br />
            Boston, MA
            <br />
            United States,
            <br />
            <span>ricky032929@gmail.com</span>
        </div>
        <div className='map-wrap'>
        <MapContainer center ={[42.3601, -71.0589]} zoom ={10}>
            <TileLayer url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            <Marker position ={[42.3601, -71.0589]}>
            </Marker>
        </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
