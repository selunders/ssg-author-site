import { For, createEffect, onCleanup } from "solid-js";
import * as styles from "./HomePage.module.css";

import { Title } from "@solidjs/meta";
import { FaBrandsGoodreadsG, FaBrandsInstagram, FaBrandsPinterest, FaBrandsSpotify } from 'solid-icons/fa';
import { IoMailOutline } from 'solid-icons/io';

const footerQuote = {
  quote: "First, I do not sit down at my desk to put into verse something that is already clear in my mind. If it were clear in my mind, I should have no incentive or need to write about it. We do not write in order to be understood; we write in order to understand.",
  attribution: "Cecil Day Lewis"
}

export default function Index() {
  createEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "jamiesheehan.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#333",
        input: "#fff",
        email: "#333",
        text: "#eee",
      }
    }

    const substackScript = document.createElement('script')
    substackScript.src = "https://substackapi.com/widget.js"
    substackScript.async = true
    document.body.appendChild(substackScript)
    onCleanup(() => {
      document.body.removeChild(substackScript)
    })
  })

  return (
    <>
      <>
        <Title>Author Jamie Sheehan</Title>
        <Meta name="description">Author Jamie Sheehan's Website</Meta>
      </>
      <div class={`${styles.homepage} ${styles.mainContent}`} >
        <img
          class="shadow"
          src="/img/HomePage_alt-min.webp"
          alt="Books, coffee, and sunglasses with an ocean view in the background"
        />
        <div class={styles.links}>
          <ul>
            <For each={myLinks}>
              {link => (
                <li>
                  <a class={link.class ?? null} href={link.href} target="_blank" aria-label={link.ariaLabel}>
                    {link.display}
                  </a>
                </li>
              )}
            </For>
          </ul>
          <div>
            <p class={styles.substackLink}>Subscribe to my newsletter:</p>
            <div id="custom-substack-embed"></div>
          </div>
        </div>
      </div>
      <div class="quoteBlock">
        <p>"{footerQuote.quote}"</p>
        <p>— {footerQuote.attribution}</p>
      </div>
    </>
  )
}

const myLinks = [
  {
    href: "https://www.pinterest.com/authorjamiesheehan/",
    class: styles.pinterestLink,
    ariaLabel: "Visit my Pinterest",
    display: () => <FaBrandsPinterest />
  },
  {
    href: "https://open.spotify.com/user/jamiedanae",
    class: styles.spotifyLink,
    ariaLabel: "Follow me on Spotify",
    display: () => <FaBrandsSpotify />
  },
  {
    href: "https://www.goodreads.com/user/show/44081734-jamie-danae",
    ariaLabel: "Check out my Goodreads",
    display: () => <FaBrandsGoodreadsG />
  },
  {
    href: "https://www.instagram.com/authorjamiesheehan",
    class: styles.igLink,
    ariaLabel: "Follow me on Instagram",
    display: () => <FaBrandsInstagram />
  },
  {
    href: "mailto:authorjamiesheehan@gmail.com",
    class: styles.mailLink,
    ariaLabel: "Send me an email",
    display: () => <IoMailOutline />
  }
]