import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/web-design')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/services/web-design"!</div>
}
