import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './assets/css/app.css'
import './assets/fontAwesome'

import MenuBar from './components/MenuBar'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <MenuBar />
      <div className="content">
        <React.Suspense fallback={<Loader />}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  )
}

export default App
