def ipv4_to_binary(ipv4_addr: str) -> str:
    return '.'.join(f'{int(o):08b}' for o in ipv4_addr.split('.'))