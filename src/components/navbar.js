import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query NavbarQuery {
        site {
            siteMetadata {
            author {
                name
                summary
            }
            social {
                twitter
            }
            }
        }
        }
    `)
    
    return (
        <div>
        <nav className="menu">
          <a href="/" className="logo">RASHED AHMED</a>
          <ul className="menu-items">
            <li className="item">
              <Link to="/about" className="underline link-white">ABOUT</Link>
            </li>
            <li className="item">
              <a href="mailto:rashed.binsaidan@hotmail.com" target="_blank" rel="noopener noreferrer" className="underline link-white">CONTACT</a>
            </li>
            <li className="item">
              <a href="https://www.instagram.com/rshood_a" target="_blank" rel="noopener noreferrer" className="icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <style>
          {`
            body {
              background: #121212; /* Dark background for contrast */
              color: #fff; /* White text color */
              transition: all 0.3s ease;
            }
  
            .menu {
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: relative;
              width: 100%;
              background-color: #121212; /* Dark background for contrast */
              padding: 10px 20px;
              z-index: 1000; /* Ensure navbar is on top */
            }
  
            .menu-items {
              display: flex;
              list-style-type: none;
              margin: 0;
              padding: 0;
              z-index: 1000; /* Ensure menu items are on top */
            }
  
            .menu-items li {
              margin: 0 10px;
            }
  
            .menu-items li a,
            .icon-link svg {
              text-decoration: none !important;
              color: #ffffff !important; /* Set text color to white */
              padding: 10px;
              z-index: 1000; /* Ensure text is on top */
            }
  
            .logo {
              text-decoration: underline;
              color: #ffffff !important; /* Set text color to white */
              margin-right: auto;
              z-index: 1000; /* Ensure logo is on top */
            }
  
            .link-white {
              color: #ffffff !important; /* Ensure text color is white */
              z-index: 1000; /* Ensure text is on top */
            }
  
            .underline {
              text-decoration: underline !important;
              color: #ffffff !important; /* Ensure text color is white */
              z-index: 1000; /* Ensure text is on top */
            }
  
            @media (max-width: 768px) {
              .menu-items {
                flex-direction: row; /* Ensure items remain in a row */
                width: 100%;
                text-align: left; /* Align text to the left */
              }
            }
          `}
        </style>
      </div>

    )
}

export default Navbar





