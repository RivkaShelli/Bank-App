import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddOperation from './components/AddOperation';
import OperationsSearch from './components/OperationsSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Bank Account Operations</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">My Operations History</Nav.Link>
            <Nav.Link href="addOp">Performing account operations </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>

        <Container>
          <Routes>
            <Route path="/" element={<OperationsSearch />} />
            <Route path="addOp" element={<AddOperation />} />
          </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
