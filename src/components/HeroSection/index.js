import React from 'react'
import HeroImg from '../../Images/Hero1.jpg'
import { HeroContainer, HeroBg, BgImg, HeroContend, HeroH1, HeroP, IconWrap, Icon, Overlay } from './HeroElements'


const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <BgImg src={HeroImg} alt="" />
                <Overlay />
            </HeroBg>
            <HeroContend>
                <HeroH1 >Kalani.</HeroH1>
                <HeroP>"Enjoy the delicious taste in your cup of coffee that you don't get in other cafes"</HeroP>
                <IconWrap>
                    <Icon/>
                </IconWrap>
            </HeroContend>
        </HeroContainer>
    )
}

export default Hero
