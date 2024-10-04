import { ref } from 'vue';

export function useCharacterData(id: string) {
    const data = ref<any>(null);

    async function fetchData() {
        try {
            const response = await fetch(`https://api.blackserver.de/chummer/data/${id}`);
            if (!response.ok) {
                throw new Error(`Fehler: ${response.status}`);
            }
            data.value = await response.json();
        } catch (err) {
            console.error('Ein Fehler ist aufgetreten:', err);
        }
    }

    function getTotalValue(attributeName: string): string | null {
        const attributesArray = data.value?.character?.attributes?.attribute;
        if (attributesArray && Array.isArray(attributesArray)) {
            const attribute = attributesArray.find((attr: any) => attr.name === attributeName);
            return attribute ? attribute.totalvalue : null;
        }
        return null;
    }

    function getSkillProperty(skillName: string, property: string): string | null {
        const skillsArray = data.value?.character?.skills?.skill;
        if (skillsArray && Array.isArray(skillsArray)) {
            const skill = skillsArray.find((sk: any) => sk.name === skillName);
            return skill ? skill[property] : null;
        }
        return null;
    }

    function getSpellProperty(spellName: string, property: string): string | null {
        const spellsArray = data.value?.character?.spells?.spell;
        if (spellsArray && Array.isArray(spellsArray)) {
            const spell = spellsArray.find((sp: any) => sp.name === spellName);
            return spell ? spell[property] : null;
        }
        return null;
    }

    function getArmorProperty(armorName: string, property: string): string | null {
        const armorsArray = data.value?.character?.armors?.armor;
        if (armorsArray && Array.isArray(armorsArray)) {
            const armor = armorsArray.find((ar: any) => ar.name === armorName);
            return armor ? armor[property] : null;
        }
        return null;
    }

    return { data, fetchData, getTotalValue, getSkillProperty, getSpellProperty, getArmorProperty };
}
