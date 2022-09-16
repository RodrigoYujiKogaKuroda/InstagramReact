export default function Sugestoes() {

    const sugestoes = [
        {src: "./assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
        {src: "./assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {src: "./assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {src: "./assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {src: "./assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((sugestao) => 
                <div class="sugestao">
                    <div class="usuario">
                        <img src={sugestao.src} alt={sugestao.nome} />
                        <div class="texto">
                            <div class="nome">{sugestao.nome}</div>
                            <div class="razao">{sugestao.razao}</div>
                        </div>
                    </div>
            
                    <div class="seguir">Seguir</div>
                </div>
            )}
        </div>
    );
}