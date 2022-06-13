import React, { useContext } from 'react';
import FormMessage from '../FormMessage';
import { ModalContext } from '../../context';

export default function NewMessage(props) {
    const { closeModal } = useContext(ModalContext);

        return (
            <div className="newMessage--wrapper" >
                <div className="newMessage" >
                    <div className='newMessage-header'
                        style={{overflow: 'auto', padding: `5px ${5/500*100}% 0`}}
                        >
                        <button className='newMessage-item close'
                            style={{float:'right', width: `20px`, height: 20, borderRadius: '50%', fontSize: '1.4rem', overflow: 'hidden', background: 'rgba(255,255,115,0.8)'}}
                            onClick={closeModal}
                            >x</button>
                    </div>
                    <FormMessage {...props} />
                </div>
            </div>
    )
}