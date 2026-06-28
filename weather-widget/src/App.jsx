import NavBar from './components/NavBar'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className='min-h-screen bg-blue-500 flex items-center justify-center'>
      <h1 className='text-5xl font-bold text-white'>tailwind works</h1>
      <NavBar />
      <AppRoutes />
    </div>
  )
}

export default App
