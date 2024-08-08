"use client"
import { useState } from "react"
import { addTask } from "./actions";
import { useFormState } from "react-dom";
import React from "react";

export default function AddTask() {
  const [text, setText] = useState("");

  const [state, formAction] = useFormState(addTask, null);

  React.useEffect(() => {
    if (!state) {
      return
    }

    if (state.result) {
      setText('');
    }
  }, [state])

  return (
    <form className="mt-4" action={formAction}>
      <input name="text" type="text" className="w-full border border-gray-300 rounded-lg px-2 py-1" placeholder="新しいタスクを入力してください" required value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2">追加</button>
    </form>
  )
}
