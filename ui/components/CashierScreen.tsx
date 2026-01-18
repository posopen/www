import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';
import { Button } from './Button';

export function CashierScreen() {
  return (
    <div style={styles.container}>
      <section style={styles.products}>
        <div style={styles.grid}>
          {Array.from({ length: 12 }).map((_, i) => (
            <button key={i} style={styles.product}>
              Item {i + 1}
            </button>
          ))}
        </div>
      </section>

      <aside style={styles.cart}>
        <h3 style={styles.heading}>Cart</h3>
        <div style={styles.items}>
          <div style={styles.lineItem}>Product A ×1</div>
          <div style={styles.lineItem}>Product B ×2</div>
        </div>

        <div style={styles.total}>
          <div>Total</div>
          <strong>$124.00</strong>
        </div>

        <Button>Pay</Button>
      </aside>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    height: 'calc(100vh - 56px)'
  },

  products: {
    padding: spacing.lg
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: spacing.md
  },

  product: {
    height: 96,
    fontSize: typography.fontSize.md,
    borderRadius: 8,
    border: '1px solid #E5E7EB',
    background: '#fff'
  },

  cart: {
    padding: spacing.lg,
    borderLeft: '1px solid #E5E7EB',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md
  },

  heading: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold
  },

  items: {
    flex: 1
  },

  lineItem: {
    padding: `${spacing.sm}px 0`
  },

  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: typography.fontSize.lg
  }
};
