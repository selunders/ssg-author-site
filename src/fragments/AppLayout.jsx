import * as styles from './AppLayout.module.css'

import { A } from "@solidjs/router";

export default function AppLayout(props) {
  return (
    <div class={styles.container}>
      <nav class={styles.nav}>
        <A class={styles.logo} href="/">Jamie Sheehan</A>
        <div class={styles.links}>
          <A href="/">Home</A>
          <A href="/about">About</A>
          <A href="/books">Books</A>
          <A href="/contact">Contact</A>
        </div>
      </nav>
      {props.children}
    </div>
  )
}
