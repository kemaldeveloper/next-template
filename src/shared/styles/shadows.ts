import { Shadows } from '@mui/material';

const customShadows = [
  'none',
  '0px 1px 2px 0px rgba(0, 0, 0, 0.05);', // Shadow Small (1)
  '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)', // Shadow Base (2)
  '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)', // Shadow Medium (3)
  '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)', // Shadow Large (4)
  '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)', // Shadow XLarge (5)
  '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), -5px 10px 21px 0px rgba(30, 30, 30, 0.15)', // Shadow XXLarge (6)
  '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset', // Shadow Inner (7)
  '0px -1px 2px 0px rgba(0, 0, 0, 0.06), 0px -1px 3px 0px rgba(0, 0, 0, 0.1)', // Shadow Tap Bar (8)
];

export const shadows = [...customShadows, ...Array(25 - customShadows.length).fill('none')] as Shadows;
