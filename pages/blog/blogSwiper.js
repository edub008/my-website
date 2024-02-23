import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import UseWindowSize from '/components/UseWindowSize'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const actionTitle = "View Blog"
const disabledTitle = "Coming Soon"
const mobileBP = 768

export default function BlogSwiper(props) {
	const wSize = UseWindowSize()
	useEffect(() => {
		const carousel3Dswiper = new Swiper( '.swiper-container.two', {
			pagination: {
	      el: '.swiper-pagination',
	      clickable: true
	    },
			effect: 'coverflow',
			// autoplay: {
			// 	delay: 5000
			// },
			loop: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflow: {
				rotate: 0,
				stretch: 100,
				depth: 150,
				modifier: 1.5,
				slideShadows : false,
			}
		})
	}, [])

	const SLIDES = props.featuredBlogsData && props.featuredBlogsData.map( (blog, idx) => 
		<div className="swiper-slide" style={{width: wSize.width <= mobileBP ? '300px' : '400px'}} key={`blog-slide-${idx+1}`}>
			<div className="slider-image">
				<div className="card section-bg">
		      <div className="card-image">
		        <img src={blog.img} alt={`featured-blog-${idx+1}`} />
		      </div>
		      <div className="card-content">
		        <div style={{position:'relative'}}>
	            <div className={`title is-4 has-text-white`}>{blog.title}</div>
	            <div className={`subtitle is-6 has-text-white`}>{blog.date}</div>
	            	<a className="button is-primary" href={blog.url}>{actionTitle}</a>
	          </div>
		      </div>
		    </div>
			</div>
		</div>
	)

	return (
		<section className="m-4 p-2">
			<div className="container">
				<div className="swiper-container two">
					<div className="swiper-wrapper">
						{SLIDES}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</section>
	)
}