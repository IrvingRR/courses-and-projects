import { Field, FieldLabel, Textarea } from '../styled';

export const TextArea = ({ label, ...props }) => {
  return (
    <Field>
        { label && <FieldLabel>{label}</FieldLabel> }
        <Textarea { ...props } />
    </Field>
  )
}
