import { TiPencil, TiTrash } from "react-icons/ti";
import { ListItem, ColorTag } from './styles';
import { Box, ButtonIcon } from '../atoms';

export const CategoryItem = ({ data, openModal, setCategoryData }) => {

  const handleShowForm = () => {
    setCategoryData(data);
    openModal();
  }

  return (
    <ListItem>
        <Box display='flex' alignItems='center' gap='30px'>
            <h3>{ data.category }</h3>
            <p>{ data.description }</p>
        </Box>
        <Box display='flex' alignItems='baseline' gap='10px'>
            <h3>Color:</h3>
            <ColorTag color={ data.color }/>
        </Box>
        <Box>
            <ButtonIcon icon={ <TiPencil onClick={ handleShowForm }/> }/>
            <ButtonIcon icon={ <TiTrash/> }/>
        </Box>
    </ListItem>
  )
}
