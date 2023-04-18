import { useState } from "react";

export const useModal = (closeFunction) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => {
        setIsOpen(false);
        
        if(closeFunction) {
            closeFunction();
        }
    }

    return {
        isOpen,
        openModal,
        closeModal
    };

};