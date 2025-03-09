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
      <div className="body-global-wrapper" style={aboutStyle}>
        <br />
        <p className="titleimage" style={aboutStyle}>
          My name is Rashed Ahmed. I am 29 years old, born in 1995. I stand tall at 180 cm and weigh 80 kg. I have gained experience working in commercials and am passionate about pursuing a career in modeling and acting.
          <br />
          I hail from the UAE and am fluent in both English and Arabic.
          <br /><br />
          <u style={aboutStyle}>Details:</u>
          <br />
          Height: 1.80 m
          <br /><br />
          <a href="mailto:rashed.binsaidan@hotmail.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Send me an Email</a> or contact me on <a href="https://www.instagram.com/rshood_a" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>.
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
