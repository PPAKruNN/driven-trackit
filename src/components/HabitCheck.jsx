/* eslint-disable react/prop-types */
import styled from "styled-components";
import check from "../assets/check.png"


export default function HabitCheck({title, maxSequence, actualSequence, isChecked}) {

    //const [todayHabits, setTodayHabits] = useContext(HabitsContext);

    return (
        <StyledChecker $isChecked={true}>
            <div>
                <h1>{title}</h1>
                
                <div>
                    <p>Sequencia atual: {actualSequence} dias</p>
                    <p>Seu recorde: {maxSequence + " " + isChecked} dias</p>
                </div>
            </div>

            <img src={check} alt="Check habit" />

        </StyledChecker>
    )
}

const StyledChecker = styled.div`

    width: 100%;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    background-color: #FFFFFF;
    padding: 12px;

    h1 {
        font-size: 20px;
        color: #666666;
    }

    p {
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 6px;
        justify-content: space-around;
    }


    img {
        width: 36px;
        height: 32px;
        padding: 26px;

        border-radius: 10px;

        background-color: ${ (props) => props.$isChecked ? "#8FC549" : "#E7E7E7"};
    }

`