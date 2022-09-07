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
import Facilitati from "./Main/Pages/Home/Components/Facilitati/Facilitati";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact>
                    <Route path="Apartments/:floor" element={<FloorView/>} exact/>
                    <Route path="Concept" element={<Concept/>} exact/>
                    <Route path="Proiectare" element={<Proiectare/>} exact/>
                    <Route path="Galerie" element={<Galerie/>} exact/>
                    <Route path="FigranSRL" element={<FigranSRL/>} exact/>
                    <Route path="Parteneri" element={<Parteneri/>} exact/>
                    <Route path="Facilitati" element={<Facilitati/>} exact/>
                    <Route path="Apartments/:floor/:apartment" element={<ApartmentView/>} exact/>
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
