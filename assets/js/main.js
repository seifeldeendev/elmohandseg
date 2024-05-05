document.documentElement.className = document.documentElement.className.replace(
  "no-js",
  "js"
);
(function () {
  this._N2 = this._N2 || {
    _r: [],
    _d: [],
    r: function () {
      this._r.push(arguments);
    },
    d: function () {
      this._d.push(arguments);
    },
  };
}).call(window);
!(function (a) {
  a.indexOf("Safari") > 0 &&
    -1 === a.indexOf("Chrome") &&
    document.documentElement.style.setProperty("--ss-safari-fix-225962", "1px");
})(navigator.userAgent);

_N2.r("documentReady", function () {
  _N2.r(
    [
      "documentReady",
      "smartslider-frontend",
      "smartslider-backgroundanimation",
      "SmartSliderWidgetArrowImage",
      "SmartSliderWidgetBulletTransition",
      "ss-simple",
    ],
    function () {
      new _N2.SmartSliderSimple("n2-ss-2", {
        admin: false,
        "background.video.mobile": 1,
        loadingTime: 2000,
        alias: {
          id: 0,
          smoothScroll: 0,
          slideSwitch: 0,
          scroll: 1,
        },
        align: "normal",
        isDelayed: 0,
        responsive: {
          mediaQueries: {
            all: false,
            desktopportrait: ["(min-width: 1200px)"],
            tabletportrait: [
              "(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)",
              "(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)",
            ],
            mobileportrait: [
              "(orientation: landscape) and (max-width: 900px)",
              "(orientation: portrait) and (max-width: 700px)",
            ],
          },
          base: {
            slideOuterWidth: 1200,
            slideOuterHeight: 800,
            sliderWidth: 1200,
            sliderHeight: 800,
            slideWidth: 1200,
            slideHeight: 800,
          },
          hideOn: {
            desktopLandscape: false,
            desktopPortrait: false,
            tabletLandscape: false,
            tabletPortrait: false,
            mobileLandscape: false,
            mobilePortrait: false,
          },
          onResizeEnabled: true,
          type: "auto",
          sliderHeightBasedOn: "real",
          focusUser: 1,
          focusEdge: "auto",
          breakpoints: [
            {
              device: "tabletPortrait",
              type: "max-screen-width",
              portraitWidth: 1199,
              landscapeWidth: 1199,
            },
            {
              device: "mobilePortrait",
              type: "max-screen-width",
              portraitWidth: 700,
              landscapeWidth: 900,
            },
          ],
          enabledDevices: {
            desktopLandscape: 0,
            desktopPortrait: 1,
            tabletLandscape: 0,
            tabletPortrait: 1,
            mobileLandscape: 0,
            mobilePortrait: 1,
          },
          sizes: {
            desktopPortrait: {
              width: 1200,
              height: 800,
              max: 3000,
              min: 1200,
            },
            tabletPortrait: {
              width: 701,
              height: 467,
              customHeight: false,
              max: 1199,
              min: 701,
            },
            mobilePortrait: {
              width: 320,
              height: 213,
              customHeight: false,
              max: 900,
              min: 320,
            },
          },
          overflowHiddenPage: 0,
          focus: {
            offsetTop: "#wpadminbar",
            offsetBottom: "",
          },
        },
        controls: {
          mousewheel: 0,
          touch: "horizontal",
          keyboard: 1,
          blockCarouselInteraction: 1,
        },
        playWhenVisible: 1,
        playWhenVisibleAt: 0.5,
        lazyLoad: 0,
        lazyLoadNeighbor: 0,
        blockrightclick: 0,
        maintainSession: 0,
        autoplay: {
          enabled: 1,
          start: 1,
          duration: 8000,
          autoplayLoop: 1,
          allowReStart: 0,
          pause: {
            click: 1,
            mouse: "0",
            mediaStarted: 1,
          },
          resume: {
            click: 0,
            mouse: "0",
            mediaEnded: 1,
            slidechanged: 0,
          },
          interval: 1,
          intervalModifier: "loop",
          intervalSlide: "current",
        },
        perspective: 1500,
        layerMode: {
          playOnce: 0,
          playFirstLayer: 1,
          mode: "skippable",
          inAnimation: "mainInEnd",
        },
        bgAnimations: {
          global: 0,
          color: "RGBA(51,51,51,1)",
          speed: "normal",
          slides: [
            {
              animation: [
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 1.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 1.5,
                    },
                    next: {
                      scale: 0.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    zIndex: 2,
                    current: {
                      ease: "easeOutCubic",
                      opacity: 0,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 1.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 0.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 0.5,
                    },
                    next: {
                      scale: 1.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: true,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                    },
                    next: {
                      ease: "easeOutCubic",
                      xP: 100,
                    },
                  },
                  invert: {
                    zIndex: 2,
                    current: {
                      xP: 100,
                      scale: 1,
                    },
                    next: {
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                      xP: 0,
                    },
                  },
                },
              ],
              speed: "normal",
              color: "RGBA(51,51,51,1)",
            },
            {
              animation: [
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 1.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 1.5,
                    },
                    next: {
                      scale: 0.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    zIndex: 2,
                    current: {
                      ease: "easeOutCubic",
                      opacity: 0,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 1.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 0.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 0.5,
                    },
                    next: {
                      scale: 1.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: true,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                    },
                    next: {
                      ease: "easeOutCubic",
                      xP: 100,
                    },
                  },
                  invert: {
                    zIndex: 2,
                    current: {
                      xP: 100,
                      scale: 1,
                    },
                    next: {
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                      xP: 0,
                    },
                  },
                },
              ],
              speed: "normal",
              color: "RGBA(51,51,51,1)",
            },
            {
              animation: [
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 1.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 1.5,
                    },
                    next: {
                      scale: 0.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    zIndex: 2,
                    current: {
                      ease: "easeOutCubic",
                      opacity: 0,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: false,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 0.75,
                    current: {
                      ease: "easeOutCubic",
                      scale: 1.5,
                      opacity: 0,
                    },
                    next: {
                      ease: "easeOutCubic",
                      opacity: 0,
                      scale: 0.5,
                    },
                  },
                  invert: {
                    current: {
                      scale: 0.5,
                    },
                    next: {
                      scale: 1.5,
                    },
                  },
                },
                {
                  type: "Flat",
                  tiles: {
                    crop: true,
                    delay: 0,
                    sequence: "ForwardDiagonal",
                  },
                  main: {
                    type: "both",
                    duration: 1,
                    current: {
                      ease: "easeOutCubic",
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                    },
                    next: {
                      ease: "easeOutCubic",
                      xP: 100,
                    },
                  },
                  invert: {
                    zIndex: 2,
                    current: {
                      xP: 100,
                      scale: 1,
                    },
                    next: {
                      scale: 0.6999999999999999555910790149937383830547332763671875,
                      xP: 0,
                    },
                  },
                },
              ],
              speed: "normal",
              color: "RGBA(51,51,51,1)",
            },
          ],
        },
        mainanimation: {
          type: "vertical",
          duration: 800,
          delay: 0,
          ease: "easeOutQuad",
          shiftedBackgroundAnimation: 0,
        },
        carousel: 1,
        initCallbacks: function () {
          new _N2.SmartSliderWidgetArrowImage(this);
          new _N2.SmartSliderWidgetBulletTransition(this, {
            area: 10,
            dotClasses: "n2-style-bcef68443b2682444059e693254dd628-dot ",
            mode: "",
            action: "click",
          });
        },
      });
    }
  );
});
window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/14.0.0/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/14.0.0/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "assets/js/wp-emoji-release.min.js",
  },
};
/*! This file is auto-generated */
!(function (i, n) {
  var o, s, e;

  function c(e) {
    try {
      var t = {
        supportTests: e,
        timestamp: new Date().valueOf(),
      };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }

  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === r[t];
    });
  }

  function u(e, t, n) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\uddfa\ud83c\uddf3",
              "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !n(
          e,
          "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff",
          "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff"
        );
    }
    return !1;
  }

  function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : i.createElement("canvas"),
      a = r.getContext("2d", {
        willReadFrequently: !0,
      }),
      o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        o[e] = t(a, e, n);
      }),
      o
    );
  }

  function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = {
      everything: !0,
      everythingExceptFlag: !0,
    }),
    (e = new Promise(function (e) {
      i.addEventListener("DOMContentLoaded", e, {
        once: !0,
      });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(",") +
                "));",
              r = new Blob([e], {
                type: "text/javascript",
              }),
              a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
              });
            return void (a.onmessage = function (e) {
              c((n = e.data)), a.terminate(), t(n);
            });
          } catch (e) {}
        c((n = f(s, u, p)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);
