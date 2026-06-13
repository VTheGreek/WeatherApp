import {  Routes, Route } from 'react-router-dom'
import CityDetails from '../pages/CityDetails'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/city/:cityName' element={<CityDetails />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;