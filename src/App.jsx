import Screens from "./pages/Screens.jsx";
import SideBar from "./pages/SideBar.jsx";
import Layout from "./components/Layout.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Layout />
      <Screens />
    </>
  );
}
