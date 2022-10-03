import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "services/DragonsApi/dragons-api";
import styles from "./DragonsList.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Loader from "components/Loader/Loader";

export default function DragonsList() {
    const [dragons, setDragons] = useState([]);
    const [limit, setLimit] = useState(1)
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setIsVisible(true)

        api.fetchDragons(limit).then(({ totalDocs, docs }) => {
            if (totalDocs - limit * 1 < 1) {
                setIsVisible(false);
            }

            setDragons(docs)
        }).finally(() => setIsLoading(false)).catch(error => console.log(error));
    }, [limit]);

    const loadMore = () => {
        setLimit(prevLimit => prevLimit + 1)
    }

    return (
        <>
            {dragons && dragons.length > 0 && (
                <ul className={styles.list}>{dragons.map(dragon => {  
                    return <li key={dragon.id} className={styles.item}>
                        <Link to={`${dragon.id}`} className={styles.link}>
                            <div className={styles.box}>
                                <img className={styles.image}
                                    src={dragon.flickr_images}
                                    alt={`Spaceship ${dragon.name}`}>
                                </img>
                            </div>
                            </Link>                                            
                            </li> 
                    })}
                </ul>
            )}
            
            {isLoading && <Loader/>}
            
            {!isLoading && isVisible && (
                <Box textAlign='center'>
                    <Button variant="contained"
                        type='button'
                        onClick={loadMore}
                        sx={{ marginTop: '15px' }}>Load more
                    </Button>
                </Box>
            )}
               
        </>
    )
}

