let enquireJs;
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = mediaQuery => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquireJs = require('enquire.js');
}

export function enquireScreen(cb, str) {
  if (!enquire) {
    return;
  }
  enquireJs.register(str || 'only screen and (max-width: 768px)', {
    match: () => {
      cb && cb(true);
    },
    unmatch: () => {
      cb && cb();
    },
  });
}

export const enquire = enquireJs;