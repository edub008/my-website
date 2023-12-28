'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faUserGroup, faList, faFileLines } from '@fortawesome/free-solid-svg-icons'

export default function GridItems(props) {

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth' // smooth scroll
    })
  };

  const gridIcons = [
    <FontAwesomeIcon icon={faBookOpen} size="lg" className="mx-4"/>,
    <FontAwesomeIcon icon={faList} size="lg" className="mx-4"/>,
    <FontAwesomeIcon icon={faUserGroup} size="lg" className="mx-4"/>,
    <FontAwesomeIcon icon={faFileLines} size="lg" className="mx-4"/>
  ]

  const gridItems = props.sectionTitles.map( (item, index) =>
    
    <div className="column grid-col" key={`my-${item.id}`}>
      <Link
        id={`my-${item.id}`}
        href=""
        onClick={ (e) => smoothScrollTo(e, item.id)}
        className="interest-area"
        rel="noopener noreferrer"
      >
        <div className="has-text-centered">
          <h2 className={`title is-4 has-text-primary`}>
            {item.title} {gridIcons[index]}
          </h2>
        </div>
      </Link>
    </div>
    
  )

  return (
    <div className="section-bg section-mg">
      <div className="columns m-0">
        {gridItems}
      </div>
    </div>
  )

}