import fastify from 'fastify'
// @ts-ignore
import fastifyBlipp from 'fastify-blipp'
import fastifyCookie from 'fastify-cookie'
import fastifySession from 'fastify-session'

import config from './config'


const createServer = async() => {
    console.info(`Creating HTTP server on 'http://${config.server.ip}:${config.server.port}'`)

    const server = fastify({
        logger: {
            level: 'info'
        }
    })

    // Plugins
    await server.register(fastifyCookie)
    await server.register(fastifySession, {
        secret: config.security.secret,
        cookie: {
            secure: false
        }
    })
    await server.register(fastifyBlipp)

    // Listen
    await server.listen(config.server.port, config.server.ip)

    // Dump routes
    // @ts-ignore
    await server.blipp()
}

const main = async() => {
    try {
        await createServer()
    } catch(e) {
        console.error(e.message)
        process.exit(1)
    }
}

main()