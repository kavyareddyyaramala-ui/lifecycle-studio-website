export interface ColorPalette {
  id: string;
  name: string;
  category: 'Modern Dark' | 'Premium Light' | 'Editorial & Earth' | 'Brutalist & Accent';
  bgMain: string;
  bgCard: string;
  textMain: string;
  textMuted: string;
  primary: string;       // Background class for buttons (Hex code equivalent)
  primaryLabel: string;  // Hex for injection
  primaryHover: string;  // Hex for hover injection
  primaryText: string;   // Text inside primary buttons (Hex)
  border: string;        // Hex for borders
  accent: string;        // Hex for accents
  secondaryBg: string;   // Hex for secondary buttons
  secondaryText: string; // Hex for secondary text
}

export const LUXURY_PALETTES: ColorPalette[] = [
  {
    id: 'athenian-aegean-ochre',
    name: 'Athenian Ochre & Aegean Blue (Greek Vintage)',
    category: 'Editorial & Earth',
    bgMain: '#F5EFE4',
    bgCard: '#FFFBF4',
    textMain: '#1C2E3C',
    textMuted: '#627588',
    primary: 'bg-[#C65D3B]',
    primaryLabel: '#C65D3B',
    primaryHover: '#A24223',
    primaryText: '#FFFBF4',
    border: '#DFD4BD',
    accent: '#C65D3B',
    secondaryBg: '#EFE1CE',
    secondaryText: '#1C2E3C'
  },
  {
    id: 'alexandrian-lapis-gold',
    name: 'Alexandrian Lapis & Pharaoh Gold (Egyptian Vintage)',
    category: 'Modern Dark',
    bgMain: '#0A1021',
    bgCard: '#121C34',
    textMain: '#FBE9D0',
    textMuted: '#899EBF',
    primary: 'bg-[#DCA842]',
    primaryLabel: '#DCA842',
    primaryHover: '#BE8E32',
    primaryText: '#0A1021',
    border: '#233454',
    accent: '#3BBFA7',
    secondaryBg: '#1A2846',
    secondaryText: '#DCA842'
  },
  {
    id: 'mykonos-olive-limestone',
    name: 'Aged Olive & Limestone (Mykonos Vintage)',
    category: 'Editorial & Earth',
    bgMain: '#F7F5EE',
    bgCard: '#FFFFFF',
    textMain: '#2C3A2E',
    textMuted: '#697A6D',
    primary: 'bg-[#A5684D]',
    primaryLabel: '#A5684D',
    primaryHover: '#8B5339',
    primaryText: '#F7F5EE',
    border: '#E1DDD4',
    accent: '#546F58',
    secondaryBg: '#EDEAE0',
    secondaryText: '#2C3A2E'
  },
  {
    id: 'luxor-sand-carnelian',
    name: 'Luxor Sand & Temple Carnelian (Egyptian Vintage)',
    category: 'Editorial & Earth',
    bgMain: '#EFE4D0',
    bgCard: '#F8ECDA',
    textMain: '#351B12',
    textMuted: '#7E6358',
    primary: 'bg-[#9D2D1B]',
    primaryLabel: '#9D2D1B',
    primaryHover: '#802112',
    primaryText: '#F8ECDA',
    border: '#D2C0A5',
    accent: '#D49D3F',
    secondaryBg: '#E4D5BC',
    secondaryText: '#351B12'
  },
  {
    id: 'jaipur-crimson-marigold',
    name: 'Jaipur Crimson & Marigold (Indian Vintage)',
    category: 'Editorial & Earth',
    bgMain: '#FAF1E6',
    bgCard: '#F5E6D3',
    textMain: '#5A2022',
    textMuted: '#8E524D',
    primary: 'bg-[#C26E17]',
    primaryLabel: '#E08A27',
    primaryHover: '#C26E17',
    primaryText: '#FAF1E6',
    border: '#E8D2BB',
    accent: '#B4422E',
    secondaryBg: '#ECDCC6',
    secondaryText: '#5A2022'
  },
  {
    id: 'mughal-sage-sandalwood',
    name: 'Mughal Sage & Sandalwood (Indian Traditional)',
    category: 'Editorial & Earth',
    bgMain: '#EFECE1',
    bgCard: '#FFFFFF',
    textMain: '#1F2E23',
    textMuted: '#667C6E',
    primary: 'bg-[#5F7C68]',
    primaryLabel: '#5F7C68',
    primaryHover: '#415748',
    primaryText: '#EFECE1',
    border: '#DFDBC8',
    accent: '#C08A3E',
    secondaryBg: '#E2DEC7',
    secondaryText: '#1F2E23'
  },
  {
    id: 'varanasi-indigo-brass',
    name: 'Varanasi Indigo & Brass (Indian Midnight)',
    category: 'Modern Dark',
    bgMain: '#0B131E',
    bgCard: '#152233',
    textMain: '#F5EFEB',
    textMuted: '#8DA2BB',
    primary: 'bg-[#E0A95F]',
    primaryLabel: '#E0A95F',
    primaryHover: '#C18F4E',
    primaryText: '#0B131E',
    border: '#26364D',
    accent: '#FA9B68',
    secondaryBg: '#1D2D40',
    secondaryText: '#E0A95F'
  },
  {
    id: 'antique-papyrus',
    name: 'Aged Papyrus & Iron Ink',
    category: 'Editorial & Earth',
    bgMain: '#EDDFCB',
    bgCard: '#F6EADA',
    textMain: '#2A201A',
    textMuted: '#705E52',
    primary: 'bg-[#4D2418]',
    primaryLabel: '#4D2418',
    primaryHover: '#31140D',
    primaryText: '#F6EADA',
    border: '#D9C7AF',
    accent: '#8C6C30',
    secondaryBg: '#E5D3BC',
    secondaryText: '#4D2418'
  },
  {
    id: 'madurai-saffron-clay',
    name: 'Madurai Saffron & Terracotta',
    category: 'Editorial & Earth',
    bgMain: '#FAF2E9',
    bgCard: '#FFFFFF',
    textMain: '#3A190E',
    textMuted: '#835342',
    primary: 'bg-[#A3341F]',
    primaryLabel: '#A3341F',
    primaryHover: '#7D2313',
    primaryText: '#FAF2E9',
    border: '#EFDBC5',
    accent: '#EAB308',
    secondaryBg: '#F3E1CB',
    secondaryText: '#3A190E'
  },
  {
    id: 'byzantine-gold-fig',
    name: 'Byzantine Gold & Dried Fig',
    category: 'Modern Dark',
    bgMain: '#1C1318',
    bgCard: '#2F2128',
    textMain: '#F5EBEA',
    textMuted: '#AC95A3',
    primary: 'bg-[#DFB15B]',
    primaryLabel: '#DFB15B',
    primaryHover: '#C59844',
    primaryText: '#1C1318',
    border: '#42303A',
    accent: '#DFB15B',
    secondaryBg: '#392831',
    secondaryText: '#DFB15B'
  },
  {
    id: 'parchment-moss',
    name: 'Parchment & Antique Moss',
    category: 'Editorial & Earth',
    bgMain: '#F5EFEB',
    bgCard: '#FAF6F2',
    textMain: '#1C2B21',
    textMuted: '#627568',
    primary: 'bg-[#7D6B58]',
    primaryLabel: '#7D6B58',
    primaryHover: '#5C4E3F',
    primaryText: '#FAF6F2',
    border: '#DFD5C6',
    accent: '#556B2F',
    secondaryBg: '#E6DEC9',
    secondaryText: '#1C2B21'
  },
  {
    id: 'sepia-walnut',
    name: 'Sepia & Aged Walnut',
    category: 'Editorial & Earth',
    bgMain: '#EFE6D5',
    bgCard: '#FAF3E3',
    textMain: '#2C1E14',
    textMuted: '#7D6350',
    primary: 'bg-[#5C3D24]',
    primaryLabel: '#5C3D24',
    primaryHover: '#3F2714',
    primaryText: '#FAF3E3',
    border: '#D1C0AA',
    accent: '#C08241',
    secondaryBg: '#E4D5BE',
    secondaryText: '#2C1E14'
  },
  {
    id: 'mustang-honey',
    name: '1965 Mustang Blue & Honey',
    category: 'Modern Dark',
    bgMain: '#1C2C35',
    bgCard: '#243742',
    textMain: '#FAF7F2',
    textMuted: '#899FA9',
    primary: 'bg-[#DCA842]',
    primaryLabel: '#DCA842',
    primaryHover: '#C4912F',
    primaryText: '#1C2C35',
    border: '#344C5B',
    accent: '#DCA842',
    secondaryBg: '#2B414E',
    secondaryText: '#FAF7F2'
  },
  {
    id: 'deco-clay',
    name: '1920s Art Deco Rose',
    category: 'Editorial & Earth',
    bgMain: '#F5EBE6',
    bgCard: '#FCF8F5',
    textMain: '#292524',
    textMuted: '#78716C',
    primary: 'bg-[#78350F]',
    primaryLabel: '#78350F',
    primaryHover: '#451A03',
    primaryText: '#F5EBE6',
    border: '#E7D5CD',
    accent: '#B45309',
    secondaryBg: '#ECD9D0',
    secondaryText: '#78350F'
  },
  {
    id: 'victorian-plum',
    name: 'Victorian Plum & Parchment',
    category: 'Editorial & Earth',
    bgMain: '#F5EDED',
    bgCard: '#FFFFFF',
    textMain: '#3B1C22',
    textMuted: '#73565C',
    primary: 'bg-[#5C2B36]',
    primaryLabel: '#5C2B36',
    primaryHover: '#401C23',
    primaryText: '#F5EDED',
    border: '#E0CFD1',
    accent: '#915F6D',
    secondaryBg: '#EEDDDE',
    secondaryText: '#3B1C22'
  },
  {
    id: 'oceanic-pearl-champagne',
    name: 'Oceanic Pearl & Champagne',
    category: 'Premium Light',
    bgMain: '#F4F7F6',
    bgCard: '#FFFFFF',
    textMain: '#162F30',
    textMuted: '#637D7E',
    primary: 'bg-[#1C3E3F]',
    primaryLabel: '#1C3E3F',
    primaryHover: '#112829',
    primaryText: '#FFFFFF',
    border: '#D9E3E2',
    accent: '#D59F58',
    secondaryBg: '#EAF0EE',
    secondaryText: '#1C3E3F'
  },
  {
    id: 'espresso-cognac',
    name: 'Espresso & Cognac',
    category: 'Modern Dark',
    bgMain: '#0D0907',
    bgCard: '#17110F',
    textMain: '#F4EFEA',
    textMuted: '#96817B',
    primary: 'bg-[#C27E4D]',
    primaryLabel: '#C27E4D',
    primaryHover: '#A16238',
    primaryText: '#0D0907',
    border: '#2F201C',
    accent: '#E2A97F',
    secondaryBg: '#221815',
    secondaryText: '#C27E4D'
  },
  {
    id: 'imperial-jade',
    name: 'Imperial Jade',
    category: 'Modern Dark',
    bgMain: '#050E0C',
    bgCard: '#0C1C18',
    textMain: '#EDF6F3',
    textMuted: '#8AA8A1',
    primary: 'bg-[#4AE3B5]',
    primaryLabel: '#4AE3B5',
    primaryHover: '#33C498',
    primaryText: '#050E0C',
    border: '#17362F',
    accent: '#E2FFDE',
    secondaryBg: '#102A24',
    secondaryText: '#4AE3B5'
  },
  {
    id: 'vintage-bordeaux-cream',
    name: 'Vintage Bordeaux & Cream',
    category: 'Editorial & Earth',
    bgMain: '#FCF9F5',
    bgCard: '#FFFFFF',
    textMain: '#3D131D',
    textMuted: '#825963',
    primary: 'bg-[#5B1020]',
    primaryLabel: '#5B1020',
    primaryHover: '#420814',
    primaryText: '#FCF9F5',
    border: '#ECE1D9',
    accent: '#A47551',
    secondaryBg: '#F6EFEB',
    secondaryText: '#5B1020'
  },
  {
    id: 'royal-velvet-gold',
    name: 'Royal Velvet & Gold',
    category: 'Modern Dark',
    bgMain: '#090C15',
    bgCard: '#121829',
    textMain: '#F1F4FA',
    textMuted: '#8B9BB4',
    primary: 'bg-[#E5C158]',
    primaryLabel: '#E5C158',
    primaryHover: '#CBA33D',
    primaryText: '#090C15',
    border: '#232E48',
    accent: '#E5C158',
    secondaryBg: '#192137',
    secondaryText: '#E5C158'
  },
  {
    id: 'rose-quartz-charcoal',
    name: 'Rose Quartz & Charcoal',
    category: 'Premium Light',
    bgMain: '#FAF2F4',
    bgCard: '#FFFFFF',
    textMain: '#24181B',
    textMuted: '#755E63',
    primary: 'bg-[#24181B]',
    primaryLabel: '#24181B',
    primaryHover: '#191012',
    primaryText: '#FFFFFF',
    border: '#EDE0E3',
    accent: '#C38D9E',
    secondaryBg: '#F5E6E9',
    secondaryText: '#24181B'
  },
  {
    id: 'nordic-sage-copper',
    name: 'Nordic Sage & Copper',
    category: 'Editorial & Earth',
    bgMain: '#E9EFE9',
    bgCard: '#FFFFFF',
    textMain: '#202F24',
    textMuted: '#5C7362',
    primary: 'bg-[#C06C47]',
    primaryLabel: '#C06C47',
    primaryHover: '#A04E2B',
    primaryText: '#FFFFFF',
    border: '#CBD7CC',
    accent: '#C06C47',
    secondaryBg: '#DFE7DF',
    secondaryText: '#202F24'
  },
  {
    id: 'amethyst-silk',
    name: 'Amethyst Silk',
    category: 'Modern Dark',
    bgMain: '#0B0712',
    bgCard: '#140D22',
    textMain: '#FAF5FF',
    textMuted: '#8F7EA5',
    primary: 'bg-[#C084FC]',
    primaryLabel: '#C084FC',
    primaryHover: '#A855F7',
    primaryText: '#0B0712',
    border: '#271C3D',
    accent: '#F472B6',
    secondaryBg: '#1E1233',
    secondaryText: '#C084FC'
  },
  {
    id: 'toasted-pistachio',
    name: 'Toasted Pistachio',
    category: 'Editorial & Earth',
    bgMain: '#F4F6F1',
    bgCard: '#FFFFFF',
    textMain: '#1B2515',
    textMuted: '#66735E',
    primary: 'bg-[#4D3124]',
    primaryLabel: '#4D3124',
    primaryHover: '#31190F',
    primaryText: '#F4F6F1',
    border: '#E3E8DC',
    accent: '#B18249',
    secondaryBg: '#EAEEE4',
    secondaryText: '#1B2515'
  },
  {
    id: 'chablis-truffle',
    name: 'Chablis & Truffle',
    category: 'Premium Light',
    bgMain: '#FAF6EE',
    bgCard: '#FFFFFF',
    textMain: '#2E2211',
    textMuted: '#80705E',
    primary: 'bg-[#503517]',
    primaryLabel: '#503517',
    primaryHover: '#311C06',
    primaryText: '#FAF6EE',
    border: '#EFE8DB',
    accent: '#C19F6E',
    secondaryBg: '#F2EAE0',
    secondaryText: '#503517'
  },
  {
    id: 'midnight-emerald',
    name: 'Midnight Emerald',
    category: 'Modern Dark',
    bgMain: '#091612',
    bgCard: '#11241F',
    textMain: '#E2EFEC',
    textMuted: '#7D9892',
    primary: 'bg-[#5EEAD4]',
    primaryLabel: '#5EEAD4',
    primaryHover: '#2DD4BF',
    primaryText: '#06201B',
    border: '#1B3D35',
    accent: '#D9F99D',
    secondaryBg: '#13352C',
    secondaryText: '#5EEAD4'
  },
  {
    id: 'burnt-terracotta',
    name: 'Burnt Terracotta',
    category: 'Editorial & Earth',
    bgMain: '#FAF6F0',
    bgCard: '#FFFFFF',
    textMain: '#2E1911',
    textMuted: '#705347',
    primary: 'bg-[#B05B3B]',
    primaryLabel: '#B05B3B',
    primaryHover: '#8C452A',
    primaryText: '#FFFFFF',
    border: '#EBDCD3',
    accent: '#748060',
    secondaryBg: '#EDDFD5',
    secondaryText: '#B05B3B'
  },
  {
    id: 'plum-satin',
    name: 'Plum Satin',
    category: 'Modern Dark',
    bgMain: '#0E0911',
    bgCard: '#16101C',
    textMain: '#F3EEF6',
    textMuted: '#A193AA',
    primary: 'bg-[#D9A6FF]',
    primaryLabel: '#D9A6FF',
    primaryHover: '#C084FC',
    primaryText: '#0E0911',
    border: '#2B1E36',
    accent: '#FFD1E6',
    secondaryBg: '#21172A',
    secondaryText: '#D9A6FF'
  },
  {
    id: 'imperial-saffron',
    name: 'Imperial Saffron',
    category: 'Modern Dark',
    bgMain: '#0A0908',
    bgCard: '#141210',
    textMain: '#FFF8F2',
    textMuted: '#9E968F',
    primary: 'bg-[#F59E0B]',
    primaryLabel: '#F59E0B',
    primaryHover: '#D97706',
    primaryText: '#0A0908',
    border: '#2C2520',
    accent: '#FBBF24',
    secondaryBg: '#1E1915',
    secondaryText: '#F59E0B'
  },
  {
    id: 'cyber-quartz',
    name: 'Cyber Quartz',
    category: 'Brutalist & Accent',
    bgMain: '#070610',
    bgCard: '#0F0E20',
    textMain: '#F4F3FF',
    textMuted: '#AEACCD',
    primary: 'bg-[#E0E7FF]',
    primaryLabel: '#E0E7FF',
    primaryHover: '#C7D2FE',
    primaryText: '#070610',
    border: '#201A45',
    accent: '#F0ABFC',
    secondaryBg: '#161230',
    secondaryText: '#E0E7FF'
  },
  {
    id: 'desert-ocre',
    name: 'Desert Ocre',
    category: 'Editorial & Earth',
    bgMain: '#F9F5EE',
    bgCard: '#FFFFFF',
    textMain: '#382A13',
    textMuted: '#75644C',
    primary: 'bg-[#E29821]',
    primaryLabel: '#E29821',
    primaryHover: '#BC7D18',
    primaryText: '#FFFFFF',
    border: '#EDDEC8',
    accent: '#A06D3E',
    secondaryBg: '#EDDFCD',
    secondaryText: '#382A13'
  },
  {
    id: 'warm-alabaster',
    name: 'Warm Alabaster',
    category: 'Editorial & Earth',
    bgMain: '#FAF8F5',
    bgCard: '#FFFFFF',
    textMain: '#1F1A15',
    textMuted: '#7A6E5F',
    primary: 'bg-[#3D3328]',
    primaryLabel: '#3D3328',
    primaryHover: '#2A231A',
    primaryText: '#FCFAF7',
    border: '#E8DFD3',
    accent: '#C58B58',
    secondaryBg: '#F3EDE2',
    secondaryText: '#3D3328'
  },
  {
    id: 'cosmic-indigo',
    name: 'Cosmic Indigo',
    category: 'Modern Dark',
    bgMain: '#08090E',
    bgCard: '#101422',
    textMain: '#F1F5F9',
    textMuted: '#94A9C4',
    primary: 'bg-[#38BDF8]',
    primaryLabel: '#38BDF8',
    primaryHover: '#0EA5E9',
    primaryText: '#08090E',
    border: '#1F293D',
    accent: '#38BDF8',
    secondaryBg: '#1E293B',
    secondaryText: '#38BDF8'
  },
  {
    id: 'ebene-ochre',
    name: 'Ebene & Ochre',
    category: 'Editorial & Earth',
    bgMain: '#F5ECE2',
    bgCard: '#FFFFFF',
    textMain: '#201611',
    textMuted: '#827164',
    primary: 'bg-[#8F4E1B]',
    primaryLabel: '#8F4E1B',
    primaryHover: '#723B11',
    primaryText: '#FFFFFF',
    border: '#DDD0C0',
    accent: '#8F4E1B',
    secondaryBg: '#F3ECD3',
    secondaryText: '#8F4E1B'
  },
  {
    id: 'minimal-zinc',
    name: 'Minimalist Zinc',
    category: 'Premium Light',
    bgMain: '#FAFAFA',
    bgCard: '#FFFFFF',
    textMain: '#18181B',
    textMuted: '#71717A',
    primary: 'bg-[#18181B]',
    primaryLabel: '#18181B',
    primaryHover: '#09090B',
    primaryText: '#FFFFFF',
    border: '#E4E4E7',
    accent: '#52525B',
    secondaryBg: '#F4F4F5',
    secondaryText: '#18181B'
  },
  {
    id: 'sage-sand',
    name: 'Sage & Sand',
    category: 'Editorial & Earth',
    bgMain: '#F2F4F0',
    bgCard: '#FFFFFF',
    textMain: '#1B291D',
    textMuted: '#5E6B60',
    primary: 'bg-[#293E2E]',
    primaryLabel: '#293E2E',
    primaryHover: '#1C2C20',
    primaryText: '#FFFFFF',
    border: '#CBD2C3',
    accent: '#648F6C',
    secondaryBg: '#E4ECE0',
    secondaryText: '#1B291D'
  },
  {
    id: 'rosewood-dusk',
    name: 'Rosewood & Dusk',
    category: 'Editorial & Earth',
    bgMain: '#FAF4F2',
    bgCard: '#FFFFFF',
    textMain: '#3A241B',
    textMuted: '#806A61',
    primary: 'bg-[#A35941]',
    primaryLabel: '#A35941',
    primaryHover: '#854530',
    primaryText: '#FFFFFF',
    border: '#E6D4CE',
    accent: '#A35941',
    secondaryBg: '#F2EAE6',
    secondaryText: '#3A241B'
  },
  {
    id: 'ink-nebula',
    name: 'Ink & Nebula',
    category: 'Modern Dark',
    bgMain: '#0F111A',
    bgCard: '#151926',
    textMain: '#F1F5F9',
    textMuted: '#94A3B8',
    primary: 'bg-[#8B5CF6]',
    primaryLabel: '#8B5CF6',
    primaryHover: '#7C3AED',
    primaryText: '#FFFFFF',
    border: '#1E293B',
    accent: '#A78BFA',
    secondaryBg: '#1E293B',
    secondaryText: '#A78BFA'
  },
  {
    id: 'frost-chalk',
    name: 'Frost & Chalk',
    category: 'Premium Light',
    bgMain: '#F1F5F9',
    bgCard: '#FFFFFF',
    textMain: '#0F172A',
    textMuted: '#475569',
    primary: 'bg-[#0F172A]',
    primaryLabel: '#0F172A',
    primaryHover: '#1E293B',
    primaryText: '#FFFFFF',
    border: '#E2E8F0',
    accent: '#0EA5E9',
    secondaryBg: '#F1F5F9',
    secondaryText: '#0F172A'
  },
  {
    id: 'neo-volt',
    name: 'Neo-Volt Brutalist',
    category: 'Brutalist & Accent',
    bgMain: '#FAFAFA',
    bgCard: '#FFFFFF',
    textMain: '#000000',
    textMuted: '#3F3F46',
    primary: 'bg-[#22D3EE]',
    primaryLabel: '#22D3EE',
    primaryHover: '#22D3EE',
    primaryText: '#000000',
    border: '#000000',
    accent: '#EC4899',
    secondaryBg: '#FFFFFF',
    secondaryText: '#000000'
  },
  {
    id: 'lavender-grace',
    name: 'Lavender Grace',
    category: 'Premium Light',
    bgMain: '#F8F6FC',
    bgCard: '#FFFFFF',
    textMain: '#2E2738',
    textMuted: '#7E738A',
    primary: 'bg-[#7C3AED]',
    primaryLabel: '#7C3AED',
    primaryHover: '#6D28D9',
    primaryText: '#FFFFFF',
    border: '#EADFF2',
    accent: '#A855F7',
    secondaryBg: '#F3EAF8',
    secondaryText: '#7C3AED'
  },
  {
    id: 'velvet-burgundy',
    name: 'Velvet Burgundy',
    category: 'Modern Dark',
    bgMain: '#0C0204',
    bgCard: '#1A0A0E',
    textMain: '#FEE2E6',
    textMuted: '#C49FA5',
    primary: 'bg-[#E11D48]',
    primaryLabel: '#E11D48',
    primaryHover: '#BE123C',
    primaryText: '#FFFFFF',
    border: '#33141A',
    accent: '#FDA4AF',
    secondaryBg: '#2E1218',
    secondaryText: '#FDA4AF'
  },
  {
    id: 'classic-luxury-noir',
    name: 'Luxury Noir',
    category: 'Modern Dark',
    bgMain: '#0A0A0A',
    bgCard: '#121212',
    textMain: '#ECECEC',
    textMuted: '#8E8E93',
    primary: 'bg-[#D4AF37]',
    primaryLabel: '#D4AF37',
    primaryHover: '#AA882C',
    primaryText: '#0A0A0A',
    border: '#2A2A2A',
    accent: '#D4AF37',
    secondaryBg: '#1A1A1A',
    secondaryText: '#ECECEC'
  }
];

// Helper to generate only the CSS rules for a given color palette
export const getThemedStyleTagInner = (palette: ColorPalette) => {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    :root {
      --cream: ${palette.bgCard} !important;
      --cream2: ${palette.secondaryBg} !important;
      --ink: ${palette.textMain} !important;
      --muted: ${palette.textMain}e5 !important; /* Ultra high contrast (90%+ opacity) of main text color for readability */
      --soft: ${palette.textMain}c8 !important; /* High contrast soft color */
      --cocoa: ${palette.primaryLabel} !important;
      --gold: ${palette.accent} !important;
      --sage: ${palette.accent} !important;
      --rose: ${palette.accent} !important;
      --line: ${palette.border}aa !important;
      --glass: ${palette.bgCard}cb !important;
    }

    /* Core backgrounds and typography with thick premium weights */
    body, html {
      background-color: ${palette.bgMain} !important;
      color: ${palette.textMain} !important;
      font-weight: 450 !important; /* Perfect balanced medium-regular weight for human editorial aesthetic */
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
      text-rendering: optimizeLegibility !important;
    }

    body::before {
      background: radial-gradient(circle at 10% 10%, ${palette.accent}14, transparent 28%), 
                  radial-gradient(circle at 88% 12%, ${palette.primaryLabel}0d, transparent 30%), 
                  linear-gradient(180deg, ${palette.bgMain}, ${palette.bgCard} 45%, ${palette.bgMain}) !important;
    }

    /* Dynamic Hero backgrounds & overlays to guarantee instant visible contrast in every selected palette */
    .hero {
      background-image: linear-gradient(90deg, ${palette.bgMain}ee 35%, ${palette.bgMain}f9 55%, ${palette.bgMain}cf 72%, ${palette.bgMain}22 100%), url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80') !important;
      background-color: ${palette.bgMain} !important;
    }
    @media (max-width: 980px) {
      .hero {
        background-image: linear-gradient(180deg, ${palette.bgMain}f2 45%, ${palette.bgMain}fa 70%, ${palette.bgMain}c0 88%, ${palette.bgMain}33 100%), url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80') !important;
      }
    }

    /* Dynamic Hero Quote Badge contrast matching */
    .hero-quote-badge {
      background-color: ${palette.bgCard}ee !important;
      border-color: ${palette.border} !important;
    }
    .hero-quote-badge p, #hero-dynamic-quote {
      color: ${palette.textMain} !important;
    }
    #hero-dynamic-author {
      color: ${palette.primaryLabel} !important;
      font-weight: 700 !important;
    }

    /* Global Typography Overrides to ensure thick font weights and ultimate contrast */
    h1, h2, h3, h4, h5, h6, .display, .section-title, .title, .heading {
      color: ${palette.textMain} !important;
      font-weight: 600 !important; /* Extra thick premium support for headers */
      letter-spacing: -0.025em !important; /* Elegant tighter letter tracking */
    }
    p, .hero-sub, .desc, .text, .sub, .subtitle, .subdescription, .audience-intro, .picture-proof-text, .dashboard-main-text, .client-proof-sub, .step p, .service p, .flow-info p, .sms-proof-brand, .final-form-note {
      color: ${palette.textMain}f2 !important; /* Extremely high contrast 95% opacity deep contrast */
      font-weight: 500 !important; /* Comfortable and highly readable premium weight */
      line-height: 1.625 !important; /* Natural human reading height ratio */
      opacity: 1 !important;
    }

    /* Target specific custom classes in the user's website builder */
    .eyebrow {
      color: ${palette.accent} !important;
      font-weight: 700 !important;
      letter-spacing: 0.22em !important;
      text-transform: uppercase !important;
    }

    .btn-dark {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .btn-dark:hover {
      background-color: ${palette.primaryHover} !important;
    }

    .btn-light {
      background-color: ${palette.secondaryBg} !important;
      color: ${palette.secondaryText} !important;
      border-color: ${palette.border} !important;
    }
    .btn-light:hover {
      background-color: ${palette.bgCard} !important;
    }

    nav.scrolled {
      background: ${palette.bgCard}dd !important;
      border-bottom-color: ${palette.border} !important;
    }
    .nav-cta {
      background-color: ${palette.secondaryBg} !important;
      color: ${palette.secondaryText} !important;
      border-color: ${palette.border} !important;
    }
    .nav-cta:hover {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }

    /* Pain and Problems cards */
    .problem {
      background: linear-gradient(180deg, ${palette.bgMain}, ${palette.secondaryBg}) !important;
    }
    .pain {
      background-color: ${palette.bgCard}80 !important;
      border-color: ${palette.border} !important;
    }
    .pain:hover {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.accent}aa !important;
    }
    .pain-icon {
      background-color: ${palette.secondaryBg} !important;
      color: ${palette.accent} !important;
    }

    /* Services and Industries section */
    .service {
      background-color: ${palette.bgCard}aa !important;
      border-color: ${palette.border} !important;
    }
    .service:hover {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.accent}bb !important;
    }
    .service-icon {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .service h3, .service p {
      color: ${palette.textMain} !important;
    }
    .learn {
      color: ${palette.accent} !important;
    }

    .industries-panel.v2-audience {
      background: linear-gradient(160deg, ${palette.bgCard} 0%, ${palette.bgMain} 100%) !important;
      border-color: ${palette.border} !important;
    }
    .audience-kicker {
      color: ${palette.accent} !important;
    }
    .audience-photo.v2-card {
      border-color: ${palette.border} !important;
    }
    .audience-photo.v2-card:hover {
      border-color: ${palette.accent}cc !important;
    }
    .audience-note {
      background-color: ${palette.secondaryBg}a0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
      font-weight: 500 !important;
    }

    /* Flows */
    .flows {
      background-color: ${palette.bgCard} !important;
      color: ${palette.textMain} !important;
    }
    .flow {
      background-color: ${palette.bgMain}80 !important;
      border-color: ${palette.border} !important;
    }
    .flow-node {
      background-color: ${palette.secondaryBg}a0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .flow-node i {
      background-color: ${palette.accent} !important;
    }

    /* Results and Stats */
    .results {
      background: linear-gradient(180deg, ${palette.bgMain}, ${palette.secondaryBg}) !important;
    }
    .stats {
      background: ${palette.bgCard}60 !important;
      border-color: ${palette.border} !important;
    }
    .stat {
      background: ${palette.bgCard}90 !important;
    }
    .stat .n, .metric-num {
      color: ${palette.primaryLabel} !important;
    }
    .dashboard {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.border} !important;
    }
    .dash-card {
      background-color: ${palette.bgMain}cc !important;
      border-color: ${palette.border} !important;
    }
    .dash-card .num {
      color: ${palette.accent} !important;
    }
    .bar {
      background: linear-gradient(180deg, ${palette.accent}, ${palette.secondaryBg}) !important;
    }

    /* Steps */
    .step {
      background-color: ${palette.bgCard}80 !important;
      border-color: ${palette.border} !important;
    }
    .step:hover {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.accent}ba !important;
    }
    .step-num {
      color: ${palette.accent}3a !important;
    }

    /* Testimonials and Quotes */
    .testimonials {
      background-color: ${palette.bgCard} !important;
    }
    .quote {
      background-color: ${palette.bgMain}90 !important;
      border-color: ${palette.border} !important;
    }

    /* Secondary Gallery collage and photo styles */
    .lifecycle-dashboard-section {
      background-color: ${palette.bgMain} !important;
      color: ${palette.textMain} !important;
    }
    .dashboard-card {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.border} !important;
    }
    .dashboard-card-title {
      color: ${palette.textMain} !important;
    }
    .dashboard-tag {
      color: ${palette.accent} !important;
    }
    .metric-card {
      background-color: ${palette.bgCard} !important;
      border: 1px solid ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .metric-number {
      color: ${palette.accent} !important;
    }
    .metric-label {
      color: ${palette.textMain}d0 !important;
      font-weight: 500 !important;
    }
    
    /* Hero element theme-matching optimizations */
    .email-card {
      background-color: ${palette.bgCard}e0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .flow-card {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .phone {
      background-color: ${palette.primaryLabel} !important;
      border-color: ${palette.border} !important;
    }
    .phone-screen {
      background-color: ${palette.bgMain} !important;
      color: ${palette.textMain} !important;
    }
    .sms {
      background-color: ${palette.secondaryBg} !important;
      color: ${palette.textMain} !important;
    }
    .sms.alt {
      background-color: ${palette.accent} !important;
      color: ${palette.primaryText} !important;
    }

    /* Target Audiences and Sticky panels legibility overrides */
    .audience-title {
      color: ${palette.textMain} !important;
    }
    .audience-intro {
      color: ${palette.textMain}f2 !important;
      font-weight: 500 !important;
    }
    .audience-note {
      background-color: ${palette.secondaryBg}a0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
      font-weight: 500 !important;
    }
    .flows .sub {
      color: ${palette.textMain}f2 !important;
      font-weight: 500 !important;
    }
    .flows .eyebrow {
      color: ${palette.accent} !important;
      font-weight: 600 !important;
    }

    /* Client SMS proofs elements & Readability improvements */
    .client-proof-section {
      background: radial-gradient(circle at 15% 10%, ${palette.accent}12, transparent 34%), ${palette.bgMain} !important;
      color: ${palette.textMain} !important;
    }
    .client-proof-eyebrow {
      color: ${palette.accent} !important;
    }
    .client-proof-title em, h2 em {
      color: ${palette.accent} !important;
    }
    .sms-proof-card {
      background-color: ${palette.bgCard}e0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .sms-proof-card:hover {
      border-color: ${palette.accent}90 !important;
      background-color: ${palette.bgCard} !important;
    }
    .sms-window {
      background-color: ${palette.bgMain}cb !important;
    }
    .sms-bubble.client {
      background-color: ${palette.bgCard} !important;
      color: ${palette.textMain} !important;
    }
    .sms-bubble.us {
      background-color: ${palette.accent}22 !important;
      color: ${palette.textMain} !important;
    }
    .sms-proof-rating {
      background-color: ${palette.secondaryBg} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .sms-proof-rating span:first-child {
      color: ${palette.accent} !important;
    }
    .sms-proof-name {
      color: ${palette.textMain} !important;
    }
    .sms-proof-brand {
      color: ${palette.textMain}cc !important;
      font-weight: 500 !important;
    }
    
    /* Screenshot Chat Details dynamic theme-binds */
    .phone-top {
      color: ${palette.textMuted} !important;
      border-bottom-color: ${palette.border}4a !important;
    }
    .phone-status-bar {
      color: ${palette.textMuted}bd !important;
    }
    .phone-contact-name {
      color: ${palette.textMain} !important;
    }
    .phone-contact-status {
      color: ${palette.accent} !important;
    }
    .phone-back-btn, .phone-header-actions {
      color: ${palette.textMuted}cc !important;
    }
    .phone-online-dot {
      border-color: ${palette.bgCard} !important;
    }

    /* Testimonials quote contrast corrections */
    .quote {
      background-color: ${palette.bgCard}90 !important;
      border-color: ${palette.border} !important;
    }
    .quote p {
      color: ${palette.textMain}f2 !important;
      font-weight: 500 !important;
    }
    .quote b {
      color: ${palette.textMain} !important;
    }
    .quote span {
      color: ${palette.accent} !important;
    }

    /* Forms, custom sections and footers style overrides */
    .brandstyles {
      background-color: ${palette.bgMain} !important;
    }
    .inquiry-section-custom {
      background: linear-gradient(135deg, ${palette.bgMain}, ${palette.secondaryBg}) !important;
    }
    .final-inquiry-grid > div {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.border} !important;
    }
    .final-inquiry-form-card {
      background-color: ${palette.bgCard}ef !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .final-inquiry-form-card label {
      color: ${palette.textMain} !important;
    }
    .final-form-note {
      color: ${palette.textMuted} !important;
    }
    .inquiry-section-custom > div > div:first-child {
      background-color: ${palette.bgCard} !important;
      border: 1px solid ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .inquiry-section-custom > div > div:first-child a {
      background-color: ${palette.secondaryBg} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .inquiry-section-custom > div > div:last-child {
      background-color: ${palette.bgCard} !important;
      border-color: ${palette.border} !important;
    }
    .inquiry-section-custom h3 {
      color: ${palette.textMain} !important;
    }
    .final-inquiry-copy .display {
      color: ${palette.textMain} !important;
    }
    .final-contact-option {
      background-color: ${palette.secondaryBg} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .final-contact-option span {
      color: ${palette.textMain}d0 !important;
      font-weight: 500 !important;
    }
    .final-inquiry-submit {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .final-inquiry-submit:hover {
      background-color: ${palette.primaryHover} !important;
    }
    
    input, select, textarea {
      background-color: ${palette.bgMain} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    input::placeholder, textarea::placeholder {
      color: ${palette.textMuted}b0 !important;
    }

    .contact {
      background: radial-gradient(circle at 50% 35%, ${palette.accent}14, transparent 32%), ${palette.bgCard} !important;
    }
    .footer {
      background-color: ${palette.bgCard} !important;
      border-top: 1px solid ${palette.border} !important;
      color: ${palette.textMain}d0 !important;
    }
    .footer p, .footer a {
      color: ${palette.textMain}cc !important;
      font-weight: 500 !important;
    }
    .footer a:hover {
      color: ${palette.accent} !important;
    }
    .footer h4, .footer-logo, .footer .footer-logo {
      color: ${palette.textMain} !important;
    }
    .logo-infinity-loop {
      stroke: ${palette.textMain} !important;
    }
    .logo-text-mail {
      color: ${palette.textMain} !important;
    }

    /* Modals elements inside template popup frame */
    .modal {
      background-color: ${palette.bgCard} !important;
      color: ${palette.textMain} !important;
      border-color: ${palette.border} !important;
    }
    .modal-close {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .modal-tag {
      color: ${palette.accent} !important;
    }
    .modal-item {
      background-color: ${palette.secondaryBg}a0 !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .industry-pill {
      background-color: ${palette.accent}14 !important;
      border-color: ${palette.accent}40 !important;
      color: ${palette.accent} !important;
    }

    /* Specific Brutalist Mode Offsets */
    ${palette.id === 'neo-volt' ? `
      * {
        font-family: 'Space Grotesk', ui-monospace, sans-serif !important;
      }
      .shadow-sm, .shadow-md, .shadow-lg, .shadow-xl, .shadow-2xl, .shadow {
        box-shadow: 4px 4px 0px #000000 !important;
      }
      button, a, .rounded-lg, .rounded-xl, .rounded-2xl, .rounded-3xl, .rounded-md, .step, .pain, .service, .sms-proof-card {
        border: 2px solid #000000 !important;
        border-radius: 4px !important;
      }
    ` : ''}

    /* Luxury Noir premium gold filters */
    ${palette.id === 'classic-luxury-noir' ? `
      img, .hero-photo, .audience-photo, .industry-modal-visual, .picture-proof-card {
        filter: grayscale(80%) sepia(20%) brightness(85%) !important;
        transition: filter 0.4s ease;
      }
      img:hover, .hero-photo:hover, .audience-photo:hover {
        filter: grayscale(40%) sepia(10%) brightness(95%) !important;
      }
    ` : ''}

    /* Dynamic Recolor for Lead Capture Popup & Floating Call Badge to match active palette */
    .lead-popup-overlay {
      background-color: rgba(10, 10, 12, 0.78) !important;
    }
    .lead-popup {
      background-color: ${palette.bgMain} !important;
      border-color: ${palette.border} !important;
      color: ${palette.textMain} !important;
    }
    .lead-popup-visual {
      background-image: linear-gradient(180deg, ${palette.primaryLabel}1a 0%, ${palette.primaryLabel}55 35%, ${palette.primaryLabel}ca 100%), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=65') !important;
    }
    .lead-popup-visual small {
      color: ${palette.accent} !important;
    }
    .lead-popup-content {
      background-color: ${palette.bgCard} !important;
    }
    .lead-popup-close {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .lead-eyebrow {
      color: ${palette.accent} !important;
    }
    .lead-form label {
      color: ${palette.textMuted} !important;
    }
    .lead-form input, .lead-form select, .lead-form textarea {
      background-color: ${palette.secondaryBg}55 !important;
      border-color: ${palette.border}aa !important;
      color: ${palette.textMain} !important;
    }
    .lead-form input:focus, .lead-form select:focus, .lead-form textarea:focus {
      border-color: ${palette.accent} !important;
    }
    .lead-submit {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
    }
    .lead-submit:hover {
      background-color: ${palette.primaryHover} !important;
    }
    .lead-note {
      color: ${palette.textMuted}e6 !important;
    }
    .lead-popup-mini {
      background-color: ${palette.primaryLabel} !important;
      color: ${palette.primaryText} !important;
      border: 1px solid ${palette.border} !important;
      box-shadow: 0 12px 36px rgba(0,0,0,0.22) !important;
    }
    .lead-popup-mini:hover {
      background-color: ${palette.primaryHover} !important;
    }
  `;
};
