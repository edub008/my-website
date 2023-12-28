import { useTranslation } from 'next-i18next'
import BlockChainSvg from './BlockChainSvg'
import StripedCube from './StripedCube'
import ZkAnim from './ZkAnim'
import UiDevAnim from './UiDevAnim'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function InterestRow(props) {

	const { t } = useTranslation('common')

	let interestTitle = ""
	let interestDesc = ""
	let displayContent = {}

	switch(props.id) {
		default:
		case 0:
		case 1:
			interestTitle = t('interests.title1')
			interestDesc = t('interests.desc1')
			displayContent = <BlockChainSvg id="Layer_1" />
			break
		case 2:
			interestTitle = t('interests.title2')
			interestDesc = t('interests.desc2')
			displayContent = <UiDevAnim />
			break
		case 3:
			interestTitle = t('interests.title3')
			interestDesc = t('interests.desc3')
			displayContent = <ZkAnim />
			break
		case 4:
			interestTitle = t('interests.title4')
			interestDesc = t('interests.desc4')		
			displayContent = <StripedCube />
			break
		case 5:
			interestTitle = t('interests.title5')
			interestDesc = t('interests.desc5')		
			displayContent = <StripedCube />
			break	
	}

	const areaSizeStyle = {
		height: '40vh',
		minHeight: '40vh'
	}

	// alternate content sides based on even/odd 
	if( props.id && props.id % 2 !== 0 ) {
		return (
			<div className="columns m-0 is-desktop" style={areaSizeStyle}>
				<div className="column m-0 px-2">
					<h3 className="title is-4 has-text-info"> {interestTitle} </h3>
					<div className="subtitle is-5 my-3 has-text-white" dangerouslySetInnerHTML={{__html: interestDesc }}></div>
				</div>
				<div className="column m-0 px-2 is-flex is-justify-content-center">
					{displayContent}
				</div>
			</div>
		)
	}
	else {
		return (
			<div className="columns m-0 is-desktop " style={areaSizeStyle}>
				<div className="column m-0 px-2 is-flex is-justify-content-center">
					{displayContent}
				</div>
				<div className="column m-0 px-2">
					<h3 className="title is-4 has-text-info"> {interestTitle} </h3>
					<div className="subtitle is-5 my-3 has-text-white" dangerouslySetInnerHTML={{__html: interestDesc }}></div>
				</div>
			</div>
		)
	}
}