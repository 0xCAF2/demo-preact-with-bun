import { useContext } from "preact/hooks"
import { AppState } from "./appState"

export function GlobalState() {
  const appState = useContext(AppState)

  const onClick = () => {
    appState.count.value++
  }

  return <div onClick={onClick}>Global State (useContext) {appState.count} [Click me]</div>
}
