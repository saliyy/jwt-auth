const Router = require('express').Router;
const authController = require('../controllers/AuthController');
const router = new Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);

module.exports = router;
