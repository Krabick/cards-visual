import '../App.css';
import React from 'react'


function Actions() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className = 'buttons-style'>
            <button className='buttons-style-2' onClick={() => openInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>Открыть</button>
            <button className='buttons-style-2'>Закрыть</button>

        </div>

    );
}

export default Actions;