(function () {
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("mobile-panel");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var sel = button.getAttribute("data-copy");
      var node = sel ? document.querySelector(sel) : null;
      if (!node) return;
      var text = node.textContent || "";
      var done = function () {
        var live = document.getElementById("copy-status");
        if (live) {
          live.textContent = "Copied";
          window.setTimeout(function () {
            live.textContent = "";
          }, 2000);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          window.getSelection().selectAllChildren(node);
        });
      } else {
        window.getSelection().selectAllChildren(node);
      }
    });
  });
})();
