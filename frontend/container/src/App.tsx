import React, { lazy } from 'react'
import { createBrowserHistory, History } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

const history: History = createBrowserHistory()

const LazyDashboardApp = lazy(() => import('./components/DashboardApp'))

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={LazyDashboardApp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
