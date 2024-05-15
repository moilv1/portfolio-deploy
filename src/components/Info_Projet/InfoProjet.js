import './InfoProjet.scss';


export default function Info_Projet({source}) {

    return (
        <div className="img">
            <img src={source} alt="Image du projet" className="ImageProjet"></img>
        </div>
    )
}