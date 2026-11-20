"use client";

import Script from "next/script";

const VLIBRAS_SCRIPT = "https://vlibras.gov.br/app/vlibras-plugin.js";

function initVLibrasWidget() {
  if (window.__vlibrasManualInit || !window.VLibras) return;
  window.__vlibrasManualInit = true;
  new window.VLibras.Widget({
    rootPath: "https://vlibras.gov.br/app",
    position: "L",
  });
}

export function VLibrasWidget() {
  return (
    <>
      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
      <Script
        id="vlibras-plugin"
        src={VLIBRAS_SCRIPT}
        strategy="afterInteractive"
        onLoad={initVLibrasWidget}
      />
    </>
  );
}