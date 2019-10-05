import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.scss"
import Home from "./pages/home/Home.component"
import Shop from "./pages/shop/Shop.component"
import Header from "./components/layouts/header/Header.component"
import Footer from "./components/layouts/footer/Footer.component"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/shop' component={Shop}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
