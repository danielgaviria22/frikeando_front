import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  font-family: 'Share';
  font-weight: bold;
  font-size: 1.125em;
  width: 100%;
  & ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    & li {
      min-height: 32px;
      height: 50px;
      width: 100%;
      padding: 0 10px;
      border-bottom: 1px solid ${props => props.color}
    }
  }
  & a {
    text-decoration: none;
    color: ${props => props.color};
    min-height: 32px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    &:hover {
      color: ${props => props.secondColor};
    }
  }
  @media(min-width: 960px) {
    max-width: 450px;
    & ul {
      flex-direction: row;
      width: ;
      & li {
        display: flex;
        justify-content: center;
        height: 32px;
        border-bottom: none;
      }
      & li:first-child {
        border-right: 2px solid ${props => props.color};
      }
      & li:last-child {
        border-left: 2px solid ${props => props.color};
      }
    }
    & a {
      height: 32px;
      line-height: 32px;
      width: 100%;
      text-align: center;
    }
  }
`;