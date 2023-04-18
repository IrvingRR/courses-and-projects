import { LinkButton } from "../../components";
import styled from "styled-components";

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Home = () => {
  return (
    <>
      <h2 className='animate__animated animate__fadeInDown'>Home</h2>
      <p className='animate__animated animate__fadeInDown animate__delay-1s home-description'>Control all your appointments, anywhen and anywhere</p>
      <Links className='animate__animated animate__fadeInDown animate__delay-2s'>
        <LinkButton to='/login'>Login</LinkButton>
        <LinkButton variant='secondary' to='/signin'>Sign in</LinkButton>
      </Links>
    </>
  )
}
