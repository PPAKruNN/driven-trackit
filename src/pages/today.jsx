import styled from "styled-components"
import HabitCheck from "../components/HabitCheck"
import { useContext } from "react";
import { HabitsContext, UserContext, getTodayHabits } from "../ConectivityModule";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Today() {
    
    const [todayHabits, setTodayHabits] = useContext(HabitsContext);
    const [user] = useContext(UserContext)

    useEffect(() => {
        getTodayHabits(user.token)
            .then( res => setTodayHabits(res.data))
            .catch( (e) => {
                console.log(e);
                toast.error("Erro ao carregar os habitos de hoje: "+ e.response.data.message )
            });

        console.log("Teste!");
    }, [setTodayHabits, user.token])


    function genHabitChecks() {
        if(!todayHabits[0]) return;
        return todayHabits.map( curr => {return(<HabitCheck key={curr.id} title={curr.name} maxSequence={curr.highestSequence} actualSequence={curr.currentSequence}  isChecked={curr.done}/>)})
    }


    return (
        <StyledToday>
            <div>
                <h1>Segunda, 17/04</h1>
                <p>Nenhum habito concluido ainda!</p>
            </div>
        
            <StyledHabitContainer>
                {genHabitChecks()}
            </StyledHabitContainer>

        </StyledToday>
    )
}


const StyledToday = styled.div`
    margin-top: 84px;
    margin-bottom: 120px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    width: 100%;
    padding: 0px 6% ;



    & > div:first-child {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 6px;
        

        margin-top: 24px;
        margin-bottom: 24px;
        
        justify-content: right;
    
        p {
            color: '#BABABA';
        }

    }
    

`

const StyledHabitContainer = styled.div`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    gap: 16px;

`