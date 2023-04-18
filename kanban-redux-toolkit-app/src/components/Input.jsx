import { Field, FieldLabel, FieldContent, FieldInput, FieldLegend } from '../styled';

export const Input = ({ label, legend, isValid, ...props }) => {
  return (
    <Field>
        {label && <FieldLabel>{label}</FieldLabel>}
        <FieldContent>
            <FieldInput { ...props } autoComplete="off"/>
        </FieldContent>
        {legend && <FieldLegend isValid={isValid}>{legend}</FieldLegend>}
    </Field>
  )
}
