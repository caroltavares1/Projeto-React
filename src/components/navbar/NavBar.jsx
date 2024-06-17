import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <header>
            <section>
                <h1><span>Code</span>Lab</h1>
                <input id="input-search" type="search" placeholder="Pesquisar no blog" />
            </section>
        </header>
    );
}

export default NavBar;