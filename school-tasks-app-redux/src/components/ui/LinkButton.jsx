import { LinkButtonStyled } from '../../styled/ui/linkButton';

export const LinkButton = ({ children, ...props }) => {
  return (
    <LinkButtonStyled { ...props }>
        { children }
    </LinkButtonStyled>
  );
};