from preloaded import send_request
import asyncio


async def request_manager(n: int) -> str:
    return ''.join(await asyncio.gather(*(send_request() for _ in range(n))))