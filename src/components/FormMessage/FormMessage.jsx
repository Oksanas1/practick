import React, { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../context';

export default function FormMessage({ textarea, date, setTextarea, setDate, listMessage, setListMessage, id }) {

    const [isDisable, setIsDisable] = useState(true);
    const [isErrorActive, setIsErrorActive] = useState(false);
    const [objectMessage, setObjectMessage] = useState({
        textarea,
        date,
    });
    
    const { closeModal } = useContext(ModalContext);

    useEffect(() => {
        if(objectMessage.textarea.length > 3 && objectMessage.date !== '') {
                setIsDisable(false);
                setIsErrorActive(false);
        } else {
                setIsDisable(true);
                setIsErrorActive((objectMessage.textarea !== '' && objectMessage.textarea.length < 3 )? true: false);
            };
        },[objectMessage]);

    const handleChange = ({ target }) => {
        const {name, value} = target;

        setObjectMessage( (prevObjectMessage) => ({
            ...prevObjectMessage,
            [name]: value
            }));
    };

    const updateTodo = () => {
        setListMessage(listMessage.map(element => (element.id === id)? {id, textarea: objectMessage.textarea, date: objectMessage.date }: element))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (id !== undefined) {
            updateTodo();
        } else {
            setListMessage([...listMessage, {id: Math. floor(Math. random() * 10000), textarea: objectMessage.textarea, date: objectMessage.date }]);
        }
        closeModal();
    }
  
    return (
        <form
            //action="POST"
            className='message-form'
            onSubmit={onFormSubmit}
            >
            <div className={`message-textarea-wrapper ${isErrorActive? 'active': ''}`}>
                <textarea
                    className='message-textarea'
                    required
                    value={objectMessage.textarea}
                    onChange={handleChange}
                    name="textarea"
                    placeholder="Write a menssage"
                ></textarea>
                <span className='message-text_error'>Write more</span>
            </div>
            <label className='message-label'>Date: <input
                type="date"
                required
                value={objectMessage.date}
                name="date"
                onChange={handleChange}
                className='message-date'
                min={new Date().toISOString().split('T')[0]}
                /></label>
            <button className='message-button' disabled={isDisable}>Send</button>
        </form>
    );
}