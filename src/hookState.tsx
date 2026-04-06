import { useState } from "preact/hooks"

// // @ts-ignore
// import.meta.hot.accept()

export function HookState() {
  const [count, setCount] = useState(0)
  
  const onClick = () => {
    setCount(count + 1)
  }

  return <div onClick={onClick}>Hook's State (useState) {count} [Click me]</div>
}
