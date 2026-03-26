import "./index.css"

interface AppProps {
  name: string
}

export function App(props: AppProps) {
  return <h1 class="green">Hello, {props.name}!</h1>
}
