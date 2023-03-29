import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2
  } = useForm({
    name: 'Yisus',
    email: 'email@email.com',
    password1: '123456',
    password2: '123456'
  })

  return (
    <div>
      <h1>Register Page</h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Name is required</span>}
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no valid</span>}
        <input
          type="password"
          name="password1"
          placeholder="password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Password is required</span>}
        {password1.trim().length > 0 && password1.trim().length <= 6 && (
          <span>Password is too short</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="repeat password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Password is required</span>}
        {password1 !== password2 && <span>Passwords are not the same</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
