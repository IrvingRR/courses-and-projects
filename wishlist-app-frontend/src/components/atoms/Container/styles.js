import styled from 'styled-components';

export const ContainerStyled = styled.div`
    width: ${ props => props.width ? props.width : '100%' };
    min-width: ${ props => props.minWidth ? props.minWidth : '100%' };
    height: ${ props => props.height ? props.height : 'auto' };
    min-height: ${ props => props.minHeight ? props.minHeight : 'auto' };
    padding: ${ props => props.padding ? props.padding : '20px 60px' };
    display: ${ props => props.display ? props.display : 'block' };
    flex-direction: ${ props => props.flexDirection ? props.flexDirection : 'row' };
    justify-content: ${ props => props.justifyContent ? props.justifyContent : 'initial' };
    align-items: ${ props => props.alignItems ? props.alignItems : 'initial' };
    gap: ${ props => props.gap ? props.gap : '20px' };
    flex-wrap: ${ props => props.wrap ? props.wrap : 'initial' };
`;