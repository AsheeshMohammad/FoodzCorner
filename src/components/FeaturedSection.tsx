import { Container, Grid, Typography, Button, Box } from '@mui/material';

const FeaturedSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{
              width: 350,
              height: 250,
              bgcolor: '#1a1a1a',
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=350&h=250&fit=crop" 
                alt="Delicious burger"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              width: 180,
              height: 120,
              bgcolor: '#1a1a1a',
              borderRadius: 2,
              overflow: 'hidden',
              border: '4px solid white'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=180&h=120&fit=crop" 
                alt="Food variety"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 'bold', 
            mb: 3, 
            fontSize: { xs: '2rem', md: '2.8rem' },
            lineHeight: 1.2
          }}>
            Captivating Culinary{' '}
            <span style={{ color: '#4caf50' }}>Favorites.</span>
          </Typography>
          <Typography variant="body1" sx={{ 
            mb: 4, 
            color: 'text.secondary', 
            lineHeight: 1.7,
            fontSize: '1.1rem',
            maxWidth: 450
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#ffc107', 
                color: '#000',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 4,
                py: 1.5
              }}
            >
              Order Now →
            </Button>
            <Button variant="text" sx={{ color: '#4caf50', textTransform: 'none', fontWeight: 'bold' }}>
              About TastyPop
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedSection;