import React from "react";
import "./App.scss";
import Home from "./pages/home/Home.component";
import Header from "./components/layouts/header/Header.component";
import Footer from "./components/layouts/footer/Footer.component";
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
