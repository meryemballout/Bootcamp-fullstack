import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShopScreen from "./screens/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

