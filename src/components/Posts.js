export default function Posts() {

    const posts = [
        {userImg: "./assets/img/meowed.svg", userName: "meowed", imgPost: "./assets/img/gato-telefone.svg", nomePost: "gato-telefone", imgCurtidas: "./assets/img/respondeai.svg", userCurtidas: "respondeai", curtidas: "101.523"},
        {userImg: "./assets/img/barked.svg", userName: "barked", imgPost: "./assets/img/dog.svg", nomePost: "dog", imgCurtidas: "./assets/img/adorable_animals.svg", userCurtidas: "adorable_animals", curtidas: "99.159"}
    ];

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
                        <img src={post.imgPost} alt={post.nomePost} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={post.imgCurtidas} alt={post.userCurtidas} />
                            <div class="texto">
                                Curtido por <strong>{post.userCurtidas}</strong> e <strong>outras {post.curtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}