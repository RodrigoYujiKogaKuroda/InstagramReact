import React from 'react';

export default function Usuario(props) {

    const usuario = props.name

    const [nome, setNome] = React.useState(usuario);

    function mudarNome() {
        const newUser = prompt("Qual o novo nome de usuário?");
        console.log(newUser);
        if (newUser !== '') {
            setNome(newUser);
        }
    }

    return (
        <div class="usuario">
            <img src={props.img} alt={props.user} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                {nome}
                <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}