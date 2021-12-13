import { useEffect, useState, useCallback } from 'react';

const useCopyToClipboard = (text) => {
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    // document.getSelection() Выделение в документе представлено объектом Selection
    // document.getSelection().rangeCount количество диапазонов в выделении, максимум 1 во всех браузерах, кроме Firefox
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0) // взять i-ый диапазон, начиная с 0. Во всех браузерах, кроме Firefox, используется только 0.
        : false;
    el.select();
    const success = document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    return success;
  };

  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    if (!copied) setCopied(copyToClipboard(text));
  }, [text]);

  useEffect(() => () => setCopied(false), [text]);

  return [copied, copy];
};

export default useCopyToClipboard;
