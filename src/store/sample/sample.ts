import { create } from "zustand"
import { createSelectors } from "../store"


export type SampleState = {
  information: {
    title: string
    description: string
  }
}

export const useSampleStoreBase = create<SampleState>(() => ({
  information: {
    title: "Title",
    description: "Description"
  },
})) 

export const updateSampleInformation = ( newInformation: SampleState["information"]) => useSampleStoreBase.setState({
  information: newInformation
}) 

export const useSampleStore = createSelectors(useSampleStoreBase)