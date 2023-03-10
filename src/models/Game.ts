import mongoose, { Document, Model } from 'mongoose';
import { IUser } from './User';

interface DocumentResult<T> {
  _doc?: T;
}

export interface IGame extends DocumentResult<IGame> {
  title: string;
  active: boolean;
  ended: boolean;
  password: string;
  host: string;
  difficulty: string;
  category: string;
  type: string;
  quiz: string;
  participants: string[];
  tournament: string;
  results: {
    username: string;
    points: number;
    user_id: string;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IGameModel extends IGame, Document {}

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    ended: {
      type: Boolean,
      default: false,
    },
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],
    host: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    difficulty: {
      type: String,
    },
    type: {
      type: String,
    },
    category: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    quiz: {
      type: mongoose.Types.ObjectId,
      ref: 'Quiz',
    },
    tournament: {
      type: mongoose.Types.ObjectId,
      ref: 'Tournament',
      required: false,
    },
    results: [
      {
        username: {
          type: String,
        },
        points: {
          type: Number,
        },
        user_id: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IGameModel>('Game', GameSchema);
