import { zodResolver } from "@hookform/resolvers/zod"
import { 
  useRef, 
  useState } from "react"
import { 
  useForm,
  SubmitHandler } from "react-hook-form"
import z from "zod"


const accountFormSchema = z.object({
  username: z
    .string()
    .min(3, "Atleast 3 characters"),
  email: z
    .string()
    .email("Please enter a proper email"),
  birth: z
    .string({ required_error: "Birth is required" }),
  password: z
    .string()
    .min(8, "Atleast 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/, "Please follow format"),
  confirmPassword: z
    .string()
    .min(8, "Password does not match")
}).refine(val => val.password===val.confirmPassword, {
  message: "Password does not match",
  path: ['confirmPassword']
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
      setError("confirmPassword", {
        message: "Password does not match"
      })
      
      return
    }

    console.log(data)
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