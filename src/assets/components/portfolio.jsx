import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './portfolio.css'

export default function portfolio() {
  return (
    <div className='portfolio-container'>
        <div className='portfolio-top'>
        <p style={{ textAlign: 'left' }}>Portfolio</p>
        <hr style={{ border: 'none', height: '2px', backgroundColor: 'orange', margin: '0px 0', width: '100%' }} />
        <h1 style={{paddingBottom: '60px'}}>CHECK OUR PORTFOLIO</h1>
        </div>
    <Box sx={{ width: '60vw', height: 'auto', overflowY: 'scroll' }}>
    

      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://bootstrapmade.com/content/demo/Gp/assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
    title: 'Bed',
  },
  {
    img: 'https://bootstrapmade.com/content/demo/Gp/assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
    title: 'Books',
  },
  {
    img: 'https://bootstrapmade.com/content/demo/Gp/assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://bootstrapmade.com/content/demo/Gp/assets/img/masonry-portfolio/masonry-portfolio-5.jpg',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
