import { Field, FieldContent, FieldInput, FieldLabel, FieldLegend } from "../../styled/ui/form";

export const Input = ({ label, legend, isValid, ...props }) => {
  return (
    <Field>
        { label && <FieldLabel>{ label }</FieldLabel> }
        <FieldContent>
            <FieldInput { ...props } isValid={ isValid } autoComplete="off"/>
        </FieldContent>
        { legend && <FieldLegend isValid={ isValid }>{ legend }</FieldLegend> }
    </Field>
  );
};