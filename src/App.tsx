import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'
import { MultiplicationGame } from './pages/MultiplicationGame'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/multiplicationGame" component={MultiplicationGame} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
