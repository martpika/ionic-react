import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
  email:  z
  .string()
  .email()
  .or(z
    .string()
    .regex(/^\d+$/)
    .min(9)
  ),
  password: z
    .string()
    .min(6, "Password should be atleast 6 letters")
})

type FormSchema = z.TypeOf<typeof formSchema>

export const useSampleForm = () =>{
  const { 
    register,
    formState: {
      errors: formErrors
    },
    handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const handleFormSubmit: SubmitHandler<FormSchema> = (data) =>{

  }

  return {
    register,
    formErrors,
    handleSubmit: handleSubmit(handleFormSubmit)
  }
}