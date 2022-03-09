import "./assets/styles/global.scss";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="assign"><Sidebar /></div>
    </div>
  );
}

