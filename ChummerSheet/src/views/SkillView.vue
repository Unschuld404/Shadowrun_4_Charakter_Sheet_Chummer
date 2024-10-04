<script setup lang="ts">
import { captureRejectionSymbol } from 'events';
import { useCharacterData } from '../composables/useCharacterData';

const { data } = useCharacterData('Kaya');  // Hier den ID der Charaktere verwenden

console.log(data.value);

</script>


<template>

    <div class="all-skills">

        <div class="active-skills">

           <div class="scroll-box">

                 <div class="skills">

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Animal Handling</div>
                        <div class="skill-values">1 + LOG 4</div>
                        <div class="button-box">
                            <button class="skill-total-value">5</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>
                    
                </div>

           </div>

            <div class="lower-header">Aktionsfertigkeit</div>

        </div>

        <div class="knowledge-skills">

             <div class="scroll-box">

                 <div class="skills">

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>

                    <div class="skill">

                        <div class="checkbox-box">
                            <input type="checkbox" class="favourite">
                        </div>
                        <div class="skill-name">Längster Skillname - Bestimmt!</div>
                        <div class="skill-values">00 + STR 00</div>
                        <div class="button-box">
                            <button class="skill-total-value">00</button>
                        </div>

                    </div>
                    
                </div>

           </div>

            <div class="lower-header">Wissensfertigkeit</div>

        </div>

    </div>

</template>

<style scoped>

.all-skills {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 80vh;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
}

.active-skills, .knowledge-skills {
    width: 49%;
    background-color: var(--primary-color);
    border-radius: 5vh;
    position: relative;
}

.scroll-box {
    overflow: scroll;
    height: 90%;
    margin-top: 3vh;
}

.skills {
    margin-top: 2vh;
    margin-bottom: 2vh;
}

.skill {
    display: flex;
    margin-left: 2vh;
    margin-right: 2vh;
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 0.5vh;
    padding-top: 0.5vh;
}

.skill-name, .skill-values {
    font-size: 2vh;
    line-height: 6vh;
}

.skill-values {
    width: 20%;
}

.skill-name {
    width: 64%;
}

.skill-total-value {
        font-weight: bold;
        border: none;
        margin: 0;
        text-align: center;
        border-radius: 0.5vh;
        height:5vh;
        width: 5vh;
        font-size: 3vh;
        color: var(--accent-color);
        background-color: var(--secondary-color);
        margin-top: 0.5vh;
    }

    .skill-total-value:active {
        background-color: var(--font-color);
    }

    .checkbox-box {
        width: 8%;
    }

    .button-box {
        display: flex;
        flex-direction: row-reverse;
        width: 8%;
    }

    .favourite {
        appearance: none;
        width: 3vh;
        height: 3vh;
        border-radius: 0.5vh;
        margin-top: 1.5vh;
        background-color: var(--secondary-color);
    }

    .favourite:checked {
        background-color: var(--accent-color);
    }

.lower-header {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    text-align: center;
}



</style>
