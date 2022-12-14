import asyncio
import datetime
import json
import websockets


CLIENTS = set()

async def handler(websocket) -> None:
  CLIENTS.add(websocket)

  async for message in websocket:

    for websocket in CLIENTS:
      print(f"server received msg: {message}")

      data = json.loads(message)
      name = data["name"]
      msg = data["message"]

      chatObj = {
        "name": name,
        "message": msg,
        "datetime": datetime.datetime.now().strftime("%H:%M:%S")
      }

      await websocket.send(json.dumps(chatObj))

async def main():
  print("starting server...")
  async with websockets.serve(handler, "", 8001):
    print("server started")
    await asyncio.Future()  # run forever


if __name__ == "__main__":
  asyncio.run(main())
