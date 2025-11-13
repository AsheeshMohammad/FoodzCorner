import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const banners = [
    {
      title: 'Premium Fast Food Delivered in 30 Minutes',
      description: 'Experience the finest quality fast food with our express delivery service. Fresh ingredients, authentic flavors, and guaranteed satisfaction with every order.',
      image: '/images/burger.jpg'
    },
    {
      title: 'Artisan Pizzas Made Fresh Daily',
      description: 'Hand-tossed pizzas with premium toppings and wood-fired perfection. Made with imported cheese and fresh vegetables for an authentic Italian experience.',
      image: '/images/chikkenpizza.jpg'
    },
    {
      title: 'Gourmet Sides & Crispy Delights',
      description: 'Perfectly seasoned fries and premium sides made with the finest potatoes. Crispy on the outside, fluffy on the inside - every single time.',
      image: '/images/frenchfries.jpg'
    },
    {
      title: 'Artisan Desserts & Sweet Treats',
      description: 'Indulge in our handcrafted desserts made by expert pastry chefs. Premium ingredients and traditional recipes for the perfect sweet ending.',
      image: '/images/pastry.jpg'
    },
    {
      title: 'Fresh Beverages & Healthy Options',
      description: 'Refreshing drinks made with natural ingredients. From fresh juices to specialty beverages, we offer healthy options to complement your meal.',
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