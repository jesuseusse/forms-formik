import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import '../styles/styles.css'
import { MyTextInput } from '../components'

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Should have minimum length of 2')
            .max(15, 'Should have maximum length of 15')
            .required('Required'),
          email: Yup.string().email('It is no valid').required('Required'),
          password1: Yup.string()
            .min(6, 'Should have minimum length of 6')
            .max(16, 'Should have maximum length of 16')
            .required('Required'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Passwords are not the same')
            .min(6, 'Should have minimum length of 2')
            .max(16, 'Should have maximum length of 15')
            .required('Required')
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Yisus" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="email@email.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="********"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="********"
            />
            <button onClick={handleReset}>Reset</button>
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
