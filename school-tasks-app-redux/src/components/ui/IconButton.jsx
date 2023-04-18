import { IconButtonStyled } from '../../styled/ui/iconButton';

export const IconButton = ({ icon, ...props }) => {
  return (
    <IconButtonStyled { ...props }>
        { icon }
    </IconButtonStyled>
  );
};
