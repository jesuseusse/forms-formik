import formJson from '../data/custom-form.json'
import { Formik, Form } from 'formik'
import { MySelectInput, MyTextInput } from '../components'
import * as Yup from 'yup'

const initialValues: { [key: string]: any } = {}
const requiredFileds: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if (!input.validations) continue

  let schema = Yup.string()
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This is a required field')
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value,
        `Min length is ${(rule as any).value}`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email('Email is not valid')
    }
  }

  requiredFileds[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFileds })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value="">Select option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </MySelectInput>
                )
              }
              throw new Error(`Type ${type} is not supported`)
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
