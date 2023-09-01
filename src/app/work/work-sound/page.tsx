// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { Container, Typography, Button } from '@mui/material';
import Navbar from "@/components/navbar/Navbar";
import ParticleBackground from '@/components/particles/particles';


const Home: React.FC = () => {


    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <div className={"particles-tk"}>
                <ParticleBackground shapes="triangles"/>
            </div>
            <h1>sound</h1>
        </Container>
    );
};

export default Home;


