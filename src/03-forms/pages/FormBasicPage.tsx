import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

export const FormBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    if (!firstName) {
      errors.firstName = firstName
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must have 15 characteres length or less'
    }
    if (!lastName) {
      errors.lastName = firstName
    } else if (lastName.length >= 10) {
      errors.lastName = 'Must have 10 characteres length or less'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const { values, handleChange, handleSubmit, errors, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate
  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
