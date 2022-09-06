import RouteComponents from "../HeaderComponents/RouteComponents";
import {
    ContainerProiectare,
} from "./Facilitati.style";
import Background from "./Assets/background.jpg";
import Img2 from "../Proiectare/Assets/img2.jpg"
import Img1 from "../Proiectare/Assets/img1.jpg"
import Img3 from "../Proiectare/Assets/img3.jpg"
import Img4 from "../Proiectare/Assets/img4.jpg"
import ContainerLeft from '../Proiectare/Components/ContainerLeft'
import ContainerRight from "../Proiectare/Components/ContainerRight";


const Facilitati = () => {

    const titlelist=['FACILITĂȚILE ZONEI','CONCEPT ARHITECTURAL MODERN','INSTALAȚII EFICIENTE ȘI ESTETICE','INSTALAȚII EFICIENTE ȘI ESTETICE']
    const paragraphList=[['Sistemul structural din beton armat este proiectat în formatul optim de diafragme, plăci și grinzi perimetrale, prin care elementele de rezistență sunt mascate în pereții de compartimentare sau sub plafonul de rigips, evitând apariția colțurilor și facilitând mobilarea.','Fundația este de tipul radier general, cu incintă etanșă din pereți mulați.'],
        ['Proiectarea suprastructurii a avut în vedere generarea unei înălțimi utile în apartamente de 2,75 metri.','Toate bucătăriile au fost proiectate în așa fel încât să beneficieze de iluminare și ventilare naturală.','Logiile au fost proiectate în poziții diferite, în funcție de etaj, oferind astfel o arhitectură modernă a fațadei. Soluția logiilor în locul celei cu balcoane generează un spațiu în aer liber ca o prelungire a casei în orice moment al anului și, totodată, creează un aspect uniform și modern al fațadei.'],
        ['Pentru încălzirea apartamentelor și prepararea apei calde menajere se va folosi o centrală cu combustibil gazos, prevăzută cu sistem de recirculare pentru diminuarea costurilor.','Echipamentul este amplasat în încăperile tehnice, în zona de subsol, proiectat conform celor mai înalte standarde de siguranță la incendiu. Cele mai puternice elemente anti-vibrații și de absorbție a șocurilor au fost luate în considerare pentru a reduce zgomotul.','Contorizarea se va face atât la pornirea circuitelor din centrală, cât și individual pentru fiecare apartament.','Încălzirea în interiorul apartamentelor este proiectată prin sistemul de încălzire în pardoseală, iar în băi vor fi prevăzute, suplimentar față de acest sistem, radiatoare de tip port-prosop.','Apartamentele sunt prevăzute cu sistem de aer condiționat tip VRV, cu unitățile exterioare așezate centralizat, fără să afecteze estetica fațadei.','Instalația sanitară se alimentează din rețeaua publică conform aviz ApaNova. Ansamblul va beneficia de grupuri de pompare pentru asigurarea presiunii și rezervei de apă.'],
        ['Termosistem cu densitate mare, finisaj mixt cu tencuială de exterior și placare cu material compozit/piatră naturală.','Tâmplărie exterioară cu rupere de punte termică, pentru coeficient transfer termic optim, cu deschideri oscilo-batante și/sau glisante și/sau pereți cortină.','Finisaje logii, curți și terase cu deck/gresie antiderapantă/granit.','Parasolar în zona logiei, pentru a crea intimitate sau protecție față de soarele excesiv care poate exista.','Parapeți de protecție logii, din sticlă.','Sistem iluminat exterior al fațadelor, tip LED.']
    ]

    return (
        <RouteComponents background = {Background} title = "Facilități" >
        <ContainerProiectare>
            <ContainerLeft title={titlelist[0]} paragraf = {paragraphList[1]} img = {Img2}/>
            <ContainerRight title={titlelist[1]} paragraf = {paragraphList[0]} img = {Img1}/>
            <ContainerLeft title={titlelist[2]} paragraf = {paragraphList[3]} img = {Img4}/>
            <ContainerRight title={titlelist[3]} paragraf = {paragraphList[2]} img = {Img3}/>



        </ContainerProiectare>
        </RouteComponents>

    )
}
export default Facilitati