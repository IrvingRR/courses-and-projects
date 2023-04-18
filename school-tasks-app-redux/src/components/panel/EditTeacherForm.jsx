import { Field, FieldLabel, Form, FormButtons, FormTitle } from '../../styled';
import { Button, DropDown, Input } from '../ui';

export const EditTeacherForm = () => {
  return (
    <Form>
        <FormTitle>Edit teacher</FormTitle>
        <Input type='text' name='name' label='Name:'/>
        <Input type='file' label='Image:'/>
        <Field>
        <FieldLabel>Class:</FieldLabel>
        <DropDown variant='outline' title='Select a class'/>
        </Field>
        <FormButtons>
        <Button>Edit</Button>
        </FormButtons>
    </Form>
  );
}
