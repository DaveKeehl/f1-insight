import React, { useState } from "react"

export default function MultiTable<T>({modes, initialMode, data}: {
  modes: T[];
  initialMode: T;
  data: {
    mode: T;
    table: React.ReactNode;
  }[]
}) {
  const [mode, setMode] = useState(initialMode)

  const table = data.find(item=> item.mode === mode)?.table

  if (!table) return <></>

  return (
    <div>
      <div>
        {data.map(item => {
          <button key={item.mode} onClick={() => setMode(item.mode)}>{item.mode}</button>
        })}
      </div>
      {table}
    </div>
  )
}