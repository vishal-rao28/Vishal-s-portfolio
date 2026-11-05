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
          color: 'var(--text-primary)',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
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
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            width: 280,
            borderLeft: '1px solid var(--border-subtle)',
            boxShadow: 'var(--glass-shadow)'
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
