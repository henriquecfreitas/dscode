export enum Themes {
  Dark,
  Light,
}

export type Theme = {
  id: Themes,
  colors: {
    background: string,
    light_background: string,
    text: string,
    primary: string,
    secondary: string,
    accent: string,
    accent_alt: string,
    confirm: string,
    danger: string,
    black: string,
  },
}
