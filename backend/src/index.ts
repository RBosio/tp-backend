import "reflect-metadata"
import { startServer } from "./main";

async function main() {
  const app = await startServer()
  await app.listen(app.get('port'))
  console.log('Server listen on port', app.get('port'))
}

main()