import './Info.scss'

import logo_react from '../../assets/React-icon.svg.png';
import logo_sass from '../../assets/2560px-Sass_Logo_Color.svg.png';
import logo_html from '../../assets/HTML5_logo_and_wordmark.svg.png';
import logo_github from '../../assets/GitHub-Logo.wine.png';
import logo_css from '../../assets/css.png';

export default function Info() {
    return (
        <section className='Info'>
            <div className="Info_container">
                <h1>Flahaut Melvin</h1>
                <h2>Developpeur Front-End</h2>
                <p>Je suis <span>Melvin</span>, un <span>développeur Front-End</span> junior à la recherche actuelle d'une <span>alternance de 24mois</span> en tant que Développeur Front-End</p>
                <div className='Info_competences'>
                    <h2>Compétences</h2>
                    <div className='Info_competences-img'>
                        <img src={logo_react} alt='logo react'></img>
                        <img src={logo_sass} alt='logo SASS'></img>
                        <img src={logo_html} alt='logo HTML'></img>
                        <img src={logo_css} alt='logo CSS'></img>
                        <img src={logo_github} alt='logo GitHub'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}