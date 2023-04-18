import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { DropdownContainer, DropdownOption, DropdownOptions } from "../../styled";
import { useState } from "react";

export const DropDown = ({ title='Select an option', options=[], onSetState, ...props }) => {

    const [isActiveOptions, setIsActiveOptions] = useState(false);  
    const [optionSelected, setOptionSelected] = useState('');

    const handleClick = (option) => {
        onSetState(option);
        setOptionSelected(option);
    }

  return (
    <DropdownContainer onClick={() => setIsActiveOptions(!isActiveOptions)} { ...props }>
        { optionSelected ? optionSelected : title }
        { isActiveOptions ? <FiChevronUp/> : <FiChevronDown/> }
        <DropdownOptions isActiveOptions={isActiveOptions}>
            {
                options.length > 0
                ? options.map((option, index) => <DropdownOption key={`option-${index}`} onClick={() => handleClick(option)}>{ option }</DropdownOption>)
                : <p>No options</p>
            }
        </DropdownOptions>
    </DropdownContainer>
  )
}
