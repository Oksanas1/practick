import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import NewMessage from '../../components/NewMessage';

export const ModalProvaider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const valueModalProvaider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalProvaider}>
            {isModalOpen && <NewMessage {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}