import { useContext } from "react";
import { UserContext } from "../ConectivityModule";
import styled from "styled-components";
import logo_deitado from "../assets/logo_deitado.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function AppBars() {
   const [user] = useContext(UserContext);
   console.log(user)
   return (
       <>
            <TopBar>
                <img src={logo_deitado} alt="Track-It logo" />     
                <img src={user.image} alt="User logo" />
            </TopBar>     

            <BottomBar>
                <a>Habitos</a> 
                    <button>
                    <CircularProgressbar backgroundPadding={6}  background={true} value={75} styles={buildStyles({
                        pathTransitionDuration: 0.5,
                        
                        pathColor: '#FFFFFF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })} text="Hoje">
                    </CircularProgressbar>
                    </button>
                <a>Historico</a>
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

    position: absolute;
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

    position: absolute;
    bottom: 0px;
    left: 0px;

    border-top: 1px solid black;
   
    box-sizing: border-box;

    a {
        color: #52B6FF
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