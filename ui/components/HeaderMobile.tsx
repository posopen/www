import React from 'react';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

type POSHeaderProps = {
  locationName?: string;
};

export const POSHeader: React.FC<POSHeaderProps> = ({ locationName }) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <img
          src="/brand/logo-icon.svg"
          alt="POS logo"
          style={styles.logo}
        />
        {locationName && (
          <span style={styles.location}>
            {locationName}
          </span>
        )}
      </div>

      <div style={styles.right}>
        <span style={styles.status}>Online</span>
      </div>
    </header>
  );
};

const styles: Record<string, React.CSSProperties> = {
  header: {
    height: 56,
    padding: `0 ${spacing.lg}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #E5E7EB',
    background: '#FFFFFF'
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm
  },

  logo: {
    width: 28,
    height: 28
  },

  location: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium
  },

  right: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    color: '#2563EB'
  },

  status: {
    fontWeight: typography.fontWeight.medium
  }
};
