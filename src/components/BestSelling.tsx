import { Container, Typography, Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const BestSelling = () => {
  const products = [
    {
      image: '/src/assets/Images/burger.jpg',
      title: 'Chicken Burger',
      category: 'Burger'
    },
    {
      image: '/src/assets/Images/chikkenpizza.jpg',
      title: 'Chicken Pizza',
      category: 'Pizza'
    },
    {
      image: '/src/assets/Images/frenchfries.jpg',
      title: 'French Fries',
      category: 'Sides'
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' }
        }}>
          Best <span style={{ color: '#ff6b6b' }}>Delivered</span> Categories
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          maxWidth: 500,
          mx: 'auto',
          fontSize: '0.95rem'
        }}>
          Here Are Some Of Our Best Distributed Categories. If You Want You Can Order 
          From Here.
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 6 }} justifyContent={'center'}>
        {products.map((product, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestSelling;