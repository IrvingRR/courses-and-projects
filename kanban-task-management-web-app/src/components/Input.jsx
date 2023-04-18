import { Field, InputControl, Label, Legend } from '../styled';

export const Input = ({ label, legend, isValid, ...props }) => {
  return (
    <Field>
        { label && <Label>{label}</Label> }
        <InputControl {...props} autoComplete='off'/>
        { legend && <Legend isValid={isValid}>{legend}</Legend> }
    </Field>
  )
}
