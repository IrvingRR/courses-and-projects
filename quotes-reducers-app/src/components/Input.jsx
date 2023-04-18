import { Field, Control, Legend } from '../styled';

export const Input = ({ legend, size, valid, icon, ...props }) => {
  return (
    <Field size={size}>
        { icon && icon }
        <Control icon={icon} { ...props } autoComplete='off' size={size}/>
        <div>
          { legend && <Legend valid={valid}>{ legend }</Legend> }
        </div>
    </Field>
  )
}
