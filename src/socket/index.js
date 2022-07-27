import { io } from "socket.io-client";

let socket;

export const connectionSocket = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/v1/refresh', { credentials: 'include' })
        const { token } = await response.json();
        socket = io.connect("http://localhost:5000", {
            extraHeaders: {
                Authorization: `Bearer ${token}`
            },
            reconnect: true,
            'multiplex': false
        });

        return socket
    } catch (error) {
        return error
    }
}

export const sockets = await connectionSocket();

export const Test = () => {
    socket.emit('test', 'Julio Fuentes', (response) => {
        console.log('Status: ', response.status)
    })
}

export const addUpvoteSocket = (callback) => {
    socket.emit('addUpvote', callback())
}

export const testingBackendEmitter = () => {
    socket.on('client', (socket) => {
        console.log('EL cllient papapappa')
    })
};