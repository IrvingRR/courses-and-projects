import { Wrapper, Circle } from "./styles";
import ReactDom from 'react-dom';

export const Loader = ({ isLoading }) => {
  return ReactDom.createPortal(
    <Wrapper isLoading={ isLoading }>
        <h2>Loa<span>ding</span></h2>
        <Circle/>
    </Wrapper>,
    document.getElementById('portal')
  )
}
