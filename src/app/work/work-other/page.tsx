// pages/index.tsx
'use client'
import React from 'react';
import {Container, Typography, Button, ImageList, ImageListItem, Card, CardContent} from '@mui/material';
import './page.css'
import {Carousel} from "primereact/carousel";
import sounds from "@/json/soundsInfo.json";
import itemData from "@/json/imagesInfo.json";
import ParticleBackground from "@/components/particles/particles";

const Home: React.FC = () => {

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const cardTemplate = (item:any) => {
        const urlHTML = { __html: item.url };
        return (
            <Card key={item.index} sx={{ minWidth: 275 }} className={"w-10/12 h-5/6"} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Trabajo Sonoro
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" className={"mb-2"}>
                        {item.info}
                    </Typography>
                    <div dangerouslySetInnerHTML={urlHTML}></div>
                </CardContent>
            </Card>

        );
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen content-kt">
            <div className={"particles-tk"}>
                <ParticleBackground shapes="triangles"/>
            </div>
            <div className={"info-other-kt"}>
                <p className="text-center text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl mb-1" style={{ color: "black" }}>
                    Otros trabajos
                </p>
                <p className=" text-2xl md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl"  style={{color:"black"}}>
                    Bienvenido a mi portafolio en esta sección encontrarás una selección de diversos trabajos y proyectos como páginas web y trabajos audiovisuales. Explora mis proyectos para saber más sobre lo que hago.
                </p>
            </div>
            <div className={"other-container"}>
                <Carousel className={"carrousel-kt"} value={sounds} orientation="vertical" numScroll={1} numVisible={1} verticalViewPortHeight="360px" responsiveOptions={responsiveOptions} itemTemplate={cardTemplate} />
            </div>
        </Container>
    );
};

export default Home;


