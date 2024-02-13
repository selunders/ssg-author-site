import { For, createEffect, onCleanup } from "solid-js";
import * as styles from "./HomePage.module.css";

import { FaBrandsGoodreadsG, FaBrandsInstagram, FaBrandsPinterest, FaBrandsSpotify } from 'solid-icons/fa';
import { IoMailOutline } from 'solid-icons/io';
import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const footerQuote = {
  quote: "First, I do not sit down at my desk to put into verse something that is already clear in my mind. If it were clear in my mind, I should have no incentive or need to write about it. We do not write in order to be understood; we write in order to understand.",
  attribution: "Cecil Day Lewis"
}

export default function Index() {
  return (
    <>
      <Title>Home</Title>
      <A href="/about">About</A>
      <h1>Home Page <FaBrandsGoodreadsG /></h1>
      <p>{footerQuote.quote}</p>
    </>
  )
}