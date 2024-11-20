"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Button2 from "@/components/Button";

function ParentComponent() {
  const [state, setState] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const user = {name : 'john', age: 25}
  // Using useCallback to memoize the function
  // const decrementCount = useCallback(() => {
  //   setCount((prevCount) => prevCount - 1);
  // }, [setCount]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <p className="text-lg font-semibold text-gray-800">
        Switch: <span className="text-primary">{isOn ? "ON" : "OFF"}</span>
      </p>
      <Button2 myName={isOn} setIsOn={setIsOn} user={user}/>
    </div>
  );
}

export default ParentComponent;
