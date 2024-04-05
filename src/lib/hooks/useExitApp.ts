import { App } from "@capacitor/app"
import { Capacitor } from "@capacitor/core"
import { 
  useIonViewDidEnter, 
  useIonViewDidLeave } from "@ionic/react"


export const useExitApp = () =>{

  const exitApp = () => Capacitor.getPlatform()==="android"? App.exitApp() : null

  useIonViewDidEnter(() => document.addEventListener("ionBackButton", exitApp))

  useIonViewDidLeave(() => document.removeEventListener("ionBackButton", exitApp))
}