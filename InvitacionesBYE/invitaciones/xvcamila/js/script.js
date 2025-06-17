document.addEventListener("DOMContentLoaded", () => {
  // 1. Partículas animadas de fondo
  const bg = document.querySelector(".background-animation");
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${5 + Math.random() * 10}s`;
    bg.appendChild(particle);
  }

  // 2. Contador regresivo
  const eventDate = new Date("2025-10-04T13:00:00").getTime();
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "<strong>¡Ya comenzó el evento!</strong>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);

});
document.getElementById('confirmacionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const respuestaEl = document.getElementById('respuesta');
  const boton = form.querySelector('button');

  respuestaEl.textContent = '';
  boton.disabled = true;
  boton.innerHTML = `<span class="spinner"></span> Enviando...`;

  fetch('https://script.google.com/macros/s/AKfycbw7Gbehg1qpE2MnVwbUMENNhlqrQcnzdsRKHBnyx83XQgwizSNd7h9BbDpaXYjjG7gQrw/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(response => {
    form.reset();

    respuestaEl.innerHTML = `
      <div class="confirmacion-exitosa">
        <svg viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>¡Gracias por confirmar tu asistencia!</span>
      </div>
    `;

    setTimeout(() => {
      respuestaEl.innerHTML = '';
    }, 5000);
  })
  .catch(error => {
    console.error(error);
    respuestaEl.textContent = 'Ocurrió un error al enviar tu confirmación.';
  })
  .finally(() => {
    boton.disabled = false;
    boton.textContent = 'Confirmar';
  });
});
// Traducciones para el botón de cambio de idioma y el contenido
  const translations = {
      es: {
        title: "Invitación XV Años - Camila Sánchez",
        hero: "Mis XV Años",
        name: "Camila Sánchez",
        date: "4 de Octubre, 2025",
        inviteMessage: "Quiero que seas parte de este momento tan especial",
        intro: "Con alegría en el alma y amor en el corazón, te invito a celebrar mis XV años, un sueño que comienza a hacerse realidad.",
        galleryTitle: "Momentos especiales",
        viewGallery: "Ver galería",
        countdownTitle: "Faltan para el gran día...",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
        mass: "Misa",
        lunch: "Comida",
        reception: "Recepción",
        location: "Ver ubicación",
        dressCodeTitle: "Código de vestimenta:",
        dressCode: "Semiformal o Western",
        noTennis: "No tenis / No colores blanco, beige, ivory",
        giftsTitle: "Regalos",
        giftsText: "Tu presencia en este día tan especial es el mejor regalo que puedo recibir. Si deseas tener un detalle conmigo, se agradecerán las contribuciones en efectivo o puedes depositarlo en el buzón de regalos que estará disponible el día del evento. ¡Gracias por ser parte de este momento tan importante en mi vida!",
        rsvpTitle: "Confirma tu asistencia",
        confirm: "Confirmar",
        finalMessageTitle: "Te invitó con el corazón lleno de ilusión",
        finalMessage: "Ha llegado un día muy especial en nuestras vidas, un momento que hemos esperado con emoción y cariño: los XV años de nuestra querida hija Camila...",
        giftsParagraph1: "Tu presencia en este día tan especial es el mejor regalo que puedo recibir.",
        giftsParagraph2: "Nuestro mejor regalo es tu presencia, pero si tu deseo es tener un detalle con nosotros puedes hacerlo dentro de un sobre.",
        giftsParagraph3: "¡Gracias por ser parte de este momento tan importante en mi vida!",
        finalParagraph1: "Ha llegado un día muy especial en nuestras vidas, un momento que hemos esperado con emoción y cariño: los XV años de nuestra querida hija Camila.",
        finalParagraph2: "Con profundo amor, queremos compartir contigo la dicha de verla crecer, soñar y convertirse en una hermosa joven. Será un honor que nos acompañes en esta celebración tan significativa.",
        finalParagraph3: "Te esperamos para dar gracias a Dios con una misa de acción de gracias y disfrutar juntos una fiesta llena de alegría, familia y momentos inolvidables.",

      },
      en: {
        title: "Quinceañera Invitation - Camila Sánchez",
        hero: "My Quinceañera",
        name: "Camila Sánchez",
        date: "October 4, 2025",
        inviteMessage: "I want you to be part of this special moment",
        intro: "With joy in my soul and love in my heart, I invite you to celebrate my 15th birthday, a dream beginning to come true.",
        galleryTitle: "Special Moments",
        viewGallery: "View Gallery",
        countdownTitle: "Countdown to the big day...",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        mass: "Church Service",
        lunch: "Dinner",
        reception: "Reception",
        location: "View Location",
        dressCodeTitle: "Dress Code:",
        dressCode: "Semi-formal or Western",
        noTennis: "No sneakers / No white, beige, or ivory colors",
        giftsTitle: "Gifts",
        giftsParagraph1: "Your presence on this special day is the best gift I could receive.",
        giftsParagraph2: "Our best gift is your presence, but if you'd like to offer us a thoughtful gift, you can do so in an envelope.",
        giftsParagraph3: "Thank you for being part of this important moment in my life!",
        rsvpTitle: "Confirmation of Attendance",
        confirm: "Confirm",
        finalMessageTitle: "I invite you with a heart full of joy",
        finalParagraph1: "A very special day has arrived in our lives, a moment we've awaited with joy and love: the 15th birthday of our dear daughter Camila.",
        finalParagraph2: "With deep love, we want to share with you the joy of watching her grow, dream, and become a beautiful young woman. It will be an honor to have you with us at this meaningful celebration.",
        finalParagraph3: "We look forward to giving thanks to God in a special mass and then enjoying a joyful party full of family and unforgettable moments."
      }
    };

    let currentLang = 'es';

    document.getElementById('translateBtn').addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      const t = translations[currentLang];
      document.getElementById('translateBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';

      document.title = t.title;
      document.querySelector('.hero h1').textContent = t.hero;
      document.querySelector('.hero h2').textContent = t.name;
      document.querySelector('.hero p').textContent = t.date;

      const detailSections = document.querySelectorAll('.details');
      if (detailSections[0]) {
        detailSections[0].querySelector('h1').textContent = t.inviteMessage;
        detailSections[0].querySelector('p').textContent = t.intro;
      }
      if (detailSections[1]) {
        detailSections[1].querySelector('h1').textContent = t.finalMessageTitle;
        const ps = detailSections[1].querySelectorAll('p');
        if (ps.length >= 3) {
          ps[0].textContent = t.finalParagraph1;
          ps[1].textContent = t.finalParagraph2;
          ps[2].textContent = t.finalParagraph3;
        }
      }


      document.querySelector('.galeria-preview h1').textContent = t.galleryTitle;
      document.querySelector('.galeria-preview button').textContent = t.viewGallery;

      document.querySelector('.countdown h1').textContent = t.countdownTitle;
      document.querySelector('#timer .time-box:nth-child(1) small').textContent = t.days;
      document.querySelector('#timer .time-box:nth-child(2) small').textContent = t.hours;
      document.querySelector('#timer .time-box:nth-child(3) small').textContent = t.minutes;
      document.querySelector('#timer .time-box:nth-child(4) small').textContent = t.seconds;

      document.querySelectorAll('.event h4')[0].textContent = t.mass;
      document.querySelectorAll('.event h4')[1].textContent = t.lunch;
      document.querySelectorAll('.event h4')[2].textContent = t.reception;
      document.querySelectorAll('.event button').forEach(btn => btn.textContent = t.location);

      const dressSections = document.querySelectorAll('.dress-code');
      if (dressSections[0]) {
        dressSections[0].querySelector('h1').textContent = t.dressCodeTitle;
        dressSections[0].querySelectorAll('p')[0].textContent = t.dressCode;
        dressSections[0].querySelectorAll('p')[1].textContent = t.noTennis;
      }
      if (dressSections[1]) {
        dressSections[1].querySelector('h1').textContent = t.giftsTitle;
        const ps = dressSections[1].querySelectorAll('p');
        if (ps.length >= 3) {
          ps[0].textContent = t.giftsParagraph1;
          ps[1].textContent = t.giftsParagraph2;
          ps[2].textContent = t.giftsParagraph3;
        }
      }

      if (dressSections[1]) {
        dressSections[1].querySelector('h1').textContent = t.giftsTitle;
        dressSections[1].querySelectorAll('p')[0].textContent = t.giftsParagraph1;
        dressSections[1].querySelectorAll('p')[1].textContent = t.giftsParagraph2;
        dressSections[1].querySelectorAll('p')[2].textContent = t.giftsParagraph3;
      }

      // Mensaje final
      if (detailSections[1]) {
        detailSections[1].querySelector('h1').textContent = t.finalMessageTitle;
        detailSections[1].querySelectorAll('p')[0].textContent = t.finalParagraph1;
        detailSections[1].querySelectorAll('p')[1].textContent = t.finalParagraph2;
        detailSections[1].querySelectorAll('p')[2].textContent = t.finalParagraph3;
      }

      document.querySelector('.rsvp h1').textContent = t.rsvpTitle;
      document.querySelector('.rsvp button').textContent = t.confirm;
    });

    document.querySelector(".abrir-galeria").addEventListener("click", function() {
    // Simula clic en la primera imagen oculta para abrir el lightbox
    document.querySelector('#galeria-lightbox a').click();
  });

/*!
 * Lightbox v2.11.4
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery)
}(this, function(a) {
    function b(b) {
        this.album = [],
        this.currentImageIndex = void 0,
        this.init(),
        this.options = a.extend({}, this.constructor.defaults),
        this.option(b)
    }
    return b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    },
    b.prototype.option = function(b) {
        a.extend(this.options, b)
    }
    ,
    b.prototype.imageCountLabel = function(a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b)
    }
    ,
    b.prototype.init = function() {
        var b = this;
        a(document).ready(function() {
            b.enable(),
            b.build()
        })
    }
    ,
    b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
            return b.start(a(c.currentTarget)),
            !1
        })
    }
    ,
    b.prototype.build = function() {
        if (!(a("#lightbox").length > 0)) {
            var b = this;
            a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>').appendTo(a("body")),
            this.$lightbox = a("#lightbox"),
            this.$overlay = a("#lightboxOverlay"),
            this.$outerContainer = this.$lightbox.find(".lb-outerContainer"),
            this.$container = this.$lightbox.find(".lb-container"),
            this.$image = this.$lightbox.find(".lb-image"),
            this.$nav = this.$lightbox.find(".lb-nav"),
            this.containerPadding = {
                top: parseInt(this.$container.css("padding-top"), 10),
                right: parseInt(this.$container.css("padding-right"), 10),
                bottom: parseInt(this.$container.css("padding-bottom"), 10),
                left: parseInt(this.$container.css("padding-left"), 10)
            },
            this.imageBorderWidth = {
                top: parseInt(this.$image.css("border-top-width"), 10),
                right: parseInt(this.$image.css("border-right-width"), 10),
                bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                left: parseInt(this.$image.css("border-left-width"), 10)
            },
            this.$overlay.hide().on("click", function() {
                return b.end(),
                !1
            }),
            this.$lightbox.hide().on("click", function(c) {
                "lightbox" === a(c.target).attr("id") && b.end()
            }),
            this.$outerContainer.on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(),
                !1
            }),
            this.$lightbox.find(".lb-prev").on("click", function() {
                return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1),
                !1
            }),
            this.$lightbox.find(".lb-next").on("click", function() {
                return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1),
                !1
            }),
            this.$nav.on("mousedown", function(a) {
                3 === a.which && (b.$nav.css("pointer-events", "none"),
                b.$lightbox.one("contextmenu", function() {
                    setTimeout(function() {
                        this.$nav.css("pointer-events", "auto")
                    }
                    .bind(b), 0)
                }))
            }),
            this.$lightbox.find(".lb-loader, .lb-close").on("click keyup", function(a) {
                if ("click" === a.type || "keyup" === a.type && (13 === a.which || 32 === a.which))
                    return b.end(),
                    !1
            })
        }
    }
    ,
    b.prototype.start = function(b) {
        function c(a) {
            d.album.push({
                alt: a.attr("data-alt"),
                link: a.attr("href"),
                title: a.attr("data-title") || a.attr("title")
            })
        }
        var d = this
          , e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)),
        this.sizeOverlay(),
        this.album = [];
        var f, g = 0, h = b.attr("data-lightbox");
        if (h) {
            f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var i = 0; i < f.length; i = ++i)
                c(a(f[i])),
                f[i] === b[0] && (g = i)
        } else if ("lightbox" === b.attr("rel"))
            c(b);
        else {
            f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
            for (var j = 0; j < f.length; j = ++j)
                c(a(f[j])),
                f[j] === b[0] && (g = j)
        }
        var k = e.scrollTop() + this.options.positionFromTop
          , l = e.scrollLeft();
        this.$lightbox.css({
            top: k + "px",
            left: l + "px"
        }).fadeIn(this.options.fadeDuration),
        this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"),
        this.changeImage(g)
    }
    ,
    b.prototype.changeImage = function(b) {
        var c = this
          , d = this.album[b].link
          , e = d.split(".").slice(-1)[0]
          , f = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(),
        this.$overlay.fadeIn(this.options.fadeDuration),
        a(".lb-loader").fadeIn("slow"),
        this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),
        this.$outerContainer.addClass("animating");
        var g = new Image;
        g.onload = function() {
            var h, i, j, k, l, m;
            f.attr({
                alt: c.album[b].alt,
                src: d
            }),
            a(g),
            f.width(g.width),
            f.height(g.height);
            var n = g.width / g.height;
            m = a(window).width(),
            l = a(window).height(),
            k = m - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20,
            j = l - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - c.options.positionFromTop - 70,
            "svg" === e ? (n >= 1 ? (i = k,
            h = parseInt(k / n, 10)) : (i = parseInt(j / n, 10),
            h = j),
            f.width(i),
            f.height(h)) : (c.options.fitImagesInViewport ? (c.options.maxWidth && c.options.maxWidth < k && (k = c.options.maxWidth),
            c.options.maxHeight && c.options.maxHeight < j && (j = c.options.maxHeight)) : (k = c.options.maxWidth || g.width || k,
            j = c.options.maxHeight || g.height || j),
            (g.width > k || g.height > j) && (g.width / k > g.height / j ? (i = k,
            h = parseInt(g.height / (g.width / i), 10),
            f.width(i),
            f.height(h)) : (h = j,
            i = parseInt(g.width / (g.height / h), 10),
            f.width(i),
            f.height(h)))),
            c.sizeContainer(f.width(), f.height())
        }
        ,
        g.src = this.album[b].link,
        this.currentImageIndex = b
    }
    ,
    b.prototype.sizeOverlay = function() {
        var b = this;
        setTimeout(function() {
            b.$overlay.width(a(document).width()).height(a(document).height())
        }, 0)
    }
    ,
    b.prototype.sizeContainer = function(a, b) {
        function c() {
            d.$lightbox.find(".lb-dataContainer").width(g),
            d.$lightbox.find(".lb-prevLink").height(h),
            d.$lightbox.find(".lb-nextLink").height(h),
            d.$overlay.trigger("focus"),
            d.showImage()
        }
        var d = this
          , e = this.$outerContainer.outerWidth()
          , f = this.$outerContainer.outerHeight()
          , g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right
          , h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        e !== g || f !== h ? this.$outerContainer.animate({
            width: g,
            height: h
        }, this.options.resizeDuration, "swing", function() {
            c()
        }) : c()
    }
    ,
    b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(),
        this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),
        this.updateNav(),
        this.updateDetails(),
        this.preloadNeighboringImages(),
        this.enableKeyboardNav()
    }
    ,
    b.prototype.updateNav = function() {
        var a = !1;
        try {
            document.createEvent("TouchEvent"),
            a = !!this.options.alwaysShowNavOnTouchDevices
        } catch (a) {}
        this.$lightbox.find(".lb-nav").show(),
        this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
        this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(),
        a && this.$lightbox.find(".lb-prev").css("opacity", "1")),
        this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(),
        a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }
    ,
    b.prototype.updateDetails = function() {
        var a = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var b = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? b.text(this.album[this.currentImageIndex].title) : b.html(this.album[this.currentImageIndex].title),
            b.fadeIn("fast")
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(c).fadeIn("fast")
        } else
            this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"),
        this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return a.sizeOverlay()
        })
    }
    ,
    b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            (new Image).src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            (new Image).src = this.album[this.currentImageIndex - 1].link
        }
    }
    ,
    b.prototype.enableKeyboardNav = function() {
        this.$lightbox.on("keyup.keyboard", a.proxy(this.keyboardAction, this)),
        this.$overlay.on("keyup.keyboard", a.proxy(this.keyboardAction, this))
    }
    ,
    b.prototype.disableKeyboardNav = function() {
        this.$lightbox.off(".keyboard"),
        this.$overlay.off(".keyboard")
    }
    ,
    b.prototype.keyboardAction = function(a) {
        var b = a.keyCode;
        27 === b ? (a.stopPropagation(),
        this.end()) : 37 === b ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === b && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }
    ,
    b.prototype.end = function() {
        this.disableKeyboardNav(),
        a(window).off("resize", this.sizeOverlay),
        this.$lightbox.fadeOut(this.options.fadeDuration),
        this.$overlay.fadeOut(this.options.fadeDuration),
        this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling")
    }
    ,
    new b
});
//# sourceMappingURL=lightbox.min.map

document.getElementById("play-button").addEventListener("click", function () {
    const audio = document.getElementById("background-music");
    audio.play().then(() => {
      // Oculta el botón después de reproducir
      document.getElementById("play-button-container").style.display = "none";
    }).catch(error => {
      console.error("Autoplay bloqueado o error:", error);
    });
  });
