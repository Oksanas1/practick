import React from 'react';

export default function Header () {
    return (
        <div 
            className='list_message--title-wrapper'
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                background: 'rgba(255,255,115,0.5)',
                marginBottom: '20px',
                position: 'sticky',
                top: 0}}
            >
            <h1 className='list_message-title'>List of message</h1>
        </div>
    );
}

