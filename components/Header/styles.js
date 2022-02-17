import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import { Color } from '../../config/styles';

export const HeaderContainer = styled.header`
  height: 64px;
  background-color: ${Color.$Black};
  width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  & .nav-bar {
    max-width: 960px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }
  & h1 {
    margin: 0 10px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  & .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
  }
  & .search-button {
    border-right: 2px solid ${Color.$White};
    padding-right: 12px;
  }
  & .cart-button {
    padding-left: 12px;
  }
`;

export const StyledBadge =  styled(Badge)`
  & span {
    right: 7px;
    top: 27px;
    width: 20px;
    border: 2px solid ${Color.$Black};
    background-color: ${Color.$FrikeandoDarkRed};
    color: ${Color.$White};
  }
`

export const SearchContainer = styled.div`
  height: 64px;
  background-color: ${Color.$LighterGray};
  width: 100vw;
  position: fixed;
  z-index: 1;
  & .bar {
    max-width: 960px;
    width: 100%;
    height: 100%;
    display: flex;
  }
`;