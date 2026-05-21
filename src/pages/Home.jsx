import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/home/HomeHero'
import CollectionShowcase from '../components/home/CollectionShowcase'
import CraftsmanshipHighlight from '../components/home/CraftsmanshipHighlight'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHero />
            <CollectionShowcase />
            <CraftsmanshipHighlight />
            <CallToAction />
        </>
    )
}

export default Home