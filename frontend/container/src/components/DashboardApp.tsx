import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from './dashboardApp'

const DashboardApp: React.FC = () => {
  const ref = useRef(null)
  const history = useHistory()
  const { pathname: initialPath } = history.location

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: initialPath,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location

        if (pathname !== nextPathName) {
          history.push(nextPathName)
        }
      },
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default DashboardApp
