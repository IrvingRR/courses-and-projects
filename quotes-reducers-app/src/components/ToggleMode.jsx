import { useContext } from 'react';
import { ToggleModeButton } from '../styled';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ModeContext } from '../contexts';

export const ToggleMode = ({ ...props }) => {

    const { mode, handleChangeMode } = useContext(ModeContext);

    return (
        <ToggleModeButton { ...props } onClick={ handleChangeMode }>
            <span className="animate__animated animate__fadeInDown">
                { mode === 'light' ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
            </span>
        </ToggleModeButton>
    )
}
