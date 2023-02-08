import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Page />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
