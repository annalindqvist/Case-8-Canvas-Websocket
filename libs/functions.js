import { WebSocketServer } from "ws";
/**
 * parse JSON
 *
 * @param {*} data
 * @return {obj} 
 */
function parseJSON(data) {
    // try to parse json
    try {
        let obj = JSON.parse(data);
        return obj;        
    } catch (error) {
        return {error: "An error receving data...expected json format"};
    }
}
/**
 * broadcast to clients
 *
 * @param {WebSocketServer} wss
 * @param {obj} objBroadcast
 */
function broadcast(wss, objBroadcast) {
    // broadcast to all clients
    wss.clients.forEach((client) => {
        client.send(JSON.stringify(objBroadcast));
    });
}
/**
 * broadcast to clients, but not itself
 *
 * @param {WebSocketServer} wss
 * @param {obj} wsExclude
 * @param {obj} objBroadcast
 */
 function broadcastButExclude(wss, wsExclude, objBroadcast) {
    // broadcast to all clients
    wss.clients.forEach((client) => {
        if (client !== wsExclude) {
            client.send(JSON.stringify(objBroadcast));
        }
    });
}
export { parseJSON, broadcast, broadcastButExclude }