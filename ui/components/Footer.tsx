import React from 'react';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

type FooterProps = {
  brandName: string;
};

export const Footer: React.FC<FooterProps> = ({ brandName }) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <img
          src="/brand/logo-icon.svg"
          alt={`${brandName} logo`}
          style={styles.logo}
        />
        <span style={styles.text}>
          © {new Date().getFullYear()} {brandName}
        </span>
      </div>

      <div style={styles.right}>
        <a href="#" style={styles.link}>Privacy</a>
        <a href="#" style={styles.link}>Terms</a>
        <a href="#" style={styles.link}>Support</a>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: `${spacing.lg}px ${spacing.xl}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #E5E7EB'
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm
  },

  logo: {
    width: 20,
    height: 20
  },

  text: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    color: '#555555'
  },

  right: {
    display: 'flex',
    gap: spacing.lg
  },

  link: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    textDecoration: 'none',
    color: '#555555'
  }
};
