import { CalendarIcon } from "@/components/svgs/calendar"
import { 
  IonDatetime, 
  IonDatetimeButton, 
  IonItem, 
  IonModal } from "@ionic/react"
import { UseFormWatch } from "react-hook-form"
import { AccountFormSchema } from "../../hook"
import { forwardRef } from "react"


type BirthProps = {
  label: string
  placeholder: string
  handleDateSelection: (date: string) => void
  watch: UseFormWatch<AccountFormSchema>
  error?: string
}

const Birth = forwardRef(({ 
  label,
  placeholder,
  error,
  watch,
  handleDateSelection }: BirthProps, ref) =>{
  
  return (
    <IonItem 
      className="overflow-visible font-figtree reset-ion-padding mb-5 transparent-hover transparent-bg"
      lines="none">
      <div className="w-full">
        <div className="relative">
          <p className="mb-2">{ label }</p>
          { !watch("birth") && <span className="absolute text-[#7A7D80] font-medium left-4 bottom-3">{ placeholder }</span> }
          <IonDatetimeButton
            className={`relative h-12 rounded-lg border border-[#C2C3C4] z-10 no-shadow w-full [&::part(native)]:h-full [&::part(native)]:w-full [&::part(native)]:bg-transparent [&::part(native)]:text-left ${ !watch("birth") && "native:opacity-0" }`} 
            datetime="birth">
          </IonDatetimeButton>
          <div className="h-10 w-10 absolute top-1/2 right-1 -translate-y-1/2 flex items-center justify-center">
            <CalendarIcon />
          </div>
          <IonModal 
            keepContentsMounted={ true }
            className="stack-modal">
            <IonDatetime
              locale="en-US"
              onIonChange={ e => typeof e.detail.value==="string"? handleDateSelection(e.detail.value) : null}
              showDefaultButtons={ true }
              max={ `${ new Date().toISOString() }` }
              presentation="date" 
              id="birth" />
          </IonModal>
        </div>
        { !!error && !watch("birth") && (
          <span className="text-xs text-red-600">{ error }</span>
        ) }
      </div>
    </IonItem>
  )
})


export default Birth