import { Container, Nav, Link } from "./styles"

const Header = () => {

  return (
    <Container>
      <Nav>
        <Link href="#"> Menu </Link>
        <Link href="#"> User Name </Link>
        <Link href="#"> Sales Report </Link>
      </Nav>
    </Container>
  )
}


export default Header