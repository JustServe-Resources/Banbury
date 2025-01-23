import { c as useNotify, r as reactExports, j as jsxRuntimeExports, a7 as FLASH_NOTIFICATIONS_KEY, a2 as initI18next, a3 as loadTranslations, a4 as reactDomExports, a5 as ThemeProviders, a6 as createTheme } from 'shared';

function FlashNotifications({ notifications, }) {
    const notify = useNotify();
    reactExports.useEffect(() => {
        for (const notification of notifications) {
            notify(notification);
        }
    }, [notifications, notify]);
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}

function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case '../shared/translations/locales/af.json': return import('shared').then(function (n) { return n.al; });
    case '../shared/translations/locales/ar-x-pseudo.json': return import('shared').then(function (n) { return n.am; });
    case '../shared/translations/locales/ar.json': return import('shared').then(function (n) { return n.an; });
    case '../shared/translations/locales/az.json': return import('shared').then(function (n) { return n.ao; });
    case '../shared/translations/locales/be.json': return import('shared').then(function (n) { return n.ap; });
    case '../shared/translations/locales/bg.json': return import('shared').then(function (n) { return n.aq; });
    case '../shared/translations/locales/bn.json': return import('shared').then(function (n) { return n.ar; });
    case '../shared/translations/locales/bs.json': return import('shared').then(function (n) { return n.as; });
    case '../shared/translations/locales/ca.json': return import('shared').then(function (n) { return n.at; });
    case '../shared/translations/locales/cs.json': return import('shared').then(function (n) { return n.au; });
    case '../shared/translations/locales/cy.json': return import('shared').then(function (n) { return n.av; });
    case '../shared/translations/locales/da.json': return import('shared').then(function (n) { return n.aw; });
    case '../shared/translations/locales/de-de.json': return import('shared').then(function (n) { return n.ax; });
    case '../shared/translations/locales/de-x-informal.json': return import('shared').then(function (n) { return n.ay; });
    case '../shared/translations/locales/de.json': return import('shared').then(function (n) { return n.az; });
    case '../shared/translations/locales/el.json': return import('shared').then(function (n) { return n.aA; });
    case '../shared/translations/locales/en-001.json': return import('shared').then(function (n) { return n.aB; });
    case '../shared/translations/locales/en-150.json': return import('shared').then(function (n) { return n.aC; });
    case '../shared/translations/locales/en-au.json': return import('shared').then(function (n) { return n.aD; });
    case '../shared/translations/locales/en-ca.json': return import('shared').then(function (n) { return n.aE; });
    case '../shared/translations/locales/en-gb.json': return import('shared').then(function (n) { return n.aF; });
    case '../shared/translations/locales/en-my.json': return import('shared').then(function (n) { return n.aG; });
    case '../shared/translations/locales/en-ph.json': return import('shared').then(function (n) { return n.aH; });
    case '../shared/translations/locales/en-se.json': return import('shared').then(function (n) { return n.aI; });
    case '../shared/translations/locales/en-us.json': return import('shared').then(function (n) { return n.aJ; });
    case '../shared/translations/locales/en-x-dev.json': return import('shared').then(function (n) { return n.aK; });
    case '../shared/translations/locales/en-x-keys.json': return import('shared').then(function (n) { return n.aL; });
    case '../shared/translations/locales/en-x-obsolete.json': return import('shared').then(function (n) { return n.aM; });
    case '../shared/translations/locales/en-x-pseudo.json': return import('shared').then(function (n) { return n.aN; });
    case '../shared/translations/locales/en-x-test.json': return import('shared').then(function (n) { return n.aO; });
    case '../shared/translations/locales/es-419.json': return import('shared').then(function (n) { return n.aP; });
    case '../shared/translations/locales/es-es.json': return import('shared').then(function (n) { return n.aQ; });
    case '../shared/translations/locales/es.json': return import('shared').then(function (n) { return n.aR; });
    case '../shared/translations/locales/et.json': return import('shared').then(function (n) { return n.aS; });
    case '../shared/translations/locales/eu.json': return import('shared').then(function (n) { return n.aT; });
    case '../shared/translations/locales/fa-af.json': return import('shared').then(function (n) { return n.aU; });
    case '../shared/translations/locales/fa.json': return import('shared').then(function (n) { return n.aV; });
    case '../shared/translations/locales/fi.json': return import('shared').then(function (n) { return n.aW; });
    case '../shared/translations/locales/fil.json': return import('shared').then(function (n) { return n.aX; });
    case '../shared/translations/locales/fo.json': return import('shared').then(function (n) { return n.aY; });
    case '../shared/translations/locales/fr-ca.json': return import('shared').then(function (n) { return n.aZ; });
    case '../shared/translations/locales/fr.json': return import('shared').then(function (n) { return n.a_; });
    case '../shared/translations/locales/ga.json': return import('shared').then(function (n) { return n.a$; });
    case '../shared/translations/locales/he.json': return import('shared').then(function (n) { return n.b0; });
    case '../shared/translations/locales/hi.json': return import('shared').then(function (n) { return n.b1; });
    case '../shared/translations/locales/hr.json': return import('shared').then(function (n) { return n.b2; });
    case '../shared/translations/locales/hu.json': return import('shared').then(function (n) { return n.b3; });
    case '../shared/translations/locales/hy.json': return import('shared').then(function (n) { return n.b4; });
    case '../shared/translations/locales/id.json': return import('shared').then(function (n) { return n.b5; });
    case '../shared/translations/locales/is.json': return import('shared').then(function (n) { return n.b6; });
    case '../shared/translations/locales/it-ch.json': return import('shared').then(function (n) { return n.b7; });
    case '../shared/translations/locales/it.json': return import('shared').then(function (n) { return n.b8; });
    case '../shared/translations/locales/ja.json': return import('shared').then(function (n) { return n.b9; });
    case '../shared/translations/locales/ka.json': return import('shared').then(function (n) { return n.ba; });
    case '../shared/translations/locales/kk.json': return import('shared').then(function (n) { return n.bb; });
    case '../shared/translations/locales/kl-dk.json': return import('shared').then(function (n) { return n.bc; });
    case '../shared/translations/locales/ko.json': return import('shared').then(function (n) { return n.bd; });
    case '../shared/translations/locales/ku.json': return import('shared').then(function (n) { return n.be; });
    case '../shared/translations/locales/lt.json': return import('shared').then(function (n) { return n.bf; });
    case '../shared/translations/locales/lv.json': return import('shared').then(function (n) { return n.bg; });
    case '../shared/translations/locales/mk.json': return import('shared').then(function (n) { return n.bh; });
    case '../shared/translations/locales/mn.json': return import('shared').then(function (n) { return n.bi; });
    case '../shared/translations/locales/ms.json': return import('shared').then(function (n) { return n.bj; });
    case '../shared/translations/locales/mt.json': return import('shared').then(function (n) { return n.bk; });
    case '../shared/translations/locales/my.json': return import('shared').then(function (n) { return n.bl; });
    case '../shared/translations/locales/nl-be.json': return import('shared').then(function (n) { return n.bm; });
    case '../shared/translations/locales/nl.json': return import('shared').then(function (n) { return n.bn; });
    case '../shared/translations/locales/no.json': return import('shared').then(function (n) { return n.bo; });
    case '../shared/translations/locales/pl.json': return import('shared').then(function (n) { return n.bp; });
    case '../shared/translations/locales/pt-br.json': return import('shared').then(function (n) { return n.bq; });
    case '../shared/translations/locales/pt.json': return import('shared').then(function (n) { return n.br; });
    case '../shared/translations/locales/ro.json': return import('shared').then(function (n) { return n.bs; });
    case '../shared/translations/locales/ru.json': return import('shared').then(function (n) { return n.bt; });
    case '../shared/translations/locales/sk.json': return import('shared').then(function (n) { return n.bu; });
    case '../shared/translations/locales/sl.json': return import('shared').then(function (n) { return n.bv; });
    case '../shared/translations/locales/sq.json': return import('shared').then(function (n) { return n.bw; });
    case '../shared/translations/locales/sr-me.json': return import('shared').then(function (n) { return n.bx; });
    case '../shared/translations/locales/sr.json': return import('shared').then(function (n) { return n.by; });
    case '../shared/translations/locales/sv.json': return import('shared').then(function (n) { return n.bz; });
    case '../shared/translations/locales/th.json': return import('shared').then(function (n) { return n.bA; });
    case '../shared/translations/locales/tr.json': return import('shared').then(function (n) { return n.bB; });
    case '../shared/translations/locales/uk.json': return import('shared').then(function (n) { return n.bC; });
    case '../shared/translations/locales/ur.json': return import('shared').then(function (n) { return n.bD; });
    case '../shared/translations/locales/uz.json': return import('shared').then(function (n) { return n.bE; });
    case '../shared/translations/locales/vi.json': return import('shared').then(function (n) { return n.bF; });
    case '../shared/translations/locales/zh-cn.json': return import('shared').then(function (n) { return n.bG; });
    case '../shared/translations/locales/zh-tw.json': return import('shared').then(function (n) { return n.bH; });
    default: return new Promise(function(resolve, reject) {
      (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(
        reject.bind(null, new Error("Unknown variable dynamic import: " + path))
      );
    })
   }
 }
async function renderFlashNotifications(settings, baseLocale) {
    const flashNotifications = window.sessionStorage.getItem(FLASH_NOTIFICATIONS_KEY);
    if (flashNotifications === null) {
        return;
    }
    initI18next(baseLocale);
    await loadTranslations(baseLocale, [
        () => __variableDynamicImportRuntime0__(`../shared/translations/locales/${baseLocale}.json`),
    ]);
    window.sessionStorage.removeItem(FLASH_NOTIFICATIONS_KEY);
    try {
        const parsedNotifications = JSON.parse(flashNotifications);
        const container = document.createElement("div");
        document.body.appendChild(container);
        reactDomExports.render(jsxRuntimeExports.jsx(ThemeProviders, { theme: createTheme(settings), children: jsxRuntimeExports.jsx(FlashNotifications, { notifications: parsedNotifications }) }), container);
    }
    catch (e) {
        console.error("Cannot render flash notifications", e);
    }
}

export { renderFlashNotifications };
