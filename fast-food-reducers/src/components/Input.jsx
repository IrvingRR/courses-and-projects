import { Wrapper, Control, Legend } from '../style-components/input.styles';

export const Input = ({ isValid, legend, ...props }) => {
  return (
    <Wrapper>
        <Control { ...props } autoComplete='off'/>
        <Legend isValid={ isValid }>{ legend && legend }</Legend>
    </Wrapper>
  )
}
