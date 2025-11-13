import { Container, Grid, Box } from '@mui/material';
import CategoryCard from './CategoryCard';

const FoodCategories = () => {
  const categories = [
    { icon: '🍽️', title: 'Combo Meals' },
    { icon: '🍝', title: 'Pasta' },
    { icon: '🍔', title: 'Burger' },
    { icon: '🥪', title: 'Sandwich' },
    { icon: '🍟', title: 'Sides & Fries' },
    { icon: '🍼', title: 'Kids Meals' }
  ];

  return (
    <Box sx={{ bgcolor: '#f8f8f8', py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} lg={2} key={index}>
              <CategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FoodCategories;