import { TiPower } from "react-icons/ti";
import { HeaderStyled, Image } from "./styles";
import { Box, ButtonIcon } from "../atoms";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from '../../contexts/SessionContext'; 
import { toast } from "react-hot-toast";

export const HeaderPanel = () => {

  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);

  const { user } = !!session && session;
  
  const handleSignOut = () => {
    
    toast.success(`Good bye👋`);

    setTimeout(() => {
      setSession({});
      localStorage.removeItem('wishlist-auth');
      navigate('/');
    }, 2000)
  }

  return (
    <HeaderStyled>
      <Box display='flex' alignItems='center' gap='10px' padding='0'>
        <Image src={ user.image } alt={ user.name }/>
        <Link to='/profile'>{ user.name }</Link>
        <ButtonIcon onClick={ handleSignOut } icon={ <TiPower/> }/>
      </Box>
    </HeaderStyled>
  );
}
