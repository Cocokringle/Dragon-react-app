import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "services/DragonsApi/dragons-api";
import styles from "./DragonsList.module.css"

export default function DragonsList() {
    const [dragons, setDragon] = useState(null);

    useEffect(() => {
        api.fetchDragons().then(setDragon);
    }, []);
    
    return (
        <>
            {dragons && dragons.length > 0 && (     
                <ul className={styles.list}>{dragons.map(dragon => {     
                    return <li key={dragon.id} className={styles.item}>
                        <Link to={`${dragon.id}`} className={styles.link}>
                            <div className={styles.box}>
                                <img className={styles.image}
                                    src={dragon.flickr_images[0]}
                                    alt={`Spaceship ${dragon.name}`}>
                                </img>
                            </div>
                            </Link>                                            
                            </li> 
                    })}
                </ul>
            )}
        </>
    )
}

