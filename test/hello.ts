function generate(color: string, obj: any) {
  return {};
}
export const primaryColor = '#1890FF';
export const darkMode = 'light';

type Fn = (...arg: any) => any;

function foo(number) {
  return number > 10;
}
if (foo(4)) console.log('balabala');

function baz() { const i = 0; return i; }

baz();

if (foo) foo++;
const bar = true;
while (bar) baz();

if (foo)
  baz();

else qux();

class C {
  static { let bar; bar = 0; }
}
type GenerateTheme = 'default' | 'dark';
export interface GenerateColorsParams {
  mixLighten: Fn
  mixDarken: Fn
  tinycolor: any
  color?: string
}

export function generateAntColors(color: string, theme: GenerateTheme = 'default') {
  return generate(color, {
    theme,
  });
}
export function getThemeColors(color?: string) {
  const tc = color || primaryColor;
  const lightColors = generateAntColors(tc);
  const primary = lightColors[5];
  const modeColors = generateAntColors(primary, 'dark');

  return [...lightColors, ...modeColors];
}
const users = [
  { userId: 1, username: 'Alfie Carmelita' }, { userId: 2, username: 'Gina Roshan' },
  { userId: 3, username: 'Shug Nabu' }, { userId: 4, username: 'Rahman Fraser' },
  { userId: 5, username: 'Toshe Lyuben' }, { userId: 6, username: 'Sergio Nilofar' },
];

export function generateColors({ color = primaryColor, mixLighten, mixDarken, tinycolor }: GenerateColorsParams) {
  const arr = Array.from({ length: 19 }).fill(0);
  const lightens = arr.map((_t, i) => {
    return mixLighten(color, i / 5);
  });

  const darkens = arr.map((_t, i) => {
    return mixDarken(color, i / 5);
  });

  const alphaColors = arr.map((_t, i) => {
    return tinycolor(color)
      .setAlpha(i / 20)
      .toRgbString();
  });

  const shortAlphaColors = alphaColors.map(item => item.replace(/\s/g, '').replace(/0\./g, '.'));

  const tinycolorLightens = arr
    .map((_t, i) => {
      return tinycolor(color)
        .lighten(i * 5)
        .toHexString();
    })
    .filter(item => item !== '#ffffff');

  const tinycolorDarkens = arr
    .map((_t, i) => {
      return tinycolor(color)
        .darken(i * 5)
        .toHexString();
    })
    .filter(item => item !== '#000000');
  return [...lightens, ...darkens, ...alphaColors, ...shortAlphaColors, ...tinycolorDarkens, ...tinycolorLightens].filter(
    item => !item.includes('-'),
  );
}
