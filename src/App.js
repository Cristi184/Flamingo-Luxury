import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Main/Pages/Home/Home";
import FloorView from "./Main/Pages/Home/Components/Apartments/Compoents/FloorView";
import Concept from "./Main/Pages/Home/Components/Concept/Concept";
import Proiectare from "./Main/Pages/Home/Components/Proiectare/Proiectare"
import ApartmentView from "./Main/Pages/Home/Components/Apartments/Compoents/ApartmentView";
import 'antd/dist/antd.css';
import BadURL from "./Main/Pages/Home/Components/BadURL/BadURL";
import Galerie from "./Main/Pages/Home/Components/Galerie/Galerie";
import FigranSRL from "./Main/Pages/Home/Components/FigranSRL/FigranSRL";
import Parteneri from "./Main/Pages/Home/Components/Parteneri/Parteneri";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="Apartments/:floor" element={<FloorView/>}/>
                    <Route path="Concept" element={<Concept/>}/>
                    <Route path="Proiectare" element={<Proiectare/>}/>
                    <Route path="Galerie" element={<Galerie/>}/>
                    <Route path="FigranSRL" element={<FigranSRL/>}/>
                    <Route path="Parteneri" element={<Parteneri/>}/>
                    <Route path="Apartments/:floor/:apartment" element={<ApartmentView/>}/>
                </Route>
                <Route
                    path="*"
                    element={<BadURL/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
