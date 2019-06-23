import { Router } from 'express'
import * as handlers from '../handlers/handlers'

// Express router
const router = Router()

// Routes
router.get('/stats/balance', handlers.stats.balance);
router.get('/stats/investors_amount', handlers.stats.investorsAmount);
router.get('/stats/investors_today', handlers.stats.investorsToday);
router.get('/investors/all', handlers.investors.all);
router.get('/investors/investor', handlers.investors.investor);
router.post('/auth/sign_in', handlers.auth.signIn)

// Default export
export default router