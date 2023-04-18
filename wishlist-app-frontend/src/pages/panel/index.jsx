import { TiClipboard, TiThList } from "react-icons/ti";
import { Box } from "../../components/atoms";
import { CardLink } from "../../components/CardLink";
import { Container } from "./styles";

export const Panel = () => {
  return (
    <Container>
        <h2>What do you want to do?</h2>
        <p>Choose an option</p>

        <Box display='flex' alignItems='center' gap='20px'>
          <CardLink to='wishlists'>
            <TiClipboard/>
            <h3>My Wishlists</h3>
            <p>Manage your wishlist.</p>
          </CardLink>

          <CardLink to='categories'>
            <TiThList/>
            <h3>Categories</h3>
            <p>Manage your categories.</p>
          </CardLink>
        </Box>
    </Container>
  )
}
