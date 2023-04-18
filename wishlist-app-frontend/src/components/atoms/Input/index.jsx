import { InputContainer,  InputControl, Legend } from './styles';

export const Input = ({ legend, isValid, ...props }) => {
  return (
    <InputContainer width={ props.width }>
        <InputControl { ...props } autoComplete='off'/>
        <Legend isValid={ isValid }>{ legend ? legend : 'Invalid value' }</Legend>
    </InputContainer>
  )
}
