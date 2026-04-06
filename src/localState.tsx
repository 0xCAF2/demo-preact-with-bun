import { useSignal } from "@preact/signals"

export function LocalState() {
  const count = useSignal(0)

  const onClick = () => {
    count.value++
  }

  return <div onClick={onClick}>Local State (useSignal) {count} [Click me]</div>
}
