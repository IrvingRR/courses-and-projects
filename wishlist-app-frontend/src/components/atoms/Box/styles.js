import styled from 'styled-components';

export const BoxStyled = styled.div`
    width: ${ props => props.width ? props.width : 'auto' };
    height: ${ props => props.height ? props.height : 'auto' };
    padding: ${ props => props.padding ? props.padding : '10px 20px' };
    display: ${ props => props.display ? props.display : 'block' };
    flex-direction: ${ props => props.flexDirection ? props.flexDirection : 'row' };
    justify-content: ${ props => props.justifyContent ? props.justifyContent : 'initial' };
    align-items: ${ props => props.alignItems ? props.alignItems : 'initial' };
    gap: ${ props => props.gap ? props.gap : '0' };
    flex-wrap: ${ props => props.wrap ? props.wrap : 'initial' };
`;