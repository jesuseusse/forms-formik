import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import logo from '../logo.svg'
import { FormBasicPage } from '../03-forms/pages/FormBasicPage'
import { FormYupPage } from '../03-forms/pages/FormYupPage'
import { FormikComponents } from '../03-forms/pages/FormikComponents'
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction'

type Props = {}

export const Navigation = ({}: Props) => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormBasicPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />
          <Route path="formik-yup" element={<FormYupPage />} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
