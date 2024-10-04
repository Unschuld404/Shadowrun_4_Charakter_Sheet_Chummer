<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showModal = ref(false);

function openModal() 
{
    showModal.value = true;
}

function closeModal() 
{
    showModal.value = false;
}

const data = ref<any>(null);
const id = 'Kaya';

async function fetchData()
{
    try
    {
        const response = await fetch(`https://api.blackserver.de/chummer/data/${id}`);
        if (!response.ok)
        {
            throw new Error(`Fehler: ${response.status}`);
        }
        data.value = await response.json();
        console.log('Abgerufene Daten:', data.value);
    }
    catch (err)
    {
        console.error('Ein Fehler ist aufgetreten:', err);
    }
}

onMounted(function()
{
    fetchData();
});

/** Funktion zum Abrufen des totalvalue basierend auf dem Attributnamen */
function getTotalValue(attributeName: string): string | null
{
    const attributesArray = data.value?.character?.attributes?.attribute;
    if (attributesArray && Array.isArray(attributesArray))
    {
        const attribute = attributesArray.find((attr: any) => attr.name === attributeName);
        return attribute ? attribute.totalvalue : null;
    }
    return null;
}

/** Funktion zum Abrufen einer Eigenschaft eines Skills basierend auf dem Namen */
function getSkillProperty(skillName: string, property: string): string | null
{
    const skillsArray = data.value?.character?.skills?.skill;
    if (skillsArray && Array.isArray(skillsArray))
    {
        const skill = skillsArray.find((sk: any) => sk.name === skillName);
        return skill ? skill[property] : null;
    }
    return null;
}

/** Funktion zum Abrufen einer Eigenschaft eines Spells basierend auf dem Namen */
function getSpellProperty(spellName: string, property: string): string | null
{
    const spellsArray = data.value?.character?.spells?.spell;
    if (spellsArray && Array.isArray(spellsArray))
    {
        const spell = spellsArray.find((sp: any) => sp.name === spellName);
        return spell ? spell[property] : null;
    }
    return null;
}

/** Funktion zum Abrufen einer Eigenschaft eines Rüstungsteils basierend auf dem Namen */
function getArmorProperty(armorName: string, property: string): string | null
{
    const armorsArray = data.value?.character?.armors?.armor;
    if (armorsArray && Array.isArray(armorsArray))
    {
        const armor = armorsArray.find((ar: any) => ar.name === armorName);
        return armor ? armor[property] : null;
    }
    return null;
}

</script>


<template>

    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
        <!-- Deine zusätzlichen Elemente hier -->
        <p>Inhalt des Modals</p>
        <button @click="closeModal">Schließen</button>
        </div>
    </div>

    <div class="nuyen box">

    <div class="nuyen-amount" v-if="data">{{ data.character.nuyen }}</div>

    <div class="box-name">Nuyen</div>

    </div>  

    <div class="edge box">

    <div class="edge-dice">{{ getTotalValue('EDG') }}</div>
    <div class="box-name">Edge</div>

    </div>

    <div class="initiative box">

    <div class="initiatives">

        <div class="initiative">

            <div class="initiative-category">Normal</div>
            <button class="pool">7</button>
        
        </div>

        <div class="initiative">

            <div class="initiative-category">Matrix</div>
            <button class="pool">6</button>

        </div>

        <div class="initiative">

            <div class="initiative-category">Astral</div>
            <button class="pool">8</button>

        </div>

    </div>

    <div class="box-name">Initiative</div>

    </div>

    <div class="resistance box">

    <div class="resistances">

        <div class="resistance">

            <div class="resistance-category">Ballistisch</div>
            <button class="pool">{{ getArmorProperty('Armor Jacket', 'b') }}</button>

        </div>

        <div class="resistance">

            <div class="resistance-category">Stoß</div>
            <button class="pool">{{ getArmorProperty('Armor Jacket', 'i') }}</button>

        </div>

        <div class="resistance">

            <div class="resistance-category">Körperlich</div>
            <button class="pool">{{ getTotalValue('BOD') }}</button>

        </div>

        <div class="resistance">

            <div class="resistance-category">Willenskraft</div>
            <button class="pool">{{ getTotalValue('WIL') }}</button>

        </div>

        <div class="resistance">

            <div class="resistance-category">Entzug</div>
            <button class="pool">{{ Number(getTotalValue('CHA')) + Number(getTotalValue('WIL')) }}</button>

        </div>

    </div>

    <div class="box-name">Widerstand</div>

    </div>  

    <div class="fav-skills box">

    <div class="skills">

        <div class="skill">

            <div class="skill-name">Assensing</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + INT 4</div>
                <button class="pool">{{ getSkillProperty('Assensing', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Ausweichen</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + REA 3</div>
                <button class="pool">{{ getSkillProperty('Dodge', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Bannen</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">{{ getSkillProperty('Banishing', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Binden</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">{{ getSkillProperty('Binding', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Beschwören</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">{{ getSkillProperty('Summoning', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Etikette</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + CHA 5</div>
                <button class="pool">{{ getSkillProperty('Etiquette', 'totalvalue') }}</button>

            </div>
        </div>


        <div class="skill">

            <div class="skill-name">Gegenzauber</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">{{ getSkillProperty('Counterspelling', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Heimlichkeit</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + INT 4</div>
                <button class="pool">{{ getSkillProperty('Shadowing', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Wahrnehmung</div>
            <div class="skill-numbers">

                <div class="skill-value">2 + INT 4</div>
                <button class="pool">{{ getSkillProperty('Perception', 'totalvalue') }}</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Zaubern</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">{{ getSkillProperty('Spellcasting', 'totalvalue') }}</button>

            </div>

        </div>

    </div>

    <div class="box-name">Fertigkeiten</div>

    </div>

    <div class="fav-actions box">

    <div class="actions">

        <div class="action">
            
            <div class="action-name">Powerblitz</div>
            <div class="drain-formula">{{ getSpellProperty('Powerbolt', 'dv') }}</div>

        </div>

        <div class="action">

            <div class="action-name">Betäubungsblitz</div>
            <div class="drain-formula">{{ getSpellProperty('Stunbolt', 'dv') }}</div>

        </div>

        <div class="action">

            <div class="action-name">Verbesserte Unsichtbarkeit</div>
            <div class="drain-formula">{{ getSpellProperty('Improved Invisibility', 'dv') }}</div>

        </div>

        <div class="action">

            <div class="action-name">Levitieren</div>
            <div class="drain-formula">{{ getSpellProperty('Levitate', 'dv') }}</div>

        </div>

        <div class="action">

            <div class="action-name">Formwandeln</div>
            <div class="drain-formula">{{ getSpellProperty('Shapechange', 'dv') }}</div>
            
        </div>

    </div>

    <div class="box-name">Specials</div>

    </div>

    <div class="body-condition box">

    <div class="body-dmg">

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>
    

    </div>

    <div class="box-name">Körperlicher Zustand</div>

    </div>

    <div class="mental-condition box">

    <div class="stun-dmg">

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

        <div class="row">

            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">
            <input type="checkbox" class="dmg">

        </div>

    </div>

    <div class="box-name">Geistiger Zustand</div>

    </div>

    <div class="mugshot box" @click="openModal">

    <img src="/public/Kaya_Portrait.png" alt="Charakterportrait">

    </div>

</template>

<style>

    button:hover, .nuyen-amount, .edge-dice, .drain-formula, .dmg  {
        cursor: pointer;
    }

    /* Content-Styling */

    .header {
        font-size: 4vh;
    }

    .name {
        font-weight: bold;
        display: flex;
    }

    .name-icon img {
        margin-top: 0.4vh;
        width: 3vh;
        height: auto;
    }

    .box {
        background-color: var(--primary-color);
        border-radius: 1vh;
        position: relative;
    }

    .box-name {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 10px);
        box-sizing: border-box;
        text-align: center;
        font-size: 1.5vh;
    }

    .nuyen-amount, .edge-dice {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        text-align: center;
        font-weight: bold; 
        font-size: 2.5vh;
        color: var(--accent-color);
    }

    .pool {
        font-weight: bold;
        border: none;
        margin: 0;
        text-align: center;
        border-radius: 0.5vh;
        height: 4vh;
        width: 4vh;
        font-size: 2.5vh;
        margin-top: 0.5vh;
        color: var(--accent-color);
        background-color: var(--secondary-color)
    }

    .initiative, .resistance {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .initiatives, .resistances {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 0.6vh;
    }

    .initiative-categories {
        margin-top: 0.6vh;
    }

    .actions, .skills {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 1vh;
    }

    .action, .skill {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--secondary-color);
        line-height: 5vh;
    }

    .action-name, .skill-name {
        text-align: left;
        width: 50%;
    }

    .skill-numbers {
        display: flex;
        flex-direction: row;
        gap: 5vw;
    }

    .drain-formula {
        font-weight: bold;
    }

    .body-dmg, .stun-dmg {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        margin-top: 1vh;
    }

    .row {
        display: flex;
        gap: 1vh;
    }

    .dmg {
        appearance: none;
        width: 4vh;
        height: 4vh;
        border-radius: 0.5vh;
        background-color: var(--secondary-color);
    }

    .dmg:checked {
        background-color: var(--accent-color);
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 1vh;
    }

    /* Grid */

    .container {
        display: grid;
        grid-template-rows: repeat(15, 1fr);
        grid-template-columns: repeat(20, 1fr);
        height: 90vh;
        gap: 1vh;
    }

    .header {
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 1;
        grid-column-end: 21;
        background-color: var(--background-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
    }

    .nuyen {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .initiative {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 5;
        grid-column-end: 10;
    }

    .edge {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 4;
        grid-column-end: 5;
    }

    .resistance {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 10;
        grid-column-end: 20;
    }

    .fav-skills {
        grid-row-start: 4;
        grid-row-end: 15;
        grid-column-start: 2;
        grid-column-end: 10;
    }

    .fav-actions {
        grid-row-start: 4;
        grid-row-end: 9;
        grid-column-start: 10;
        grid-column-end: 20;
    }

    .body-condition {
        grid-row-start: 9;
        grid-row-end: 15;
        grid-column-start: 10;
        grid-column-end: 13;
    }

    .mental-condition {
        grid-row-start: 9;
        grid-row-end: 15;
        grid-column-start: 13;
        grid-column-end: 16;
    }

    .mugshot {
        grid-row-start: 9;
        grid-row-end: 15;
        grid-column-start: 16;
        grid-column-end: 20;
    }

    /* Modal */

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        max-width: 500px;
        width: 100%;
    }

</style>
