<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCharacterData } from '../composables/useCharacterData'; // Pfad zur neuen Datei

const { data, fetchData, getTotalValue, getSkillProperty, getSpellProperty, getArmorProperty } = useCharacterData('Kaya');

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

onMounted(() => {
    fetchData();
});
</script>

<template>

    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">

            <div class="modify-pool">

                <button class="use-edge">EDGE</button>

                <div class="dice">00</div>

                <div class="modifyer">

                    <button class="pool-modifyer">+</button>
                    <button class="pool-modifyer">-</button>

                </div>

            </div>

            <div class="submit-roll">

                <button class="escape" @click="closeModal">ZURÜCK</button>
                <button class="submit">Los!</button>

            </div>

        </div>
    </div>

        <SwipeWrapper>

            <div class="container">

                <div class="nuyen box">

                <div class="nuyen-amount">5600 ¥</div>

                <div class="box-name">Nuyen</div>

                </div>  

                <div class="edge box">

                <div class="edge-dice">3</div>
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
                        <button class="pool">6</button>

                    </div>

                    <div class="resistance">

                        <div class="resistance-category">Stoß</div>
                        <button class="pool">8</button>

                    </div>

                    <div class="resistance">

                        <div class="resistance-category">Körperlich</div>
                        <button class="pool">4</button>

                    </div>

                    <div class="resistance">

                        <div class="resistance-category">Willenskraft</div>
                        <button class="pool">6</button>

                    </div>

                    <div class="resistance">

                        <div class="resistance-category">Entzug</div>
                        <button class="pool">6</button>

                    </div>

                </div>

                <div class="box-name">Widerstand</div>

                </div>  

                <div class="fav-skills-box box">

                <div class="fav-skills">

                    <div class="fav-skill">

                        <div class="fav-skill-name">Assensing</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + INT 4</div>
                            <button class="pool">8</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Ausweichen</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">1 + REA 3</div>
                            <button class="pool">4</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Bannen</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + MAG 5</div>
                            <button class="pool">9</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Binden</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + MAG 5</div>
                            <button class="pool">9</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Beschwören</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + MAG 5</div>
                            <button class="pool">9</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Etikette</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">1 + CHA 5</div>
                            <button class="pool">6</button>

                        </div>
                    </div>


                    <div class="fav-skill">

                        <div class="fav-skill-name">Gegenzauber</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + MAG 5</div>
                            <button class="pool">9</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Heimlichkeit</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">1 + INT 4</div>
                            <button class="pool">5</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Wahrnehmung</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">2 + INT 4</div>
                            <button class="pool">6</button>

                        </div>

                    </div>

                    <div class="fav-skill">

                        <div class="fav-skill-name">Zaubern</div>
                        <div class="fav-skill-numbers">

                            <div class="fav-skill-value">4 + MAG 5</div>
                            <button class="pool">9</button>

                        </div>

                    </div>

                </div>

                <div class="box-name">Fertigkeiten</div>

                </div>

                <div class="fav-actions box">

                <div class="actions">

                    <div class="action">
                        
                        <div class="action-name">Powerblitz</div>
                        <div class="drain-formula">(F/2)+1</div>

                    </div>

                    <div class="action">

                        <div class="action-name">Betäubungsblitz</div>
                        <div class="drain-formula">(F/2)-1</div>

                    </div>

                    <div class="action">

                        <div class="action-name">Verbesserte Unsichtbarkeit</div>
                        <div class="drain-formula">(F/2)+1</div>

                    </div>

                    <div class="action">

                        <div class="action-name">Levitieren</div>
                        <div class="drain-formula">(F/2)+1</div>

                    </div>

                    <div class="action">

                        <div class="action-name">Formwandeln</div>
                        <div class="drain-formula">(F/2)+2</div>
                        
                    </div>

                </div>

                <div class="box-name">Specials</div>

                </div>

                <div class="body-condition box">

                <div class="body-dmg">

                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                
                </div>

                <div class="box-name">Körperlicher Zustand</div>

                </div>

                <div class="stun-condition box">

                <div class="stun-dmg">

                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">
                    <input type="checkbox" class="dmg">

                </div>

                <div class="box-name">Geistiger Zustand</div>

                </div>

                <div class="mugshot box" @click="openModal">

                <img src="/public/Kaya_Portrait.png" alt="Charakterportrait">

                </div>

            </div>

    </SwipeWrapper>

</template>

<style scoped>

    button:hover, .nuyen-amount, .edge-dice, .drain-formula, .dmg  {
        cursor: pointer;
    }

    /* Content-Styling */

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
        font-size: 5vh;
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

    .pool:active {
        background-color: var(--font-color);
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
        margin-top: 1.5vh;
    }

    .initiative-categories {
        margin-top: 0.6vh;
    }

    .actions, .fav-skills {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 1vh;
    }

    .action, .fav-skill {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--secondary-color);
        line-height: 5vh;
    }

    .action-name, .fav-skill-name {
        text-align: left;
        width: 50%;
    }

    .fav-skill-numbers {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%;
    }


    .drain-formula {
        font-weight: bold;
    }

    .body-dmg, .stun-dmg {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5vh;
        margin-top: 1vh;
        justify-content: center;
        margin-top: 3vh;
    }

    .dmg {
        appearance: none;
        width: 4.5vh;
        height: 4.5vh;
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary-color);
        border-radius: 2vh;
        width: 30vw;
        height: 25vh;
        border: 0.1vh solid var(--font-color);
    }

    .modify-pool {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        height: 60%;
        margin-top: 1vh;
    }

    .use-edge {
        height: 8vh;
        width: 8vh;
        border: none;
        font-size: 3vh;
        margin-top: 4vh;
        color: var(--background-color);
    }

    .use-edge:active {
        background-color: var(--accent-color);
        color: var(--background-color);
    }

    .pool-modifyer {
        border: none;
        background-color:var(--secondary-color);
        height: 7vh;
        font-size: 8vh;
        line-height: 7vh;
        border-radius: 1vh;
        color: var(--accent-color)
    }

    .pool-modifyer:active {
        background-color: var(--accent-color);
        color: var(--background-color);
    }

    .dice {
        width: 20vh;
        text-align: center;
        font-size: 10vh;
        font-weight: bold;
        color: var(--accent-color);
        line-height: 15vh;
        margin-top: 0.5vh;
    }

    .modifyer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 8vh;
    }

    .submit-roll {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        height: 30%;
    }

    .submit-roll button {
        background-color: var(--background-color);
        color: var(--font-color);
        border: 0.1vh solid var(--font-color);
        font-size: 3vh;
    }

    .submit-roll button:active {
        background-color: var(--font-color);
        color: var(--background-color);
    }

    .escape {
        border-radius: 0 0 0 2vh;
        width: 30%;
    }

    .submit {
        border-radius: 0 0 2vh 0;
        width: 70%;
    }

    /* Grid */

    .container {
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        grid-template-columns: repeat(10, 1fr);
        height: 85vh;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        gap: 1vh;
    }

    .nuyen {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .edge {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 3;
        grid-column-end: 4;
    }

    .initiative {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 4;
        grid-column-end: 7;
    }

    .resistance {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 7;
        grid-column-end: 11;
    }

    .fav-skills-box {
        grid-row-start: 2;
        grid-row-end: 8;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    .body-condition {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 4;
        grid-column-end: 11;
    }

    .stun-condition {
        grid-row-start: 3;
        grid-row-end: 3;
        grid-column-start: 4;
        grid-column-end: 11;
    }

    .fav-actions {
        grid-row-start: 4;
        grid-row-end: 8;
        grid-column-start: 4;
        grid-column-end: 8;
    }

    .mugshot {
        grid-row-start: 4;
        grid-row-end: 8;
        grid-column-start: 8;
        grid-column-end: 11;
    }

</style>
