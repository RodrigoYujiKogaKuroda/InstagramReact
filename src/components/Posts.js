import React from 'react';
import {IonIcon} from "react-ion-icon";

export default function Posts() {

    const numberFormat = new Intl.NumberFormat();

    const [classeCurtido1, setClasseCurtido1] = React.useState("");
    const [curtido1, setCurtido1] = React.useState("heart-outline");
    const [numLikes1, setNumLikes1] = React.useState(101523);

    const [classeCurtido2, setClasseCurtido2] = React.useState("");
    const [curtido2, setCurtido2] = React.useState("heart-outline");
    const [numLikes2, setNumLikes2] = React.useState(99159);

    const [salvo1, setSalvo1] = React.useState("bookmark-outline");
    const [salvo2, setSalvo2] = React.useState("bookmark-outline");

    const posts = [
        {userImg: "./assets/img/meowed.svg", userName: "meowed", imgPost: "./assets/img/gato-telefone.svg", nomePost: "gato-telefone", classeCurtido: classeCurtido1, setClasseCurtido: setClasseCurtido1, curtido: curtido1, setCurtido: setCurtido1, salvo: salvo1, setSalvo: setSalvo1, imgCurtidas: "./assets/img/respondeai.svg", userCurtidas: "respondeai", curtidas: numLikes1, setCurtidas: setNumLikes1},
        {userImg: "./assets/img/barked.svg", userName: "barked", imgPost: "./assets/img/dog.svg", nomePost: "dog", classeCurtido: classeCurtido2, setClasseCurtido: setClasseCurtido2, curtido: curtido2, setCurtido: setCurtido2, salvo: salvo2, setSalvo: setSalvo2, imgCurtidas: "./assets/img/adorable_animals.svg", userCurtidas: "adorable_animals", curtidas: numLikes2, setCurtidas: setNumLikes2}
    ];

    function curtirPost(setClasse, curtido, setCurtido, curtidas, setCurtidas, ehImagem) {
        if (curtido === "heart-outline") {
            setClasse("curtido");
            setCurtido("heart");
            setCurtidas(curtidas + 1);
        } else {
            if (ehImagem === false) {
                setClasse("");
                setCurtido("heart-outline");
                setCurtidas(curtidas - 1);
            }
        }
    }

    function salvarPost(salvo, setSalvo) {
        if (salvo === "bookmark-outline") {
            setSalvo("bookmark");
        } else {
            setSalvo("bookmark-outline");
        }
    }

    return (
        <div class="posts">
            {posts.map((post) =>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.userImg} alt={post.userName} />
                            {post.userName}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={post.imgPost} alt={post.nomePost} onClick={() => curtirPost(post.setClasseCurtido, post.curtido, post.setCurtido, post.curtidas, post.setCurtidas, true,)} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <IonIcon class={post.classeCurtido} name={post.curtido} onClick={() => curtirPost(post.setClasseCurtido, post.curtido, post.setCurtido, post.curtidas, post.setCurtidas, false)} />
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name={post.salvo} onClick={() => salvarPost(post.salvo, post.setSalvo)}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={post.imgCurtidas} alt={post.userCurtidas} />
                            <div class="texto">
                                Curtido por <strong>{post.userCurtidas}</strong> e <strong>outras {numberFormat.format(post.curtidas)} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}