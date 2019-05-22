import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"


const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `);

    return (
      <footer className="footer">
      © {new Date().getFullYear()}, Built with Gatsby by <a href="https://twitter.com/kustomdesigner">{data.site.siteMetadata.author}</a>
      </footer>
    )
  }

export default Footer
