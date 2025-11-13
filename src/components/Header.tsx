import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge, Container, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCart, Search, Menu, ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = ['Home', 'About Us', 'Shop', 'Services', 'Blog', 'Pages', 'Contact Us'];

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#1a1a1a', boxShadow: 'none', zIndex: 10 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ px: 0, justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}>
            <span style={{ color: '#ff4757' }}>Food</span>
            <span style={{ color: '#ffc107' }}>Z</span>
            <span style={{ color: '#4caf50' }}>Corner</span>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: 'white', textTransform: 'none' }}>{item}</Button>
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: 'white', display: { xs: 'none', md: 'block' } }}>
              <Search />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <Badge badgeContent={2} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button 
              variant="contained" 
              size="small" 
              startIcon={<ShoppingBag />}
              sx={{ 
                bgcolor: '#ffc107', 
                color: '#000', 
                textTransform: 'none', 
                fontWeight: 'bold',
                fontSize: { xs: '0.7rem', md: '0.875rem' },
                px: { xs: 1, md: 2 },
                minWidth: { xs: 'auto', md: 'auto' },
                '& .MuiButton-startIcon': {
                  mr: { xs: 0, md: 1 },
                  ml: 0
                }
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Order Now</Box>
            </Button>
            <IconButton 
              sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250, bgcolor: '#1a1a1a', height: '100%', color: 'white' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item} sx={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;