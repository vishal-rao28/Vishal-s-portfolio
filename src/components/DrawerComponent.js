import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MyList from './MyList';

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(state);
  };

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        aria-label="Open menu"
        style={{
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: 10,
          padding: 8
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: '#090d16',
            color: '#ffffff',
            width: 280,
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(10, 132, 255, 0.15) 0%, transparent 60%)'
          }
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ height: '100%' }}
        >
          <MyList />
        </div>
      </Drawer>
    </div>
  );
}
