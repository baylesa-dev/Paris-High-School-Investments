import fastify from 'fastify'
// @ts-ignore
import fastifyBlipp from 'fastify-blipp'
import fastifyCookie from 'fastify-cookie'
import fastifySession from 'fastify-session'
import Mongoose from 'mongoose'


import config from './config'
import routes from './routes'
import { seedDatabase } from './utils'

const createServer = async () => {
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

    // Routes
    await server.register(routes)

    // Listen
    await server.listen(config.server.port, config.server.ip)

    // Dump routes
    // @ts-ignore
    await server.blipp()
}

const connectDatabase = async () => {
    const uri = `mongodb://${config.database.host}:${config.database.port}/${config.database.database}`

    console.info(`Connecting database on '${uri}'...`)

    await Mongoose.connect(uri, {
        // user: config.database.username,
        // pass: config.database.password,
        useNewUrlParser: true
    })

    console.info(`Database connected on '${uri}'.`)
    console.info('Checking database content...')

    await seedDatabase()
}

const main = async () => {
    try {
        await connectDatabase()
        await createServer()
    } catch (e) {
        console.error(e.message)
        process.exit(1)
    }
}

main()