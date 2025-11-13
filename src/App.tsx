import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FoodCategories from './components/FoodCategories';
import FeaturedSection from './components/FeaturedSection';
import BestSelling from './components/BestSelling';
import MenuSection from './components/MenuSection';
import BusinessInfo from './components/BusinessInfo';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ffc107',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <FoodCategories />
      <FeaturedSection />
      <BestSelling />
      <MenuSection />
      <BusinessInfo />
      <Footer />
    </ThemeProvider>
  );
}

export default App;