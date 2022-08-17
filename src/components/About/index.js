import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faNodeJs,
  faReact,
  faHtml5,
  faCss3,
  faGitAlt,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'A', 'R', 'L', 'Y', ' ', 'Y', 'E', 'A', 'R', 'S']}
              idx={15}
            />
          </h2>
          <p>
            I was born in 1996 in Salem Massachusetts to two first generation
            immigrants from Dominican Republic. I grew up in a large family, I
            had an older brother, sister, 2 younger sisters and a younger
            brother
          </p>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'T',
                'E',
                'E',
                'N',
                'A',
                'G',
                'E',
                ' ',
                'Y',
                'E',
                'A',
                'R',
                'S',
              ]}
              idx={15}
            />
          </h2>
          <p>
            I spent most of my teenage years playing sports, video games, and
            hanging out with friends.I also focused on school a lot, I was in
            honors since sixth grade and when entering highschool I took on AP
            classes as well
          </p>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'D', 'U', 'L', 'T', 'H', 'O', 'O', 'D']}
              idx={15}
            />
          </h2>
          <p>
            I graduated from highschool with honors and went to UMass Amherst,
            unfortunately I did not finish my diploma but I made some life long
            friends. After College, I began working at different restaurants as
            a bartender/server.
          </p>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G']}
              idx={15}
            />
          </h2>
          <p>
            PROGRAMMING After being a bartender for so long I wanted to leave
            the service industry and get started on a career that would make me
            feel fulfilled. My brother pushed me to try coding, I took a few
            intro courses for Python, JavaScript, CSS, and HTML and since I had
            taken some coding courses in college I picked up on it quickly. Now
            I am studying at BloomTech to hopefully get my start my career in
            the tech world.
          </p>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'E', 'C', 'H', ' ', 'S', 'T', 'A', 'C', 'K']}
              idx={15}
            />
          </h2>
          <p>
            Front End: React.js, Redux, Hooks, Context API, Jest, Cypress, Yup,
            Axios, JavaScript, HTML, CSS, Ant-Design, Jira, React-Native
            <br />
            BackEnd: Node.js, Express, SQL, Python, Git CLI, GitHub, VS Code,
            Vercel, Heroku, Netlify
            <br />
            Expertise: Agile Project Management, Algorithms, Debugging,
            Deployment, Customer Service, Sales, Mathematics, Physics
            <br />
            Language Proficiency: English, Spanish
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#94C973" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4Fa" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
