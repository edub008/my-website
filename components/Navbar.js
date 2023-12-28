'use client'

import { useTranslation } from 'next-i18next'
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {

  const { t } = useTranslation('common')
  const SwalDialog = withReactContent(Swal)

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
      <div id="navbar-main" className="navbar-menu">

        <div className="navbar-start">
          <a className="navbar-item has-text-light" onClick={ (e) => smoothScrollTo(e, "top")}>
            Home
          </a>
          <div className="navbar-item has-text-gray" style={{cursor:'not-allowed'}}>
            Blog (coming soon)
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button navbar-li-button" target="_blank" href={t('communities.three.link')}>
                LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="mx-2"/>
              </a>
              <div className="is-relative">
              <a className="button is-primary" onClick={ showResumeTypeDialog }>
                <strong>Resume</strong>
              </a>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </nav>
  )
}