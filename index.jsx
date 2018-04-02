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
  if (!enquireJs) {
    return;
  }

  const query = str || 'only screen and (max-width: 767.99px)';

  const handler = {
    match: () => {
      cb && cb(true);
    },
    unmatch: () => {
      cb && cb();
    },
  };

  enquireJs.register(query, handler);

  return function () {
    enquireJs.unregister(query, handler);
  }
}

export const enquire = enquireJs;
