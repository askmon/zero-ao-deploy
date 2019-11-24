const Router = require('koa-router')

// middlewares
const error = require('./middlewares/error')
const authenticated = require('./middlewares/firebase-auth')
const authorized = require('./middlewares/authorization')

// handlers
const greetings = require('./handlers/greetings')
const users = require('./handlers/users')
const auth = require('./handlers/auth')

const ROLES_ADMIN = ['ADMIN']

// routes
const router = new Router()

router.use(error)

router.get('/hello/:name', greetings.hello)
router.get('/hello', greetings.hello)
router.get('/', greetings.index)

router.get('/users', authenticated, users.getAllUsers)
router.post('/users', authenticated, authorized(ROLES_ADMIN), users.createUser)

router.post('/auth', auth.authenticate)

module.exports = router
