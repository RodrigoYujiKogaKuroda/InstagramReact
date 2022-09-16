import Corpo from "./components/Corpo";
import FundoMobile from "./components/FundoMobile";
import NavBar from "./components/Navbar";

export default function App() {
    return (
        <div class="root">
            <NavBar />
            <Corpo />

            <FundoMobile />
        </div>
    );
}