import SideBar from "./SideBar";
import Usuario from "./Usuario";
import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <SideBar />

        </div>
    );
}

