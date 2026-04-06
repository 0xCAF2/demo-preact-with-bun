import { signal } from "@preact/signals"
import { createContext } from "preact"

export const AppState = createContext(createAppState())

export function createAppState() {
  const count = signal(0)

  return {
    count,
  }
}
