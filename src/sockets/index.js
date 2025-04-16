import { useState, useEffect } from 'react';
import {io} from "socket.io-client";

const SocketClient = () => {
    const [socketClient, setSocketClient] = useState();
    // Socket Payment
    const setUpSocketConnection = () => {

        let params = {
            query: {
                // clientType: 'WEBAPP',
                // manufacturerId: userInfo?.manufacturer_id,
                // memberId: userInfo?.member_id,
                // macAddress: macAddress,
            },
            timeout: 30000,
            reconnection:  false,
            forceNew: true,
            reconnectionAttempts:3,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            randomizationFactor: 0.5,
            transports: ['websocket'],
        };
        const socketIo = io('http://localhost:3000', params);
        setSocketClient(socketIo);
    };

    useEffect(() => {
        if (socketClient) {
            socketClient.on('reconnect_attempt', (data) => {
                console.log('reconnect_attempt data', data);
            });
        }
    }, [socketClient]);

    return {
        socketClient,
        setUpSocketConnection,
    };
};

export { SocketClient };
