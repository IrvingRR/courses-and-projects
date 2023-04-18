import { useState } from 'react';
import { AlertBody, AlertCloseButton, AlertIcon, AlertStyled } from '../../styled/ui/alert';
import { FiX } from "react-icons/fi";

export const Alert = ({ variant, icon, message, showAlert=false }) => {

    const [isAlertActive, setIsAlertActive] = useState(showAlert);

  return (
    <AlertStyled variant={variant} isAlertActive={isAlertActive}>
        <AlertIcon variant={variant}>
            { icon }
        </AlertIcon>
        <AlertBody>
            <span>{ message }</span>
            <AlertCloseButton onClick={() => setIsAlertActive(false)}>
                <FiX/>
            </AlertCloseButton>
        </AlertBody>
    </AlertStyled>
  )
}
