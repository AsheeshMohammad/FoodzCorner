import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const banners = [
    {
      title: 'Your Go-To Spot for Quick and Tasty Eats!',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking.',
      image: '/images/burger.jpg'
    },
    {
      title: 'Fresh Pizza Delivered Hot!',
      description: 'Experience the authentic taste of wood-fired pizza made with fresh ingredients and delivered hot to your door.',
      image: '/images/chikkenpizza.jpg'
    },
    {
      title: 'Crispy Fries & More!',
      description: 'Golden crispy fries and delicious sides that perfectly complement your favorite meals.',
      image: '/images/frenchfries.jpg'
    },
    {
      title: 'Sweet Treats & Desserts!',
      description: 'End your meal on a sweet note with our selection of delicious desserts and beverages.',
      image: '/images/pastry.jpg'
    },
    {
      title: 'Refreshing Cool Drinks!',
      description: 'Beat the heat with our refreshing collection of cool drinks and beverages.',
      image: '/images/cooldrtinks.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <Box sx={{ 
      position: 'relative',
      height: '70vh',
      overflow: 'hidden',
      mt: '64px'
    }}>
      {banners.map((banner, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            transform: `translateX(${currentSlide === index ? '0%' : currentSlide > index ? '-100%' : '100%'})`,
            transition: 'transform 0.8s ease-in-out',
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ maxWidth: { xs: '90%', md: 600 }, color: 'white', px: { xs: 2, md: 0 } }}>
              <Typography variant="h2" sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}>
                {banner.title}
              </Typography>
              <Typography variant="h6" sx={{ 
                mb: 4,
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>
                {banner.description}
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: '#ffc107', 
                  color: '#000',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': { bgcolor: '#ffb300' }
                }}
              >
                Order Now
              </Button>
            </Box>
          </Container>
        </Box>
      ))}
      
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          left: { xs: 10, md: 30 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          width: 40,
          height: 40,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowBackIos sx={{ fontSize: '1rem' }} />
      </IconButton>
      
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          right: { xs: 10, md: 30 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 3,
          width: 40,
          height: 40,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
        }}
      >
        <ArrowForwardIos sx={{ fontSize: '1rem' }} />
      </IconButton>
      
      <Box sx={{
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        zIndex: 2
      }}>
        {banners.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentSlide === index ? '#ffc107' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;