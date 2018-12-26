import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import FooterContainer from 'theme/containers/FooterContainer'

export default () =>
  <StaticQuery
    query={footerQuery}
    render={data => {
      return (
        <FooterContainer>
          <ul>
            {Object.entries(data.site.siteMetadata).map(([name, link]) =>
              <li key={name}>
                <a rel="noopener noreferrer" target="__blank" href={link}>
                  {name}
                </a>
              </li>)}
          </ul>
        </FooterContainer>
      )
    }}
  />


const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        github
        twitter
        linkedin
      }
    }
  }
`
