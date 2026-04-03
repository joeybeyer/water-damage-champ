interface LineBlock {
  type: 'h2' | 'h3' | 'h4' | 'list' | 'table' | 'p';
  content: string[];
}

function isSeparatorRow(row: string): boolean {
  return row.split('|').filter(Boolean).every((cell) => /^[\s\-:]+$/.test(cell));
}

function parseRow(row: string): string[] {
  return row.split('|').filter(Boolean).map((c) => c.trim());
}

function parseContent(content: string): LineBlock[] {
  const lines = content.split('\n');
  const blocks: LineBlock[] = [];
  let tableBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushTable = () => {
    if (tableBuffer.length === 0) return;
    blocks.push({ type: 'table', content: [...tableBuffer] });
    tableBuffer = [];
  };
  const flushList = () => {
    if (listBuffer.length === 0) return;
    blocks.push({ type: 'list', content: [...listBuffer] });
    listBuffer = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushTable();
      flushList();
      continue;
    }
    if (line.startsWith('## ')) {
      flushTable(); flushList();
      blocks.push({ type: 'h2', content: [line.slice(3)] });
    } else if (line.startsWith('### ')) {
      flushTable(); flushList();
      blocks.push({ type: 'h3', content: [line.slice(4)] });
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      flushTable(); flushList();
      blocks.push({ type: 'h4', content: [line.slice(2, -2)] });
    } else if (line.startsWith('- ')) {
      flushTable();
      listBuffer.push(line.slice(2));
    } else if (line.startsWith('|')) {
      flushList();
      tableBuffer.push(line);
    } else {
      flushTable(); flushList();
      blocks.push({ type: 'p', content: [line] });
    }
  }
  flushTable();
  flushList();
  return blocks;
}

export default function ContentRenderer({ content }: { content: string }) {
  const blocks = parseContent(content);

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block, idx) => {
        if (block.type === 'h2') {
          return (
            <h2 key={idx} className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">
              {block.content[0]}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={idx} className="text-xl font-semibold text-[#1a237e] mt-8 mb-3">
              {block.content[0]}
            </h3>
          );
        }
        if (block.type === 'h4') {
          return (
            <h4 key={idx} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              {block.content[0]}
            </h4>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-1 mb-4 text-gray-700">
              {block.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === 'table') {
          const rows = block.content.filter((r) => !isSeparatorRow(r));
          if (rows.length === 0) return null;
          const headers = parseRow(rows[0]);
          const body = rows.slice(1).map(parseRow);
          return (
            <div key={idx} className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1a237e] text-white">
                    {headers.map((h, i) => (
                      <th key={i} className="px-4 py-2 text-left font-semibold border border-[#1a237e]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((cells, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {cells.map((c, ci) => (
                        <td key={ci} className="px-4 py-2 text-gray-700 border border-gray-200">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.type === 'p') {
          return (
            <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
              {block.content[0]}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
