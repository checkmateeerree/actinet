import React from 'react'
import { Container, Button } from "@mui/material";
import Link from 'next/link'

const Getter = () => {
    return (
        <Container className="mw-100" sx={{width: "600px", paddingY: "15vh", overflow: "hidden"}}>
            <h1 className="fw-bold text-center" style={{"fontSize": "2.5em", "overflow": "hidden", background: "-webkit-linear-gradient(#ff0000, #ffae42)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent"}}>A social network designed for activists</h1>
            <p className="text-center fw-light">We provide a centralized social network 
            service for activists that consists of an explore page for organizations, 
            specific volunteering opportunities, donation/petition pages, 
            and everything else.</p>
            <div className="d-flex justify-content-center">
                <Link href="/register">
                    <Button color="error" variant="outlined" sx={{height: 50, marginRight: 1}}>Get Started</Button>
                </Link>
                <Link href="/about">
                    <Button color="warning" variant="outlined" sx={{height: 50}}>Learn More</Button>
                </Link>
            </div>
        </Container>
    )
}

export default Getter
