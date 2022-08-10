import './App.css';
import React from 'react'


function Actions() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className = 'ButtonsStyle'>
            <button className='ButtonsStyle2' onClick={() => openInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>Открыть</button>
            <button className='ButtonsStyle2'>Закрыть</button>

        </div>

    );
}

export default Actions;