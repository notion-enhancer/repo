/**
 * notion-enhancer: theming
 * (c) 2021 dragonwocky <thedragonring.bod@gmail.com> (https://dragonwocky.me/)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

// a development tool used for generating color variables
// and the contents of colors.css

// included for posterity/updates
// -- not executed by the enhancer at runtime

const lightGray = {
  'light': {
    'tag': 'rgba(227, 226, 224, 0.5)',
    'tag-text': 'rgb(50, 48, 44)',
    'board': 'rgba(249, 249, 245, 0.5)',
    'board-card': 'white',
    'board-card_text': 'inherit',
    'board-text': 'rgba(145, 145, 142, 0.5)',
  },
  'dark': {
    'tag': 'rgba(255, 255, 255, 0.13)',
    'tag-text': 'rgba(255, 255, 255, 0.804)',
    'board': 'rgba(255, 255, 255, 0.016)',
    'board-card': 'rgba(255, 255, 255, 0.094)',
    'board-card_text': 'inherit',
    'board-text': 'rgba(255, 255, 255, 0.443)',
  },
};

const colors = {
  'gray': {
    'light': {
      'text': 'rgba(120, 119, 116, 1)',
      'highlight': 'rgba(241, 241, 239, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(241, 241, 239)',
      'callout-text': 'currentColor',
      'tag': 'rgb(227, 226, 224)',
      'tag-text': 'rgb(50, 48, 44)',
      'board': 'rgba(247, 247, 245, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(145, 145, 142)',
    },
    'dark': {
      'text': 'rgba(155, 155, 155, 1)',
      'highlight': 'rgba(47, 47, 47, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(37, 37, 37)',
      'callout-text': 'currentColor',
      'tag': 'rgb(90, 90, 90)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(32, 32, 32)',
      'board-card': 'rgb(47, 47, 47)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(127, 127, 127)',
    },
  },
  'brown': {
    'light': {
      'text': 'rgba(159, 107, 83, 1)',
      'highlight': 'rgba(244, 238, 238, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(244, 238, 238)',
      'callout-text': 'currentColor',
      'tag': 'rgb(238, 224, 218)',
      'tag-text': 'rgb(68, 42, 30)',
      'board': 'rgba(250, 246, 245, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(187, 132, 108)',
    },
    'dark': {
      'text': 'rgba(186, 133, 111, 1)',
      'highlight': 'rgba(74, 50, 40, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(47, 39, 35)',
      'callout-text': 'currentColor',
      'tag': 'rgb(96, 59, 44)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(35, 30, 28)',
      'board-card': 'rgb(54, 40, 34)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(132, 86, 65)',
    },
  },
  'orange': {
    'light': {
      'text': 'rgba(217, 115, 13, 1)',
      'highlight': 'rgba(251, 236, 221, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(251, 236, 221)',
      'callout-text': 'currentColor',
      'tag': 'rgb(250, 222, 201)',
      'tag-text': 'rgb(73, 41, 14)',
      'board': 'rgba(252, 245, 242, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(215, 129, 58)',
    },
    'dark': {
      'text': 'rgba(199, 125, 72, 1)',
      'highlight': 'rgba(92, 59, 35, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(56, 40, 30)',
      'callout-text': 'currentColor',
      'tag': 'rgb(133, 76, 29)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(37, 31, 27)',
      'board-card': 'rgb(66, 47, 34)',
      'board-text': 'rgb(167, 91, 26)',
    },
  },
  'yellow': {
    'light': {
      'text': 'rgba(203, 145, 47, 1)',
      'highlight': 'rgba(251, 243, 219, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(251, 243, 219)',
      'callout-text': 'currentColor',
      'tag': 'rgb(253, 236, 200)',
      'tag-text': 'rgb(64, 44, 27)',
      'board': 'rgba(250, 247, 237, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(203, 148, 51)',
    },
    'dark': {
      'text': 'rgba(202, 152, 73, 1)',
      'highlight': 'rgba(86, 67, 40, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(57, 46, 30)',
      'callout-text': 'currentColor',
      'tag': 'rgb(137, 99, 42)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(35, 31, 26)',
      'board-card': 'rgb(64, 51, 36)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(155, 110, 35)',
    },
  },
  'green': {
    'light': {
      'text': 'rgba(68, 131, 97, 1)',
      'highlight': 'rgba(237, 243, 236, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(237, 243, 236)',
      'callout-text': 'currentColor',
      'tag': 'rgb(219, 237, 219)',
      'tag-text': 'rgb(28, 56, 41)',
      'board': 'rgba(244, 248, 243, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(108, 155, 125)',
    },
    'dark': {
      'text': 'rgba(82, 158, 114, 1)',
      'highlight': 'rgba(36, 61, 48, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(34, 43, 38)',
      'callout-text': 'currentColor',
      'tag': 'rgb(43, 89, 63)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(29, 34, 32)',
      'board-card': 'rgb(35, 49, 42)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(45, 118, 80)',
    },
  },
  'blue': {
    'light': {
      'text': 'rgba(51, 126, 169, 1)',
      'highlight': 'rgba(231, 243, 248, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(231, 243, 248)',
      'callout-text': 'currentColor',
      'tag': 'rgb(211, 229, 239)',
      'tag-text': 'rgb(24, 51, 71)',
      'board': 'rgba(241, 248, 251, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(91, 151, 189)',
    },
    'dark': {
      'text': 'rgba(94, 135, 201, 1)',
      'highlight': 'rgba(20, 58, 78, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(29, 40, 46)',
      'callout-text': 'currentColor',
      'tag': 'rgb(40, 69, 108)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(27, 31, 34)',
      'board-card': 'rgb(27, 45, 56)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(41, 90, 149)',
    },
  },
  'purple': {
    'light': {
      'text': 'rgba(144, 101, 176, 1)',
      'highlight': 'rgba(244, 240, 247, 0.8)',
      'highlight-text': 'currentColor',
      'callout': 'rgba(244, 240, 247, 0.8)',
      'callout-text': 'currentColor',
      'tag': 'rgb(232, 222, 238)',
      'tag-text': 'rgb(65, 36, 84)',
      'board': 'rgba(249, 246, 252, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(167, 130, 195)',
    },
    'dark': {
      'text': 'rgba(157, 104, 211, 1)',
      'highlight': 'rgba(60, 45, 73, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(43, 36, 49)',
      'callout-text': 'currentColor',
      'tag': 'rgb(73, 47, 100)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(31, 29, 33)',
      'board-card': 'rgb(48, 39, 57)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(112, 74, 150)',
    },
  },
  'pink': {
    'light': {
      'text': 'rgba(193, 76, 138, 1)',
      'highlight': 'rgba(249, 238, 243, 0.8)',
      'highlight-text': 'currentColor',
      'callout': 'rgba(249, 238, 243, 0.8)',
      'callout-text': 'currentColor',
      'tag': 'rgb(245, 224, 233)',
      'tag-text': 'rgb(76, 35, 55)',
      'board': 'rgba(251, 245, 251, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(205, 116, 159)',
    },
    'dark': {
      'text': 'rgba(209, 87, 150, 1)',
      'highlight': 'rgba(78, 44, 60, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(48, 34, 40)',
      'callout-text': 'currentColor',
      'tag': 'rgb(105, 49, 76)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(35, 28, 31)',
      'board-card': 'rgb(59, 39, 48)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(144, 58, 101)',
    },
  },
  'red': {
    'light': {
      'text': 'rgba(212, 76, 71, 1)',
      'highlight': 'rgba(253, 235, 236, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(253, 235, 236)',
      'callout-text': 'currentColor',
      'tag': 'rgb(255, 226, 221)',
      'tag-text': 'rgb(93, 23, 21)',
      'board': 'rgba(253, 245, 243, 0.7)',
      'board-card': 'white',
      'board-card_text': 'inherit',
      'board-text': 'rgb(225, 111, 100)',
    },
    'dark': {
      'text': 'rgba(223, 84, 82, 1)',
      'highlight': 'rgba(82, 46, 42, 1)',
      'highlight-text': 'currentColor',
      'callout': 'rgb(54, 36, 34)',
      'callout-text': 'currentColor',
      'tag': 'rgb(110, 54, 48)',
      'tag-text': 'rgba(255, 255, 255, 0.804)',
      'board': 'rgb(36, 30, 29)',
      'board-card': 'rgb(62, 40, 37)',
      'board-card_text': 'inherit',
      'board-text': 'rgb(143, 58, 53)',
    },
  },
};

function css() {
  const rgb = (color) =>
      color.startsWith('rgba') && color.endsWith(', 1)')
        ? `rgb(${color.slice(5, -4)})`
        : color,
    notCallout = ":not([style*='border-radius'])",
    notBoardCard = ":not([style*='box-shadow'])",
    isTag =
      "[style*='align-items: center;'][style*='border-radius: 3px; padding-left: '][style*='line-height: 120%;']",
    isTagPalette = "[style*='border-radius: 3px;'][style*='width: 18px; height: 18px;']",
    isHighlightPalette =
      "[style*='align-items: center; justify-content: center; width: 22px; height: 22px;'][style*='border-radius: 3px; font-weight: 500;']";
  let css = '';

  // generate light gray separately
  css += `

    /* light gray */

    .notion-body:not(.dark) [style*='background: ${lightGray.light['tag']}']${isTag},
    .notion-body.dark [style*='background: ${lightGray.dark['tag']}']${isTag} {
      background: var(--theme--tag_light_gray) !important;
      color: var(--theme--tag_light_gray-text) !important;
    }

    .notion-body:not(.dark) [style*='background: ${
      lightGray.light['tag']
    }']${isTagPalette},
    .notion-body.dark [style*='background: ${
      lightGray.dark['board-text']
    }']${isTagPalette} {
      background: var(--theme--tag_light_gray) !important;
      color: var(--theme--tag_light_gray-text) !important;
    }

    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${lightGray.light['board']}'],
    .notion-body.dark
      .notion-board-group[style*='background-color: ${lightGray.dark['board']}'],
    .notion-body:not(.dark) .notion-board-view > .notion-selectable > :first-child > :nth-child(2)
      [style*='background-color: ${lightGray.light['board']}'],
    .notion-body.dark .notion-board-view > .notion-selectable > :first-child > :nth-child(2)
      [style*='background-color: ${lightGray.dark['board']}'] {
      background: var(--theme--board_light_gray) !important;
      color: var(--theme--board_light_gray-text) !important;
    }
    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${lightGray.light['board']}']
      > [data-block-id] > [rel='noopener noreferrer'],
    .notion-body.dark
      .notion-board-group[style*='background-color: ${lightGray.dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] {
      background: var(--theme--board_light_gray-card) !important;
      color: var(--theme--board_light_gray-card_text) !important;
    }
    .notion-body.dark
      .notion-board-group[style*='background-color: ${lightGray.dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] [placeholder="Untitled"] {
      -webkit-text-fill-color: var(--theme--board_light_gray-card_text, var(--theme--board_light_gray-text)) !important;
    }
    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${lightGray.light['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] > .notion-focusable:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    .notion-body.dark
      .notion-board-group[style*='background-color: ${lightGray.dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] > .notion-focusable:hover {
      background: rgba(0, 0, 0, 0.1) !important;
    }
    .notion-body:not(.dark) .notion-board-view
      [style*='color: ${lightGray.light['board-text']}'],
    .notion-body.dark .notion-board-view [style*='color: ${lightGray.dark['board-text']}'],
    .notion-body:not(.dark) .notion-board-view
      [style*='fill: ${lightGray.light['board-text']}'],
    .notion-body.dark .notion-board-view [style*='fill: ${lightGray.dark['board-text']}'] {
      color: var(--theme--board_light_gray-text) !important;
      fill: var(--theme--board_light_gray-text) !important;
    }
  `;

  // generate the rest of the colours
  for (const c in colors) {
    css += `

    /* ${c} */

    .notion-body:not(.dark) [style*='color: ${rgb(colors[c].light['text'])}'],
    .notion-body:not(.dark) [style*='color:${colors[c].light['text']}'],
    .notion-body.dark [style*='color: ${rgb(colors[c].dark['text'])}'],
    .notion-body.dark [style*='color:${colors[c].dark['text']}'] {
      color: var(--theme--text_${c}) !important;
      fill: var(--theme--text_${c}) !important;
    }


    .notion-body:not(.dark) [style*='background: ${
      colors[c].light['highlight']
    }']${notCallout}${notBoardCard},
    .notion-body:not(.dark) [style*='background:${
      colors[c].light['highlight']
    }']${notCallout}${notBoardCard},
    .notion-body:not(.dark) [style*='background: ${rgb(
      colors[c].light['highlight']
    )}']${notCallout}${notBoardCard},
    .notion-body:not(.dark) [style*='background:${rgb(
      colors[c].light['highlight']
    )}']${notCallout}${notBoardCard},
    .notion-body:not(.dark) [style*='background-color: ${
      colors[c].light['highlight']
    }']${notCallout}${notBoardCard},
    .notion-body.dark [style*='background: ${
      colors[c].dark['highlight']
    }']${notCallout}${notBoardCard},
    .notion-body.dark [style*='background:${
      colors[c].dark['highlight']
    }']${notCallout}${notBoardCard},
    .notion-body.dark [style*='background: ${rgb(
      colors[c].dark['highlight']
    )}']${notCallout}${notBoardCard},
    .notion-body.dark [style*='background:${rgb(
      colors[c].dark['highlight']
    )}']${notCallout}${notBoardCard},
    .notion-body.dark [style*='background-color: ${
      colors[c].dark['highlight']
    }']${notCallout}${notBoardCard} {
      background: var(--theme--highlight_${c}) !important;
      color: var(--theme--highlight_${c}-text) !important;
    }

    .notion-body:not(.dark) .notion-callout-block > div
      > [style*='background: ${colors[c].light['callout']}'],
    .notion-body.dark .notion-callout-block > div
      > [style*='background: ${colors[c].dark['callout']}'] {
      background: var(--theme--callout_${c}) !important;
      color: var(--theme--callout_${c}-text) !important;
    }
    .notion-body:not(.dark) [style*='background: ${colors[c].light['tag']}']${isTag},
    .notion-body.dark [style*='background: ${colors[c].dark['tag']}']${isTag} {
      background: var(--theme--tag_${c}) !important;
      color: var(--theme--tag_${c}-text) !important;
    }

    .notion-body:not(.dark) [style*='background: ${
      colors[c].light['callout']
    }']${isHighlightPalette},
    .notion-body.dark [style*='background: ${
      colors[c].dark['callout']
    }']${isHighlightPalette} {
      background: var(--theme--highlight_${c}) !important;
      color: var(--theme--highlight_${c}-text) !important;
    }
    .notion-body:not(.dark) [style*='background: ${
      colors[c].light['tag']
    }']${isTagPalette},
    .notion-body.dark [style*='background: ${
      colors[c].dark['board-text']
    }']${isTagPalette} {
      background: var(--theme--tag_${c}) !important;
      color: var(--theme--tag_${c}-text) !important;
    }

    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${colors[c].light['board']}'],
    .notion-body.dark
      .notion-board-group[style*='background-color: ${colors[c].dark['board']}'],
    .notion-body:not(.dark) .notion-board-view > .notion-selectable > :first-child > :nth-child(2)
      [style*='background-color: ${colors[c].light['board']}'],
    .notion-body.dark .notion-board-view > .notion-selectable > :first-child > :nth-child(2)
      [style*='background-color: ${colors[c].dark['board']}'] {
      background: var(--theme--board_${c}) !important;
      color: var(--theme--board_${c}-text) !important;
    }
    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${colors[c].light['board']}']
      > [data-block-id] > [rel='noopener noreferrer'],
    .notion-body.dark
      .notion-board-group[style*='background-color: ${colors[c].dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] {
      background: var(--theme--board_${c}-card) !important;
      color: var(--theme--board_${c}-card_text) !important;
    }
    .notion-body.dark
      .notion-board-group[style*='background-color: ${colors[c].dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] [placeholder="Untitled"] {
      -webkit-text-fill-color: var(--theme--board_${c}-card_text, var(--theme--board_${c}-text)) !important;
    }
    .notion-body:not(.dark)
      .notion-board-group[style*='background-color: ${colors[c].light['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] > .notion-focusable:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    .notion-body.dark
      .notion-board-group[style*='background-color: ${colors[c].dark['board']}']
      > [data-block-id] > [rel='noopener noreferrer'] > .notion-focusable:hover {
      background: rgba(0, 0, 0, 0.1) !important;
    }
    .notion-body:not(.dark) .notion-board-view
      [style*='color: ${colors[c].light['board-text']}'],
    .notion-body.dark .notion-board-view [style*='color: ${
      colors[c].dark['board-text']
    }'],
    .notion-body:not(.dark) .notion-board-view
      [style*='fill: ${colors[c].light['board-text']}'],
    .notion-body.dark .notion-board-view [style*='fill: ${
      colors[c].dark['board-text']
    }'] {
      color: var(--theme--board_${c}-text) !important;
      fill: var(--theme--board_${c}-text) !important;
    }
  `;
  }
  return css;
}

// 'light' or 'dark'
function vars(mode) {
  // order in which variables will appear
  const sets = {
    'text': '',
    'highlight': '',
    'callout': '',
    // tag_default has the same color in light and dark
    'tag': '--theme--tag_default: rgba(206, 205, 202, 0.5);\n--theme--tag_default-text: var(--theme--text);\n',
    'board': ''
  };

  // light gray separately
  for (let key in lightGray[mode]) {
    const prefix = key.split('-')[0],
      value = lightGray[mode][key];
    if (!sets[prefix]) sets[prefix] = '';
    key = [`--theme--${prefix}_light_gray`, ...key.split('-').slice(1)].join('-');
    sets[prefix] += `${key}: ${value};\n`;
  }

  // other colors
  for (const color in colors) {
    for (let key in colors[color][mode]) {
      const prefix = key.split('-')[0],
        value = colors[color][mode][key];
      if (!sets[prefix]) sets[prefix] = '';
      key = [`--theme--${prefix}_${color}`, ...key.split('-').slice(1)].join('-');
      sets[prefix] += `${key}: ${value};\n`;
    }
  }
  let vars = '';
  for (const set in sets) {
    vars += `\n${sets[set]}`;
  }
  return vars;
}

if (process.argv.includes('css')) {
  console.log(css());
} else if (process.argv.includes('light')) {
  console.log(vars('light'));
} else if (process.argv.includes('dark')) {
  console.log(vars('dark'));
}
