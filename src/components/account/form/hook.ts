import { zodResolver } from "@hookform/resolvers/zod"
import { 
  useContext, 
  useRef, 
  useState } from "react"
import { 
  useForm,
  SubmitHandler } from "react-hook-form"
import z from "zod"


const accountFormSchema = z.object({
  username: z.string().min(1, "error.firstname.required"),
  email: z.string().email().or(z.string().regex(/^\d+$/).min(9)),
  birth: z.string({ required_error: "error.birth.required" }),
  password: z
    .string()
    .min(8, "error.password.rules")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/, "error.password.rules"),
  confirmPassword: z.string().min(8, "error.cofirm_password.required")
})

export type AccountFormSchema = z.infer<typeof accountFormSchema>

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
    }} = useForm<AccountFormSchema>({
    resolver: zodResolver(accountFormSchema)
  })
  const [ passwordVisibility, setPasswordVisibility ] = useState({
    password: false,
    confirmPassword: false
  })
  const datetimeRef = useRef<HTMLIonDatetimeElement>(null)

  const handleDateSelection = (date: string) => setValue("birth", date)
  
  const handleFormSubmit: SubmitHandler<AccountFormSchema> = data => {
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
    datetimeRef,
    handleDateSelection
  }
}