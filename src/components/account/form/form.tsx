import { Link } from "react-router-dom"
import { useAccountForm } from "./hook"
import { FormTextInput } from "@/components/shared/form/input/text"
import { AccountBirthInput } from "./input/birth"


const Form = () =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    watch,
    isValid,
    passwordVisibility,
    toggleNewPasswordVisibility,
    toggleConfirmNewPasswordVisibility,
    handleDateSelection } = useAccountForm()

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
      <div className="mb-6">
        <FormTextInput
          label="Username"
          attributes={{ id: "accountUsername", }}
          error={ formErrors.username?.message }
          placeholder="Enter username"
          { ...register("username") } />
      </div>
      <div>
        <AccountBirthInput
          label="Date of birth"
          error={ formErrors.birth?.message }
          placeholder="DD/MM/YYYY"
          watch={ watch }
          handleDateSelection={ handleDateSelection }
          { ...register("username") } />
      </div>
    </form>
  )
}


export default Form