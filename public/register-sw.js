const stateContainer = document.getElementById("state");

function finish(state) {
  stateContainer.textContent = state;
  console.log("" + state);
  window.parent.postMessage(state, "*");
}

try {
  window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      finish("");
    })
    .catch(() => {
      finish("");
    });
} catch (e) {
  finish("");
}
