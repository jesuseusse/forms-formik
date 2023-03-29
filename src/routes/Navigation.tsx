import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import logo from '../logo.svg'
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage'
import { DynamicForm } from '../03-forms/pages/DynamicForm'
import {
  FormBasicPage,
  FormYupPage,
  FormikComponents,
  FormikAbstraction
} from '../03-forms/pages'

export const Navigation = () => {
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
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormBasicPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />
          <Route path="formik-register" element={<RegisterFormikPage />} />
          <Route path="formik-yup" element={<FormYupPage />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
