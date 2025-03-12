// src/utils/websocket.js
import io from 'socket.io-client';
import { SOCKET_ENDPOINT } from './constants';

class WebSocketManager {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect() {
    this.socket = io(SOCKET_ENDPOINT);
    
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Set up listeners for various events
    this.socket.on('odds_update', (data) => {
      this.notifyListeners('odds_update', data);
    });

    this.socket.on('match_update', (data) => {
      this.notifyListeners('match_update', data);
    });

    this.socket.on('bet_result', (data) => {
      this.notifyListeners('bet_result', data);
    });
  }

  addListener(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  removeListener(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  notifyListeners(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new WebSocketManager();