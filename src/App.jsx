/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './assets/Services/Services';
import PageNotFound from './assets/PageNotFound/PageNotFound';
import Header from './assets/Header/Header';
import Footer from './assets/Footer/Footer';
import AuthMiddleware from "./assets/AuthMiddleware/AuthMiddleware";
import BookService from "./assets/BookService/BookService";
import AuthProvider from "./assets/Context/AuthProvider";
import Register from "./assets/Register/Register";
import MyOrders from "./assets/MyOrders/MyOrders";
import AboutUs from "./assets/AboutUs/AboutUs";
import ManageAllOrders from "./assets/ManageAllOrders/ManageAllOrders";
import AddNewService from "./assets/AddNewService/AddNewService";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <div className='w-full fixed left-0 top-0 z-10'>
            <Header />
          </div>
          <div style={{ marginBottom: "65px" }}></div>

          <Routes>
            <Route path='/' element={<Services />} />
            <Route path='/services' element={<Services />} />
            <Route path="/register" element={<Register />}/>

            <Route element={<AuthMiddleware />} >
              <Route path='/book-service/:serviceID' element={<BookService />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/manage-all-orders" element={<ManageAllOrders />} />
              <Route path="/add-new-service" element={<AddNewService />} />
            </Route>

            <Route path="/about-us" element={<AboutUs />}/>
            <Route path='*' element={<PageNotFound />} />
          </Routes>

          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
