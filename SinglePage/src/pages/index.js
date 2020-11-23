import React from 'react'
import SideBar from '../components/SIdeBar'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Services from '../components/Services'

const HomePage = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <NavBar toggleSidebar={toggleSidebar} />

            <Banner />

            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />

            <InfoSection {...homeObjThree} />
            <Services />
            <InfoSection {...homeObjFour} />

        </>
    )
}

export default HomePage
