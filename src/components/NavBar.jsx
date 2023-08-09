import "./CartWidget"
import { CartWidget } from "./CartWidget";
import "./style.css"

export const NavBar = ()=>{
    return(
        <nav className="ordenar">
            <div>CERVAKOH</div>
            <ul>
                <li>
                    <a href="#Opcion1">Opcion1</a>
                </li>
                <li>
                    <a href="#Opcion2">Opcion2</a>
                </li>
                <li>
                    <a href="#Opcion3">Opcion3</a>
                </li>
            </ul>
            <CartWidget/>

        </nav>
    );
};