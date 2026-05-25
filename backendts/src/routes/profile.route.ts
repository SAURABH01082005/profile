import express from 'express'
import { sendContactReplyEmailFunction } from '../controllers/profile.controller';

const profileRoute = express.Router();

profileRoute.post("/send-email",sendContactReplyEmailFunction   )

export default profileRoute