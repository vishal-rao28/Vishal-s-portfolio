import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Link } from "@material-ui/core";
import React from 'react';
import vishalPhoto from '../assets/img/vishal_optimized1.jpg';

function MyList() {
  return (
    <List>
      <Avatar
        src={vishalPhoto}
        alt="Vishal Rao M"
        style={{
          height: 100,
          width: 100,
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "10px",
          marginTop: "30px",
          border: "2px solid #006AFF"
        }}
      />
      <div style={{ textAlign: 'center', marginBottom: 15 }}>
        <h3 style={{ margin: '0 0 2px 0', fontSize: '1.2rem' }}>Vishal Rao M</h3>
        <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>iOS Dev &amp; QA Engineer</p>
      </div>

      <a
        href="#about"
        className="headernav"
        style={{ color: "#000", opacity: 0.7, display: "flex", alignItems: "center" }}
      >
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
      </a>

      <Link
        href="#skills"
        className="headernav"
        style={{ color: "#000", opacity: 0.7, display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <ListItem button>
          <ListItemText primary="Skills" />
        </ListItem>
      </Link>

      <Link
        href="#projects"
        className="headernav"
        style={{ color: "#000", opacity: 0.7, display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>

      <Link
        href="#experience"
        className="headernav"
        style={{ color: "#000", opacity: 0.7, display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <ListItem button>
          <ListItemText primary="Experience" />
        </ListItem>
      </Link>

      <Link
        href="#socials"
        className="headernav"
        style={{ color: "#000", opacity: 0.7, display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </Link>

      <hr style={{ color: "#636262", width: "90%", opacity: 0.2 }} />

      <a
        href="./Vishal_Rao_UDI.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <ListItem
          button
          style={{
            margin: "10px 16px",
            width: "calc(100% - 32px)",
            backgroundColor: "#006AFF",
            color: "#fff",
            borderRadius: 8,
            textAlign: "center"
          }}
        >
          <ListItemText primary="Download Resume ↗" />
        </ListItem>
      </a>
    </List>
  );
}

export default MyList;
