export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        height: 40,
        padding: '0 20px',
        background: 'var(--color-accent)',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        fontWeight: 500,
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}

