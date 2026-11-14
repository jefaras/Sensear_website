export interface MomentsTableContent {
    columns: { moment: string; venue: string; event: string };
    rows: { name: string; venue: string; event: string }[];
}

/**
 * "The five moments" (Experience Design, brief v2, 14 Nov 2026): venue and event side by side with
 * equal weight. One real <table>. From 768px it is a three-column grid: the moment name in a narrow
 * first column, then "In a venue" and "At an event" at the same width and in the same text style,
 * with the two column titles once above the first row. Below 768px each row becomes a card: the
 * moment name as its heading and two labelled lines. The labels sit inside the cells, so they are
 * only shown (and read) on phones, where the column titles are hidden.
 */
export function MomentsTable({ columns, rows }: MomentsTableContent) {
    const colTitle = 'pb-[clamp(14px,1.1vw,19px)] pr-[clamp(20px,1.59vw,28px)] text-left align-bottom text-[clamp(12px,0.85vw,15px)] font-bold uppercase tracking-[0.18em] text-[#faf6f1]/50';
    const label = 'mb-1 block text-[12px] font-bold uppercase tracking-[0.18em] text-[#faf6f1]/50 md:hidden';
    const rowLine = 'md:table-cell md:border-t md:border-[#faf6f1]/12 md:py-[clamp(20px,1.59vw,28px)] md:pr-[clamp(20px,1.59vw,28px)] md:align-top';
    const cell = `block text-[clamp(0.94rem,1.06vw,1.17rem)] leading-[1.6] text-[#faf6f1]/66 ${rowLine}`;

    return (
        <table className="block w-full md:table md:table-fixed md:border-collapse">
            <thead className="hidden md:table-header-group">
                <tr>
                    <th scope="col" className={`w-[24%] ${colTitle}`}>
                        <span className="sr-only">{columns.moment}</span>
                    </th>
                    <th scope="col" className={`w-[38%] ${colTitle}`}>
                        {columns.venue}
                    </th>
                    <th scope="col" className={`w-[38%] ${colTitle}`}>
                        {columns.event}
                    </th>
                </tr>
            </thead>
            <tbody className="flex flex-col gap-[14px] md:table-row-group">
                {rows.map((row, i) => (
                    <tr
                        key={i}
                        className={`flex flex-col gap-[12px] rounded-[12px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)] p-[20px] md:table-row md:rounded-none md:border-0 md:bg-transparent md:p-0 ${
                            i === rows.length - 1 ? 'md:border-b md:border-[#faf6f1]/12' : ''
                        }`}
                    >
                        <th scope="row" className={`font-didot block text-left text-[clamp(1.35rem,1.6vw,1.55rem)] font-normal leading-[1.25] text-[#faf6f1] ${rowLine}`}>
                            {row.name}
                        </th>
                        <td className={cell}>
                            <span className={label}>{columns.venue}</span>
                            {row.venue}
                        </td>
                        <td className={cell}>
                            <span className={label}>{columns.event}</span>
                            {row.event}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
