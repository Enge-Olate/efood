import Footer from "../../Footer";
import Header from "../../Header";
import logo from "../../../assets/logo.png";
import ListBistro from "../../ListBistro";
export default function Home() {
  return (
    <>
      <Header
        logo={logo}
        variant="home"
        title="Viva experiências gastronômicas no conforto da sua casa"
      />
      <ListBistro />
      <Footer />
    </>
  );
}
