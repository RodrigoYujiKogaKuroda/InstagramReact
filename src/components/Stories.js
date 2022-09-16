export default function Stories() {

    const stories = [
        {src: "./assets/img/9gag.svg", usuario: "9gag"},
        {src: "./assets/img/meowed.svg", usuario: "meowed"},
        {src: "./assets/img/barked.svg", usuario: "barked"},
        {src: "./assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
        {src: "./assets/img/wawawicomics.svg", usuario: "wawawicomics"},
        {src: "./assets/img/respondeai.svg", usuario: "respondeai"},
        {src: "./assets/img/filomoderna.svg", usuario: "filomoderna"},
        {src: "./assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
    ];

    return (
        <div class="stories">

            {stories.map((story) => 
                <div class="story">
                    <div class="imagem">
                        <img src={story.src} alt={story.usuario}/>
                    </div>
                    <div class="usuario">
                        {story.usuario}
                    </div>
                </div>
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}