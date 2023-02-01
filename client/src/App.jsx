import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>HomePage</h1>} />
      <Route path='/2' element={<h1>AboutPage</h1>} />
      <Route path='/3' element={<h1>ContactPage</h1>} />
      <Route path='/4' element={<h1>SupportPage</h1>} />
      <Route path='/*' element={<h1>OTHER</h1>} />
    </Routes>
  )
}

export default App
