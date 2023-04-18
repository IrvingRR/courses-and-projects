import { Form, Icon } from 'react-bulma-components';

export const Input = ({ isValid, legend, icon, alignIcon, sizeIcon, mb, ...props }) => {
  return (
    <Form.Field mb={mb || '0'}>
        <Form.Control>
          { icon &&
            <Icon align={alignIcon} size={sizeIcon}>
              { icon }
            </Icon>
          }
            <Form.Input { ...props } autoComplete='off'/>
        </Form.Control>
        {
            (legend && isValid === false) && <Form.Help color='danger' className="animate__animated animate__fadeIn">{ legend }</Form.Help>
        }
    </Form.Field>
  )
}
