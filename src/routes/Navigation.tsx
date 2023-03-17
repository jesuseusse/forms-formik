import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

type Props = {}

export const Navigation = ({}: Props) => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
