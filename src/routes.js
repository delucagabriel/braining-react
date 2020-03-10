import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Materias = lazy(() => import('./components/materias/Materias'))
const Login = lazy(() => import('./components/login/Login'))
const Home = lazy(() => import('./components/home/Home'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div> Carregando...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      
      </Switch>
    </Suspense>
  </Router>
)
export default Routes