import { useField, ErrorMessage } from 'formik'

interface Props {
  name: string
  label: string
  [x: string]: any
}

export const MySelectInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  )
}
