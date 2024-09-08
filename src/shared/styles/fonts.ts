import local from 'next/font/local';

const hauora = local({
  src: [
    {
      path: '../assets/fonts/Hauora/Hauora-Regular/Hauora-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/Hauora/Hauora-Medium/Hauora-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
  ],
});

const wadik = local({
  src: [
    {
      path: '../assets/fonts/Wadik/WadikBold/WadikBold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
});

export const fonts = { hauora, wadik };
