type LogoProps = {
  variant?: 'icon' | 'full';
  size?: number;
};

export function Logo({ variant = 'icon', size = 32 }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/brand/logo-icon.svg"
        alt="Brand logo"
        width={size}
        height={size}
      />
      {variant === 'full' && (
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          BrandName
        </span>
      )}
    </div>
  );
}

