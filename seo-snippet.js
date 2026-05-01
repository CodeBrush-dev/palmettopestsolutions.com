// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.palmettopestsolutions.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.palmettopestsolutions.com/","title_tag":"Pest Control Port St. Lucie Near Me | Palmetto Pest","meta_description":"Family-owned pest control in Port St. Lucie and Treasure Coast. Safe, affordable ant, roach, termite, rodent and mosquito treatments. Call for a free estimate."},{"page_url":"https://www.palmettopestsolutions.com/pest-control-port-saint-lucie","title_tag":"Pest Control Port St. Lucie FL | Palmetto Pest","meta_description":"Local family-owned pest control in Port St. Lucie, Tradition and St. Lucie West. Ants, roaches, termites, rodents and more. Affordable service and free inspections."},{"page_url":"https://www.palmettopestsolutions.com/jensen-beach-fl","title_tag":"Pest Control Jensen Beach Florida | Palmetto Pest","meta_description":"Trusted pest control in Jensen Beach, FL. Ant, roach, spider, termite and rodent treatments for coastal homes. Local family-owned service and routine protection."},{"page_url":"https://www.palmettopestsolutions.com/palm-city-florida","title_tag":"Pest Control Near Palm City FL | Palmetto Pest","meta_description":"Professional pest control near Palm City, Florida. Ant, roach, mosquito, termite and rodent services for local homes. Family-owned, honest pricing, year-round protection."},{"page_url":"https://www.palmettopestsolutions.com/pest-control-fort-pierce","title_tag":"Rodent Removal Fort Pierce & Pest Control | Palmetto","meta_description":"Pest control and rodent removal in Fort Pierce, FL. Ant, roach, termite and mosquito solutions from a local family-owned team. Protect your home year-round."},{"page_url":"https://www.palmettopestsolutions.com/vero-beach-fl","title_tag":"Mosquito Control Vero Beach & Pest Service | Palmetto","meta_description":"Mosquito control and full-service pest control in Vero Beach, FL. Ant, roach, termite and rodent treatments by a trusted local family-owned company."},{"page_url":"https://www.palmettopestsolutions.com/pest-control-stuart","title_tag":"Pest Control Near Me in Stuart FL | Palmetto Pest","meta_description":"Local pest control near Stuart, Florida. Ant, roach, spider, termite and rodent treatments. Family-owned, reliable service and ongoing protection plans."},{"page_url":"https://www.palmettopestsolutions.com/tradition","title_tag":"Pest Control Tradition Florida | Palmetto Pest","meta_description":"Pest control in Tradition, FL. Ant, roach, spider, mosquito, termite and rodent services for Tradition neighborhoods. Local, family-owned protection."},{"page_url":"https://www.palmettopestsolutions.com/st-lucie-west-fl","title_tag":"Pest Control Saint Lucie West FL | Palmetto Pest","meta_description":"St. Lucie West pest control and Tradition area service. Ant, roach, spider, mosquito, termite and rodent treatments from a trusted family-owned company."}],"keywords":["pest control port st. lucie","pest control near me","pest control jensen beach","ant treatment port st. lucie","termite inspection jensen beach","rodent removal fort pierce","mosquito control vero beach","cockroach treatment palm city","family-owned pest control port st. lucie","exterminator near me","affordable pest control near me","local pest control","termite treatment port saint lucie","drywood termite treatment florida","subterranean termite bait stations","roach exterminator near me","mosquito control near me","flea treatment near me","spider control service","family owned pest control","eco friendly pest control near me","same day pest control","pest control jensen beach florida","pest control tradition florida","pest control saint lucie west","pest control near palm city","pest control near treasure coast"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.palmettopestsolutions.com/#localbusiness",
  "name": "Palmetto Pest Solutions",
  "url": "https://www.palmettopestsolutions.com/",
  "description": "Palmetto Pest Solutions is a family-owned pest control company in Port St. Lucie, FL providing safe, effective residential and commercial pest control, termite treatment, mosquito control, and rodent removal throughout Port St. Lucie, Stuart, Jensen Beach, Palm City, Fort Pierce, Vero Beach, Tradition, and St. Lucie West.",
  "image": [
    "https://static.wixstatic.com/media/b56fcc_3638ca609a5a45eeb4d563abe3ca0968%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/b56fcc_3638ca609a5a45eeb4d563abe3ca0968%7Emv2.jpg",
    "https://static.wixstatic.com/media/b56fcc_c8335ebc22864797ad98d6f09bec99a8~mv2.png/v1/fill/w_346,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/White%20and%20green%20logo.png",
    "https://static.wixstatic.com/media/b56fcc_30f97ceac31b443e8ab5a65e0ec4aaf9~mv2.jpg/v1/fill/w_600,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pest%20control%20termite%20treatment.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/b56fcc_3638ca609a5a45eeb4d563abe3ca0968%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/b56fcc_3638ca609a5a45eeb4d563abe3ca0968%7Emv2.jpg",
  "telephone": "+1-772-262-2398",
  "email": "info@palmettopestsolutions.com",
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Port St. Lucie"
    },
    {
      "@type": "City",
      "name": "Stuart"
    },
    {
      "@type": "City",
      "name": "Jensen Beach"
    },
    {
      "@type": "City",
      "name": "Palm City"
    },
    {
      "@type": "City",
      "name": "Fort Pierce"
    },
    {
      "@type": "City",
      "name": "Vero Beach"
    },
    {
      "@type": "City",
      "name": "Tradition"
    },
    {
      "@type": "City",
      "name": "St. Lucie West"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Port St. Lucie",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Port St. Lucie",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    }
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com",
    "https://www.palmettopestsolutions.com/blog"
  ],
  "serviceArea": [
    {
      "@type": "Place",
      "name": "Port St. Lucie, FL"
    },
    {
      "@type": "Place",
      "name": "Stuart, FL"
    },
    {
      "@type": "Place",
      "name": "Jensen Beach, FL"
    },
    {
      "@type": "Place",
      "name": "Palm City, FL"
    },
    {
      "@type": "Place",
      "name": "Fort Pierce, FL"
    },
    {
      "@type": "Place",
      "name": "Vero Beach, FL"
    },
    {
      "@type": "Place",
      "name": "Tradition, FL"
    },
    {
      "@type": "Place",
      "name": "St. Lucie West, FL"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pest Control Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential and Commercial Pest Control",
          "description": "Monthly, bi-monthly, and quarterly pest control services for homes, offices, restaurants, condos, and more in Port St. Lucie and the Treasure Coast."
        }
      },
      {
        "@type": "Offer",
          "itemOffered": {
          "@type": "Service",
          "name": "Termite Treatment",
          "description": "Termite treatment, bait station installation, and monitoring to protect Florida homes from subterranean termites."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bed Bug Treatment",
          "description": "Professional bed bug treatment for residential properties in Port St. Lucie and surrounding areas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ant Treatment",
          "description": "Targeted ant control treatments to eliminate ant infestations and prevent them from returning."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mosquito Treatment",
          "description": "Mosquito control services to reduce mosquito populations around Florida homes and outdoor spaces."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carpenter Bee Treatment",
          "description": "Carpenter bee control and treatment for homes on Florida's Treasure Coast."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mice and Rodent Removal",
          "description": "Rodent inspection, removal, and exclusion services for rats and mice."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cockroach Treatment",
          "description": "Cockroach control and treatment for homes and businesses in Port St. Lucie and nearby areas."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Pest Inspection",
          "description": "Free pest inspection and estimate for homeowners on the Treasure Coast."
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David Simmons"
      },
      "reviewBody": "We love Palmetto, they provide complete pest control solutions at a fair price. Since we have been using them we have not had any problems and they are very responsive to our pest control needs. I highly recommend Chris and his family. Give them a call today."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Barbra Geyer"
      },
      "reviewBody": "Palmetto Pest Solutions has serviced our property for almost a year. The company has been successful in providing services to rid our house of pests and insects and I am pleased to say we will be continuing their service. They have always advised when they are coming to service our home & should they be running a little late, they always advise me. I can truly say the company is the most reliable & honest company I have ever dealt with in South Florida. I highly recommend this company to anyone who is interested in getting rid of any pests or insects. A 5 star company in my opinion. Call them you will be very happy with their services."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Nico"
      },
      "reviewBody": "Best customer service in town. Got rid of all my termites and fire ants. Super efficient and fast. Would recommend this family business!!!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Heidi Lykins"
      },
      "reviewBody": "Always love to support a local family business! Excellent customer service, honest quotes and completely trustworthy."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
