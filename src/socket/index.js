import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");

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