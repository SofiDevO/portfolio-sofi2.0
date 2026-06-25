export class fastYoutube extends HTMLElement {
  static name = "fast-youtube";

  constructor() {
    super();
    this.preview();
  }

  static get observedAttributes() {
    return ["id", "title", "start-at"];
  }

  connectedCallback() {
    this.addEventListener("click", (e) => {
      e.preventDefault();
      this.setVideo();
    });
  }

  static get style() {
    return `
            fast-youtube > .play__container {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 16/9;
            }

            fast-youtube > .play__container > .play__button {
                width: 68px;
                height: 48px;
                background: transparent;
                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="68" height="48" viewBox="0 0 227 160" fill="none"><path d="M222.252 24.9795C220.966 20.1506 218.436 15.7435 214.914 12.1984C211.392 8.65325 207.002 6.09409 202.181 4.77646C184.485 1.12752e-06 113.5 0 113.5 0C113.5 0 42.5152 1.12752e-06 24.8092 4.77646C19.9906 6.09553 15.6023 8.65533 12.0821 12.2004C8.56198 15.7454 6.03317 20.1517 4.74808 24.9795C0 42.799 0 79.9702 0 79.9702C0 79.9702 0 117.141 4.74808 134.961C6.03399 139.79 8.56422 144.197 12.0861 147.742C15.608 151.287 19.9983 153.846 24.8187 155.164C42.5152 159.94 113.5 159.94 113.5 159.94C113.5 159.94 184.485 159.94 202.191 155.164C207.011 153.846 211.401 151.287 214.923 147.742C218.445 144.197 220.975 139.79 222.261 134.961C227 117.141 227 79.9702 227 79.9702C227 79.9702 227 42.799 222.252 24.9795ZM90.2798 113.718V46.2229L149.612 79.9702L90.2798 113.718Z" fill="url(%23paint0_linear_645_749)"/><defs><linearGradient id="paint0_linear_645_749" x1="-142.29" y1="81.6023" x2="227.001" y2="81.4144" gradientUnits="userSpaceOnUse"><stop stop-color="%236600CC"/><stop offset="1" stop-color="%23009990"/></linearGradient></defs></svg>');
                background-size: cover;
                border: none;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }
            }

            fast-youtube > .title__container {
                position:absolute;
                top:0;
                left:0;
                width: 100%;
                padding-left: 15px;

                & > H2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        color: aqua;
                        font-weight: bold;
                        filter: drop-shadow(3px 3px 2px #000000);
                }
            }

            fast-youtube {
                position: relative;
                display: block;
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                height: 100%;
                aspect-ratio: 16/9;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 5px;
            }

            fast-youtube > iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
            }

            fast-youtube, iframe {
                border-radius: 20px;
                border: 2px solid #362548;
            }


        `;
  }

  private preview() {
    if (this.getAttribute("src")) {
      this.id = this.getId(this.getAttribute("src"));
    }

    this.innerHTML = `

        <style>${fastYoutube.style}</style>
        <div class="title__container">
            <h2 class="title__text">${this.title}</h2>
        </div>
        <div class="play__container">
            <button class="play__button"></button>
        </div>
        <noscript>
            <iframe src="https://www.youtube.com/embed/${this.id}" allowfullscreen></iframe>
        </noscript>
     `;

    this.setThumbail();
  }

  private setThumbail() {
    const thumbJpg = `https://i1.ytimg.com/vi/${this.id}/hqdefault.jpg`;

    this.style.backgroundImage = `url(${thumbJpg})`;
  }

  private setVideo() {
    if (
      this.querySelector("iframe:not([ancestor='noscript'])") ||
      this.querySelector("iframe")
    ) {
      const existingIframe = this.querySelector("iframe");
      // Check if it's the noscript one (noscript is ignored by querySelector usually, but just in case)
      if (
        existingIframe &&
        existingIframe.parentElement?.tagName !== "NOSCRIPT"
      ) {
        return; // Already playing
      }
    }

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${this.id}?autoplay=1`;
    iframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.zIndex = "10";
    this.appendChild(iframe);
  }

  private getId(src: string) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^#&?\s]*)/i;
    const match = src.match(regex);
    return match ? match[1] : new URL(src).searchParams.get("v");
  }
}

// Ignore TypeScript error for assigning to static name if any
// @ts-ignore
customElements.define(fastYoutube.name || "fast-youtube", fastYoutube);
