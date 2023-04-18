import { FiCodesandbox } from "react-icons/fi";
import { LinkButton } from "../../components/ui";
import { AuthLogo } from "../../styled";
import { AuthTemplate } from "../../templates/AuthTemplate";

export const HomePage = () => {
  return (
    <AuthTemplate>
        <AuthLogo>
            <FiCodesandbox/>
        </AuthLogo>
        <h2>SchoolWorks</h2>
        <div className="group-buttons">
            <LinkButton to='login'>Login</LinkButton>
            <LinkButton to='signup' variant='outline'>Sign up</LinkButton>
        </div>
    </AuthTemplate>
  );
};