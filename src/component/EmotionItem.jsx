import React from "react";
import './EmotionItem.css'


const EmotionItem = ({id, img, name, onClick, isSelected}) => {
    /*
    - isSelected: 감정 이미지의 선택 여부
    */
    const handleOnClick = () => {
        onClick(id)
    }

    return (
        <div className={['EmotionItem',
            isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(' ')}

             onClick={handleOnClick}>
            <img src={img} alt={`emotion${id}`}/>
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem