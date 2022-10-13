import { io, Socket } from 'socket.io-client'

const PANDAFLAG_SOCKET_URL: string = 'ws://api.pandaflag.com/'

export interface Flag {
  name: string
  description: string
  enabled: boolean
}

class PandaflagClient {
  private flags: Flag[] = []
  private isLoading: boolean = true

  init(apiKey: string, environment: string) {
    const socket: Socket = io(PANDAFLAG_SOCKET_URL, { query: { apiKey, environment } })

    socket.on('connect', () => {
      socket.on('newFlags', (data: Flag[]) => {
        this.flags = data
        this.isLoading = false
      })

      socket.on('error', (data: Error) => {
        socket.disconnect()
        throw new Error(data.message)
      })
    })
  }

  getFlags() {
    return this.flags
  }

  getFlag(flagName: string) {
    if (!flagName) {
      throw new Error('Flag name unspecified')
    }

    const foundFlag = this.flags.find((flag: Flag) => flag.name === flagName)
    if (this.isLoading || !foundFlag) {
      return undefined
    }

    return foundFlag
  }
}

export default new PandaflagClient()
