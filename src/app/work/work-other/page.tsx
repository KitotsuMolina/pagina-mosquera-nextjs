// pages/index.tsx
'use client'
import React, {useState} from 'react';
import {Container, Typography, ImageList, ImageListItem, Card, CardContent} from '@mui/material';
import './page.css'
import {Carousel} from "primereact/carousel";
import other from "@/json/otherInfo.json";
import ParticleBackground from "@/components/particles/particles";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Home: React.FC = () => {
    const [visible, setVisible] = useState(false);

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
    const ContentExtra = (props:any) =>  {
        if(props.item.link.status){
            return (
                <a style={{color:"blue"}} href={props.item.link.src}>{props.item.link.src}</a>
            );
        }else if(props.item.video.status){
            const urlHTML = { __html: props.item.video.src };
            return (
                <div className="card flex justify-content-center">
                    <Button label="Ver Video" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Dialog header={props.item.title} visible={visible} modal={false} style={{ width: '67vw', height: '96vh' }} onHide={() => setVisible(false)}>
                        <div style={{width:"100%", height:"100%"}} dangerouslySetInnerHTML={urlHTML}></div>
                    </Dialog>
                </div>
            );
        }
    }
    const cardTemplate = (item:any) => {
        return (
            <Card key={item.index} sx={{ minWidth: 275 }} className={"w-10/12 h-5/6"} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Otros Trabajos
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" className={"mb-2"}>
                        {item.info}
                    </Typography>
                    <ContentExtra item={item}></ContentExtra>
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
                <Carousel className={"carrousel-kt"} value={other} orientation="vertical" numScroll={1} numVisible={1} verticalViewPortHeight="84%!important" responsiveOptions={responsiveOptions} itemTemplate={cardTemplate} style={{ height: "96%" }}/>
            </div>
        </Container>
    );
};

export default Home;


