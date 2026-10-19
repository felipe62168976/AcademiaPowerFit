import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Planos from './components/Planos'
import Horarios from './components/Horarios'
import Estrutura from './components/Estrutura'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Planos onSelectPlan={setSelectedPlan} />
        <Horarios />
        <Estrutura />
        <Contato selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </>
  )
}
