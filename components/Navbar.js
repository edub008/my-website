import Link from 'next/link'
import React, {useEffect} from 'react'
import $ from "jquery"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'
const STRINGS = require('/public/strings.json')

export default function Navbar(props) {

  const SwalDialog = withReactContent(Swal)

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

  function SelectDocFormat() {
    return (
      <div className="columns m-0 p-0">
        <a 
          className="column m-2 is-flex is-justify-content-center" 
          download 
          href="/docs/Resume-Ergin-Dervisoglu.pdf"
          onClick={SwalDialog.close}
          >
          <FontAwesomeIcon icon={faFilePdf} size="5x" className="mx-1"/>
        </a>
        <a 
          className="column m-2 is-flex is-justify-content-center" 
          download 
          href="/docs/Resume-Ergin-Dervisoglu.docx"
          onClick={SwalDialog.close}
          >
          <FontAwesomeIcon icon={faFileWord} size="5x" className="mx-1"/>
        </a>
      </div>
    )
  }

  function showResumeTypeDialog() {
    SwalDialog.fire({
      title: "Select document format",
      showCancelButton: true,
      showConfirmButton: false,
      focusCancel: true,
      cancelButtonText: "Close",
      html: <SelectDocFormat />
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Resume downloaded (DOCX)", "", "success");
      } 
      else if (result.isDismissed ) {
        
      }
    });
  }

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth' // smooth scroll
    })
  };

  return(
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      
      <div className="navbar-brand">

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-main">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-main" className="navbar-menu">

        <div className="navbar-start">
          <div className="navbar-item has-text-light" style={{cursor: 'pointer'}} onClick={ (e) => smoothScrollTo(e, "top")}>
            Home
          </div>
          <Link className="navbar-item has-text-light" href="/blog">
            <span> Blog <sup className="has-text-primary">New</sup> </span>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item has-text-light" style={{cursor:'pointer'}} onClick={ showResumeTypeDialog }>
            Resume
          </div>
          <div className="navbar-item">
            <div className="buttons">
              
              <a className="button navbar-li-button" target="_blank" href={STRINGS.communities.three.link}>
                LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="mx-2"/>
              </a>

            </div>
          </div>
        </div>
        
      </div>
    </nav>
  )
}