import React from 'react'
import { Container, Button } from "@mui/material";

const Getter = () => {
    return (
        <Container sx={{width: "80%", paddingTop: "15vh"}}>
            <h1 className="fw-bold text-center" style={{"fontSize": "2.5em", background: "-webkit-linear-gradient(#ff0000, #ffae42)", "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent"}}>A social network designed for activists</h1>
            <p className="text-center fw-light">We provide a centralized social network 
            service for activists that consists of an explore page for organizations, 
            specific volunteering opportunities, donation/petition pages, 
            and everything else.</p>
            <div className="d-flex justify-content-center">
                <Button color="error" variant="outlined" sx={{height: 50, marginRight: 1}}>Get Started</Button>
                <Button color="warning" variant="outlined" sx={{height: 50}}>Learn More</Button>
            </div>
        </Container>
    )
}

export default Getter
