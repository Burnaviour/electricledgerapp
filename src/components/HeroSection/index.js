// import React,{useState} from 'react';
// import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements' ;
import Video from  '../../../src/assets/video.mp4';
// import { Button } from '../ButtonElement';


// const HeroSection = () => {

//     const [hover, sethover] = useState(false)
//     const onHover = () => {
//         sethover(!hover)
//     }




//   return (
//     <HeroContainer>
//             <HeroBg>
//                 <VideoBg autoPlay loop muted src={Video}
//                  type="video/mp4" />
//             </HeroBg>
//             <HeroContent>
//                  <HeroH1>Powering the Future with BlockChain Technology </HeroH1>
//                  <HeroP>Introducing the world's first block chain based electricity system,
//                 powered by a private blockchain network.</HeroP>
//             </HeroContent>
//             <HeroBtnWrapper>

//                 <Button to='/register' onMouseEnter={onHover} on MouseLeave = {onHover} >Thaak Gya hn {hover ? <ArrowForward />: <ArrowRight />}</Button>


//             </HeroBtnWrapper>

//     </HeroContainer>
//   )
// }

// export default HeroSection

import React, {useState} from 'react'
// import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (

    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Powering the Future with BlockChain Technology</HeroH1>
        <HeroP>Introducing the world's first block chain based electricity system,
                powered by a private blockchain network.</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  smooth={true} duration={500} spy={true} exact='true' offset={-80}>
          Thaak Gya hn {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    
    
  )
}

export default Hero
