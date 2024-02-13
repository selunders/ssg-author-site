import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { MetaProvider } from "@solidjs/meta";
import './app.css'
import AppLayout from "./fragments/AppLayout";

export default function App() {
  return (
    <MetaProvider>
      <Router root={props => <AppLayout><Suspense>{props.children}</Suspense></AppLayout>}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}