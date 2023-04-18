import { NavbarElement, Logo, Elements, ElementsItem, Image, IconButton } from "./Navbar.styles";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import { Button, Icon } from "react-bulma-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { getUserById } from "../../api/users";
import { Loader } from "./Loader";
import { ShoppingCartContext } from "../../contexts";

const avatarURL = 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg';

export const Navbar = ({ showCart }) => {

    const { logout, authState } = useContext(AuthContext);
    const { shoppingCartState } = useContext(ShoppingCartContext);

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUserData = async () => {
            setLoading(true);

            const response = await getUserById(authState.user.sub);
            setUser(response);

            setLoading(false);
        };

        getUserData();
    }, []);

    const handleLogout = () => {
        toast("See you soon 👋");

        setTimeout(() => {
            logout();
        }, 2000);
    };

  return (
    <NavbarElement>
        <Loader loading={loading.toString()}/>
        <Logo to='/'>
            <Icon color="danger">
                <BiShoppingBag/>
            </Icon>
            FakeStore
        </Logo>
        <Elements>
            <ElementsItem>
                <IconButton>
                    <span>3</span>
                    <BiHeart/>
                </IconButton>
            </ElementsItem>

            <ElementsItem>
                <IconButton onClick={showCart}>
                    { shoppingCartState.products.length > 0 && <span>{shoppingCartState.products.length}</span> }
                    <BiShoppingBag/>
                </IconButton>
            </ElementsItem>

            <ElementsItem>
                <Image src={avatarURL} alt={`${user.name?.firstname} ${user.name?.lastname}`}/>
                <p>{`${user.name?.firstname} ${user.name?.lastname}`}</p>
            </ElementsItem>
            
            <ElementsItem>
                <Button size='small' onClick={handleLogout}>
                    Exit
                </Button>
            </ElementsItem>
        </Elements>

    </NavbarElement>
  )
}
