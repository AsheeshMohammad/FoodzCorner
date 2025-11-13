import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { AccessTime, LocalShipping, Restaurant, Star } from '@mui/icons-material';

const BusinessInfo = () => {
  const features = [
    {
      icon: <AccessTime sx={{ fontSize: 40, color: '#ffc107' }} />,
      title: '30-Minute Delivery',
      description: 'Fast and reliable delivery service with real-time tracking. Your food arrives hot and fresh, guaranteed.'
    },
    {
      icon: <Restaurant sx={{ fontSize: 40, color: '#4caf50' }} />,
      title: 'Premium Quality',
      description: 'We use only the finest ingredients sourced from trusted suppliers. Every dish meets our strict quality standards.'
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40, color: '#2196f3' }} />,
      title: 'Free Delivery',
      description: 'Enjoy free delivery on orders above ₹299. No hidden charges, transparent pricing, and secure payment options.'
    },
    {
      icon: <Star sx={{ fontSize: 40, color: '#ff9800' }} />,
      title: '4.8★ Rating',
      description: 'Trusted by over 50,000+ customers with excellent reviews. Join our satisfied customer community today.'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' }
          }}>
            Why Choose <span style={{ color: '#ffc107' }}>FoodZCorner</span>?
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'text.secondary',
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem'
          }}>
            We're committed to delivering exceptional food experiences with unmatched quality, 
            speed, and customer satisfaction. Here's what makes us different.
          </Typography>
        </Box>
        
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1000, mx: 'auto' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center',
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                '&:hover': { 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                },
                transition: 'all 0.3s ease'
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    color: '#1a1a1a'
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6
                  }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ 
          textAlign: 'center', 
          mt: 8,
          p: 4,
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: '#1a1a1a'
          }}>
            Business Hours
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ffc107' }}>
                Monday - Friday
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10:00 AM - 11:00 PM
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ffc107' }}>
                Saturday - Sunday
              </Typography>
              <Typography variant="body2" color="text.secondary">
                9:00 AM - 12:00 AM
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ffc107' }}>
                Customer Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                24/7 Available
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessInfo;