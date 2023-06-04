import { useContext } from "react";
import { UserContext } from "../ConectivityModule";
import styled from "styled-components";
import logo_deitado from "../assets/logo_deitado.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useNavigate } from "react-router-dom";

export default function AppBars() {
   const [user] = useContext(UserContext);
   
    const navigate = useNavigate();

   return (
       <>
            <TopBar>
                <img src={logo_deitado} alt="Track-It logo" />     
                <img src={user.image} alt="User logo" />
            </TopBar>     

            <BottomBar>
                <Link to='/habitos'>Habitos</Link> 
                    <button onClick={() => navigate('/hoje')}>
                    <CircularProgressbar backgroundPadding={6}  background={true} value={75} styles={buildStyles({
                        pathTransitionDuration: 0.5,
                        
                        pathColor: '#FFFFFF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })} text="Hoje">
                    </CircularProgressbar>
                    </button>
                <Link to="/historico">Historico</Link>
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