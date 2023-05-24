import Fastify from 'fastify'
import fastify from 'fastify'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.log.info('Fastify server is running...')
  // TODO: register here mercurius plugin

  return server
}
