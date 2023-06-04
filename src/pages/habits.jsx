import styled from "styled-components"
import CreateHabit from "../components/Habit"
import { useState } from "react";

export default function Habits() {

    const [newHabitPrompt, setNewHabitPrompt] = useState(false); 

    return (
        <StyledHabits>
            <div>
                <h1>Meus habitos</h1>
                <button onClick={() => setNewHabitPrompt(true)}>+</button>
            </div>
            {newHabitPrompt ? <CreateHabit onComplete={() => setNewHabitPrompt(false)}/> : ""}
            <HabitContainer>
            </HabitContainer>

            

        </StyledHabits>
    )
}

const StyledHabits = styled.div`

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 24px 6%;
    width: 100%;

    margin-top: 80px;
    margin-bottom: 80px;

    div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            box-sizing: border-box;
            width: 32px;
            height: 32px;
            background-color: #52B6FF;
            border: none;
            color: #FFF;
            font-size:24px;
            border-radius: 5px;
        }
    }
`

const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 24px;
`