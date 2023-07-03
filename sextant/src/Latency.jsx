import React, { useEffect, useState } from 'react';

const Latency = () => {
    const [latency, setLatency] = useState('');
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:55455");

        socket.onopen = () => {
            console.log("Web Socket COnnection Established");
        }


        socket.onmessage = (event) => {
            const serverTime = parseInt(event.data);
            const latency = Date.now() - serverTime;
            console.log(latency);
            setLatency(latency);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed.');
        };


        return () => {
            socket.close();
        };

    }, [])

    return (
        <div>Latency : {latency} ms</div>
    )
}

export default Latency