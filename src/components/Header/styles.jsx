import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 5vh;
  /* position: fixed; */
  top: 0;
  flex-flow: row nowrap;
  background-color: #4294db;
  align-items: center;
  padding: 10px;
  justify-content: center;
`

export const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: white
`