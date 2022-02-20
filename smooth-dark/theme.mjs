/**
 * notion-enhancer: smooth dark
 * (c) 2022 blorbb (https://github.com/blorbb)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

'use strict';

function rgbLinearShade(amount, color) {
  const int = parseInt,
    round = Math.round,
    [r, g, b, a] = color.split(','),
    flip = 1 - Math.abs(amount);
  let [newR, newG, newB] = [
    flip * int(r[3] == 'a' ? r.slice(5) : r.slice(4)),
    flip * int(g),
    flip * int(b),
  ];
  if (amount > 0) {
    const scaledAmount = 255 * amount;
    [newR, newG, newB] = [scaledAmount + newR, scaledAmount + newG, scaledAmount + newB];
  }
  return (
    'rgb' +
    (a ? 'a(' : '(') +
    round(newR) +
    ',' +
    round(newG) +
    ',' +
    round(newB) +
    (a ? ',' + a : ')')
  );
}

export default async function ({ fmt }, db) {
  {
    const background = await db.get(['background']),
      bgSecondaryTint = await db.get(['bg_secondary_tint']),
      cardTint = await db.get(['bg_card_tint']),
      [r, g, b] = background
        .slice(5, -1)
        .split(',')
        .map((i) => parseInt(i));

    if (!(r === 33 && g === 39 && b === 52)) {
      document.documentElement.style.setProperty('--smooth_dark--bg', background);
      // other bg dependent colors
      document.documentElement.style.setProperty(
        '--smooth_dark--ui_corner_action',
        rgbLinearShade(0.09, background)
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--ui_corner_action-hover',
        rgbLinearShade(0.14, background)
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--ui_corner_action-active',
        rgbLinearShade(0.2, background)
      );
      // with some opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--code',
        rgbLinearShade(0.15, `rgba(${r}, ${g}, ${b}, 0.8)`)
      );
    }



    document.documentElement.style.setProperty(
      '--smooth_dark--bg_secondary',
      rgbLinearShade(bgSecondaryTint / 100, background)
    );

    document.documentElement.style.setProperty(
      '--smooth_dark--bg_card',
      rgbLinearShade(cardTint / 100, background)
    );
  }

  {
    const primary = await db.get(['primary']),
      [r, g, b] = primary
        .slice(5, -1)
        .split(',')
        .map((i) => parseInt(i));
    if (!(r === 255 && g === 171 && b === 0)) {
      document.documentElement.style.setProperty('--smooth_dark--accent_blue', primary);
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_blue-selection',
        `rgba(${r},${g},${b},0.2)`
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_blue-hover',
        rgbLinearShade(0.07, primary)
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_blue-active',
        rgbLinearShade(0.16, primary)
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_blue-text',
        fmt.rgbContrast(r, g, b)
      );
    }
  }

  {
    const secondary = await db.get(['secondary']),
      [r, g, b] = secondary
        .slice(5, -1)
        .split(',')
        .map((i) => parseInt(i));
    if (!(r === 235 && g === 87 && b === 87)) {
      document.documentElement.style.setProperty('--smooth_dark--accent_red', secondary);
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_red-button',
        `rgba(${r},${g},${b},0.1)`
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--accent_red-text',
        fmt.rgbContrast(r, g, b)
      );
    }
  }

  {
    const borderRadius = await db.get(['border_radius']);
    if (borderRadius !== 3) {
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight-border-radius',
        borderRadius
      );
    }
  }

  {
    const colorProfile = await db.get(['color_profile']);
    if (colorProfile === 'regular') {
      // highlight text: white
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight-text',
        'rgba(255, 255, 255, 1)'
      );

      // text colors: lch(70%, 55, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--text_red',
        'rgba(255, 133, 124, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_orange',
        'rgba(233, 151, 84, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_yellow',
        'rgba(216, 179, 100, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_green',
        'rgba(121, 188, 89, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_blue',
        'rgba(69, 180, 255, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_purple',
        'rgba(185, 155, 255, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_pink',
        'rgba(255, 126, 174, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_gray',
        'rgba(171, 171, 171, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_brown',
        'rgba(184, 114, 56, 1)' // lch(55%, 50, 60)
      );

      // highlight background: lch(65%, 60, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_red',
        'rgba(227, 106, 99, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_orange',
        'rgba(203, 124, 60, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_yellow',
        'rgba(195, 158, 70, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_green',
        'rgba(94, 160, 64, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_blue',
        'rgb(49, 142, 196)' // slightly less saturated
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_purple',
        'rgba(157, 129, 229, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_pink',
        'rgba(229, 99, 147, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_gray',
        'rgb(145, 145, 145, 0.5)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_brown',
        'rgba(174, 99, 35, 1)' // lch(50%, 55, 60)
      );

      // callouts: same as highlights with 80% saturation and 30% opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_red',
        'rgba(215, 117, 112, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_orange',
        'rgba(189, 127, 76, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_yellow',
        'rgba(183, 153, 82, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_green',
        'rgba(98, 150, 74, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_blue',
        'rgba(64, 138, 181, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_purple',
        'rgba(161, 138, 219, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_pink',
        'rgba(216, 111, 149, 0.3)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_gray',
        'rgba(145, 145, 145, 0.15)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_brown',
        'rgba(183, 129, 87, 0.3)'
      );

      // tag bg: lch(70%, 40, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_red',
        'rgba(242, 119, 112, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_orange',
        'rgba(218, 137, 72, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_yellow',
        'rgba(199, 168, 102, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_green',
        'rgba(108, 174, 77, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_blue',
        'hsla(206, 60%, 59%, 0.9)' // lower saturation
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_purple',
        'rgba(171, 142, 244, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_pink',
        'rgba(244, 112, 160, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_gray',
        'rgba(145, 145, 145, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_light_gray',
        'rgba(171, 171, 171, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_brown',
        'rgba(170, 101, 44, 0.9)' // lch(50%, 50, 60)
      );

      // boards: same as tags at half opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--board_red',
        'rgba(242, 119, 112, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_orange',
        'rgba(218, 137, 72, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_yellow',
        'rgba(199, 168, 102, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_green',
        'rgba(108, 174, 77, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_blue',
        'rgba(82, 160, 218, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_purple',
        'rgba(171, 142, 244, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_pink',
        'rgba(244, 112, 160, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_gray',
        'rgba(145, 145, 145, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_light_gray',
        'rgba(171, 171, 171, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_brown',
        'rgba(170, 101, 44, 0.45)'
      );
    } else if (colorProfile === 'pastel') {
      // highlight text: black
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight-text',
        'rgba(0, 0, 0, 1)'
      );

      // text colors: lch(65%, 50, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--text_red',
        'rgba(235, 124, 116, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_orange',
        'rgba(214, 139, 80, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_yellow',
        'rgba(191, 151, 66, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_green',
        'rgba(114, 173, 85, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_blue',
        'rgba(71, 165, 246, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_purple',
        'rgba(90, 163, 226, 1)'  // lowered saturation
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_pink',
        'rgba(237, 118, 160, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_gray',
        'rgba(145, 145, 145, 1)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--text_brown',
        'rgba(176, 118, 72, 1)' // lch(55%, 40, 60)
      );

      // highlight background: lch(75%, 40, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_red',
        'rgba(252, 159, 150, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_orange',
        'rgba(234, 170, 122, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_yellow',
        'rgba(214, 179, 111, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_green',
        'rgba(151, 197, 126, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_blue',
        'rgba(147, 191, 236, 0.9)' // lowered saturation
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_purple',
        'rgba(197, 173, 249, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_pink',
        'rgba(252, 155, 187, 0.9)'
      );
      // probably used more as an elevation than actual highlight - lowered opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_gray',
        'rgba(158, 158, 158, 0.45)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--highlight_brown',
        'rgba(176, 118, 72, 0.9)' // lch(55%, 40, 60)
      );

      // callours: highlight colors with half opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_red',
        'rgba(252, 159, 150, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_orange',
        'rgba(234, 170, 122, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_yellow',
        'rgba(214, 179, 111, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_green',
        'rgba(151, 197, 126, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_blue',
        'rgba(147, 191, 236, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_purple',
        'rgba(197, 173, 249, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_pink',
        'rgba(252, 155, 187, 0.35)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_gray',
        'rgba(158, 158, 158, 0.18)' // lowered opacity for elevation
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--callout_brown',
        'rgba(176, 118, 72, 0.35)'
      );

      // tag bg: lch(70%, 45, hue)
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_red',
        'rgba(244, 142, 133, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_orange',
        'rgba(224, 155, 101, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_yellow',
        'hsla(40, 60%, 57%, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_green',
        'rgba(132, 185, 105, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_blue',
        'rgba(101, 176, 251, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_purple',
        'rgba(184, 159, 242, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_pink',
        'rgba(245, 137, 173, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_gray',
        'rgba(145, 145, 145, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_light_gray',
        'rgba(171, 171, 171, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--tag_brown',
        'rgba(195, 128, 76, 0.8)' // lch(60%, 45, 60)
      );

      // boards: same as tags at half opacity
      document.documentElement.style.setProperty(
        '--smooth_dark--board_red',
        'rgba(244, 142, 133, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_orange',
        'rgba(224, 155, 101, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_yellow',
        'hsla(40, 60%, 57%, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_green',
        'rgba(132, 185, 105, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_blue',
        'rgba(101, 176, 251, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_purple',
        'rgba(184, 159, 242, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_pink',
        'rgba(245, 137, 173, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_gray',
        'rgba(145, 145, 145, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_light_gray',
        'rgba(171, 171, 171, 0.4)'
      );
      document.documentElement.style.setProperty(
        '--smooth_dark--board_brown',
        'rgba(195, 128, 76, 0.4)'
      );
    }
  }
}
