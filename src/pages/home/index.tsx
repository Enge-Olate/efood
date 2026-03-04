import Footer from "../../components/Footer";
import Header from "../../components/Header";
import logo from "../../assets/logo.png";
import ListBistro from "../../components/ListBistro";
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
