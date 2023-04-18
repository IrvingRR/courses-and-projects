import { useState } from "react";

export const useModal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => setIsOpenModal(true);

    const handleCloseModal = () => setIsOpenModal(false);

    const handleToggleModal = () => setIsOpenModal(!isOpenModal);

    return {
        isOpenModal,
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    };
}