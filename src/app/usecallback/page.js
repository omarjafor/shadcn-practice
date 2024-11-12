"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

function ParentComponent() {
  const [count, setCount] = useState(10);

  // Using useCallback to memoize the function
  const decrementCount = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [setCount]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <p className="text-lg font-semibold text-gray-800">
        Count: <span className="text-primary">{count}</span>
      </p>
      <Button
        onClick={decrementCount}
        className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors rounded"
      >
        Decrement
      </Button>
    </div>
  );
}

export default ParentComponent;
