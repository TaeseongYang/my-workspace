'use client';

import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export default function Counter({
  initialValue = 0,
  min,
  max,
  step = 1,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((prev) => {
      const newValue = prev + step;
      return max !== undefined && newValue > max ? prev : newValue;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      const newValue = prev - step;
      return min !== undefined && newValue < min ? prev : newValue;
    });
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">카운터</h1>

      <div className="text-6xl font-bold text-blue-600">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={handleDecrement}
          className="rounded-lg bg-red-500 px-6 py-3 text-white font-semibold hover:bg-red-600 active:scale-95 transition-all"
        >
          −
        </button>

        <button
          onClick={handleReset}
          className="rounded-lg bg-gray-500 px-6 py-3 text-white font-semibold hover:bg-gray-600 active:scale-95 transition-all"
        >
          리셋
        </button>

        <button
          onClick={handleIncrement}
          className="rounded-lg bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          +
        </button>
      </div>

      {min !== undefined && max !== undefined && (
        <p className="text-sm text-gray-600">
          범위: {min} ~ {max}
        </p>
      )}
    </div>
  );
}
