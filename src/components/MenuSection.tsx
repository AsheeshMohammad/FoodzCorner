import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const MenuSection = () => {
  const menuItems = [
    { name: 'Classic Burger', price: '₹199', image: '/images/burger.jpg' },
    { name: 'Chicken Pizza', price: '₹299', image: '/images/chikkenpizza.jpg' },
    { name: 'French Fries', price: '₹99', image: '/images/frenchfries.jpg' },
    { name: 'Sweet Pastry', price: '₹79', image: '/images/pastry.jpg' },
    { name: 'Cool Drinks', price: '₹49', image: '/images/cooldrtinks.jpg' },
    { name: 'Cheese Burger', price: '₹229', image: '/images/burger.jpg' },
    { name: 'Margherita Pizza', price: '₹279', image: '/images/chikkenpizza.jpg' },
    { name: 'Crispy Fries', price: '₹119', image: '/images/frenchfries.jpg' },
    { name: 'Chocolate Pastry', price: '₹89', image: '/images/pastry.jpg' },
    { name: 'Fresh Juice', price: '₹69', image: '/images/cooldrtinks.jpg' }
  ];

  const handleMoreClick = () => {
    window.location.href = '/menu';
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' }
        }}>
          Our <span style={{ color: '#ffc107' }}>Menu</span>
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          maxWidth: 600,
          mx: 'auto'
        }}>
          Explore our carefully curated menu featuring premium ingredients, authentic recipes, and unbeatable value. 
          Every dish is prepared fresh to order with quality you can taste.
        </Typography>
      </Box>
      
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {menuItems.map((item, index) => (
          <Grid item xs={6} sm={6} md={3} lg={2.4} key={index}>
            <Card sx={{ 
              textAlign: 'center',
              borderRadius: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': { transform: 'translateY(-5px)' },
              transition: 'all 0.3s'
            }}>
              <Box sx={{ 
                width: '100%',
                height: 120,
                overflow: 'hidden'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <CardContent sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold', mb: 2, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                  {item.price}
                </Typography>
                <Button 
                  variant="contained" 
                  size="small"
                  startIcon={<ShoppingCart sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} />}
                  sx={{ 
                    bgcolor: '#ffc107', 
                    color: '#000',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0.5, sm: 1 }
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={handleMoreClick}
          sx={{ 
            bgcolor: '#ffc107', 
            color: '#000',
            fontWeight: 'bold',
            px: 4,
            py: 1.5
          }}
        >
          View More Menu
        </Button>
      </Box>
    </Container>
  );
};

export default MenuSection;