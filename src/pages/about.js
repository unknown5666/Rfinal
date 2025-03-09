import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const About = ({ data, location }) => {  

  return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="body-global-wrapper">
          <br></br>
          <p className="titleimage">My name is Rashed Ahmed. I am 29 years old, born in 1995. I stand tall at 180 cm . I have gained experience working in commercials and am passionate about pursuing a career in modeling and acting.
<br></br>
I hail from the UAE and am fluent in both English and Arabic. 
            <br></br>
            <br></br>
            <u>Details:</u>
            <br></br>
            Height: 1.86 m
            <br></br>
            CHEST: 42.5
            <br></br>
            <br></br>
            <a href="mailto:rashed.binsaidan@hotmail.com" target="_blank" rel="noopener noreferrer">Send me an Email</a> or contact me on  <a href="https://www.instagram.com/rshood_a" target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </div>
        <div>
          <Footer></Footer>
        </div>        
      </div>    
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
