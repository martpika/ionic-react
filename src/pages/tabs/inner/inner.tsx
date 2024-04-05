import { 
  IonIcon,
  IonRouterOutlet, 
  IonTabBar, 
  IonTabButton, 
  IonTabs } from "@ionic/react"
import { Route } from "react-router"
import { InnerSamplePage } from "../../inner/sample"
import { home } from 'ionicons/icons';


const Inner = () =>{

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/inner/sample">
          <InnerSamplePage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar 
        slot="bottom" 
        id='tab-bar'>
        <IonTabButton 
          tab="sample" 
          href="/inner/sample" 
          className='bg-white'>
          <IonIcon icon={ home} size="medium" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}


export default Inner