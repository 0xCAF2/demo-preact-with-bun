import "./index.css"
import { AppState, createAppState } from "./appState"
import { LocalState } from "./localState"
import { GlobalState } from "./globalState"
import { HookState } from "./hookState"

interface AppProps {
  name: string
}

export function App(props: AppProps) {
  return (
    <AppState.Provider value={createAppState()}>
      <div>
        <h1 class="green">Hello, {props.name}.</h1>
        <LocalState />
        <GlobalState />
        <GlobalState />
        <HookState />
      </div>
    </AppState.Provider>
  )
}
