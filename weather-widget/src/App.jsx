import NavBar from './components/NavBar'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />

     <main className='flex-1'> 
      <AppRoutes />
     </main> 
    </div>
  )
}

export default App
