import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../navbar/Header";
import Footer from "../navbar/footer";
import Hero from './hero';
import Home from './home'


// List of paths where Header and Footer should be displayed
const pathsWithHeaderFooter = ["/", "/customer-reviews", "/profile-page"];

export default function Index() {
  const location = useLocation();
  //const { isLoggedIn } = useFirebase(); // Access the isLoggedIn state from Firebase context
  const showHeaderAndFooter = pathsWithHeaderFooter.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <main>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />

          
        </Routes>
      </main>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

