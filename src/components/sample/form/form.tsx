import { useSampleForm } from "./hook"


const Form = () =>{
  const { 
    register,
    formErrors,
    handleSubmit } = useSampleForm()

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <input type="text" {...register("email")} />
        { !!formErrors.email?.message && <p className="text-red-500">{ formErrors.email.message }</p> }
      </div>
      <div>
        <input type="password" {...register("password")} />
        { !!formErrors.password?.message && <p className="text-red-500">{ formErrors.password.message }</p> }
      </div>
      <button type="submit">submit</button>
    </form>
  )
}


export default Form