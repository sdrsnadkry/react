import React from 'react'
import video from '../../videos/video.mp4'

import {
    BannerContainer,
    BannerBg,
    VideoBg,
    BannerContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './BannerElements'

import { Button } from '../Button'

const Banner = () => {
    const [hover, setHover] = React.useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <BannerContainer id="home" >
            <BannerBg>
                <VideoBg autoPlay loop muted src={video} type="/video/mp4" />
            </BannerBg>

            <BannerContent>
                <HeroH1>Connecting World Together</HeroH1>
                <HeroP>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary
                        dark
                        big
                        fontBig
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </BannerContent>

        </BannerContainer>
    )
}

export default Banner
