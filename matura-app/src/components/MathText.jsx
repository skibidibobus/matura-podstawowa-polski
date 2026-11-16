import katex from 'katex';

/**
 * Renders text with inline ($...$) and display ($$...$$) LaTeX math via KaTeX.
 * Fast-paths plain strings without '$' to avoid unnecessary parsing overhead.
 */
export function MathText({ text, className = '' }) {
  if (text === null || text === undefined) return null;
  const str = String(text);
  if (!str.includes('$')) {
    return className ? <span className={className}>{str}</span> : str;
  }

  const tokens = [];
  const regex = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: str.slice(lastIndex, match.index) });
    }
    const raw = match[0];
    const isDisplay = raw.startsWith('$$') && raw.endsWith('$$');
    const expr = isDisplay ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim();
    tokens.push({ type: 'math', display: isDisplay, value: expr });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < str.length) {
    tokens.push({ type: 'text', value: str.slice(lastIndex) });
  }

  return (
    <span className={className}>
      {tokens.map((tok, idx) => {
        if (tok.type === 'text') {
          return <span key={idx}>{tok.value}</span>;
        }
        try {
          const html = katex.renderToString(tok.value, {
            displayMode: tok.display,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={idx}
              className={tok.display ? 'katex-block-wrap' : 'katex-inline-wrap'}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={idx}>{tok.value}</code>;
        }
      })}
    </span>
  );
}
