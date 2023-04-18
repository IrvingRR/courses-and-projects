import { useState } from "react";

export const useShowHiddeElement = (initialState = false) => {
    const [isVisible, setIsVisible] = useState(initialState);

    const handleShowElement = () => setIsVisible(true);

    const handleHiddeElement = () => setIsVisible(false);

    const handleToggleElement = () => setIsVisible(!isVisible);

    return {
        isVisible,
        handleShowElement,
        handleHiddeElement,
        handleToggleElement
    }
}