import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import api from "services/DragonsApi/dragons-api";
import Gallery from "components/Gallery/Gallery";
import styles from "./DragonInfo.module.css"
import Button from '@mui/material/Button';

export default function DragonInfo() {
    const [dragon, setDragon] = useState(null);
    const { dragonId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        api.fetchDragonById(dragonId).then(setDragon);
    }, [dragonId]);

    const GoBack = () => {
      navigate(
        location.state?.from?.pathname
          ? `${location.state?.from?.pathname}${location.state?.from?.search}`
          : '/',
      );
    };
   
    return (
        <>
            {dragon && (
                <div>
                    <Button variant="outlined" type="button" onClick={GoBack} children={location?.state?.label ?? 'Go Back'}>
                        Go back
                    </Button>
                    <div className={styles.gallery_box}>
                        <Gallery images={dragon.flickr_images}></Gallery>
                    </div>

                    <div className={styles.box}>
                        <h2 className={styles.title}>{dragon.name}</h2>
                        <p className={styles.text}>{dragon.description}</p>
                        <h3 className={styles.list_title}>Parameters</h3>
                        <dl className={styles.list}>
                            <dt className={styles.item_name}>height:</dt>
                            <dd className={styles.item_value}>{dragon.height_w_trunk.meters} m</dd>
                            <dt className={styles.item_name}>mass:</dt>
                            <dd className={styles.item_value}>{dragon.dry_mass_kg} kg</dd>
                            <dt className={styles.item_name}>year:</dt>
                            <dd className={styles.item_value}>{dragon.first_flight}</dd>
                        </dl>
                        <p className={styles.text}>Click
                            <a href={dragon.wikipedia} className={styles.link}>here</a>
                            for more information
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

