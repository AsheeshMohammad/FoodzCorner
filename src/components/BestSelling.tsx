import { Container, Typography, Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const BestSelling = () => {
  const products = [
    {
      image: '/images/burger.jpg',
      title: 'Chicken Burger',
      category: 'Burger'
    },
    {
      image: '/images/chikkenpizza.jpg',
      title: 'Chicken Pizza',
      category: 'Pizza'
    },
    {
      image: '/images/frenchfries.jpg',
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
          Customer <span style={{ color: '#ff6b6b' }}>Favorites</span>
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          maxWidth: 500,
          mx: 'auto',
          fontSize: '0.95rem'
        }}>
          Discover our most popular items loved by thousands of customers. 
          Premium quality ingredients and authentic flavors in every bite.
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