import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const Materias = lazy(() => import('./components/materias/Materias'))
import Login from './components/login'
import Home from './components/home'
import AppBar from './components/appbar'
import Questoes from './components/questoes'
import QuestaoShow from './components/questao-show'

const Routes = () => (
  <Router>
    <AppBar />
    <Suspense fallback={<div> Carregando...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/materias/:id" component={Questoes} />
        <Route exact path="/questoes/:questaoId" component={QuestaoShow} />
      </Switch>
    </Suspense>
  </Router>
)
export default Routes
