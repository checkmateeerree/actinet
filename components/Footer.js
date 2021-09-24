import React from "react";
import {Container, Button} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Container className="border-top fixed-bottom">
       <footer className="my-4">
         <div class="d-flex justify-content-between">
          <p className="pt-3">Copyright © 2021 actinet.</p>
          <div className="pt-2">
            <Button>
              <InstagramIcon />
            </Button>
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <TwitterIcon />
            </Button>
          </div>
         </div>
          
       </footer>
    </Container>
   );
};

export default Footer;
