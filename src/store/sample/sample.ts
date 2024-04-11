import { create } from "zustand"
import { createSelectors } from "../store"


export type SampleState = {
  information: {
    title: string
    description: string
  }
}

type SampleActions = {
  updateInformation: ( information: Partial<SampleState["information"]> ) => void
}

export const useSampleStoreBase = create<SampleState & SampleActions>(set => ({
  information: {
    title: "Title",
    description: "Description"
  },
  updateInformation: (information) => set((state) => ({
    information: {
      ...state.information,
      ...information
    }
  })) 
})) 

export const updateSampleInformation = ( newInformation: SampleState["information"]) => useSampleStoreBase.setState({
  information: newInformation
}) 

export const useSampleStore = createSelectors(useSampleStoreBase)