import { useIonViewWillEnter } from "@ionic/react"


export const useHideTabs = () =>{
  useIonViewWillEnter(() => {
    const tabBar = document.querySelectorAll("#tab-bar")
 
    if ( tabBar.length ) {
      tabBar.forEach(tab => tab.classList.add("opacity-0", "max-h-0", "!p-0", "translate-y-full", "pointer-events-none"))
    }
  })
}