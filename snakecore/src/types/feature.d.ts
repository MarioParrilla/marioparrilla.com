import { Section } from "./section"

export interface Feature {
    featureTitle: string,
    sections: Array<Section>,
    activeSectionName: string
}