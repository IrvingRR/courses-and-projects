import { useState } from 'react';
import { IconDropdownOption, IconDropdownOptions, IconDropdownStyled } from '../../styled';

export const IconDropDown = ({ icon, onSetState, options=[], ...props }) => {

    const [isActiveOptions, setIsActiveOptions] = useState(false);  

    const handleClick = (option) => {
        onSetState(option);
    }

  return (
    <IconDropdownStyled onClick={() => setIsActiveOptions(!isActiveOptions)} { ...props }>
        {icon}
        <IconDropdownOptions isActiveOptions={isActiveOptions}>
            {
                options.length > 0
                ? options.map((option, index) => <IconDropdownOption key={`option-${index}`} onClick={() => handleClick(option)}>{ option }</IconDropdownOption>)
                : <p>No options</p>
            }
        </IconDropdownOptions>
    </IconDropdownStyled>
  )
}
