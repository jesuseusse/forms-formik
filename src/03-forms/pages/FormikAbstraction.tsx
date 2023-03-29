import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckBox, MySelectInput, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must have 15 characteres length or less')
            .required('Required'),
          lastName: Yup.string()
            .max(10, 'Must have 10 characteres length or less')
            .required('Required'),
          email: Yup.string().email('Email is no valid').required('Required'),
          terms: Yup.boolean()
            .oneOf([true], 'Should agree')
            .required('Required'),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'Invalid Option')
            .required('Required')
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="email@email.com"
            />
            <MySelectInput label="Job Tittle" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelectInput>
            <MyCheckBox name="terms" label="Terms & conditions" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
