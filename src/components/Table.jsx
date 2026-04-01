export default function Table({ data }) {
  return (
    <tr>
      {data.map((cell, index) => {
        // Empty or colspan cells
        if (typeof cell === "object") {
          return (
            <td key={index} colSpan={cell.colSpan || 1}>
              {cell.text || ""}
            </td>
          );
        }

        // Normal element cells
        const [symbol, number] = cell.split("|");

        return (
          <td key={index}>
            {symbol}
            <br />
            {number}
          </td>
        );
      })}
    </tr>
  );
}