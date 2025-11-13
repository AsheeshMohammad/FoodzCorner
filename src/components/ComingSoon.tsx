import { Container, Typography, Box, Button } from '@mui/material';

const ComingSoon = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      bgcolor: '#f8f8f8'
    }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '3rem', md: '5rem' },
          fontWeight: 'bold',
          mb: 2,
          color: '#1a1a1a'
        }}>
          Coming Soon
        </Typography>
        <Typography variant="h4" sx={{ 
          mb: 4,
          color: '#ffc107',
          fontWeight: 'bold'
        }}>
          Full Menu Page
        </Typography>
        <Typography variant="h6" sx={{ 
          mb: 6,
          color: 'text.secondary',
          maxWidth: 500,
          mx: 'auto'
        }}>
          We're working hard to bring you our complete menu with detailed descriptions, 
          nutritional information, and online ordering capabilities.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => window.history.back()}
          sx={{ 
            bgcolor: '#ffc107', 
            color: '#000',
            fontWeight: 'bold',
            px: 4,
            py: 1.5
          }}
        >
          Go Back
        </Button>
      </Container>
    </Box>
  );
};

export default ComingSoon;