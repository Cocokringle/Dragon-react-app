import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as dragonsAPI from "services/DragonsApi/dragons-api";
import Gallery from "components/Gallery/Gallery";


export default function DragonInfo() {
    const [dragon, setDragon] = useState(null);
    const { dragonId } = useParams();

    useEffect(() => {
        dragonsAPI.fetchDragonById(dragonId).then(setDragon);
    }, [dragonId]);

   
    return (
        <>
            {dragon && (        
                <div>
                    <Gallery images={dragon.flickr_images}></Gallery>
                <div>
                        <h2>{dragon.name}</h2>
                        <p>{dragon.description}</p>
                        <dl>
                            <h3>Parameters</h3>
                            <dt>height:</dt>
                            <dd>{dragon.height_w_trunk.meters}</dd>
                            <dt>mass:</dt>
                            <dd>{dragon.dry_mass_kg}</dd>
                            <dt>year:</dt>
                            <dd>{dragon.first_flight}</dd>
                        </dl>
                    <p>Click <a href={dragon.wikipedia}>here</a> for more information</p>
                </div>
            </div>
            )}
        </>
    )
}

