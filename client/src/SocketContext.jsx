import React, { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("http://localhost:5000");

const ContextProvider = ({ children }) => {
	const [stream, setStream] = useState(null);
	const [me, setMe] = useState("");
	const [call, setCall] = useState({});

	const userVideo = useRef();

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((currentStream) => {
				setStream(currentStream);

				userVideo.current.srcObject = currentStream;
			});

		socket.on("me", (id) => setMe(id));

		socket.on("calluser", ({ from, name: callerName, signal }) => {
			setCall({ isRecievingCall: true, from, name: callerName, signal });
		});
	}, []);

	const answerCall = () => {};

	const callUser = () => {};

	const disconnectCall = () => {};
};
