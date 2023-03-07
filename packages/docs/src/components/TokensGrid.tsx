import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  preview?: boolean
}

export default function TokensGrid({
  tokens,
  hasRemValue = false,
  preview = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {preview && <th>Preview</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            {preview && (
              <td>
                <span
                  className="preview-bar"
                  style={{
                    width: value,
                  }}
                ></span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
