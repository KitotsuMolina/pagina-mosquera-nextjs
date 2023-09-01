// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { Container, Typography, Button } from '@mui/material';
import Navbar from "@/components/navbar/Navbar";
import './page.css';
import ParticleBackground from '@/components/particles/particles';


const Home: React.FC = () => {


    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <div className={"particles-tk"}>
                <ParticleBackground shapes="links"/>
            </div>

            <Head>
                <title>Portafolio de Sebastián Mosquera</title>
            </Head>
            <Typography variant="h2" className="mb-4" color={"white"}>
                Portafolio de Sebastián Mosquera
            </Typography>
            <Typography variant="h5" className={"text-center"} color={"white"}>
                Se bienvenido a mi portafolio, aquí podrás encontrar trabajos que he realizado en mi proceso como estudiante de Comunicación Social y Periodismo.
            </Typography>
            <div className="div-fondo-kt">
                <img src={"https://i.ibb.co/bbwNNn9/image00001.jpg"} alt={"imagen"} className="mt-1 mb-1 ml-1 mr-1 imagen-kt-1" />
                <img src={"https://i.ibb.co/vsSgq0q/IMG-9215-CR2.jpg"} alt={"imagen"} className="mt-1 mb-1 ml-1 mr-1 imagen-kt-2" />
            </div>
        </Container>
    );
};

export default Home;


