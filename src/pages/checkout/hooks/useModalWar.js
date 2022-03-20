import {useEffect, useState} from "react";

export const useModalWar=()=>{
    const [isOpenModalWar, setIsOpenModalWar] = useState(false);
    const modalWarClickHandler = () => {
        setIsOpenModalWar(!isOpenModalWar);
    };

    useEffect(() => {
        isOpenModalWar ? document.body.style.overflow = "hidden" :
            document.body.style.overflow = "auto"
    }, [isOpenModalWar])

    return {
        isOpenModalWar,modalWarClickHandler
    }
}