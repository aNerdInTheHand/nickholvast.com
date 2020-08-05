# Routing with react-router and react-bootstrap

The routing in this app is handled by [react-router](https://github.com/ReactTraining/react-router#readme)
and structured with [react-bootstrap](https://react-bootstrap.github.io).
Pages are lazy loaded by webpack, so they won't be loaded in the client until required.

## Adding a route

To add a new route, lazy import the page's component and add a new `NavItem` with
a `Nav.Link as={Link}`. This renders the link as a `react-router Link`.
Then simply add a new `Route` in the switch statement wrapped in an `ErrorBoundary`.

## ErrorBoundary

Each page component is wrapped in an [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html) which will catch any JS errors
in the `ErrorBoundary` component's child tree and display a custom UI.
