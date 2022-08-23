import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieClass from './components/MovieClass';
import FunctionCom from './components/FunctionCom';
import Navbars from './components/Navbars';
import ErrorPage from './components/ErrorPage';

function Router() {
  return (
    <BrowserRouter>
<Navbars/>
<Routes>
    <Route path="/" element={<MovieClass/>}/>
    <Route path="/home" element={<MovieClass/>} />
    <Route path="/movies" element={<FunctionCom/>} />
    <Route path="/projects" element={<FunctionCom/>} />
    <Route path="*" element={<ErrorPage/>} />
</Routes>
</BrowserRouter>
  )
}

export default Router