import React from 'react'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicsH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-1.svg" />
                    <ServicsH2>Services One</ServicsH2>
                    <ServicesP>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-2.svg'} />
                    <ServicsH2>Services Two</ServicsH2>
                    <ServicesP>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-3.svg'} />
                    <ServicsH2>Services Three</ServicsH2>
                    <ServicesP>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
