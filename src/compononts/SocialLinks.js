import React from 'react'

const SocialLinks = ({href,icon,parentClass}) => {
  return (
    <li >
                <a href={href} target="_blank" rel="noreferrer" className={parentClass}>
                  <i className={icon}></i>
                </a>
              </li>
  )
}

export default SocialLinks
