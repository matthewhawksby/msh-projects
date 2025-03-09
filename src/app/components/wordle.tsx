"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TARGET_WORD = "planet";
const FIRST_WORD = "bridge";
const MAX_ATTEMPTS = 6;

const getFeedback = (guess: string, target: string): string => {
  let feedback: string[] = Array(6).fill("⬜");
  let targetCounts: Record<string, number> = {};

  for (let letter of target) {
    targetCounts[letter] = (targetCounts[letter] || 0) + 1;
  }

  guess.split("").forEach((letter, i) => {
    if (letter === target[i]) {
      feedback[i] = "🟩";
      targetCounts[letter] -= 1;
    }
  });

  guess.split("").forEach((letter, i) => {
    if (feedback[i] === "🟩") return;
    if (targetCounts[letter] > 0) {
      feedback[i] = "🟨";
      targetCounts[letter] -= 1;
    }
  });
  return feedback.join(" ");
};

export default function WordleGame() {
  const [attempts, setAttempts] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [usedLetters, setUsedLetters] = useState<Record<string, number>>({});
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (attempts.length === 0) return;
    let letterUsage: Record<string, number> = {};
    attempts.forEach(word => {
      word.split("").forEach(letter => {
        letterUsage[letter] = (letterUsage[letter] || 0) + 1;
      });
    });
    setUsedLetters(letterUsage);
  }, [attempts]);

  const handleSubmit = (): void => {
    if (input.length !== 6 || gameOver) return;

    const newAttempts = [...attempts, input];
    setAttempts(newAttempts);
    setInput("");

    if (input === TARGET_WORD || newAttempts.length >= MAX_ATTEMPTS) {
      setGameOver(true);
    }
  };

  const restartGame = (): void => {
    setAttempts([]);
    setGameOver(false);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-2xl font-bold">Six-Letter Wordle</h1>
      <p className="text-lg">First word: <span className="font-bold">{FIRST_WORD}</span></p>
      <Card className="w-80 p-4">
        <CardContent>
          {attempts.map((word, index) => (
            <p key={index} className="text-lg">{word} - {getFeedback(word, TARGET_WORD)}</p>
          ))}
          {gameOver && <p className="mt-4 text-red-500">Game Over! The word was {TARGET_WORD}.</p>}
        </CardContent>
      </Card>
      <input 
        type="text" 
        maxLength={6} 
        value={input} 
        onChange={(e) => setInput(e.target.value.toLowerCase())} 
        className="border rounded p-2 text-lg"
        disabled={gameOver}
      />
      <Button onClick={handleSubmit} disabled={gameOver || input.length !== 6}>Submit</Button>
      <Button onClick={restartGame} className="mt-2">Restart</Button>
    </div>
  );
}