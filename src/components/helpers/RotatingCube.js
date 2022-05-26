import '../../scss/rotating-cube.scss'

export default function RotatingCube() {
  return (
		<div className="rotatingCube">
			<div className="rotating-cube">
				<div className="cubeGroup cube-front cube-1"></div>
				<div className="cubeGroup cube-top cube-2"></div>
				<div className="cubeGroup cube-left cube-3"></div>
				<div className="cubeGroup cube-right cube-4"></div>
				<div className="cubeGroup cube-rear cube-5"></div>
				<div className="cubeGroup cube-bottom cube-6"></div>
			</div>
		</div>
	)
}
