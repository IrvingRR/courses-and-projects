import { useState } from "react";

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleOpenModal = () => setIsOpen(true);

    const handleCloseModal = () => setIsOpen(false);

    const handleToggleModal = () => setIsOpen(!isOpen);

    return {
        isOpen,
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    };
}