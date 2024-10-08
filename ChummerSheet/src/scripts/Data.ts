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

// Funktion, um alle Spells zurückzugeben
function getSpells(): Array<{
    name: string;
    category: string;
    type: string;
    range: string;
    duration: string;
    dv: string;
}> {
    if (!data.value || !data.value.spells || !data.value.spells.spell) return [];

    return data.value.spells.spell.map((spell: any) => ({
        name: spell.name || 'Unbekannt',
        category: spell.category || 'Unbekannt',
        type: spell.type || 'Unbekannt',
        range: spell.range || 'Unbekannt',
        duration: spell.duration || 'Unbekannt',
        dv: spell.dv || 'Unbekannt'
    }));
}

// Funktion, um alle Geister zurückzugeben
function getSpirits(): Array<{
    crittername: string;
    services: number;
    force: number;
    bound: boolean;
}> {
    if (!data.value || !data.value.spirits || !data.value.spirits.spirit) return [];

    const spiritData = data.value.spirits.spirit;

    return [{
        crittername: spiritData.crittername || 'Unknown',
        services: parseInt(spiritData.services, 10) || 0,
        force: parseInt(spiritData.force, 10) || 0,
        bound: spiritData.bound === 'True'
    }];
}

export { data, getTotalValueByName, getSkills, getSpells, getSpirits };