<script setup lang="ts">
</script>

<template>

    <div class="nuyen box">

    <div class="nuyen-amount">555.600 ¥</div>

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
            <button class="pool">8</button>

        </div>

        <div class="resistance">

            <div class="resistance-category">Stoß</div>
            <button class="pool">6</button>

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
            <button class="pool">11</button>

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
                <button class="pool">8</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Ausweichen</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + REA 3</div>
                <button class="pool">4</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Bannen</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">9</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Binden</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">9</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Beschwören</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">9</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Etikette</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + CHA 5</div>
                <button class="pool">6</button>

            </div>
        </div>


        <div class="skill">

            <div class="skill-name">Gegenzauber</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
                <button class="pool">9</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Heimlichkeit</div>
            <div class="skill-numbers">

                <div class="skill-value">1 + INT 4</div>
                <button class="pool">4</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Wahrnehmung</div>
            <div class="skill-numbers">

                <div class="skill-value">2 + INT 4</div>
                <button class="pool">6</button>

            </div>

        </div>

        <div class="skill">

            <div class="skill-name">Zaubern</div>
            <div class="skill-numbers">

                <div class="skill-value">4 + MAG 5</div>
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
            <div class="drain-formula">(F÷2)+1</div>

        </div>

        <div class="action">

            <div class="action-name">Betäubungsblitz</div>
            <div class="drain-formula">(F÷2)-1</div>

        </div>

        <div class="action">

            <div class="action-name">Verbesserte Unsichtbarkeit</div>
            <div class="drain-formula">(F÷2)+1</div>

        </div>

        <div class="action">

            <div class="action-name">Levitieren</div>
            <div class="drain-formula">(F÷2)-1</div>

        </div>

        <div class="action">

            <div class="action-name">Formwandeln</div>
            <div class="drain-formula">(F÷2)+2</div>
            
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

    <div class="mugshot box">

    <img src="/public/Kaya_Portrait.png" alt="Charakterportrait">

    </div>

</template>

<style>

    button:hover, .nuyen-amount, .edge-dice, .drain-formula, .dmg  {
        cursor: pointer;
    }

    /* Content-Styling */

    .header {
        font-size: 3vh;
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
        color: var(--primary-color);
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

    .action-numbers, .skill-numbers {
        display: flex;
        flex-direction: row;
        gap: 5vw;
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

</style>
