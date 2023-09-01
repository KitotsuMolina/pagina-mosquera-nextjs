// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import {Container, Typography, Button, ImageList, ImageListItem} from '@mui/material';
import './page.css';
import ParticleBackground from "@/components/particles/particles";
import itemData from '@/json/imagesInfo.json';
function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}
const Home: React.FC = () => {


    return (
        <Container className="flex flex-col items-center justify-center min-h-screen content-kt">
            <div className={"particles-tk"}>
                <ParticleBackground shapes="triangles"/>
            </div>
            <div className={"info-photograph-kt"}>
                <p  className="text-center mb-1" style={{color: "black", fontSize:"300%"}}>
                    Trabajos fotográficos
                </p>
                <p className={" "} style={{color: "black", fontSize:"120%"}}>
                    Bienvenido a mi portafolio de trabajos fotográficos. Aquí encontrarás una selección de mis trabajos. Explora mis proyectos para saber más sobre lo que hago.
                </p>
            </div>
            <div className={"phograph-container"}>
                <div className={"div-list-img-kt"}>
                    <ImageList sx={{ width: "100%", height: "100%" }} variant="woven" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList></div>
                <a href="https://www.instagram.com/joanphoto07/" target={"_blank"}>
                    <img className={"img-instagram-kt"} src="https://i.ibb.co/nfMVn1Q/instagram.png" alt="instagram"/>
                </a>
            </div>
        </Container>
    );
};

export default Home;


