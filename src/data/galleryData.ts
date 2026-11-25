import { EXECUTIVE_MEMBERS, EXECUTIVE_SUB_MEMBERS } from './mockData';

export type GalleryCategoryId =
  | 'all'
  | 'food-winter'
  | 'healthcare'
  | 'education-orphan'
  | 'self-reliance'
  | 'sadaqah-zakat'
  | 'foundation-team'
  | 'videos';

export interface GalleryCategoryTab {
  id: GalleryCategoryId;
  labelBn: string;
  labelEn: string;
}

export interface GalleryMediaItem {
  id: string;
  mediaType: 'image' | 'video';
  category: Exclude<GalleryCategoryId, 'all' | 'videos'>;
  src: string;
  videoEmbedUrl?: string;
  titleBn: string;
  titleEn: string;
  captionBn: string;
  captionEn: string;
  locationBn?: string;
  locationEn?: string;
  highlightCaptionWhite?: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { id: 'all', labelBn: 'সবগুলো', labelEn: 'All' },
  { id: 'food-winter', labelBn: 'খাদ্য ও শীতবস্ত্র', labelEn: 'Food & Winter' },
  { id: 'healthcare', labelBn: 'স্বাস্থ্যসেবা ও রক্তদান', labelEn: 'Healthcare & Blood' },
  { id: 'education-orphan', labelBn: 'শিক্ষা ও এতিম সেবা', labelEn: 'Education & Orphans' },
  { id: 'self-reliance', labelBn: 'স্বাবলম্বীকরণ', labelEn: 'Self-Reliance' },
  { id: 'sadaqah-zakat', labelBn: 'সদকায়ে জারিয়া ও যাকাত', labelEn: 'Sadaqah & Zakat' },
  { id: 'foundation-team', labelBn: 'প্রতিষ্ঠান ও পরিষদ', labelEn: 'Foundation & Team' },
  { id: 'videos', labelBn: 'ভিডিও', labelEn: 'Videos' },
];

export const GALLERY_MEDIA_ITEMS: GalleryMediaItem[] = [
  // 1. খাদ্য ও শীতবস্ত্র
  {
    id: 'gal-food-1',
    mediaType: 'image',
    category: 'food-winter',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg',
    titleBn: 'মানবতার সেবায় খাদ্য হাদিয়া বিতরণ',
    titleEn: 'Food Aid Distribution for Vulnerable Families',
    captionBn: 'অসহায়, এতিম ও বিধবা পরিবারের দ্বারে পুষ্টিকর খাদ্য সামগ্রী পৌঁছে দেওয়া।',
    captionEn: 'Delivering essential food packs directly to distressed and widowed families.',
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala & Shibganj, Bogura',
  },
  {
    id: 'gal-food-2',
    mediaType: 'image',
    category: 'food-winter',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763626/ylatsvcdpurnpitu1hnt.jpg',
    titleBn: 'খাদ্য, শীতবস্ত্র ও আশ্রয় সহায়তা',
    titleEn: 'Food, Winter Clothing & Shelter Relief',
    captionBn: 'প্রত্যন্ত অঞ্চলের অভাবী পরিবারের জন্য জরুরি খাদ্য ও জীবনযাপন সহায়তা।',
    captionEn: 'Emergency food and essential living aid for rural underprivileged families.',
    locationBn: 'গুজিয়া ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Gujia & Shibganj, Bogura',
  },
  {
    id: 'gal-winter-1',
    mediaType: 'image',
    category: 'food-winter',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062210/xozx5n4eovwro6gsjt4v.jpg',
    titleBn: 'শীত বস্ত্র ও কম্বল বিতরণ কর্মসূচি',
    titleEn: 'Winter Blanket & Warm Clothing Drive',
    captionBn: 'কনকনে শীতে শীতার্ত মানুষের গায়ে উষ্ণতা জড়িয়ে দেওয়ার আন্তরিক প্রয়াস।',
    captionEn: 'Providing warm blankets and winter clothes to shivering villagers.',
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala & Shibganj, Bogura',
  },
  {
    id: 'gal-winter-2',
    mediaType: 'image',
    category: 'food-winter',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795054479/h2st0b9ide6rjqwlm5m0.jpg',
    titleBn: 'মাঠপর্যায়ে শীতবস্ত্র হস্তান্তর',
    titleEn: 'Door-to-Door Winter Aid Delivery',
    captionBn: 'মোকামতলা ও শিবগঞ্জে অসহায় মানুষদের হাতে শীতবস্ত্র তুলে দেওয়ার মুহূর্ত।',
    captionEn: 'Handing over winter garments directly to villagers in Mokamtala & Shibganj.',
    locationBn: 'শিবগঞ্জ, বগুড়া',
    locationEn: 'Shibganj, Bogura',
  },

  // 2. স্বাস্থ্যসেবা ও রক্তদান
  {
    id: 'gal-health-1',
    mediaType: 'image',
    category: 'healthcare',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795427347/pgxdhulptqjdlab3oxlm.jpg',
    titleBn: 'আলিয়ার হাট ফাজিল মাদ্রাসায় ফ্রি মেডিকেল ক্যাম্প',
    titleEn: 'Free Medical Camp at Aliar Hat Fazil Madrasah',
    captionBn: '২০২৩ সালে আলিয়ার হাট ফাজিল মাদ্রাসায় অনুষ্ঠিত বিনামূল্যে চিকিৎসা ও ঔষধ বিতরণ ক্যাম্প।',
    captionEn: 'Free specialist health checkup and medicine camp held in 2023 at Aliar Hat Fazil Madrasah.',
    locationBn: 'আলিয়ার হাট, শিবগঞ্জ, বগুড়া',
    locationEn: 'Aliar Hat, Shibganj, Bogura',
  },
  {
    id: 'gal-health-2',
    mediaType: 'image',
    category: 'healthcare',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795525277/owgbychmvbskzhvigort.jpg',
    titleBn: 'জরুরি রক্তদান ও মানবিক সহায়তা',
    titleEn: 'Emergency Blood Donation & Life-Saving Aid',
    captionBn: 'মুমূর্ষু রোগীদের জীবন বাঁচাতে স্বেচ্ছাসেবী রক্তদাতাদের মাধ্যমে সম্পূর্ণ বিনামূল্যে জরুরি রক্তদান সেবা।',
    captionEn: 'Free voluntary blood donation support arranged urgently to save critical patients.',
    locationBn: 'বগুড়া ও উত্তরাঞ্চল',
    locationEn: 'Bogura & Northern Districts',
  },
  {
    id: 'gal-health-3',
    mediaType: 'image',
    category: 'healthcare',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061470/lq8bbafdfnyk7pffhy2e.jpg',
    titleBn: 'বিনামূল্যে জরুরি চিকিৎসা ও ঔষধ সেবা',
    titleEn: 'Emergency Medical & Medicine Assistance',
    captionBn: 'অসচ্ছল ও মুমূর্ষু রোগীদের প্রয়োজনীয় ঔষধ ও বিশেষজ্ঞ চিকিৎসকের পরামর্শ সহায়তা।',
    captionEn: 'Providing life-saving prescriptions and specialist consultations to insolvent patients.',
    locationBn: 'বগুড়া ও উত্তরাঞ্চল',
    locationEn: 'Bogura & Northern Districts',
  },

  // 3. শিক্ষা ও এতিম সেবা
  {
    id: 'gal-edu-1',
    mediaType: 'image',
    category: 'education-orphan',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg',
    titleBn: 'দরিদ্র ও এতিম শিক্ষার্থীদের শিক্ষা উপকরণ বিতরণ',
    titleEn: 'Educational Kits for Underprivileged & Orphan Students',
    captionBn: 'বই, খাতা, ব্যাগ ও নিয়মিত বৃত্তি দিয়ে অসচ্ছল শিক্ষার্থীদের পড়াশোনায় পাশে দাঁড়ানো।',
    captionEn: 'Gifting books, notebooks, school bags, and stipends to keep bright students in school.',
    locationBn: 'গুজিয়া ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Gujia & Shibganj, Bogura',
  },
  {
    id: 'gal-edu-2',
    mediaType: 'image',
    category: 'education-orphan',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061051/e9anj19wzwxbp90kqqre.jpg',
    titleBn: 'এতিম লালন-পালন ও অভিভাবকত্ব প্রকল্প',
    titleEn: 'Orphan Care & Monthly Sponsorship',
    captionBn: 'পিতৃহীন এতিম শিশুদের খাদ্য, পোশাক ও দ্বীনি-আধুনিক শিক্ষার দায়িত্ব গ্রহণ।',
    captionEn: 'Supporting orphaned children with nutrition, clothing, and holistic education.',
    locationBn: 'বগুড়া, জয়পুরহাট ও দিনাজপুর',
    locationEn: 'Bogura, Joypurhat & Dinajpur',
  },
  {
    id: 'gal-edu-3',
    mediaType: 'image',
    category: 'education-orphan',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795057376/wfzdhfhp8lgu932wghed.png',
    titleBn: 'সুবিধাবঞ্চিত শিশুদের যত্ন ও আনন্দ',
    titleEn: 'Care & Joy for Orphaned Children',
    captionBn: 'এতিম শিশুদের নিরাপদ বেড়ে ওঠা এবং নৈতিক ও আদর্শ শিক্ষার তত্ত্বাবধান।',
    captionEn: 'Nurturing orphaned children with dignity, care, and moral guidance.',
    locationBn: 'মোকামতলা, বগুড়া',
    locationEn: 'Mokamtala, Bogura',
  },

  // 4. স্বাবলম্বীকরণ
  {
    id: 'gal-self-1',
    mediaType: 'image',
    category: 'self-reliance',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062375/tbthh7wvmaybjfekcnnq.jpg',
    titleBn: 'আত্মকর্মসংস্থান ও স্থায়ী স্বাবলম্বীকরণ',
    titleEn: 'Sustainable Self-Reliance & Livelihood',
    captionBn: 'অসহায় পরিবারগুলোকে পরনির্ভরশীলতা থেকে মুক্ত করে স্থায়ী উপার্জনের পথ তৈরি।',
    captionEn: 'Freeing families from dependency by building lasting household livelihoods.',
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala & Shibganj, Bogura',
  },
  {
    id: 'gal-self-2',
    mediaType: 'image',
    category: 'self-reliance',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763774/zwnrunrscvxecmhnm1zk.jpg',
    titleBn: 'যুব কর্মসংস্থান ও সেলাই প্রশিক্ষণ সহায়তা',
    titleEn: 'Youth Employment & Tailoring Support',
    captionBn: 'বেকার যুবক ও অসচ্ছল মা-বোনদের উপার্জনের উপকরণ ও দক্ষতা উন্নয়ন।',
    captionEn: 'Providing tools and skills training for unemployed youth and women.',
    locationBn: 'গুজিয়া ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Gujia & Shibganj, Bogura',
  },

  // 5. সদকায়ে জারিয়া ও যাকাত
  {
    id: 'gal-zakat-1',
    mediaType: 'image',
    category: 'sadaqah-zakat',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795524168/kv3u8czrksvfos92nnwo.jpg',
    titleBn: 'শরী‘আহ ভিত্তিক যাকাত তহবিল',
    titleEn: 'Shariah-Compliant Zakat Fund',
    captionBn: 'কুরআনের নির্ধারিত ৮টি খাতে যাচাই-বাছাইয়ের মাধ্যমে শতভাগ আমানতদারিতার সাথে যাকাত বণ্টন।',
    captionEn: 'Distributing Zakat faithfully to rightful recipients across the 8 Quranic categories.',
    locationBn: 'বগুড়া ও বাংলাদেশ',
    locationEn: 'Bogura & Bangladesh',
  },
  {
    id: 'gal-sadaqah-1',
    mediaType: 'image',
    category: 'sadaqah-zakat',
    src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792764025/zlscwxoft986d0ud4wi7.jpg',
    titleBn: 'সদকায়ে জারিয়া: গভীর নলকূপ ও বৃক্ষরোপণ',
    titleEn: 'Sadaqah Jariyah: Clean Water Tube-wells & Trees',
    captionBn: 'প্রত্যন্ত চরাঞ্চলে বিশুদ্ধ পানির টিউবওয়েল স্থাপন ও পরিবেশবান্ধব বৃক্ষরোপণ অভিযান।',
    captionEn: 'Installing arsenic-free deep tube-wells and planting trees in underserved areas.',
    locationBn: 'শিবগঞ্জ ও চরাঞ্চল, বগুড়া',
    locationEn: 'Shibganj & River Islands, Bogura',
  },

  // 6. প্রতিষ্ঠান ও কার্যনির্বাহী টিম (Auto-synced from EXECUTIVE_MEMBERS and EXECUTIVE_SUB_MEMBERS)
  ...EXECUTIVE_MEMBERS.map((member, index) => ({
    id: `gal-exec-${member.id}`,
    mediaType: 'image' as const,
    category: 'foundation-team' as const,
    src: member.image || 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
    titleBn: `${member.nameBn} — ${member.roleBn}`,
    titleEn: `${member.name} — ${member.role}`,
    captionBn: index === 0 ? 'জিকরুল্লাহ ফাউন্ডেশনের সম্মানিত প্রতিষ্ঠাতা ও চেয়ারম্যান।' : `জিকরুল্লাহ ফাউন্ডেশনের কার্যনির্বাহী টিমের ${member.roleBn} হিসেবে দায়িত্বরত।`,
    captionEn: index === 0 ? 'Respected Founder & Chairman of Zikrullah Foundation.' : `Serving as ${member.role} of the Executive Team, Zikrullah Foundation.`,
    locationBn: index === 0 ? 'বগুড়া, বাংলাদেশ' : 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: index === 0 ? 'Bogura, Bangladesh' : 'Mokamtala & Shibganj, Bogura',
    highlightCaptionWhite: index === 0,
  })),
  ...EXECUTIVE_SUB_MEMBERS.map((subMember) => ({
    id: `gal-sub-${subMember.id}`,
    mediaType: 'image' as const,
    category: 'foundation-team' as const,
    src: subMember.image || 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
    titleBn: `${subMember.nameBn} — ${subMember.roleBn}`,
    titleEn: `${subMember.name} — ${subMember.role}`,
    captionBn: 'জিকরুল্লাহ ফাউন্ডেশনের কার্যনির্বাহী সদস্য।',
    captionEn: 'Executive Member of Zikrullah Foundation.',
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala & Shibganj, Bogura',
  })),
];
