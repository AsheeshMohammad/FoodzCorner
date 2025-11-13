import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
}

const ProductCard = ({ image, title, category }: ProductCardProps) => {
  return (
    <Card sx={{ 
      textAlign: 'center',
      borderRadius: 3,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      '&:hover': { transform: 'translateY(-5px)' },
      transition: 'all 0.3s'
    }}>
      <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ 
          width: 160,
          height: 160,
          mx: 'auto',
          mb: 3,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid #f0f0f0'
        }}>
          <img 
            src={image} 
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Button 
          variant="contained" 
          size="small"
          sx={{ 
            bgcolor: '#ffc107', 
            color: '#000',
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;