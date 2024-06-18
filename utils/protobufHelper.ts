import protobuf from 'protobufjs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const protoFilePath = resolve(__dirname, './schema.proto')


function exportMessage() {
  try {
    const root = protobuf.loadSync(protoFilePath)
    const Message = root.lookupType('Message')
    return Message
  } catch (error) {
    console.error('Error loading schema.proto:', error)
  }
}

export default exportMessage()