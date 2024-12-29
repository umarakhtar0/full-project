import React from 'react'
import Login from "./login";
import Register from "./register";
import { Routes, Route, Navigate } from "react-router-dom";
export default function index() {
  return (
    <Routes>
    <Route path="Login" element={<Login />} />
    <Route path="register" element={<Register />} />
  
  </Routes>
  )
}
