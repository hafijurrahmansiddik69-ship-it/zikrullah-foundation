export interface DonationCategoryItem {
  id: string;
  bn: string;
  en: string;
}

export const DONATION_CATEGORIES: DonationCategoryItem[] = [
  {
    id: 'general-sadaqah',
    bn: 'সাধারণ সদকা',
    en: 'General Sadaqah'
  },
  {
    id: 'healthcare-medical-camp',
    bn: 'ফ্রি মেডিকেল ক্যাম্প ও ওষুধ ফান্ড',
    en: 'Healthcare & Medical Camp'
  },
  {
    id: 'food-relief',
    bn: 'অসহায় পরিবারের খাদ্য সহায়তা',
    en: 'Food Relief for Needy Families'
  },
  {
    id: 'education-support',
    bn: 'এতিম ও অসহায় শিক্ষার্থীদের শিক্ষা সহায়তা',
    en: 'Education Support for Orphans'
  },
  {
    id: 'youth-training',
    bn: 'যুব আত্মকর্মসংস্থান ও প্রশিক্ষণ',
    en: 'Youth Training & Self-Employment'
  },
  {
    id: 'tubewell-tree-plantation',
    bn: 'নলকূপ ও বৃক্ষরোপণ',
    en: 'Tube-well & Tree Plantation'
  },
  {
    id: 'zakat-fund',
    bn: 'যাকাত তহবিল',
    en: 'Zakat Fund'
  }
];

export function resolveDonationCategoryId(input?: string): string {
  if (!input) return 'general-sadaqah';
  const clean = input.trim().toLowerCase();

  // Check ID directly
  const directMatch = DONATION_CATEGORIES.find((c) => c.id === input || c.bn === input || c.en === input);
  if (directMatch) return directMatch.id;

  // 7. Zakat Fund (always checks explicitly)
  if (clean.includes('যাকাত') || clean.includes('zakat')) {
    return 'zakat-fund';
  }
  // 2. Healthcare & Medical Camp
  if (
    clean.includes('মেডিকেল') ||
    clean.includes('চিকিৎসা') ||
    clean.includes('ওষুধ') ||
    clean.includes('ঔষধ') ||
    clean.includes('health') ||
    clean.includes('medical')
  ) {
    return 'healthcare-medical-camp';
  }
  // 3. Food Relief for Needy Families
  if (
    clean.includes('খাদ্য') ||
    clean.includes('food') ||
    clean.includes('ত্রাণ') ||
    clean.includes('হতদরিদ্র')
  ) {
    return 'food-relief';
  }
  // 4. Education Support for Orphans
  if (
    clean.includes('শিক্ষা') ||
    clean.includes('এতিম') ||
    clean.includes('education') ||
    clean.includes('orphan')
  ) {
    return 'education-support';
  }
  // 5. Youth Training & Self-Employment
  if (
    clean.includes('যুব') ||
    clean.includes('প্রশিক্ষণ') ||
    clean.includes('কর্মসংস্থান') ||
    clean.includes('স্বাবলম্বী') ||
    clean.includes('youth') ||
    clean.includes('training') ||
    clean.includes('employment')
  ) {
    return 'youth-training';
  }
  // 6. Tube-well & Tree Plantation / Sadaqah Jariyah
  if (
    clean.includes('নলকূপ') ||
    clean.includes('বৃক্ষ') ||
    clean.includes('সুপেয় পানি') ||
    clean.includes('পানি') ||
    clean.includes('সাদাকায়ে জারিয়াহ') ||
    clean.includes('সদকা-ই-জারিয়া') ||
    clean.includes('tube-well') ||
    clean.includes('tubewell') ||
    clean.includes('tree') ||
    clean.includes('water')
  ) {
    return 'tubewell-tree-plantation';
  }
  // 1. General Sadaqah
  return 'general-sadaqah';
}
