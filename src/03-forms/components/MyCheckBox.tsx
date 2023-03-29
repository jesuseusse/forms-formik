import { useField, ErrorMessage } from 'formik'

interface Props {
  name: string
  label: string
  [x: string]: any
}

export const MyCheckBox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        <input type="checkbox" {...field} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  )
}
