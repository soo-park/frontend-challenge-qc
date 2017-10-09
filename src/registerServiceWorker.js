
/* 

Usually, the code will have more components to make the eniter app modulized.
However, Codepen was requested to be used to submit the code.
Since Codepen allows only 10 files for free account unless you pay annual fee,
the following list of things are adjusted to accomodate:

- Components and helper functions were consolidated to fit into the limitation.
- Redux, Thunk, Sass could not be used because they need more files
- README.md could not be generated (thus, these comment lines)
- Since Codepen does not allow any media only one SVG image was used
- The mock api server file generated was substituted with hard-coded data

*/

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New content is available; please refresh.');
                } else {
                  console.log('Content is cached for offline use.');
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
