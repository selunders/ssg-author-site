import { Show } from 'solid-js';
import * as styles from './BookPage.module.css'

function days_to_release() {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const today = new Date().getTime()
  const release_day = new Date('March 24, 2024').getTime()
  const diff = Math.abs(release_day - today);
  return Math.ceil(diff / ONE_DAY);
}

export default function Index() {
  return (
    <>
      <div class={styles.mainContent}>
        <img src="/img/hls_ss.jpg" class="shadow" alt="Hearts Like Silver book cover" />
        <div>
          <Show when={days_to_release() >= 1} fallback={<h1 class="center-text">Out Now!</h1>}>
            <h1 class="center-text">{`Countdown to Release: ${days_to_release()} day${days_to_release() > 1 ? 's' : ''}!`}</h1>
          </Show>
          <div class={styles.bookDescription}>
            <br />
            <p class="bold center-text">Queen. Redcape. Sorceress. Human.</p>
            <h6 class={`${styles.dateHeading} center-text`}>13th-14th Century, Scotland </h6>
            <p>
              Margaret, the last heir to the Scottish throne, is on her way to England when she's betrayed by relations who seek her crown. She's dragged to a dark border castle inhabited by a clan of redcapes—savage creatures who soak their capes in blood to survive—and becomes one of them. Unable to live among humans, her hope of becoming Queen of Scots flickers and dies.
            </p>
            <p>
              When Margaret meets a friend of her late mother—a Scottish laird with the gift of prophecy—her hope is rekindled. He helps recover some of her stolen memories, and she discovers she's a sorceress with the ability to use human hearts to bind objects or memories. With her newly awakened magic, she can free herself from her cape, recover the throne her mother left for her, and reclaim the life she was meant to have. But taking hearts is an addictive trade; Margaret's newfound fixation soon makes her question the true meaning of freedom, and she is forced to choose between the throne and her humanity.</p>
            <h6 class="center-text">5th Century, Kingdom of the Burgundians</h6>
            <p>
              Gudrun, Margaret's ancestor, is a Burgundian princess whose mother, Grimhild, gets her addicted to heart-taking. She kills and regrets, and her mother makes her forget—it's a cycle Gudrun can't escape, until she meets a man with a pure heart who brings light to her dark world. He gives her hope that she can overcome her sinister desires, escape her mother, and redeem her soul—but that hope is snuffed out when she wakes to find him murdered.
            </p>
            <p>
              Gudrun devotes her life to resurrecting her lover, but to bring him back, she needs to cut out the heart of his murderer, whom she believes is Grimhild. With splintered memories and a tortured heart, Gudrun hunts her mother for the sake of her one true love… and her own redemption.</p>
            <br />
            <p class="tiny-text center-text">
              <em>
                Pitched as </em>Outlander<em> meets </em>Grave Mercy<em> but with more gore and less romance, </em>Hearts Like Silver<em> is a dark, historical fantasy that explores themes of forgiveness, redemption, and freedom. <br />
              </em>
              <br />
              Coming March 24, 2024.
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
  quote: "Every author ought to write every book as if he were going to be beheaded the day he finished it.",
  attribution: "F. Scott Fitzgerald",
  title: "This Side of Paradise"
}