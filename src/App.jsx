import './App.css'
import HeroSection from './firstPart/heroSection'
import Navbar from './navbar/Navbar'
import Cards from './cards/Cards'
import Tools from './toolsSection/Tools'
import { Suspense } from 'react'


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

</>
  )
}

export default App
