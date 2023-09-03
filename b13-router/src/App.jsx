import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Mission from './components/Mission'
import WrongPath from './components/WrongPath'
import History from './components/History'
import Company from './components/Company'
import Team from './components/Team'
import Members from './components/Members'
import MemberDetail from './components/MemberDetail'
import React from 'react'

// import AboutUs from './components/AboutUs'
// Geç yüklenmeyi önlemek için LazyLoad kullanıyoruz.
const LazyAboutUs = React.lazy(() => import('./components/AboutUs'))

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={
          <React.Suspense>
            <LazyAboutUs />
          </React.Suspense>
        } />
        <Route path='/mission' element={<Mission />} />
        <Route path='/history' element={<History />}>
          <Route path='company' element={<Company />} />
          <Route path='team' element={<Team />} />
        </Route>
        <Route path='/members' element={<Members />} />
        <Route path='/members/:memberId' element={<MemberDetail />} />

        {/* Diğer ytüm sayfalar dışındakiler için bu çalışır */}
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </div>
  )
}

export default App
