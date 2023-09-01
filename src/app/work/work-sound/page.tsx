// pages/index.tsx
'use client'
import React from 'react';
import Head from 'next/head';
import {Container, Typography, Button, CardActions, CardContent, Card, Box} from '@mui/material';
import Navbar from "@/components/navbar/Navbar";
import ParticleBackground from '@/components/particles/particles';
import './page.css';
import {Carousel} from "primereact/carousel";
import sounds from '@/json/soundsInfo.json'; // Importa el JSON

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
            <div className={"info-sound-kt"}>
                <Typography variant="h2" className="mb-4 text-center" color={"black"}>
                    Trabajos sonoros
                </Typography>
                <Typography variant="h5" className={"text-justify"} color={"black"}>
                    Bienvenido a mi portafolio de trabajos sonoros. Aquí encontrarás una selección de mis trabajos. Explora mis proyectos para saber más sobre lo que hago.
                </Typography>
            </div>
            <div className={"sound-kt"}>
                <Carousel className={"carrousel-kt"} value={sounds} orientation="vertical" numScroll={1} numVisible={1} verticalViewPortHeight="360px" responsiveOptions={responsiveOptions} itemTemplate={cardTemplate} />
            </div>
        </Container>
    );
};

export default Home;


