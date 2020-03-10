import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const Materias = lazy(() => import('./components/materias/Materias'))
import Login from './components/login'
import Home from './components/home'
import AppBar from './components/appbar'

const Routes = () => (
  <Router>
    <Suspense fallback={<div> Carregando...</div>}>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>

  </Router>
)
export default Routes
