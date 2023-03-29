import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormYupPage = () => {
  const { handleSubmit, errors, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must have 15 characteres length or less')
        .required('Required'),
      lastName: Yup.string()
        .max(10, 'Must have 10 characteres length or less')
        .required('Required'),
      email: Yup.string().email('Email is no valid').required('Required')
    })
  })

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">email</label>
        <input type="email" {...getFieldProps('email')} />
        {errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
