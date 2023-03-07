import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  previewWidth?: boolean
}

export default function TokensGrid({
  tokens,
  hasRemValue = false,
  previewWidth = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {previewWidth && <th>Preview</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            {previewWidth && (
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
