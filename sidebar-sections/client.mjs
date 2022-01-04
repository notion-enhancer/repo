/**
 * notion-enhancer: tweaks
 * (c) 2021 dragonwocky <thedragonring.bod@gmail.com> (https://dragonwocky.me/)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

"use strict";

export default async function ({ web }, db) {
  await web.whenReady([".notion-outliner-private"]);
  const cssInsert = await db.get(["insert.css"]);
  if (cssInsert?.filename) {
    document.head.append(
      web.html`<style id="enhancer--tweak-${cssInsert.filename}">${cssInsert.content}</style>`
    );
  }

  // user option stuff
  const sections = ["one", "two", "three", "four"];
  const margin = await db.get(["userMargin"]);
  const hidden = await db.get(["hidePrivate"]);

  // hide private section header if applicable
  if (document.querySelector(".notion-outliner-private-header") && hidden) {
    document
      .querySelector(".notion-outliner-private-header")
      .classList.add(`enhancer--hide-private`);
  }

  for (const section of sections) {
    const sectionUuid = await db.get([`section.${section}`]);
    const sectionTitle = await db.get([`title.${section}`]);

    // formats uuid (my regex is awful lmao)
    if (sectionUuid) {
      const pageid =
        sectionUuid.substr(0, 8) +
        "-" +
        sectionUuid.substr(8, 4) +
        "-" +
        sectionUuid.substr(12, 4) +
        "-" +
        sectionUuid.substr(16, 4) +
        "-" +
        sectionUuid.substr(20, 12);

      // gets page in sidebar
      const $page = document.querySelector(
        `.notion-sidebar [data-block-id='${pageid}']`
      );

      // if user input title, create title element
      const $title = sectionTitle
        ? web.html`<div class="enhancer--header-page-title">${sectionTitle}</div>`
        : web.html``;

      // conditionally render title and margin
      if ($page) {
        $page.classList.add(`enhancer--header-page-${margin}`);
        web.render($page, $title);
      }
    }
  }
}
