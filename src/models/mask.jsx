/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ʜᴀᴄᴋᴇʀ (https://sketchfab.com/infohack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hacker-face-ecb2e2a0801e4914b8b5420fe8662300
Title: Hacker Face
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import m from "../assets/hacker_face.glb";
import { a } from "@react-spring/three";

const mask = ({
	isRotating,
	setIsRotating,
	setCurrentStage,
	currentFocusPoint,
	...props
}) => {
	const { nodes, materials } = useGLTF(m);
	const maskRef = useRef();
	const { gl, viewport } = useThree();
	const lastX = useRef(0);
	const rotationSpeed = useRef(0);
	const dampingFactor = 0.95;

	const handlePointerDown = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setIsRotating(true);

		// Calculate the clientX based on whether it's a touch event or a mouse event
		const clientX = event.touches ? event.touches[0].clientX : event.clientX;

		// Store the current clientX position for reference
		lastX.current = clientX;
	};

	// Handle pointer (mouse or touch) up event
	const handlePointerUp = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setIsRotating(false);
	};

	// Handle pointer (mouse or touch) move event
	const handlePointerMove = (event) => {
		event.stopPropagation();
		event.preventDefault();
		if (isRotating) {
			// If rotation is enabled, calculate the change in clientX position
			const clientX = event.touches ? event.touches[0].clientX : event.clientX;

			// calculate the change in the horizontal position of the mouse cursor or touch input,
			// relative to the viewport's width
			const delta = (clientX - lastX.current) / viewport.width;

			// Update the mask's rotation based on the mouse/touch movement
			maskRef.current.rotation.y += delta * 0.01 * Math.PI;

			// Update the reference for the last clientX position
			lastX.current = clientX;

			// Update the rotation speed
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	// Handle keydown events
	const handleKeyDown = (event) => {
		if (event.key === "ArrowLeft") {
			if (!isRotating) setIsRotating(true);

			maskRef.current.rotation.y += 0.005 * Math.PI;
			rotationSpeed.current = 0.007;
		} else if (event.key === "ArrowRight") {
			if (!isRotating) setIsRotating(true);

			maskRef.current.rotation.y -= 0.005 * Math.PI;
			rotationSpeed.current = -0.007;
		}
	};

	// Handle keyup events
	const handleKeyUp = (event) => {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			setIsRotating(false);
		}
	};

	useEffect(() => {
		// Add event listeners for pointer and keyboard events
		const canvas = gl.domElement;
		canvas.addEventListener("pointerdown", handlePointerDown);
		canvas.addEventListener("pointerup", handlePointerUp);
		canvas.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		// Remove event listeners when component unmounts
		return () => {
			canvas.removeEventListener("pointerdown", handlePointerDown);
			canvas.removeEventListener("pointerup", handlePointerUp);
			canvas.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

	// This function is called on each frame update
	useFrame(() => {
		// If not rotating, apply damping to slow down the rotation (smoothly)
		if (!isRotating) {
			// Apply damping factor
			rotationSpeed.current *= dampingFactor;

			// Stop rotation when speed is very small
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}

			maskRef.current.rotation.y += rotationSpeed.current;
		} else {
			// When rotating, determine the current stage based on mask's orientation
			const rotation = maskRef.current.rotation.y;
			const normalizedRotation =
				((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Set the current stage based on the mask's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});

	return (
		<a.group ref={maskRef} {...props} dispose={null}>
			<a.group scale={0.01}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4155__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[10.922, 312.065, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4153__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[-1.136, 678.209, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4151__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[3.052, 544.902, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4149__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[9.003, 948.134, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4147__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[-143.856, 793.626, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4145__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[167.565, 795.262, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4141__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[-472.901, 1208.817, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4137__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[486.813, 1208.368, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4138__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[-280.596, 1472.776, 43.067]}
					scale={9518.728}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.path4159__0.geometry}
					material={materials["Scene_-_Root"]}
					position={[302.063, 1472.776, 43.067]}
					scale={9518.728}
				/>
			</a.group>
		</a.group>
	);
};

export default mask;