import { Section } from "../../../types/section";

interface SectionMap {
    [key: string]: Array<Section>
}

class SectionService {
    private static sections: SectionMap = {};

    public static addSection = (data: { id: string, section: Array<Section> }) => this.sections[data.id] = data.section;

    public static getSection = (data: { id: string }): Array<Section> => this.sections[data.id];
}

export default SectionService;