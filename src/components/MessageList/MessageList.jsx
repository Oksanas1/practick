import React, { useState} from 'react';
import MessageItemMenu from '../MessageItemMenu';

export default function MessageList ( { listMessage, setListMessage } ) {    
    const [isEdit, setIsEdit] = useState(false);
    return(
        <ul className='message-list'>
            {listMessage.map((element) => (
                <li //id={element.id}
                    key={element.id}
                    className='message-list--item'
                    >
                    <p className='message-list--content'>{element.textarea}</p>
                    <div className='message-list--bottom'>
                        <p className={`message-list--date ${(isEdit)? 'change':''}`}>
                            <span className='message-list--first'>Publik date: </span>
                            <span className='message-list--correct'>Corrected date </span>
                            {element.date}
                        </p>
                        <MessageItemMenu listMessage={listMessage} setListMessage={setListMessage} title={element} setIsEdit={setIsEdit} />
                    </div>
                </li>
            ))}
        </ul>
    );
}