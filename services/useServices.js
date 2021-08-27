import WebSocket from "ws";

export async function getCandlesStick() {

  // symbol string mandatory
  // interval string mandatory
  // startTime Long No
  // endTime Long No
  // limit int No


    const response = await fetch(`https://api.binance.com/api/v3/klines`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    return await response.json();
  }


  export async function getAvgPrices() {

    // symbol string mandatory
      const response = await fetch(`https://api.binance.com/api/v3/avgPrice`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      return await response.json();
    }
  
    export async function getStreamPrices() {

      // symbol string mandatory
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@kline_<interval>');
        ws.on('message', function incoming(data) {
          console.log(data);
        });
        
    
    
        const response = await fetch(`https://api.binance.com/api/v3/avgPrice`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        return await response.json();
      }
  

