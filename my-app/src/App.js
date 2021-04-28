import NavbarFront from './Components/navbar';
import HeaderFront from './Components/header';
import CardsFront from './Components/cards';
import FooterFront from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container} from "react-bootstrap";

function App() {
  return (
    <div>
            
                <NavbarFront/>

            <Container>
                    <HeaderFront />
            </Container>
                
            <Container className="">
                            <Row>
                                <Col>
                                    <CardsFront 
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" 
                                    />
                                </Col>
                                <Col>
                                    <CardsFront 
                                    text="ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" 
                                    />
                                </Col>
                                <Col>
                                    <CardsFront 
                                    text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
                                    />
                                </Col>
                                <Col>
                                    <CardsFront 
                                    text="aliquip ex ea commodo consequat. Duis aute Edent, sunt in culpa qui officia deserunt mollit anim id est laborum Duis aute irure dolor in reprehenderit in voluptate" 
                                    />
                                </Col>
                            </Row>
            </Container>

            
                    <FooterFront />
    </div>
  );
}

export default App;
