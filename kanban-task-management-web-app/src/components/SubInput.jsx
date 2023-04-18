import { FiX } from "react-icons/fi";
import { Field, InputControl, FieldContent, Legend } from '../styled';
import { IconButton } from './IconButton';

export const SubInput = ({ legend, ...props }) => {
  return (
    <Field>
        <FieldContent>
            <InputControl {...props} autoComplete='off'/>
            <IconButton variant='transparent' icon={<FiX/>}/>
        </FieldContent>
        { legend && <Legend>{legend}</Legend> }
    </Field>
  )
}
