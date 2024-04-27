import { zodResolver } from "@hookform/resolvers/zod"
import { 
  useContext, 
  useState } from "react"
import { 
  useForm,
  SubmitHandler } from "react-hook-form"
import z from "zod"
import * as Ariakit from "@ariakit/react"


const formSchema = z.object({
  emailOrPhone: z.string().email().or(z.string().regex(/^\d+$/).min(9)),
  firstname: z.string().min(1, "error.firstname.required"),
  lastname: z.string().min(1, "error.lastname.required"),
  prefix: z.string(),
  phoneNumber: z.string().min(8, "error.phone_number.required"),
  password: z
    .string()
    .min(8, "error.password.rules")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/, "error.password.rules"),
  confirmPassword: z.string().min(8, "error.cofirm_password.required")
})

export type ProfilingSchema = z.infer<typeof formSchema>

export const useAccountForm = () =>{
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: {
      errors: formErrors,
      isValid
    }} = useForm<ProfilingSchema>({
    resolver: zodResolver(formSchema)
  })
  const [ passwordVisibility, setPasswordVisibility ] = useState({
    password: false,
    confirmPassword: false
  })

  const handleFormSubmit: SubmitHandler<ProfilingSchema> = data => {
    if ( data.confirmPassword !== data.password ) {
      setError("password", {
        message: "error.password.mismatch"
      })
      
      return
    }
    const { confirmPassword, ...rest } = data
  }

  const toggleNewPasswordVisibility = () => setPasswordVisibility(prev => ({
    ...prev,
    password: !prev.password
  }))

  const toggleConfirmNewPasswordVisibility = () => setPasswordVisibility(prev => ({
    ...prev,
    confirmPassword: !prev.confirmPassword
  }))
  
  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    formErrors,
    watch,
    isValid,
    passwordVisibility,
    toggleNewPasswordVisibility,
    toggleConfirmNewPasswordVisibility,
  }
}