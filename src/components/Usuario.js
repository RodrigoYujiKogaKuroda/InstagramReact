export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt={props.user} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                {props.name}
                <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}