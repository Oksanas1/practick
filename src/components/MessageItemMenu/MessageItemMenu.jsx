import React, { useState, useEffect, useContext, Children } from 'react';
import { ModalContext } from '../../context';

export default function MessageItemMenu ({ listMessage, setListMessage, title, setIsEdit }) {
    const { openModal } = useContext(ModalContext);
    const commentMessage = ({ id }) => {
        openModal({

        });
    };
    const editMessage = ({ id }) => {
        const editElement = listMessage.find(element => element.id === id);
        setIsEdit(true);

        openModal({
            textarea: editElement.textarea,
            date: editElement.date,
            id,
            listMessage,
            setListMessage
        });
    }

    const deleteMessage = ({ id }) => {
        setListMessage(listMessage.filter(
            element => element.id !== id
        ));
    }

    return (
        <ul className='message-menu--list'>
            <li
                className='message-menu--item'
                key={ Math. floor(Math. random() * 1000) }>
                <button className='message-menu--button icon-forward' onClick={()=>{}}>=</button>
            </li>
            <li
                className='message-menu--item'
                key={ Math. floor(Math. random() * 1000) }>
                <button className='message-menu--button icon-edit' onClick={()=>{editMessage(title)}}></button>
            </li>
            <li
                className='message-menu--item'
                key={ Math. floor(Math. random() * 1000) }>
                <button className='message-menu--button icon-delete' onClick={() => {deleteMessage(title)}}></button>
            </li>
        </ul>
    );
}