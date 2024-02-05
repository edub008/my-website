import InterestRow from './InterestRow'
import { Fade } from "react-awesome-reveal"
const STRINGS = require('/public/strings.json')

export default function Interests(props) {

	return (
		<div className="section-bg section-mg" id={props.id}>

			<div className="columns m-0 is-justify-content-center">
				<div className="column is-8">
					<div className="section-title my-4"><span> {STRINGS.section.one} </span></div>
				</div>
    	</div>

			<div className="columns m-0 is-justify-content-center">
				<div className="column is-10 mx-1 my-4" style={{paddingBottom:'5rem'}}>
					<Fade direction="up" triggerOnce>
						<InterestRow id={1} wSize={props.wSize} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={2} wSize={props.wSize} />
					</Fade>
					<Fade direction="up" triggerOnce>
						<InterestRow id={3} wSize={props.wSize} />
					</Fade>
				</div>
	    </div>
	  </div>
	)
}