
export  enum TypographyVariants{
  heading1 = 'h1',
  heading2 = 'h2',
  heading3 = 'h3',
  heading4 = 'h4',
  heading5 = 'h5',
  subtitleM = 'h6',
  subtitleS = 'p',
  bodyL = 'p',
  bodyM = 'p',
  caption = 'span'
}

export type TypographyProps={
  variant: keyof typeof TypographyVariants;
  children: string;
  style?: React.CSSProperties;
  className?: string;
}