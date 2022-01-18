function getParticipants(handshakes){
    let handshakesCounter = handshakes,
        mansCounter;
    for (mansCounter = 1; handshakesCounter > 0; mansCounter++)
      handshakesCounter -= mansCounter;
    return mansCounter;    
  }