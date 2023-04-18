import { Hero, Heading, Button, Icon, Block } from "react-bulma-components";
import { Link } from 'react-router-dom';
import { BiShoppingBag } from "react-icons/bi";

export const HomePage = () => {
  return (
    <Hero size='fullheight' className="animate__animated animate__fadeIn">
        <Hero.Body display="flex" flexDirection="column" justifyContent="center">
            <Block display="flex" alignItems="center">
                <Icon style={{ width: '50px', height: '50px', fontSize: '40px' }}>
                    <BiShoppingBag/>
                </Icon>
                <Heading weight="bold" color="danger">FakeStore</Heading>
            </Block>
            <Button.Group>
                <Link to='/login'>
                    <Button size='small' color='danger'>Login</Button>
                </Link>
                <Link to='/signin'>
                    <Button size='small' ml='2'>Sign in</Button>
                </Link>
            </Button.Group>
        </Hero.Body>
    </Hero>
  );
};
