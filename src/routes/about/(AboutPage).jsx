import { Title } from '@solidjs/meta'
import * as styles from './AboutPage.module.css'

export default function Index() {
  return (
    <>
      <>
        <Title>Jamie Sheehan | About</Title>
      </>
      <div class={styles.mainContent}>
        <picture>
          <source media="(min-width:980px)" srcset="/img/about_min.webp" />
          <img src="/img/about_mobile_min.webp" class="shadow" alt="Moka pot with a cup of espresso" />
        </picture>
        <div>
          <h1 class="center-text">About Jamie</h1>
          <div class={styles.aboutDescription}>
            <p>
              Jamie is an anthropology, archeology, world mythology, and nature enthusiast; she finds people, cultures, and history endlessly fascinating. She loves to explore places both famous and forgotten but would happily live the rest of her life confined to the forest she grew up in.
            </p>
            <p>
              She studied psychology, computer science, and journalism in college before entering the medical field as a phlebotomist, and she now lives in northern Idaho with her husband and two fluffy kittens, Pumpkin the Lionheart and Avalon Nimue.
            </p>
            <p>
              When not writing, she can be found playing racket sports, baking chocolate chip cookies and pastries, trailing her husband to disc golf courses around the PNW, and spending far too much time with her espresso machine.
            </p>
            <p>
              Though Jamie is a Christian, she doesn't write explicitly Christian fiction.
            </p>

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

const footerQuote = {
  quote: "What we want is not more little books about Christianity, but more little books by Christians on other subjects—with their Christianity latent.",
  attribution: "C. S. Lewis",
  title: "Christian Apologetics"
}