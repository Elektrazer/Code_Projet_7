import React, { useState } from 'react';


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <div className='slidesContainer'></div>
        </div>
    );
};

export default Slider;