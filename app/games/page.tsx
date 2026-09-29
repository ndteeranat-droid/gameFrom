"use client";

import GameExplorer from "../components/GameExplorer";
import { games } from "../data/gamesData";

export default function GamesPage() {
  return <GameExplorer initialGames={games} />;
}