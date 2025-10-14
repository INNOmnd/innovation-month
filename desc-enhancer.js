// desc-enhancer.js
(function () {
  function mdToHtml(md) {
    if (!md) return '';
    let s = md.trim();
    s = s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    s = s.replace(/^(#{3})\s*(.+)$/gm, '<h3>$2</h3>');
    s = s.replace(/^(#{2})\s*(.+)$/gm, '<h2>$2</h2>');
    s = s.replace(/^(#{1})\s*(.+)$/gm, '<h1>$2</h1>');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/_(.+?)_/g, '<em>$1</em>');
    s = s
      .replace(/(^|\n)[ \t]*- (.+)/g, '$1• $2')
      .replace(/(?:^|\n)• .+(?:\n• .+)*/g, m => {
        const items = m.trim().split('\n').map(li => li.replace(/^• /,'').trim());
        return '<ul>' + items.map(i=>`<li>${i}</li>`).join('') + '</ul>';
      });
    s = s.replace(/\n{2,}/g, '</p><p>');
    s = '<p>' + s.replace(/\n/g, '<br>') + '</p>';
    return s;
  }

  window._descEnhancer = {
    applyRichDescriptions(WORKSHOPS) {
      const map = window.WORKSHOP_DESCRIPTIONS || {};
      return WORKSHOPS.map(w => map[w.id] ? { ...w, desc_html: mdToHtml(map[w.id]) } : w);
    },
    getDescHtml(w) {
      return w.desc_html || (w.desc ? `<p>${w.desc}</p>` : '');
    }
  };
})();
