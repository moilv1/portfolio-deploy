import './Info.scss'
import PP from '../../assets/IMG_20240411_161929.webp'
export default function Info() {
    return (
        <section className='Info'>
            <div className="Info_container">
                <h1>Flahaut Melvin</h1>
                <h2>Developpeur Front-End</h2>
                <p>Je suis <span>Melvin</span>, un <span>développeur Front-End</span> junior à la recherche actuelle d'une <span>alternance de 24mois</span> en tant que Développeur Front-End</p>
                <img src={PP} className='PP' alt='Flahaut Melvin'></img>
            </div>
        </section>
    )
}