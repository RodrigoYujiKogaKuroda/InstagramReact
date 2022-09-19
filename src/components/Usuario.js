import React from 'react';

export default function Usuario(props) {

    const usuario = props.name
    const imagem = props.img

    const [foto, setFoto] = React.useState(imagem);
    const [nome, setNome] = React.useState(usuario);

    function mudarFoto() {
        const newPhoto = prompt("Qual a nova imagem de perfil?");
        if (newPhoto !== '') {
            setFoto(newPhoto);
        }
    }

    function mudarNome() {
        const newUser = prompt("Qual o novo nome de usuário?");
        if (newUser !== '') {
            setNome(newUser);
        }
    }

    return (
        <div class="usuario">
            <img src={foto} alt={props.user} onClick={mudarFoto} />
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