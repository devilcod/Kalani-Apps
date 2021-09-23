import React, {useEffect, useState} from 'react'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Info from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Face from '../components/FaceSection'
import Menu from '../components/Menu'
import Footer from '../components/FooterSection'
import Sidebar from '../components/Sidebar'
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 500,
            delay: 100
         });
    }, []);
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>  
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree} />
            {/* <Menu /> */}
            <Footer />
            <Face />
        </>
    )
}

export default Home
