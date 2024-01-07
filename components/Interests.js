import InterestRow from './InterestRow'
import { Fade } from "react-awesome-reveal"
const STRINGS = require('/public/strings.json')

export default function Interests(props) {

	return (
		<div className="section-bg section-mg" id={props.id}>
			<div className="section-title"><span> {STRINGS.section.one} </span></div>
			<div className="columns is-justify-content-center m-0">
				<div className="column is-10">
					<Fade direction="up" triggerOnce>
						<InterestRow id={1} wSize={props.wSize} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={2} wSize={props.wSize} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={3} wSize={props.wSize} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={4} wSize={props.wSize} />
					</Fade>
					{/* 
					<Fade direction="up" triggerOnce>
						<InterestRow id={5} wSize={props.wSize} />
					</Fade>
					*/}
				</div>
	    </div>
	  </div>
	)
}