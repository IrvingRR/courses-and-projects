import { Label, SubInputsElement } from '../styled';

export const SubInputs = () => {
  return (
    <SubInputsElement>
        <Label>Columns</Label>
        {
            inputs.map((input, index) => <SubInput key={index} type='text' placeholder='New column' name='newInput'/> )
        }
        <Button variant='secondary' rounded>Add new column</Button>
    </SubInputsElement>
  )
}
