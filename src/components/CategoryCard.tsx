import { Card, CardContent, Typography, Box } from '@mui/material';

interface CategoryCardProps {
  icon: string;
  title: string;
  isActive?: boolean;
}

const CategoryCard = ({ icon, title, isActive = false }: CategoryCardProps) => {
  return (
    <Card sx={{ 
      textAlign: 'center', 
      cursor: 'pointer',
      bgcolor: isActive ? '#ffc107' : 'white',
      '&:hover': { bgcolor: '#ffc107' },
      transition: 'all 0.3s',
      borderRadius: 3,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      py: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent sx={{ 
        pb: '16px !important',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box sx={{ 
          fontSize: '3.5rem', 
          mb: 2,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </Box>
        <Typography 
          variant="body2" 
          fontWeight="600" 
          sx={{ 
            fontSize: '0.9rem',
            lineHeight: 1.2,
            minHeight: '2.4em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;