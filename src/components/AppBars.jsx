import { useContext } from "react";
import { HabitsContext, UserContext } from "../ConectivityModule";
import styled from "styled-components";
import logo_deitado from "../assets/logo_deitado.svg"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function AppBars() {
    const [user] = useContext(UserContext);
    const [todayHabits] = useContext(HabitsContext);

    const [percent, setPercent] = useState(1); 
   
    const navigate = useNavigate();

    useEffect(() => {
        const validMap = todayHabits.filter(curr => curr.done);
        console.log(validMap)

        setPercent( (validMap.length/todayHabits.length) * 100);
    }, [todayHabits]) 


   return (
       <>
            <TopBar data-test="header">
                <img src={logo_deitado} alt="Track-It logo" />     
                <img data-test="avatar" src={user.image} alt="User logo" />
            </TopBar>     

            <BottomBar data-test="menu">
                <Link data-test="habit-link" to='/habitos'>Habitos</Link> 
                    <button data-test="today-link" onClick={() => navigate('/hoje')}>
                    <CircularProgressbar backgroundPadding={6}  background={true} value={percent} styles={buildStyles({
                        pathTransitionDuration: 0.5,
                        
                        pathColor: '#FFFFFF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })} text="Hoje">
                    </CircularProgressbar>
                    </button>
                <Link data-test="history-link" to="/historico">Historico</Link>
            </BottomBar>     
       </>
   )

}

const TopBar = styled.div`
    background-color: #126BA5;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    position: fixed;
    top: 0px;
    left: 0px;

    padding: 12px;
    box-sizing: border-box;

    img:first-child {
        height: 56px;
    }

    img:last-child {
        width: 56px;
        border-radius: 100%;
        aspect-ratio: 1;
    }
`

const BottomBar = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    position: fixed;
    bottom: 0px;
    left: 0px;

    border-top: 1px solid black;
   
    box-sizing: border-box;

    a {
        color: #52B6FF;
        text-decoration: none;
    }

    button {
        width: 90px;
        height: 90px;
        
        padding: 0px;
        background-color: transparent;
        border: none;

        position: relative;
        bottom: 24px;
    }
`