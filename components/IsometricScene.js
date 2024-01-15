import Image from "next/image"

export default function IsometricScene(props) {
	return (
		<div className="section m-1 p-6 has-background-black">
			<div style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)'}}>
				<div id="backdrop">

				0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 1000110 1000110 1000110 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0010101 1101010 1101010 1110010 1110010 1110010 1110010 1110010 1110010 1110010 1110010 0101010 0101010 0101010 0101010 0101010 0101010 0010110 0010110 0010110 0010110 0010110 0000111 0000111 0000111 0000111 1101010 1101010 1101010 1101010 1101010 1101010 1101010 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 0110100 1101010 1000110 1110010
				</div>

				<div id="two" className="iso-cube">
			    <div className="face top">
			    	<Image
			        src="/img/next-js.svg"
			        fill
			        style={{objectFit:"cover"}}
			        alt="nextjs-logo"
			      />
			    </div>
			    <div className="face left">
			    	<Image
			        src="/img/next-js.svg"
			        fill
			        style={{objectFit:"cover"}}
			        alt="nextjs-logo"
			      />
			    </div>
			    <div className="face right">
			    	<Image
			        src="/img/next-js.svg"
			        fill
			        style={{objectFit:"cover"}}
			        alt="nextjs-logo"
			      />
			    </div>
			    <div className="face shadow"></div>
				</div>
			</div>
		</div>
	)
}