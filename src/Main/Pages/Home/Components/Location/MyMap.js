import React, {Component} from 'react';
import {MapContainer as LeafletMap, TileLayer, Marker, Popup} from "react-leaflet"
import L from 'leaflet'
import {Grid} from "@mui/material";
import {ContainerMyMap, HeaderTextMyMap, ParagraphText, SpanText, SubHeaderText, TextContainer} from "./MyMap.style";
import './MyMap.css'

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: require('./image/marker.png'),
        iconSize: _iconSize
    })
}



const Location = () => {
    const position = [45.43879810969377, 28.034685905884803]
    return (<ContainerMyMap >
            <HeaderTextMyMap>VREI SĂ DESCOPERI PROIECTUL FLAMINGO?
            </HeaderTextMyMap>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TextContainer>
                        <ParagraphText>Contactează-ne la adresa de email/număr de telefon de mai jos pentru a afla mai multe despre noi.</ParagraphText>
                        <ParagraphText>Adresa: <SpanText>Strada Crizantemelor nr.5</SpanText></ParagraphText>
                        <ParagraphText>Email: <SpanText>email@email.com</SpanText></ParagraphText>
                        <ParagraphText>Număr de telefon: <SpanText>075765649</SpanText></ParagraphText>
                    </TextContainer>
                </Grid>
                <Grid item xs={12} md={8} style = {{height: 500}}>
                    <SubHeaderText>
                        LOCAȚIA PROIECTULUI</SubHeaderText>
                    <LeafletMap className="map"
                                center={position}
                                zoom={16}
                                style={{  width: "100%", zIndex:"1"
                                }}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href = "http=//osm.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={GetIcon(50)}>
                            <Popup>
                                Bloc Flamingo
                            </Popup>
                        </Marker>

                    </LeafletMap>
                </Grid>
            </Grid>



        </ContainerMyMap>
    )
}
export default Location