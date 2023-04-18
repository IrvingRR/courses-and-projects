import { Wrapper, Card, Header, Content, Button } from "./styles";
import ReactDom from 'react-dom';

export const Modal = ({ children, title, isOpen, closeModal }) => {

  return ReactDom.createPortal (
    <Wrapper isOpen={ isOpen }>
        <Card>
            <Header>
                <h3>{ title }</h3>
                <Button onClick={ closeModal }>X</Button>
            </Header>
            <Content>
                {children}
            </Content>
        </Card>
    </Wrapper>,
    document.getElementById('portal')
  )
}