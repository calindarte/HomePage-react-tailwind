import FooterHome from "./assets/components/home/FooterHome";
import HeaderHome from "./assets/components/home/HeaderHome";
import MainHome from "./assets/components/home/MainHome";
import NavBar from "./assets/components/icons/navBar/NavBar";



const App = () => {
  return (
    <div>
      <NavBar />
      <HeaderHome />
      <MainHome />
      <FooterHome/>
    </div>
  );
};

export default App;
