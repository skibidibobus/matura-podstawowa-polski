import katex from 'katex';

function renderKatex(expr, display, key) {
  try {
    const html = katex.renderToString(expr, {
      displayMode: display,
      throwOnError: false,
      strict: false,
    });
    return (
      <span
        key={key}
        className={display ? 'katex-block-wrap' : 'katex-inline-wrap'}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <code key={key}>{expr}</code>;
  }
}

function parseTokens(str, allowBold = true) {
  const nodes = [];
  let i = 0;
  let textStart = 0;
  let keyIdx = 0;

  const flushText = (end) => {
    if (end > textStart) {
      nodes.push(<span key={`t-${keyIdx++}`}>{str.slice(textStart, end)}</span>);
    }
  };

  while (i < str.length) {
    // 1. Display math $$...$$
    if (str[i] === '$' && str[i + 1] === '$') {
      const close = str.indexOf('$$', i + 2);
      if (close !== -1) {
        flushText(i);
        nodes.push(renderKatex(str.slice(i + 2, close).trim(), true, `m-${keyIdx++}`));
        i = close + 2;
        textStart = i;
        continue;
      }
    }

    // 2. Inline math $...$
    if (str[i] === '$') {
      const close = str.indexOf('$', i + 1);
      if (close !== -1 && !str.slice(i + 1, close).includes('\n')) {
        flushText(i);
        nodes.push(renderKatex(str.slice(i + 1, close).trim(), false, `m-${keyIdx++}`));
        i = close + 1;
        textStart = i;
        continue;
      }
    }

    // 3. Markdown bold **...**
    if (allowBold && str[i] === '*' && str[i + 1] === '*') {
      const close = str.indexOf('**', i + 2);
      if (close !== -1 && !str.slice(i + 2, close).includes('\n')) {
        flushText(i);
        const inner = str.slice(i + 2, close);
        nodes.push(<strong key={`b-${keyIdx++}`}>{parseTokens(inner, false)}</strong>);
        i = close + 2;
        textStart = i;
        continue;
      }
    }

    i += 1;
  }

  flushText(str.length);
  return nodes;
}

/**
 * Renders text with inline ($...$), display ($$...$$) LaTeX math via KaTeX,
 * and **bold** markdown emphasis.
 */
export function MathText({ text, className = '' }) {
  if (text === null || text === undefined) return null;
  const str = String(text);
  if (!str.includes('$') && !str.includes('**')) {
    return className ? <span className={className}>{str}</span> : str;
  }

  const content = parseTokens(str, true);
  return className ? <span className={className}>{content}</span> : <>{content}</>;
}
