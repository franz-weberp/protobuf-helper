import protobuf from 'protobufjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const protoFilePath = join(__dirname, 'protobuf/schema.proto')

const root = protobuf.loadSync(protoFilePath)
const Message = root.lookupType('Message')

export { Message }
