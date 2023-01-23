import React from "react";
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Newsapidata from './Newsapidata'
export default function App(){

return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Newsapidata category="all"/>}></Route>
<Route path="/Sports" element={<Newsapidata category="Sports"/>}></Route>
<Route path="/Medical" element={<Newsapidata category="Medical"/>}></Route>
<Route path="/Technology" element={<Newsapidata category="Technology"/>}></Route>
<Route path="/Business" element={<Newsapidata category="Business"/>}></Route>
<Route path="/Entertainment" element={<Newsapidata category="Entertainment"/>}></Route>




    </Routes>

    </BrowserRouter>

    </>
)


}