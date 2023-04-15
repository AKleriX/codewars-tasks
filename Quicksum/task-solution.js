function quicksum(packet) {
  let sum = 0;
  for (let i = 0; i < packet.length; i++)
    if (/[A-Z]/.test(packet[i])) sum += (i + 1) * (packet[i].charCodeAt(0) - 64);
  return /^[A-Z ]+$/.test(packet) ? sum : 0;
}
