import React, { useState, useContext } from 'react';
import { ModalContext } from '../context';
import Header from './Header';
import MessageList from './MessageList';


export default function Main () {
    const { openModal } = useContext(ModalContext);

    const [textarea, setTextarea] = useState('text const');
    const [date, setDate] = useState('');
    const [listMessage, setListMessage] = useState([]);

    const showModal = () => {
        openModal({
            textarea,
            date,
            setTextarea,
            setDate,
            listMessage,
            setListMessage
        });
    }

    return(
        <main
            className='list_message'
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: `20px ${20/8}% 0`,
                position: 'relative'
            }}
            >
            <Header />
            <button
                className='list_message__add_button'
                onClick={showModal}
                style={{
                    width: 50,
                    height:50,
                    borderRadius: '50%',
                    overfllow: 'hidden',
                    background: 'rgba(255,255,115,0.8)',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    fontSize: '3.5rem'
                    }}
                >+</button>
            <MessageList listMessage={listMessage} setListMessage={setListMessage} />
        </main>       
    );
}