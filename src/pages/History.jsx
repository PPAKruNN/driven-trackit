import styled from "styled-components"

export default function History() {

    return (
        <SCHistory>
            <h1>Historico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </SCHistory>
    )
}

const SCHistory = styled.div`
    margin-top: 100px;
    padding: 0px 6%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`