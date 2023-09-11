import citroenen from "../assets/citroenen.jpeg";
import ProductPage from "../pages/ProductPage";
import limoenen from "../assets/limoenen.png";
import ijsblokjes from "../assets/ijsblokjes.jpg";
import React from "react";
import './Home.css'
import data from "../data/data.json";
import {Link} from "react-router-dom";


function Home() {
    return  (
        <>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button">
                    Shop nu
                </button>
            </header>
            <main>
                 {data.map((data) => {
                    return <article key={data.id}>
                        <Link to="/ProductPage/1">
                            <figure>
                                //dynamic use of images react alias
                                <img src={citroenen} alt={`${data.title}`}/>
                                <figcaption>{data.title}</figcaption>
                            </figure>
                        </Link>
                    </article>
                })}
            </main>
        </>
    )

}

export default Home;