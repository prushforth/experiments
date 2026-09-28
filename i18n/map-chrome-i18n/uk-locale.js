/*
 * Ukrainian UI strings for the map chrome, installed the way a page installs
 * any M.options override: as a <map-options> element in <head>.
 *
 * It has to be created by script, because the HTML parser moves unknown
 * elements written in <head> out into the body — where the libraries do not
 * look for it. This is a classic (not module) script, so it runs before
 * DOMContentLoaded, which is when experiment.js appends the MapML library;
 * every implementation reads document.head for <map-options> as it initializes.
 *
 * <map-options> is not part of the MapML vocabulary. It is the escape hatch
 * these implementations offer for a language they do not bundle — Ukrainian is
 * bundled by MapML-MapLibre, but not by MapML.js or MapML-OpenLayers.
 *
 * See the MutationObserver at the foot of the file for why installing it once
 * is not enough when mapml-extension is present.
 */
(function () {
  var locale = {
    cmBack: "Повернутися назад",
    cmForward: "Перейти вперед",
    cmReload: "Перезавантажити",
    cmToggleControls: "Увімкнути/вимкнути елементи керування",
    cmCopyCoords: "Копіювати",
    cmToggleDebug: "Перемкнути на режим діагностики",
    cmCopyMapML: "Мапа",
    cmCopyExtent: "Межа екрану",
    cmCopyLocation: "Місцеположення",
    cmPasteLayer: "Вставити",
    cmViewSource: "Переглянути джерело мапи",
    lmZoomToLayer: "Збільшити до шару",
    lmCopyLayer: "Копіювати шар",
    lmLayerSettings: "Налаштування шару",
    lmRemoveLayer: "Видалити шар",
    lmZoomToExtent: "Збільшити до підтипу шару",
    lmCopyExtent: "Копіювати підтип шару",
    lmExtentSettings: "Налаштування підшару",
    lmRemoveExtent: "Видалити підшар",
    lmStyle: "Стиль",
    lmLegend: "Легенда",
    lmOpenInNewTab: "Відкрити легенду",
    lcOpacity: "Прозорість",
    btnZoomIn: "Збільшити",
    btnZoomOut: "Зменшити",
    btnSearch: "Пошук",
    btnSearchClose: "Закрити пошук",
    searchPlaceholder: "Пошук…",
    searchResultWithNoName: "Без назви",
    btnView: "Вигляд",
    viewMap: "Мапа",
    viewGlobe: "Глобус",
    viewPerspective: "Перспектива",
    btnStatic: "Перемкнути статичну мапу",
    btnCompass: "Скинути напрямок на північ",
    btnFeatureIndex: "Індекс об'єктів",
    btnAttribution: "Авторські права",
    btnFullScreen: "Повноекранний режим",
    btnExitFullScreen: "Вихід з повноекранного режиму",
    btnLocTrackOn: "Показувати моє місцезнаходження - відстеження місцезнаходження увімкнено",
    btnMyLocTrackOn: "Моє поточне місцезнаходження на карті",
    btnLocTrackOff: "Показувати моє місцезнаходження - відстеження місцезнаходження вимкнено",
    btnMyLastKnownLocTrackOn: "Моє останнє відоме місцезнаходження на карті",
    btnLocTrackLastKnown: "Показати моє місцезнаходження - показано останнє відоме місцезнаходження",
    btnFocusMap: "Карта Фокусування",
    btnFocusControls: "Елементи Керування Фокусуванням",
    btnPrevFeature: "Попередня Функція",
    btnNextFeature: "Наступна Функція",
    amZoom: "рівень масштабування",
    amColumn: "стовпчик",
    amRow: "рядок",
    amMaxZoom: "На максимальному рівні масштабування наближення вимкнено",
    amMinZoom: "На мінімальному рівні масштабування зменшення масштабу вимкнено",
    amZoomedOut: "Збільшення за межами, повернутись до",
    amDraggedOut: "Розширення за межами, повернутись до",
    amEastBound: "Досягнуто східного напрямку, панорамування на схід вимкнено",
    amWestBound: "Досягнуто західного напрямку, панорамування на захід вимкнено",
    amNorthBound: "Досягнуто північного напрямку, панорамування на північ вимкнено",
    amSouthBound: "Досягнуто південного напрямку, панорамування на південь вимкнено",
    kbdShortcuts: "Комбінації клавіш",
    kbdMovement: "Клавіші переміщення",
    kbdFeature: "Функціональні клавіші навігації",
    kbdPanUp: "Переміщення вгору",
    kbdPanDown: "Переміщення вниз",
    kbdPanLeft: "Переміщення ліворуч",
    kbdPanRight: "Переміщення праворуч",
    kbdPanIncrement: "крок переміщення зображення",
    kbdZoom: "Збільшення/зменшення на 3 рівні",
    kbdFocusMap: "Сфокусувати карту",
    kbdFocusControls: "Сфокусувати елементи керування",
    kbdPrevFeature: "Попередній об'єкт",
    kbdNextFeature: "Наступний об'єкт",
    dfLayer: "Шар",
    dfExtent: "Підтип шару",
    dfPastedLayer: "Вставлений шар",
    dfFeatureCaption: "Об'єкт",
    popupZoom: "Наблизити сюди",
    popupPropName: "Назва властивості",
    popupPropValue: "Значення властивості",
    fIndexNoFeatures: "Об'єктів не знайдено",
    fIndexMoreResults: "Більше результатів",
    fIndexPreviousResults: "Попередні результати"
  };

  // Collapse every <map-options> in <head> into one whose locale is ours,
  // keeping any other options (e.g. featureIndexOverlayOption) that were there.
  var ours;
  function install() {
    var options = {};
    document.head.querySelectorAll('map-options').forEach(function (el) {
      try {
        Object.assign(options, JSON.parse(el.textContent));
      } catch (e) {
        /* not ours and not JSON — drop it */
      }
      el.remove();
    });
    options.locale = locale;
    ours = document.createElement('map-options');
    ours.textContent = JSON.stringify(options);
    document.head.appendChild(ours);
  }

  install();

  // mapml-extension (content.js) appends its OWN <map-options>, carrying the
  // browser UI language, and on DOMContentLoaded removes the FIRST <map-options>
  // in <head> — which is the page's. It registers its content script without
  // allFrames, so this only happens in the top-level document: the same page
  // viewed inside an iframe keeps its own strings. Re-assert ours until the
  // library has read them.
  var observer = new MutationObserver(function () {
    if (
      !document.head.contains(ours) ||
      document.head.querySelectorAll('map-options').length > 1
    ) {
      install();
    }
  });
  observer.observe(document.head, { childList: true });
  window.addEventListener('load', function () {
    observer.disconnect();
  });
})();
