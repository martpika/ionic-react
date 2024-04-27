import { Link } from "react-router-dom"
import { useAccountForm } from "./hook"


const Form = () =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    watch,
    isValid,
    passwordVisibility,
    toggleNewPasswordVisibility,
    toggleConfirmNewPasswordVisibility, } = useAccountForm()

  return (
    <form onSubmit={ handleSubmit }>
      <div className="mb-6">
        <h1 className="font-semibold text-black mb-4 text-[28px]">Let's get you started</h1>
        <p>
          Already have an account? 
          <Link
            className="ml-2 text-[#0070F3] font-medium" 
            to="/login">Login</Link>
        </p>
      </div>
      <div>

      </div>
    </form>
  )
}


export default Form