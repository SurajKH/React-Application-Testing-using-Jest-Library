import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';

class DemoCarousel extends Component {
    render() {
        return (
            <React.Fragment>
            <Typography variant="h4">Jest (The React Testing Library)</Typography>
             <Carousel className='slides'>
                {/* <div>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowIWaIGbu702H4LzZyUgIw3ghwKGrj1pgvw&usqp=CAU"} alt='remote-render' 
                  />
                </div> */}
                <div>
                <img src={"https://www.freecodecamp.org/news/content/images/2020/03/cover-3.png"} alt='remote-render' />
                    {/* <p className="legend">ReactJS</p> */}
                </div>
                <div>
                <img src={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1264014/retina_1708x683_image_0__16_-30ce3c8cbe609a0e81d05a2063a0d229.png"} alt='remote-render' />
                    {/* <p className="legend">ReactJS</p> */}
                </div>
            </Carousel>
            </React.Fragment>
            
        );
    }
};

export default DemoCarousel;