import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ 
      bgcolor: '#1a1a1a', 
      color: 'white', 
      py: 6,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '1px',
          background: 'rgba(255,255,255,0.3)',
          transform: 'rotate(45deg)'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '1px',
          background: 'rgba(255,255,255,0.3)',
          transform: 'rotate(-30deg)'
        }
      }} />
      <Box sx={{
        position: 'absolute',
        top: '40%',
        left: '60%',
        width: '180px',
        height: '1px',
        background: 'rgba(255,255,255,0.2)',
        transform: 'rotate(60deg)',
        opacity: 0.1
      }} />
      <Box sx={{
        position: 'absolute',
        top: '70%',
        left: '20%',
        width: '120px',
        height: '1px',
        background: 'rgba(255,255,255,0.2)',
        transform: 'rotate(-45deg)',
        opacity: 0.1
      }} />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold',
              mb: 2,
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ color: '#ff4757' }}>Food</span>
              <span style={{ color: '#ffc107' }}>Z</span>
              <span style={{ color: '#4caf50' }}>Corner</span>
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Your trusted partner for premium fast food delivery. Serving fresh, quality meals with exceptional service since 2020. 
              Over 50,000+ satisfied customers and counting.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Site Map
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Home
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                About Us
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Shop
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Services
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Blog
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Privacy Policy
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Terms of Services
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Food Safety
              </Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Delivery Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          mt: 4, 
          pt: 3,
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} FoodZCorner. All rights reserved. | Powered by{' '}
            <Link href="https://kynix.co.in" target="_blank" sx={{ color: '#ffc107', textDecoration: 'none' }}>
              kynix.co.in
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;