import styled from "styled-components"
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useState } from "react";
import { registerNewUser } from "../ConectivityModule";
import { toast } from "react-toastify";


export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [url, setURL] = useState("");

    const [loading, setLoading] = useState(false)

    function FormSignUp(event) {
        event.preventDefault();
        
        setLoading(true);

        registerNewUser({email, password, name, image: url})
            .then(() => {
                toast.success("Login realizado com sucesso!")
                setLoading(false)
            })
            .catch(() => {
                toast.error("O cadastro deu um erro.")
                alert("O cadastro deu ruim ein!")
                setLoading(false);
            })
        
    }

    return (
       <ScSignup>
            <img src={logo} alt="Track-it Logo" />

            <form onSubmit={FormSignUp}>
                <h1>Cadastrar: </h1>
                    <input disabled={loading} value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="Email"/>
                    <input disabled={loading} value={password} onChange={e => setPassword(e.target.value)} type="password" required placeholder="Senha"/>
                    <input disabled={loading} value={name} onChange={e => setName(e.target.value)} type="text" id="name" required placeholder="Nome"/>
                    <input disabled={loading} value={url} onChange={e => setURL(e.target.value)} type="url" id="url" required placeholder="URL de foto de perfil"/>
                <LoaderButton loading={loading}>Entrar</LoaderButton>
            </form>
        
            <Link to="/">Já tem uma conta? Faça login!</Link>
       </ScSignup> 
    )
}

const ScSignup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 26px;
    width: 100%;

    position: fixed;
    left: 0px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%); 


    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 400px ;
        gap: 10px;

        input {
            padding: 10px;
            border-radius: 5px;
            border: 2px solid #D4D4D4;
            color: #52B6FF;
        }

        input::placeholder {
            color: #d4d4d4;
        }

        input:focus {
            outline: 2px solid #52B6FF;
            border: 1px solid #52B6FF;
        }
        
        button {
            background-color: #52B6FF;
            border: none;
            border-radius: 5px;
            padding: 10px;
            color: #fff;
        }
    }

    img {
        width: 200px;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
    }

`