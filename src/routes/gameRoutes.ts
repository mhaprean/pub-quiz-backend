import express from 'express';
import {
  createGame,
  deleteGame,
  getAllGames,
  getCurrentGame,
  getMyGames,
  getMyGamesAsHost,
  joinGame,
} from '../controllers/gameController';

import { isAuth, isHost } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', [isAuth], getAllGames);

router.get('/mygames', [isAuth], getMyGames);

router.get('/hostedbyme', [isAuth, isHost], getMyGamesAsHost);

// add game
router.post('/create', [isAuth, isHost], createGame);

router.get('/:id', [isAuth], getCurrentGame);

router.post('/join/:id', [isAuth], joinGame);

router.delete('/:id', [isAuth, isHost], deleteGame);

export default router;
