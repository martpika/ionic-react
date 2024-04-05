import { 
  useIonRouter, 
  useIonViewDidEnter, 
  useIonViewDidLeave } from "@ionic/react"


export const useRouterBack = () =>{
  const router = useIonRouter()

  const goBack = (event:any) => {
    event.detail.register(15, () => {
      return router.goBack()
    })
  }
  
  useIonViewDidEnter(() => document.addEventListener("ionBackButton", goBack), [])

  useIonViewDidLeave(() => document.removeEventListener("ionBackButton", goBack), [])
}