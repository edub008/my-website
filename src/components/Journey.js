import React, { useState, useContext } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { AppStateContext } from '../AppStateContext'
import * as Shared from '../shared/shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import JobInfo from './helpers/JobInfo'
import dm_logo from "../img/logos/deepmotion-glyph.png"
import ds_logo from "../img/logos/docusign_logo.png"
import dc_logo from "../img/logos/david-corp.jpeg"
import cd_logo from "../img/logos/crystal-dynamics.png"
import li_logo from "../img/LI-In-Bug.png"

const mainTitle = "My Journey"
const textCareerLink = "See my full career on"

const jobsData = [
	{
		company: 'DeepMotion', 
		title: 'Product Director & Advisor, since March 2019',
		logo: dm_logo,
		link: "https://www.deepmotion.com",
		descr: "I knew there was something special about DeepMotion when I joined and believed its potential to disrupt the 3D Animation industry was an even bigger opportunity than what DocuSign had with Digital Transaction Management.<br/><br/>Sure enough the dream has come true with DeepMotion's revolutionary service - <a href='https://www.deepmotion.com/animate-3d' target='_blank' rel='noopener noreferrer' >Animate 3D</a> - which lets you convert video clips into high fidelity 3D Animations (FBX/GLTF/BVH) using any web browser!<br/><br/>As Product Director at DeepMotion I've headed up the Product and Marketing teams and accomplished the following milestones (transitioned to Product Advisor):<br/><ul><li>Lead overall Product and Marketing efforts for Animate 3D from Concept -> Development -> Test -> Beta -> 175K+ registered users as of March 2022</li><li>Integrated and launched web-based Animate 3D subscription plans (using Stripe)</li><li>Helped achieve exponential MRR growth through Web and SDK sales</li><li>Designed, implemented, and launched the Animate 3D front-end web app and DeepMotion company website (React.js + Node)</li><li>Lead DeepMotion's legal efforts to successfully register and obtain international Trademarks</li></ul>"
	},
	{
		company: 'DocuSign', 
		title: 'Senior Technical Product Manager, from Nov 2012 - Mar 2019', 
		logo: ds_logo,
		link: "https://www.docusign.com",
		descr: "After completing my MBA degree I landed a game-changing job at DocuSign where I worked for almost seven years including through its IPO in 2018. While there I oversaw DocuSign's Developer Products, Tools, SDKs, and Programs.<br/><br/>Some of my proudest accomplishments at DocuSign include creating the DocuSign <a href='https://developers.docusign.com/' target='_blank' rel='noopener noreferrer'>Developer Center</a>, building highly successful SDKs and API tools, and helping launch the first API web-based pricing plans. Other duties and milestones included: <br/><ul><li>Lead small Agile-development team responsible for developer tools</li><li>Build, maintain, and prioritize the API / developer product roadmap</li><li>Worked cross-functionally with Engineering, Sales, Marketing, BD to onboard developers/API integrators</li><li>Present at conferences, conduct customer demos, aid sales with prospects</li><li>Helped achieve 2x API usage and 50% increase in new integrations YoY (May 2018)</li><li>Helped build an ecosystem of 80,000+ DocuSign developers (May 2018)</li></ul>"
	},
	{
		company: 'David Corp (Acquired by Phoenix)',
		title: 'Account Manager / Support Analyst, from Aug 2010 - Oct 2012', 
		logo: dc_logo,
		link: "https://www.phx-am.com/",
		descr: "My first opportunity to work in the Business Process Automation software and eCommerce was at David Corporation which provided cloud-based and on-premise insurance software solutions.<br/><br/>The company had carved out a great niche in the highly lucrative insurance industry while staying small and nimble.<br/><br/>I gained a ton of experience and knowledge working directly with Enterprise and mid-level clients as a Technical Account Manager and learning much more about the sales / CRM side of businesses. Some of my duties included: <br/><ul><li>Managed customer accounts and client-focused projects </li><li>Maintained strong relationships with clients and provided solutions and services to maximize their success</li><li>Identified product usage trends and provide recommendations to senior staff</li><li>Product demonstrations to small and large groups</li><li>Wrote Salesforce triggers to improve processes and workflow efficiencies</li></ul>"
	},
	{
		company: 'Crystal Dynamics',
		title: 'Software Engineer, from Oct 2005 - June 2009', 
		logo: cd_logo,
		link: "https://crystald.com/",
		descr: "Working at Crystal Dynamics was one of my dream roles shortly after college where I worked as a Engineer / Gameplay Programmer for several multi-platinum selling games including the Lara Croft: Tomb Raider series.<br/><br/>The gaming industry can be quite grueling at times (known as \"crunch time\" to many :]) however getting to program UI and gameplay for AAA games was an unbelievable and truly rewarding experience for me.<br/><ul><li>Most code written in C++ with some written in a proprietary game scripting language and tools written in Python</li><li>Worked on all major platforms (PS3, XBOX360, PC, Wii, PSP, DS) in projects that ranged from 7 months to 1.5 years</li><li>Implemented entire UI system for Tomb Raider: Underworld project in 2008</li><li>Lead one of ten internal new features teams during final year</li><li>Gave presentations to executives on new product features, UI designs, and feasibility/recommendations of each</li></ul>"
	}
]

// add short (expandable) descriptions for each journey listing
jobsData[0].descr_short = jobsData[0].descr.slice(0,220)
jobsData[1].descr_short = jobsData[1].descr.slice(0,224)
jobsData[2].descr_short = jobsData[2].descr.slice(0,183)
jobsData[3].descr_short = jobsData[3].descr.slice(0,213)

export default function Journey() {

	const [footerOpacity, setFooterOpacity] = useState(0)
	const [titleTranslate, setTitleTranslate] = useState(0)
	const [footerXTranslate, setFooterXTranslate] = useState([1, 1])
	const [expandSectionFlags, setExpandSectionFlags] = useState([false,false,false,false])

	const jobItems = jobsData.map((job, index) =>
	  <JobInfo key={`job-${index+1}`}
	  	company={job.company} 
	  	title={job.title} 
	  	logo={job.logo} 
	  	link={job.link}
	  	descr={job.descr}
	  	descr_short={job.descr_short}
	  	id={index}
	  	// pass state hook update function to child component
	  	setExpandSectionFlags={setExpandSectionFlags}
	  	expandSectionFlags={expandSectionFlags}
	  />
	)

	function openLinkedInProfile() {
		window.location.href = 'https://www.linkedin.com/in/ergindervisoglu/'
	}

	function setTranslateXValue(id, val) {
		if( id < 0 || id > footerXTranslate.length-1 ) {
			console.error(`Invalid ID passed to setTranslateXValue() function: ${id}`)
			return
		}
		let tempState = footerXTranslate
		tempState[id] = val
		setFooterXTranslate(tempState)
	}

  return (
  	<React.Fragment>
  		<div className="App-section is-justify-content-flex-start has-background-white">
  			
  				<div className="columns auto-margins-x">
			      <div className="column is-relative">

							<div className="columns m-0 is-justify-content-center">
					      <div className="column is-6 is-relative ">
					      	<Parallax onProgressChange={(progress) => setTitleTranslate(Shared.scaleQuarterScreen(progress)) } >
					      	<h2 className="title is-1 fancy-title mx-1 mt-6 mb-1 has-text-dark"> <span>{mainTitle}</span> </h2>
								  </Parallax>
					      </div>
					    </div>
					    <div className="columns is-justify-content-center">
					      <div className="column is-relative">
					      	<Parallax>
					        	{jobItems}
					       	</Parallax>
					      </div>
					    </div>

					  </div>
					</div>

  				<div className="columns is-mobile m-0 is-fullwidth">
			      <div className="column is-relative">

	      			<Parallax onProgressChange={(progress) => setFooterOpacity( Shared.scaleQuarterScreen(progress) ) } >
		      			<div style={{opacity: footerOpacity}}>
			      			<div className="columns is-mobile" style={{marginLeft: '0', marginRight: '0'}}>
		      					<div className="column is-relative has-text-right">
		      						<Parallax onProgressChange={(progress) => setTranslateXValue( 0, 1-Shared.scaleQuarterScreen(progress) )} >
		      							<div style={{transform: `translateX(${footerXTranslate[0]*-50}px)`}}>
							      			<div className="subtitle is-4 has-text-link">
							      				{textCareerLink}
							      			</div>
							      		</div>
					      			</Parallax>
					      		</div>
					      		<div className="column pt-1 is-relative has-text-left">
					      			<Parallax onProgressChange={(progress) => setTranslateXValue( 1, 1-Shared.scaleQuarterScreen(progress) )} >
						      			<div style={{transform: `translateX(${footerXTranslate[1]*50}px)`}}>
							      			<figure className="image is-128x128 is-justify-content-flex-start">
							      				<a href="https://www.linkedin.com/in/ergindervisoglu/" target="_blank" >
							      				<img src={li_logo}
							      					
							      					className="career-link ml-0"
							      					alt="ergin-dervisoglu-linkedin" 
							      				/>
							      				</a>
							      			</figure>
						      			</div>
					      			</Parallax>
					      		</div>
			      			</div>
		      			</div>
		      		</Parallax>

					  </div>
					</div>
		    
	    </div>
	  </React.Fragment>
  )
}