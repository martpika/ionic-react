import { 
  useIonViewDidEnter,
  useIonViewDidLeave } from "@ionic/react"
import { useHistory } from "react-router"


export const useRedirectToHome = () =>{
  const history = useHistory()

  const goToHome = (event:any) => {
    event.detail.register(15, () => {
      history.push("/home")
    })
  }

  useIonViewDidEnter(() => document.addEventListener("ionBackButton", goToHome), [])

  useIonViewDidLeave(() => document.removeEventListener("ionBackButton", goToHome), [])
}