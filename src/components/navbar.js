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
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>
                </label>  
                <div className="enlace">
                    <a href="/" className="logo">RASHED AHMED</a>
                </div>                                  
                    <ul>
                        <li className="item" style={{ textDecoration: "underline" }}>
                            <Link to="/about">ABOUT</Link>                           
                        </li>
                        <li className="item" style={{ textDecoration: "underline" }}>
                            <a href="mailto:rashed.binsaidan@hotmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        </li>
                        <li className="item">
                            <a href="https://www.instagram.com/rshood_a" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#060606" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>                                
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.snapchat.com/add/rshood_a" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FF3F3F" stroke="#FF3F3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-snapchat">
                                    <path d="M12 2C10.68 2 9.51 2.4 8.51 3.13C8.51 3.13 8.1 2.62 6.57 2.62C5.37 2.62 4.62 3.47 4.17 4.13C3.72 4.78 3.39 5.87 3.63 6.72C4.3 7.51 6.8 8.71 6.78 9.66C6.74 11.38 4.53 12.22 3.1 14.8C2.57 15.84 3.02 16.84 4.08 16.89C4.8 16.94 5.7 17.53 5.95 18.21C6.02 18.42 6.03 18.72 5.97 19.02C5.74 20.11 7.23 20.71 9.58 20.48C10.12 20.42 10.71 20.36 11.35 20.31C11.35 20.31 12.56 19.68 12.73 19.68C12.9 19.68 14.06 20.31 14.06 20.31C14.7 20.36 15.29 20.42 15.83 20.48C18.18 20.71 19.67 20.11 19.43 19.02C19.37 18.72 19.38 18.42 19.45 18.21C19.7 17.53 20.6 16.94 21.32 16.89C22.38 16.84 22.83 15.84 22.3 14.8C20.88 12.22 18.67 11.38 18.63 9.66C18.61 8.71 21.1 7.51 21.77 6.72C22.01 5.87 21.68 4.78 21.23 4.13C20.78 3.47 20.03 2.62 18.83 2.62C17.3 2.62 16.89 3.13 16.89 3.13C15.89 2.4 14.72 2 13.4 2H12Z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
             </nav>
        </div>
    )
}

export default Navbar
