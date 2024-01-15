'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {useEffect} from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const STRINGS = require('/public/strings.json')
const navHome = 'Back to ergin-d.com'
const navBack = 'Blogs List'
const rootPath = '/'
export default function NavBarBlog(props) {
  
  const pathname = usePathname()

  useEffect(() => {
    $(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active")
        $(".navbar-menu").toggleClass("is-active")
    })
  })  
  }, [])

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      
      <div className="navbar-brand">

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-main">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-main" className="navbar-menu">

        <div className="navbar-start">
          {
            pathname === '/blog' 
            ?
            <Link className="navbar-item has-text-light" style={{cursor: 'pointer'}} href="/">
              <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mx-4"/> {navHome}
            </Link>
            :
            <Link className="navbar-item has-text-light" style={{cursor: 'pointer'}} href="/blog">
              <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mx-4"/> {navBack}
            </Link>
          }
        </div>

        <div className="navbar-end">
          
        </div>
        
      </div>
    </nav>
  )
}