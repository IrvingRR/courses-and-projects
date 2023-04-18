import { ButtonElement, LoaderButton } from "../styled";

export const Button = ({ children, loading, ...props }) => {

  return (
    <ButtonElement { ...props }>
        { loading ? <LoaderButton/> : children }
    </ButtonElement>
  )
}
