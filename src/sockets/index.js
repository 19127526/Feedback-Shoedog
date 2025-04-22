// socketClient.js (hoặc .ts nếu dùng TypeScript)
import { io } from "socket.io-client";
import { encryptString } from '@/utils/help.js';

export let socketInstance = null;

const setUpSocketConnection = () => {
    if (socketInstance) return socketInstance;

    const params = {
        query: {
            code: encryptString(JSON.stringify({ status: 1994 }))
        },
        timeout: 30000,
        reconnection: false,
        forceNew: true,
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
        transports: ['websocket'],
    };

    /*https://sv.shoedog.vn*/
    socketInstance = io('https://sv.shoedog.vn', params);
    return socketInstance;
};

const getSocketClient = () => {
    return socketInstance;
};

const disconnectSocket = () => {
    if (socketInstance) {
        socketInstance.disconnect();
        socketInstance = null;
    }
};

export { setUpSocketConnection, getSocketClient, disconnectSocket };
