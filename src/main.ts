import { ConsoleLogger, Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import config from "./config"

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: "Aligo",
    }),
  })
  await app.listen(config.port)
}
bootstrap()
  .then(() => {
    Logger.log(`✅ ✅ ✅  Server is running on :${config.port} ✅ ✅ ✅ `, "Bootstrap")
  })
  .catch((error) => {
    Logger.error(`❌ ❌ ❌  Error starting server: ${error}  ❌ ❌ ❌ `, undefined, "Bootstrap")
  })
