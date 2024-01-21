import BlockChainSvg from './BlockChainSvg'
import StripedCube from './StripedCube'
import ZkAnim from './ZkAnim'
import UiDevAnim from './UiDevAnim'
const STRINGS = require('/public/strings.json')

export default function InterestRow(props) {

	let interestTitle = ""
	let interestDesc = ""
	let displayContent = {}

	switch(props.id) {
		default:
		case 0:
		case 1:
			interestTitle = STRINGS.interests.title1
			interestDesc = STRINGS.interests.desc1
			displayContent = <BlockChainSvg id="Layer_1" />
			break
		case 2:
			interestTitle = STRINGS.interests.title2
			interestDesc = STRINGS.interests.desc2
			displayContent = <UiDevAnim />
			break
		case 3:
			interestTitle = STRINGS.interests.title3
			interestDesc = STRINGS.interests.desc3
			displayContent = <ZkAnim />
			break
		case 4:
			interestTitle = STRINGS.interests.title4
			interestDesc = STRINGS.interests.desc4		
			displayContent = <StripedCube />
			break
		case 5:
			interestTitle = STRINGS.interests.title5
			interestDesc = STRINGS.interests.desc5		
			displayContent = <StripedCube />
			break	
	}

	// stack interest columns when less than desktop size
	const mobileBreakPointInPx = 1024
	const areaSizeStyle = {
		// height: '40vh',
		// minHeight: '40vh'
	}

	// alternate content sides based on even/odd 
	if( props.id && props.id % 2 !== 0 ) {
		return (
			<div className="columns m-0 is-desktop" style={areaSizeStyle}>
				<div className="column m-0 px-2">
					<h3 className="title is-4 has-text-info"> {interestTitle} </h3>
					<div className="subtitle is-5 my-3 has-text-white" dangerouslySetInnerHTML={{__html: interestDesc }}></div>
				</div>
				{
					props.wSize.width > mobileBreakPointInPx
					&&
					<div className="column is-half m-0 px-2 is-flex is-justify-content-center is-align-items-center">
						{displayContent}
					</div>
				}
			</div>
		)
	}
	else {
		return (
			<div className="columns m-0 is-desktop " style={areaSizeStyle}>
				{
					props.wSize.width > mobileBreakPointInPx
					&&
					<div className="column is-half m-0 px-2 is-flex is-justify-content-center is-align-items-center">
						{displayContent}
					</div>
				}
				<div className="column m-0 px-2">
					<h3 className="title is-4 has-text-info"> {interestTitle} </h3>
					<div className="subtitle is-5 my-3 has-text-white" dangerouslySetInnerHTML={{__html: interestDesc }}></div>
				</div>
			</div>
		)
	}
}