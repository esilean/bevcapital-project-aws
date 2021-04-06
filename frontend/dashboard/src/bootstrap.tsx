import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory, History } from 'history'

type RouteProps = {
  onNavigate: string
  defaultHistory: History
  initialPath: string
}

const mount = (el: Element | DocumentFragment | null, { onNavigate, defaultHistory, initialPath }: RouteProps) => {
  const history: History =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(
    <React.StrictMode>
      <h1>Oi!!!</h1>
    </React.StrictMode>,
    el
  )

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

export { mount }
