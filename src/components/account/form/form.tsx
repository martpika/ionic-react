import { Link } from "react-router-dom"
import { useAccountForm } from "./hook"
import { FormTextInput } from "@/components/shared/form/input/text"
import { AccountBirthInput } from "./input/birth"
import { FormPasswordInput } from "@/components/shared/form/input/password"


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
      <div className="mb-6">
        <AccountBirthInput
          label="Date of birth"
          error={ formErrors.birth?.message }
          placeholder="DD/MM/YYYY"
          watch={ watch }
          handleDateSelection={ handleDateSelection }
          { ...register("username") } />
      </div>
      <div className="mb-6">
        <FormTextInput
          label="Email address"
          attributes={{ id: "accountEmail", }}
          error={ formErrors.email?.message }
          placeholder="Enter email address"
          { ...register("email") } />
      </div>
      <div className="mb-6">
        <FormPasswordInput 
          label="Password"
          attributes={{ id: "accountPassword" }}
          placeholder="Enter password"
          isVisible={ passwordVisibility.password }
          toggleVisibility={ toggleNewPasswordVisibility }
          error={ formErrors.password?.message }
          { ...register("password") } />
        <p className="text-sm text-[#393D41] leading-5 mt-2">Password should contain at least 8 characters, 1 special symbol character, 1 number, 1 uppercase letter</p>
      </div>
      <div className="mb-6">
        <FormPasswordInput 
          label="Confirm password"
          attributes={{ id: "accountConfirmPassword" }}
          placeholder="Confirm password"
          isVisible={ passwordVisibility.confirmPassword }
          toggleVisibility={ toggleConfirmNewPasswordVisibility }
          error={ formErrors.confirmPassword?.message }
          { ...register("confirmPassword") } />
      </div>
      <button
        className="block w-full font-medium text-white py-3 text-center bg-[#549FF7] rounded-lg" 
        type="submit">Create Account</button>
    </form>
  )
}


export default Form