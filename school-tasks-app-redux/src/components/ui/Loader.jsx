import { LoaderWrapper, Spinner } from "../../styled";

export const Loader = ({ legend, ...props }) => {
  return (
    <LoaderWrapper { ...props }>
        <Spinner/>
        { legend && <h3>{legend}</h3> }
    </LoaderWrapper>
  )
}
