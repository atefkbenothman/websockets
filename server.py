import asyncio
import websockets


async def handler(websocket) -> None:
  async for message in websocket:
    print(f"server received msg: {message}")


async def main():
  print("starting server...")
  async with websockets.serve(handler, "", 8001):
    print("server started")
    await asyncio.Future()  # run forever


if __name__ == "__main__":
  asyncio.run(main())
