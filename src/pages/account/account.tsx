import { 
  IonContent, 
  IonPage } from "@ionic/react"
import { Account as AccountContent } from "@/components/account"
import { useRouterBack } from "@/lib/hooks/useRouterBack"


const Account = () => {
  useRouterBack()

  return (
    <IonPage>
      <IonContent>
        <AccountContent />
      </IonContent>
    </IonPage>
  )
}


export default Account