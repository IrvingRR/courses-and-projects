import { useState } from "react";

export const useShowElement = () => {

    const [isActivated, setIsActivated] = useState(false);

    const showElement = () => setIsActivated(true);

    const hiddeElement = () => setIsActivated(false);

    return {
        isActivated,
        showElement,
        hiddeElement
    };

};