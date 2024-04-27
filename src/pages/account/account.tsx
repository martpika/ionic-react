import { 
  IonContent, 
  IonPage } from "@ionic/react"
import { Account as AccountContent } from "@/components/account"


const Account = () => {

  return (
    <IonPage>
      <IonContent>
        <AccountContent />
      </IonContent>
    </IonPage>
  )
}


export default Account