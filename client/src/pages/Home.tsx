import { useState } from 'react'
import HeroSection from '../components/HeroSection'
// import FeatureSection from '../components/FeatureSection'
import ProcessSection from '../components/ProcessSection'
import Testimonials from '../components/Testimonails'
import Footer from '../components/Footer'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}>
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <FeatureSection darkMode={darkMode} /> */}
      <ProcessSection darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Footer/>
    </div>
  )
}

export default Home