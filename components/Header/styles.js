import styled from 'styled-components';
import { Color } from '../../config/styles';

export const HeaderContainer = styled.header`
  height: 64px;
  background-color: ${Color.$Black};
  width: 100vw;
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
  }
`;

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