// pages/index.tsx
import React from 'react';
import {Container, Typography, Button, ImageList, ImageListItem} from '@mui/material';
import './page.css'
import {Carousel} from "primereact/carousel";
import sounds from "@/json/soundsInfo.json";
import itemData from "@/json/imagesInfo.json";
import ParticleBackground from "@/components/particles/particles";
const Home: React.FC = () => {


    return (
        <Container className="flex flex-col items-center justify-center min-h-screen content-kt">
            <div className={"particles-tk"}>
                <ParticleBackground shapes="triangles"/>
            </div>
            <div className={"info-other-kt"}>
                <Typography variant="h2" className=" text-center" color={"black"}>
                    Otros trabajos
                </Typography>
                <Typography variant="h5" className={"text-justify"} color={"black"}>
                    Bienvenido a mi portafolio en esta sección encontrarás una selección de diversos trabajos y proyectos como páginas web y trabajos audiovisuales. Explora mis proyectos para saber más sobre lo que hago.
                </Typography>
            </div>
            <div className={"other-container"}>

            </div>
        </Container>
    );
};

export default Home;


