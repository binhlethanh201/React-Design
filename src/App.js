import {Container} from "react-bootstrap";
import Header from "./template/header";
import Menu from "./template/menu";
import Main from "./template/main";
import Footer from "./template/footer";
import Banner from "./template/banner";
import Detail from "./template/detail";

function App() {
  return (
    <Container fluid>
      <Header/>
      <Menu/>
      <Banner/>
      <Main/>
      {/* <Detail/> */}
      <Footer/>      
    </Container>
  );
}

export default App;
