import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dragonsOperations, dragonsSelectors } from "redux/dragons";


export default function DragonsList() {
    const dispatch = useDispatch();
    const dragons = useSelector(dragonsSelectors.getDragons)

    useEffect(() => {
        dispatch(dragonsOperations.fetchDragons())
    }, [dispatch])
    


    // const dragonsListData = dragons.map(dragon => {
    //     const data = {
    //         id: dragon.id,
    //         images: dragon.flickr_images,
    //     }
    //     return data;
    // })
 
    // const  allImageArrays =  dragonsListData.map(dragon => 
    //     dragon.images.map(img => img)
    // )

    // const unpackedImageArray = (arr) => {
    //         return  arr.flat();
    // }
    
    // const images = unpackedImageArray(allImageArrays)

    // dragonsListData.images = images
    // console.log('dragonsListData', dragonsListData)
    return (
        <>
            {dragons.length > 0 && (     
                <ul>{dragons.map(dragon => {     
                        return <li key={dragon.id}>
                                <Link to={`${dragon.id}`} >
                                    <img
                                        src={dragon.flickr_images[0]}
                                        alt={`Spaceship ${dragon.name}`}
                                        height={240}
                                        width={350}>
                                    </img>
                                </Link>                                            
                                </li> 
                })}
                </ul>
            )}
        </>
    )
}

