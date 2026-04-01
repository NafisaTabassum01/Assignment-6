import './App.css'
import HeroSection from './firstPart/heroSection'
import Navbar from './navbar/Navbar'
import Cards from './cards/Cards'
import Tools from './toolsSection/Tools'
import { Suspense } from 'react'
import GetStarted from './getStarted/GetStarted'
import Pricing from './pricing/Pricing'
import Footer from './footer/Footer'


const fetchCard = async()=> {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {

  const cardPromise= fetchCard();

  return (
    <>
<Navbar></Navbar>   
<HeroSection></HeroSection>
<Tools></Tools>

<Suspense fallback={<span className="loading loading-dots loading-sm"></span>
}>
  <Cards cardPromise={cardPromise}></Cards>
</Suspense>
<GetStarted></GetStarted>
<Pricing></Pricing>
<Footer></Footer>

</>
  )
}

export default App
