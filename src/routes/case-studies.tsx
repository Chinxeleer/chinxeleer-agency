import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/case-studies"!</div>
}
