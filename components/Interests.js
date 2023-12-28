import { useTranslation } from 'next-i18next'
import InterestRow from './InterestRow'
import { Fade } from "react-awesome-reveal"

export default function Interests(props) {

	const { t } = useTranslation('common')

	return (
		<div className="section-bg section-mg" id={props.id}>
			<div className="section-title"><span> {t('section.one')} </span></div>
			<div className="columns is-justify-content-center m-0">
				<div className="column is-10">
					<Fade direction="up" triggerOnce>
						<InterestRow id={1} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={2} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={3} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={4} />
					</Fade>
					{/* 
					<Fade direction="up" triggerOnce>
						<InterestRow id={5} />
					</Fade>
					*/}
				</div>
	    </div>
	  </div>
	)
}