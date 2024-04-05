import { useIonViewDidEnter } from "@ionic/react"


export const useShowTabs = () => {

  useIonViewDidEnter(() => {
    const tabBar = document.querySelectorAll("#tab-bar")

    if ( tabBar.length ) {
      tabBar.forEach(tab => tab.classList.remove("opacity-0", "max-h-0", "!p-0", "translate-y-full", "pointer-events-none") )
    }
  })
}