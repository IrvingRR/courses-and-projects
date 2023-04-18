import { Form, Label, TextArea } from '../styled';
import { Input, Button } from './';

export const FormAddTask = () => {
  return (
    <Form>
      <h2>Add task</h2>
      <Input type='text' name='title' label='Title' placeholder='New title' legend='Invalid title'/>
      <Label>Description</Label>
      <TextArea name='description' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sit.'/>
      <Button rounded>Add</Button>
    </Form>
  )
}
