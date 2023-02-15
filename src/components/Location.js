import React from 'react';
import "./Location.css"
import {useRef, useEffect} from 'react';
import worldMap from '../images/world_map.png';

function Location (props) {
	const img = new Image();
	img.src = worldMap;
	const longitude = parseFloat(props.longitude);
	const latitude = parseFloat(props.latitude);
	const canvasWidth = props.canvasWidth;
	const canvasHeight = props.canvasHeight;
	const canvasRef = useRef(null);

	function drawCircle(ctx, longitude, latitude) {
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc((180 + longitude)*canvasWidth/360, (90 - latitude)*canvasHeight/180, 10, 0, Math.PI*2, false);
		ctx.fill();
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = "#00ffff";
		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasWidth, canvasHeight);
		// ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		drawCircle(ctx, longitude, latitude);
	});
	return(
		<div>
			<canvas id="canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight} />
			<br/>Longitude: {longitude}
			<br/>Latitude: {latitude}
		</div>);
}

export default Location;