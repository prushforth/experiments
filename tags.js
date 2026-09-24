/*
 * Tag highlighting for the experiments index.
 *
 * Mark any link (or its <li>) with a space separated data-tags list:
 *
 *   <li data-tags="map-select map-extent"><a href="…">…</a>
 *
 * and declare a toggle for a tag inside the button container:
 *
 *   <button type="button" data-tag="map-select">&lt;map-select&gt;</button>
 *
 * Each button gets a distinct colour (data-color overrides it) and a count of
 * matching links. Pressing it marks every matching link with a swatch in that
 * colour, so a tag that is incidental to a use case is still findable — useful
 * when checking that a piece of markup works in a new implementation.
 *
 * The swatches are decorative; the tag names go inside each of the item's
 * links as visually hidden text, so they become part of the link's accessible
 * name and a screen reader announces the link and then its tags.
 */
(function () {
  'use strict';

  const container = document.querySelector('[data-tag-buttons]');
  if (!container) return;

  const buttons = Array.prototype.slice.call(
    container.querySelectorAll('button[data-tag]')
  );
  const tagged = Array.prototype.slice.call(
    document.querySelectorAll('[data-tags]')
  );

  function tagsOf(item) {
    return item.dataset.tags.split(/\s+/).filter(Boolean);
  }

  function matches(tag) {
    return tagged.filter(function (item) {
      return tagsOf(item).indexOf(tag) !== -1;
    });
  }

  function render() {
    const active = buttons.filter(function (button) {
      return button.getAttribute('aria-pressed') === 'true';
    });

    tagged.forEach(function (item) {
      item.querySelectorAll('.tag-swatch, .tag-labels').forEach(function (node) {
        node.remove();
      });

      const tags = tagsOf(item);
      const applied = active.filter(function (button) {
        return tags.indexOf(button.dataset.tag) !== -1;
      });
      if (!applied.length) return;

      const names = applied.map(function (button) {
        return button.dataset.tag;
      });

      item.querySelectorAll('a').forEach(function (link) {
        const labels = document.createElement('span');
        labels.className = 'tag-labels visually-hidden';
        labels.textContent = ', tagged ' + names.join(', ');
        link.append(labels);
      });

      const swatches = applied.map(function (button) {
        const swatch = document.createElement('span');
        swatch.className = 'tag-swatch';
        swatch.style.setProperty(
          '--tag-color',
          button.style.getPropertyValue('--tag-color')
        );
        swatch.setAttribute('aria-hidden', 'true');
        return swatch;
      });

      item.append.apply(item, swatches);
    });
  }

  buttons.forEach(function (button, i) {
    // Golden angle hue steps keep adjacent buttons distinguishable however many there are.
    const color = button.dataset.color || 'hsl(' + ((i * 137.508) % 360) + ' 65% 38%)';
    button.style.setProperty('--tag-color', color);
    button.classList.add('tag-button');
    button.setAttribute('aria-pressed', 'false');

    const dot = document.createElement('span');
    dot.className = 'tag-button-dot';
    dot.setAttribute('aria-hidden', 'true');
    button.prepend(dot);

    const count = matches(button.dataset.tag).length;
    const badge = document.createElement('span');
    badge.className = 'tag-count';
    badge.textContent = count;
    button.append(badge);

    if (!count) {
      button.disabled = true;
      button.title = 'No experiments are tagged ' + button.dataset.tag + ' yet';
    }

    button.addEventListener('click', function () {
      button.setAttribute(
        'aria-pressed',
        button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'
      );
      render();
    });
  });
})();
