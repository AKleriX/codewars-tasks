const createMessage = (mes) => word => word ? createMessage(`${mes} ${word}`) : mes;