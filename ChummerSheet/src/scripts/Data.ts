import { ref } from 'vue';

const data = ref<any | null>(null);

function getTotalValueByName(name: string): number | null {
    if (!data.value || !data.value.attributes) return null;
    const block = data.value.attributes.find((item: any) => item.name === name);
    return block ? block.totalvalue : null;
}

// Funktion, um die Skills nach dem Knowledge-Wert zu filtern
function getSkills(knowledge: boolean): Array<{
    name: string;
    attribute: string;
    attributeValue: number;
    rating: number;
    totalValue: number;
}> {
    if (!data.value || !data.value.skills) return [];

    return data.value.skills
        .filter((skill: any) => skill.knowledge === (knowledge ? 'True' : 'False'))
        .map((skill: any) => ({
            name: skill.name || 'Unbekannt',
            attribute: skill.attribute || 'Unbekannt',
            attributeValue: skill['attribute-value'] || 0,
            rating: skill.rating || 0,
            totalValue: skill.totalvalue || 0
        }));
}

export { data, getTotalValueByName, getSkills };