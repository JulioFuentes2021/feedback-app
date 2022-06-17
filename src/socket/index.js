import { io } from "socket.io-client";

let socket;

export const connection = async () => {
    try {
        const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
        const { token } = await response.json();
        socket = io.connect("http://localhost:5000", {
            extraHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return socket
    } catch (error) {
        return error
    }
}

export const sockets = await connection();

// export const socket = io("http://localhost:5000");


export const Test = () => {
    socket.emit('test', 'Julio Fuentes', (response) => {
        console.log('Status: ', response.status)
    })
}

export const addUpvoteSocket = (callback) => {
    socket.emit('addUpvote', callback())
    // testingBackendEmitter()
}

export const testingBackendEmitter = () => {
    socket.on('client', (socket) => {
        console.log('EL cllient papapappa')
    })
};