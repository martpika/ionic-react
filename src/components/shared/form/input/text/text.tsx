import { IonItem } from "@ionic/react"
import { 
  DetailedHTMLProps, 
  InputHTMLAttributes, 
  forwardRef} from "react"


type TextProps = {
  label: string,
  attributes: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  placeholder: string
  error?: string,
  [key: string]: any
}

const Text = forwardRef<HTMLInputElement,TextProps>(({ 
  label, 
  attributes, 
  placeholder,
  error,
  ...rest }, ref) => {

  return (
    <IonItem 
      className={ `overflow-visible reset-ion-padding transparent-bg font-figtree` }
      lines="none">
      <div className="w-full flex flex-col items-start">
        <label 
            htmlFor={ attributes.id }
            className={`mb-2`}>{ label }</label>
          <input 
            ref={ ref }
            { ...rest }
            { ...attributes }
            type="text" 
            className={`py-3 px-4 border font-figtree border-[#C2C3C4] rounded-lg placeholder-[#7A7D80] text-black w-full`}
            placeholder={ placeholder }
            aria-labelledby={ `error-${ attributes.id }` } />
          
        { error && (
          <span
            id={ `error-${ attributes.id }` } 
            className=" text-xs text-error-color px-4 mt-1">{ error }</span>
        ) }
      </div>
    </IonItem>
  )
})


export default Text