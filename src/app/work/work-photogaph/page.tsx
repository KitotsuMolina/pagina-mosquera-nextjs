// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import { Container, Typography, Button } from '@mui/material';
import Navbar from "@/components/navbar/Navbar";
import ParticleBackground from '@/components/particles/particles';


const Home: React.FC = () => {


    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <h1>photograph</h1>
        </Container>
    );
};

export default Home;


