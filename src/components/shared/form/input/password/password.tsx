
import { PasswordIcon } from "@/components/svgs/password"
import { IonItem } from "@ionic/react"
import { 
  DetailedHTMLProps, 
  InputHTMLAttributes, 
  forwardRef} from "react"


type PasswordProps = {
  label: string,
  attributes: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  isVisible: boolean,
  toggleVisiblity: VoidFunction,
  placeholder: string
  error?: string,
  [key: string]: any
}

const Password = forwardRef<HTMLInputElement,PasswordProps>(({ 
  label, 
  attributes,
  isVisible, 
  toggleVisibility,
  placeholder,
  error, 
  ...rest }, ref) => {

  return (
    <IonItem 
      className={ `overflow-visible font-figtree reset-ion-padding transparent-bg` }
      lines="none">
        <div className="w-full">
          <div className="relative w-full">
            <label 
              htmlFor={ attributes.id }
              className={`block mb-2`}>{ label }</label>
            <div className="relative">
              <input 
                ref={ ref }
                { ...rest }
                { ...attributes }
                type={ isVisible? "text" : "password" }
                className={`text-surface-on block p-4 w-full bg-transparent rounded border border-outline-color appearance-none no-shadow focus:outline-none focus:border-outline-color peer ${ error? "border-primary-color focus:border-primary-color" : "" }`}
                placeholder={ placeholder }
                aria-labelledby={ `error-${ attributes.id }` } />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2"
                type="button"
                onClick={ toggleVisibility }>
                <PasswordIcon />
              </button>
            </div>
            
          </div>
          { error && (
            <span 
              className="text-xs text-red-600"
              id={ `error-${ attributes.id }` }>{ error }</span>
          ) }
        </div>
    </IonItem>
  )
})


export default Password
