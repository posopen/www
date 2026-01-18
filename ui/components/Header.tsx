import React from 'react';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

type HeaderProps = {
  brandName: string;
  showBrandName?: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  brandName,
  showBrandName = true
}) => {
  return (
    <header style={styles.header}>
      <div style={styles.logoGroup}>
        <img
          src="/brand/logo-icon.svg"
          alt={`${brandName} logo`}
          style={styles.logo}
        />

        {showBrandName && (
          <span style={styles.brandName}>
            {brandName}
          </span>
        )}
      </div>

      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>Docs</a>
        <a href="#" style={styles.navLink}>Pricing</a>
        <a href="#" style={styles.navLink}>Sign in</a>
      </nav>
    </header>
  );
};

const styles: Record<string, React.CSSProperties> = {
  header: {
    height: spacing.xxxl, // 64px
    padding: `0 ${spacing.xl}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },

  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm
  },

  logo: {
    width: 32,
    height: 32
  },

  brandName: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.wide,
    color: '#111111'
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg
  },

  navLink: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: '#111111',
    textDecoration: 'none',
    cursor: 'pointer'
  }
};
