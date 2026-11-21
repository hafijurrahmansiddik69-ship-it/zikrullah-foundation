import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Layers, 
  Target,
  TrendingUp,
  ShieldCheck,
  Calendar,
  MapPin,
  Share2,
  Check,
  Send,
  Mail
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal, RevealDirection, RevealDelay } from './ScrollReveal';

export interface OngoingProjectItem {
  id: string;
  donationCategoryKey: string;
  titleBn: string;
  titleEn: string;
  subtitleBn?: string;
  subtitleEn?: string;
  shortDescBn: string;
  shortDescEn: string;
  quoteBn: string;
  quoteEn: string;
  quoteArabic?: string;
  quoteRefBn: string;
  quoteRefEn: string;
  detailedDescBn: string;
  detailedDescEn: string;
  highlightsBn: string[];
  highlightsEn: string[];
  hideProgressInModal?: boolean;
  raisedAmount: number;
  raisedAmountBn: string;
  raisedAmountEn: string;
  targetAmount: number;
  targetAmountBn: string;
  targetAmountEn: string;
  percentage: number;
  percentageBn: string;
  percentageEn: string;
  image: string;
  galleryImages: string[];
  locationBn: string;
  locationEn: string;
}

export const ONGOING_PROJECTS: OngoingProjectItem[] = [
  // ১ নম্বর কার্ড — শীত বস্ত্র বিতরণ কর্মসূচি
  {
    id: 'proj-winter',
    donationCategoryKey: 'winter-relief',
    titleBn: 'শীত বস্ত্র বিতরণ কর্মসূচি',
    titleEn: 'Winter Clothing & Blanket Drive',
    subtitleBn: 'শীত বস্ত্র বিতরণ কর্মসূচি ২০২৬-২৭',
    subtitleEn: 'Winter Clothing Distribution Program 2026-27',
    shortDescBn: 'কনকনে শীতে অসহায় মানুষের গায়ে উষ্ণতা জড়িয়ে দিতে জিকরুল্লাহ ফাউন্ডেশনের আন্তরিক প্রয়াস।',
    shortDescEn: 'A sincere endeavor by Zikrullah Foundation to wrap helpless people in warmth during the freezing winter.',
    quoteBn: '“আপনার আন্তরিক সহযোগিতা হতে পারে একজন শীতার্ত মানুষের জন্য স্বস্তির আশ্রয়।”',
    quoteEn: '“Your sincere cooperation can be a shelter of comfort for a shivering human being.”',
    quoteRefBn: '',
    quoteRefEn: '',
    detailedDescBn: 'শীতের আগমনে আমাদের ঘরে যখন উষ্ণতা নামে, তখন খোলা আকাশের নিচে, রাস্তার পাশে কিংবা জীর্ণ ঘরে থাকা অসহায় মানুষগুলো কাঁপতে থাকে তীব্র শীতে—এক টুকরো সামান্য কাপড়ই তখন তাদের একমাত্র সম্বল।\n\nঅসহায় সেই মানুষগুলোর গায়ে একটু উষ্ণতা জড়িয়ে দিতে জিকরুল্লাহ ফাউন্ডেশন শুরু করেছে শীতবস্ত্র বিতরণ কর্মসূচি। আপনার আন্তরিক সহযোগিতা হতে পারে একজন শীতার্ত মানুষের জন্য স্বস্তির আশ্রয়।',
    detailedDescEn: 'When warmth fills our homes at the onset of winter, helpless people under the open sky, by the roadside, or in dilapidated huts shiver in the bitter cold—where a single piece of thin cloth is their only shelter.\n\nTo wrap those helpless people in warmth, Zikrullah Foundation has launched the Winter Clothing Distribution Program. Your sincere cooperation can be a shelter of comfort for a shivering human being.',
    highlightsBn: [],
    highlightsEn: [],
    raisedAmount: 5000,
    raisedAmountBn: '৳৫,০০০',
    raisedAmountEn: '৳5,000',
    targetAmount: 50000,
    targetAmountBn: '৳৫০,০০০',
    targetAmountEn: '৳50,000',
    percentage: 10,
    percentageBn: '১০% সম্পন্ন',
    percentageEn: '10% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062210/xozx5n4eovwro6gsjt4v.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062210/xozx5n4eovwro6gsjt4v.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1795054479/h2st0b9ide6rjqwlm5m0.jpg'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ২ নম্বর কার্ড — মানবতার সেবায় খাবার হাদিয়া
  {
    id: 'proj-food',
    donationCategoryKey: 'food-relief',
    titleBn: 'মানবতার সেবায় খাবার হাদিয়া',
    titleEn: 'Food Gift in the Service of Humanity',
    shortDescBn: 'অসহায়, এতিম, মিসকিন ও বিধবা পরিবারের দ্বারে ভালোবাসার পুষ্টিকর খাবার ও খাদ্য সামগ্রী পৌঁছে দিয়ে মুখে হাসি ফোটানোর প্রয়াস...',
    shortDescEn: 'An earnest effort to bring smiles by delivering nutritious food and staple rations to the doorsteps of needy, orphaned, destitute, and widowed families...',
    quoteBn: '“ওই ব্যক্তি মুমিন নয়, যে পেট পুরে খায় অথচ তার পাশেই তার প্রতিবেশী ক্ষুধার্ত থাকে।”',
    quoteEn: '“He is not a believer who eats his fill while his neighbor beside him goes hungry.”',
    quoteRefBn: '— আল-আদাবুল মুফরাদ : ১১২',
    quoteRefEn: '— Al-Adab Al-Mufrad : 112',
    detailedDescBn: 'নিত্যপণ্যের ঊর্ধ্বগতির এই সময়ে দিনমজুর ও অতিদরিদ্র পরিবারগুলো প্রতিদিন দুবেলা দুমুঠো অন্নের সংস্থান করতে হিমশিম খাচ্ছে। বিশেষ করে বিধবা, বয়োবৃদ্ধ ও শারীরিক প্রতিবন্ধীদের পরিবারের খাদ্য সংকট অত্যন্ত প্রকট। জিকরুল্লাহ ফাউন্ডেশন নিয়মিত বিরতিতে চাল, ডাল, তেল, লবণ, আলু, পেঁয়াজ ও প্রয়োজনীয় মসলা সমৃদ্ধ এক মাসের স্বাবলম্বী ফুড প্যাক অসহায়দের ঘরে পৌঁছে দিচ্ছে।',
    detailedDescEn: 'With escalating prices of essentials, ultra-poor families struggle daily for basic sustenance. Zikrullah Foundation supplies comprehensive monthly staple food packs including rice, lentils, edible oil, potatoes, onions, and salt directly to vulnerable households.',
    highlightsBn: [
      'মাসব্যাপী পুষ্টিকর পারিবারিক ফুড প্যাক সরাসরি অভাবগ্রস্তের দ্বারে পৌঁছে দেওয়া',
      'বিধবা, স্বামী পরিত্যক্তা ও অক্ষম পরিবারের তালিকা প্রস্তুত করে নিয়মিত সহায়তা',
      'জরুরি খাদ্য ব্যাংকের মাধ্যমে যেকোনো আকস্মিক সংকটে তাৎক্ষণিক শুকনো খাবার সরবরাহ',
      'পবিত্র রমজান মাসে বিশেষ সেহরি ও পুষ্টিকর ইফতার সামগ্রী হাদিয়া বিতরণ'
    ],
    highlightsEn: [
      'Monthly nutritious family food packs delivered directly to doorsteps',
      'Priority care for widowed, destitute, and disabled heads of households',
      'Emergency food bank backup for instant hunger relief',
      'Special Ramadan Suhoor and nutritious Iftar gift packages'
    ],
    raisedAmount: 12000,
    raisedAmountBn: '৳১২,০০০',
    raisedAmountEn: '৳12,000',
    targetAmount: 60000,
    targetAmountBn: '৳৬০,০০০',
    targetAmountEn: '৳60,000',
    percentage: 20,
    percentageBn: '২০% সম্পন্ন',
    percentageEn: '20% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763626/ylatsvcdpurnpitu1hnt.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ৩ নম্বর কার্ড — বিনামূল্যে জরুরি চিকিৎসা ও ঔষধ সেবা
  {
    id: 'proj-medical',
    donationCategoryKey: 'healthcare-medical-camp',
    titleBn: 'বিনামূল্যে জরুরি চিকিৎসা ও ঔষধ সেবা',
    titleEn: 'Free Emergency Medical Care & Medicine Aid',
    shortDescBn: 'অসচ্ছল ও মুমূর্ষু রোগীদের বিনামূল্যে প্রয়োজনীয় ঔষধ কিনে দেওয়া এবং প্রয়োজনে দেশের শীর্ষস্থানীয় বিশেষজ্ঞ ডাক্তার দেখানোর মানবিক সেবা...',
    shortDescEn: 'Humanitarian service providing free essential medicines to insolvent and critically ill patients, with specialist doctor consultations when needed...',
    quoteBn: '“যে ব্যক্তি কোনো মুমিনের পার্থিব একটি কষ্ট দূর করবে, আল্লাহ কিয়ামতের দিন তার একটি বড় কষ্ট দূর করে দেবেন।”',
    quoteEn: '“Whosoever relieves a believer from a hardship of this world, Allah will relieve him from a hardship of the Day of Judgment.”',
    quoteRefBn: '— সহীহ মুসলিম : ২৬৯৯',
    quoteRefEn: '— Sahih Muslim : 2699',
    detailedDescBn: 'গ্রামের বহু প্রান্তিক পরিবার অর্থের অভাবে প্রেসক্রিপশনের জীবনরক্ষাকারী ওষুধ কিনতে পারে না। ফলে সামান্য অসুস্থতাও অনেক সময় দীর্ঘমেয়াদি পঙ্গুত্ব বা মৃত্যুর কারণ হয়ে দাঁড়ায়। জিকরুল্লাহ ফাউন্ডেশনের এই প্রকল্পের মাধ্যমে গুরুতর অসুস্থ রোগীদের ওষুধ কিনে দেওয়া হয়, প্রেসক্রিপশন অনুযায়ী সরাসরি ফার্মেসি থেকে ওষুধ হস্তান্তর করা হয় এবং বয়োবৃদ্ধদের ডায়াবেটিস ও প্রেশারের ওষুধ নিয়মিত সহায়তা করা হয়।',
    detailedDescEn: 'Due to severe poverty, many villagers cannot afford life-saving prescription medicines. Zikrullah Foundation purchases and provides authentic medicines directly to critically ill individuals, pays for diagnostic tests, and facilitates specialist healthcare camps.',
    highlightsBn: [],
    highlightsEn: [],
    raisedAmount: 18000,
    raisedAmountBn: '৳১৮,০০০',
    raisedAmountEn: '৳18,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 18,
    percentageBn: '১৮% সম্পন্ন',
    percentageEn: '18% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061470/lq8bbafdfnyk7pffhy2e.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061470/lq8bbafdfnyk7pffhy2e.jpg',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ৪ নম্বর কার্ড — এতিম লালন-পালন
  {
    id: 'proj-orphan',
    donationCategoryKey: 'orphan-care',
    titleBn: 'এতিম লালন-পালন',
    titleEn: 'Orphan Care & Sponsorship',
    shortDescBn: 'পিতৃহীন ও অসহায় এতিম শিশুদের নিরাপদ আশ্রয়, পুষ্টিকর খাদ্য, পোশাক ও আদর্শ মানুষ হিসেবে গড়ে তোলার দায়িত্বশীল উদ্যোগ...',
    shortDescEn: 'A responsible initiative to provide safe shelter, wholesome food, clothing, and moral upbringing for fatherless and vulnerable orphaned children...',
    quoteArabic: 'قَالَ رَسُوْلُ اللهِ ﷺ وَأَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هٰكَذَا',
    quoteBn: 'রাসূলুল্লাহ (ﷺ) বলেছেন: “আমি এবং এতিমের দায়িত্ব গ্রহণকারী জান্নাতে এভাবে পাশাপাশি থাকব।”',
    quoteEn: 'The Messenger of Allah (ﷺ) said: “I and the sponsor of an orphan will be in Paradise like this.”',
    quoteRefBn: '— সহীহ বুখারী : ৫৩০৪',
    quoteRefEn: '— Sahih Al-Bukhari : 5304',
    detailedDescBn: 'সমাজ ও পরিবারের সবচেয়ে অসহায় অংশ হলো এতিম শিশুরা। বাবা-মাকে হারিয়ে যারা শৈশবেই অভিভাবকহীন হয়ে পড়ে, তাদের পাশে দাঁড়ানো আমাদের ঈমানি ও মানবিক দায়িত্ব।\n\nজিকরুল্লাহ ফাউন্ডেশনের “এতিম লালন-পালন” উদ্যোগের লক্ষ্য হলো এই সুবিধাবঞ্চিত শিশুদের শুধু অন্ন-বস্ত্র দেওয়াই নয়; বরং তাদের পুষ্টিকর খাবার, স্বাস্থ্যসম্মত পোশাক, চিকিৎসা এবং ধর্মীয় ও আধুনিক শিক্ষার সার্বিক দায়িত্ব বহন করে আত্মমর্যাদাশীল আদর্শ মানুষ হিসেবে গড়ে তোলা। আপনার সাদাকাহ, যাকাত ও আন্তরিক সহযোগিতার মাধ্যমে আপনিও আজই একজন এতিম শিশুর পাশে দাঁড়াতে বা অভিভাবকত্বে শরিক হতে পারেন।',
    detailedDescEn: 'Orphaned children are the most vulnerable members of our society and families. Standing beside those who lose their parents and are left without a guardian in childhood is both our moral and faith-based responsibility.\n\nThe goal of Zikrullah Foundation’s “Orphan Care” initiative is not merely to provide food and clothing to these underprivileged children, but to take full responsibility for their nutritious meals, proper clothing, medical care, and both religious and modern education—nurturing them into dignified, ideal human beings. Through your Sadaqah, Zakat, and sincere support, you too can stand beside an orphan or participate in their sponsorship today.',
    highlightsBn: [
      'নিয়মিত মাসিক সহযোগিতার মাধ্যমে এতিম শিশুদের খাদ্য ও পোশাকের দায়িত্ব',
      'মাদ্রাসা (মক্তব, হিফজ, কিতাব বিভাগ ও উচ্চতর জামাত) ও স্কুলে পড়াশোনার খরচ বহন',
      'শিশুদের নিয়মিত স্বাস্থ্য পরীক্ষা ও মানসিক বিকাশে যত্নশীল তত্ত্বাবধান',
      'ঈদ ও বিশেষ উৎসবে নতুন পোশাক ও আনন্দের উপহার প্রদান'
    ],
    highlightsEn: [
      'Responsibility for orphans’ food and clothing through regular monthly support',
      'Covering educational expenses at Madrasah (Maktab, Hifz, Kitab & higher classes) and school',
      'Regular health checkups and attentive supervision for children’s mental development',
      'Providing new clothes and joyful gifts during Eid and special celebrations'
    ],
    hideProgressInModal: true,
    raisedAmount: 20000,
    raisedAmountBn: '৳২০,০০০',
    raisedAmountEn: '৳20,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 20,
    percentageBn: '২০% সম্পন্ন',
    percentageEn: '20% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061051/e9anj19wzwxbp90kqqre.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1795057376/wfzdhfhp8lgu932wghed.png',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ৫ নম্বর কার্ড — শিক্ষা সহায়তা
  {
    id: 'proj-education',
    donationCategoryKey: 'education-support',
    titleBn: 'শিক্ষা সহায়তা',
    titleEn: 'Education Aid & Student Scholarships',
    shortDescBn: 'অর্থের অভাবে যেন কোনো মেধাবী ও অসচ্ছল শিক্ষার্থীর পড়াশোনা থেমে না যায়, সেজন্য বই-খাতা, শিক্ষা উপকরণ ও বৃত্তি প্রদান কার্যক্রম...',
    shortDescEn: 'Providing textbooks, notebooks, educational supplies, and scholarships so that no talented, insolvent student is forced to discontinue their studies...',
    quoteBn: '“যে ব্যক্তি ইলম অর্জনের জন্য কোনো পথ অবলম্বন করে, আল্লাহ তাআলা তার জান্নাতের পথ সহজ করে দেন।”',
    quoteEn: '“Whosoever treads a path seeking knowledge, Allah will make easy for him the path to Paradise.”',
    quoteRefBn: '— সহীহ মুসলিম : ২৬৯৯',
    quoteRefEn: '— Sahih Muslim : 2699',
    detailedDescBn: 'দারিদ্র্যের নিষ্ঠুর কষাঘাতে বহু প্রতিভাবান শিক্ষার্থীর স্বপ্ন অঙ্কুরেই বিনষ্ট হয়ে যায়। সামান্য খাতা-কলম, স্কুলের বেতন বা পরীক্ষার ফি জোগাড় করতে না পেরে অনেক শিশু পড়াশোনা ছেড়ে শিশুশ্রমে জড়িয়ে পড়ে। জিকরুল্লাহ ফাউন্ডেশন অসচ্ছল ও এতিম শিক্ষার্থীদের প্রয়োজনীয় সমস্ত পাঠ্যসামগ্রী এবং নিয়মিত মাসিক বৃত্তি দিয়ে আলোকিত ভবিষ্যতের পথ তৈরি করে।',
    detailedDescEn: 'Poverty often forces brilliant underprivileged children to drop out prematurely. Zikrullah Foundation supplies school bags, notebooks, geometry boxes, covers school fees, and provides monthly stipends so young scholars can pursue their dreams uninterrupted.',
    highlightsBn: [
      'বছরের শুরুতে নতুন স্কুল ব্যাগ, বই-খাতা, স্কেল, জ্যামিতি বক্স ও কলম উপহার',
      'অসচ্ছল পরিবারের মেধাবী ছেলেমেয়েদের মাসিক শিক্ষা উপবৃত্তি ও পরীক্ষার ফি প্রদান',
      'ঝরে পড়া শিক্ষার্থীদের বিদ্যালয়ে পুনঃভর্তি ও পাঠ্যসামগ্রী সহায়তা',
      'সহীহ কুরআন তিলাওয়াত ও নৈতিক শিষ্টাচার সমৃদ্ধ পাঠশালা পরিচালনা'
    ],
    highlightsEn: [
      'Annual academic kits: bags, notebooks, stationery, and geometry sets',
      'Monthly education stipends and board examination fees for needy students',
      'Re-enrollment assistance for dropped-out students in schools and madrasahs',
      'Moral guidance, manners, and authentic Quranic recitation circles'
    ],
    raisedAmount: 10000,
    raisedAmountBn: '৳১০,০০০',
    raisedAmountEn: '৳10,000',
    targetAmount: 50000,
    targetAmountBn: '৳৫০,০০০',
    targetAmountEn: '৳50,000',
    percentage: 20,
    percentageBn: '২০% সম্পন্ন',
    percentageEn: '20% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ৬ নম্বর কার্ড — আত্মকর্মসংস্থান
  {
    id: 'proj-livelihood',
    donationCategoryKey: 'youth-training',
    titleBn: 'আত্মকর্মসংস্থান',
    titleEn: 'Self-Reliance & Livelihood Project',
    shortDescBn: 'বেকার যুবক ও অসহায় পরিবারকে ভিক্ষাবৃত্তি বা পরনির্ভরশীলতা থেকে মুক্ত করে স্থায়ী আয় ও স্বাবলম্বী করে গড়ে তোলার প্রকল্প...',
    shortDescEn: 'Empowering unemployed youth and needy families with sustainable income and dignity to overcome dependency and hardship permanently...',
    quoteBn: '“নিজের হাতের উপার্জনের চেয়ে উত্তম খাবার কেউ কখনো খায়নি। আল্লাহর নবী দাউদ (আ.) নিজ হাতের উপার্জনে আহার করতেন।”',
    quoteEn: '“Nobody has ever eaten a better food than that which is earned through the labor of one’s own hands.”',
    quoteRefBn: '— সহীহ বুখারী : ২০৭২',
    quoteRefEn: '— Sahih Al-Bukhari : 2072',
    detailedDescBn: 'ত্রাণ সাময়িক ক্ষুধা নিবারণ করতে পারে, কিন্তু একটি পরিবারকে স্থায়ীভাবে দারিদ্র্যমুক্ত করতে হলে প্রয়োজন আত্মকর্মসংস্থান। জিকরুল্লাহ ফাউন্ডেশন কর্মক্ষম কিন্তু পুঁজিহীন যুবকদের রিকশা, ভ্যান বা ক্ষুদ্র ব্যবসার প্রাথমিক মূলধন সরবরাহ করে এবং অসহায় নারীদের সেলাই মেশিন উপহার দিয়ে স্থায়ী উপার্জনের ব্যবস্থা নিশ্চিত করে।',
    detailedDescEn: 'Relief satisfies momentary needs, but permanent emancipation comes through sustainable self-reliance. Zikrullah Foundation donates new sewing machines to destitute women and provides transport vans or seed capital for small trades to hardworking village youth.',
    highlightsBn: [
      'অসচ্ছল মা-বোনদের নিখরচায় প্রশিক্ষণ ও ব্র্যান্ড নতুন সেলাই মেশিন উপহার',
      'কর্মক্ষম যুবকদের জীবিকা নির্বাহের জন্য রিকশা ও পণ্যবাহী ভ্যান গাড়ি প্রদান',
      'ক্ষুদ্র ব্যবসা ও ফেরিওয়ালাদের জন্য সুদমুক্ত ক্ষুদ্র মূলধন অনুদান',
      'নিয়মিত তদারকি ও টেকসই আয়ের নিশ্চয়তায় দীর্ঘমেয়াদি ফলোআপ'
    ],
    highlightsEn: [
      'Free tailoring training and brand-new heavy-duty sewing machines gifted',
      'Passenger rickshaws and cargo vans donated to eager unemployed breadwinners',
      'Interest-free micro-seed grants for village retail and cottage trade',
      'Periodic progress monitoring and mentorship for sustained business success'
    ],
    raisedAmount: 25000,
    raisedAmountBn: '৳২৫,০০০',
    raisedAmountEn: '৳25,000',
    targetAmount: 150000,
    targetAmountBn: '৳১,৫০,০০০',
    targetAmountEn: '৳150,000',
    percentage: 17,
    percentageBn: '১৭% সম্পন্ন',
    percentageEn: '17% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062375/tbthh7wvmaybjfekcnnq.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  },

  // ৭ নম্বর কার্ড — সদকায়ে জারিয়া
  {
    id: 'proj-sadaqah',
    donationCategoryKey: 'tubewell-tree-plantation',
    titleBn: 'সদকায়ে জারিয়া',
    titleEn: 'Sadaqah Jariyah & Public Welfare',
    shortDescBn: 'নিরাপদ পানির টিউবওয়েল স্থাপন, বৃক্ষরোপণ, মসজিদ-মাদ্রাসা ও জনকল্যাণমূলক স্থায়ী সেবামূলক কাজে অংশগ্রহণের বরকতময় মাধ্যম...',
    shortDescEn: 'A blessed opportunity to participate in continuous charity through safe tube-well installation, tree plantation, mosque-madrasah support, and public welfare...',
    quoteBn: '“মানুষ যখন মৃত্যুবরণ করে, তখন তার সমস্ত আমল বন্ধ হয়ে যায় তিনটি আমল ছাড়া—সাদাকায়ে জারিয়া, উপকারী ইলম ও নেক সন্তান।”',
    quoteEn: '“When a human being dies, all their deeds come to an end except three: continuous charity, beneficial knowledge, and a righteous child who prays for them.”',
    quoteRefBn: '— সহীহ মুসলিম : ১৬৩১',
    quoteRefEn: '— Sahih Muslim : 1631',
    detailedDescBn: 'সদকায়ে জারিয়া হলো এমন এক সদকা, যার সওয়াব মৃত্যুর পরও কবরে অবিরাম বর্ষিত হতে থাকে। প্রত্যন্ত চরাঞ্চলে সুপেয় ও আর্সেনিকমুক্ত পানির জন্য গভীর নলকূপ স্থাপন, পরিবেশের ভারসাম্য রক্ষায় ফলদ ও ছায়াদানকারী বৃক্ষরোপণ এবং মসজিদ-মাদ্রাসার প্রয়োজনীয় সংস্কার কাজে জিকরুল্লাহ ফাউন্ডেশনের এই প্রকল্প নিরলস কাজ করে যাচ্ছে।',
    detailedDescEn: 'Sadaqah Jariyah generates unending divine rewards that continue reaching the believer in the grave. This initiative installs deep arsenic-free tube-wells for clean drinking water in water-scarce river islands, conducts extensive tree planting, and supports village mosques and educational facilities.',
    highlightsBn: [
      'সুদূর চরাঞ্চলে গভীর আর্সেনিকমুক্ত সুপেয় পানির টিউবওয়েল স্থাপন',
      'পরিবেশ রক্ষা ও ভবিষ্যৎ প্রজন্মের জন্য ফলদ ও ঔষধি বৃক্ষরোপণ অভিযান',
      'মসজিদ ও মাদ্রাসার ওজুখানা এবং স্বাস্থ্যসম্মত স্যানিটেশন সংস্কার',
      'অনুদানকারীর নিজের বা মরহুম পিতা-মাতার নামে বিশেষ মেমোরিয়াল ফলক স্থাপন'
    ],
    highlightsEn: [
      'Deep, arsenic-free safe drinking water tube-well installation in remote islands',
      'Extensive planting of fruit-bearing and shading trees for environmental protection',
      'Wudu facilities and clean sanitation construction for village mosques',
      'Special dedication plaque mounted in donor’s or deceased parents’ honor'
    ],
    raisedAmount: 22000,
    raisedAmountBn: '৳২২,০০০',
    raisedAmountEn: '৳22,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 22,
    percentageBn: '২২% সম্পন্ন',
    percentageEn: '22% Completed',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792764025/zlscwxoft986d0ud4wi7.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792764025/zlscwxoft986d0ud4wi7.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া, বাংলাদেশ ।',
    locationEn: 'Mokamtala & Shibganj, Bogura, Bangladesh.'
  }
];

interface OngoingActivitiesSectionProps {
  onOpenDonation?: (categoryKey?: string, amount?: number) => void;
  onOpenVolunteer?: () => void;
}

export const OngoingActivitiesSection: React.FC<OngoingActivitiesSectionProps> = ({
  onOpenDonation,
  onOpenVolunteer
}) => {
  const { isEn } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<OngoingProjectItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [subscribeInput, setSubscribeInput] = useState('');

  const handleCardClick = (project: OngoingProjectItem) => {
    setSelectedProject(project);
    setSubscribeInput('');
  };

  const handleDonateNow = (project: OngoingProjectItem) => {
    const categoryKey = project.donationCategoryKey;
    setSelectedProject(null);
    if (onOpenDonation) {
      onOpenDonation(categoryKey, 1000);
    }
  };

  const handleJoinVolunteer = () => {
    setSelectedProject(null);
    if (onOpenVolunteer) {
      setTimeout(() => onOpenVolunteer(), 60);
    }
  };

  const handleProjectSubscribe = () => {
    const cleaned = subscribeInput.trim();
    if (!cleaned) return;
    try {
      const existingRaw = localStorage.getItem('zikrullah_newsletter_subscribers');
      const existing: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      if (!existing.includes(cleaned)) {
        localStorage.setItem(
          'zikrullah_newsletter_subscribers',
          JSON.stringify([...existing, cleaned])
        );
      }
    } catch {
      // ignore storage errors
    }
  };

  const handleShare = (project: OngoingProjectItem) => {
    const text = `${isEn ? project.titleEn : project.titleBn} - ${FOUNDATION_INFO.name}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${window.location.origin}#ongoing-activities`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section 
      id="ongoing-activities" 
      className="py-16 sm:py-24 bg-[#fafcfb] border-b border-emerald-100/70 relative overflow-x-clip selection:bg-emerald-100 selection:text-emerald-900"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        
        {/* Section Header: Styled strictly to user prompt */}
        <ScrollReveal direction="down" className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          {/* Small green badge: • আমাদের কাজ */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#064e3b] text-xs sm:text-sm font-bold mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#064e3b] animate-pulse" />
            <span>{isEn ? '• Our Work' : '• আমাদের কাজ'}</span>
          </div>

          {/* Large crisp title: চলমান কার্যক্রমসমূহ */}
          <h2 className="font-serif-bn font-bold text-2xl sm:text-4xl lg:text-5xl text-[#064e3b] tracking-tight leading-tight mb-2.5 sm:mb-4">
            {isEn ? 'Ongoing Initiatives' : 'চলমান কার্যক্রমসমূহ'}
          </h2>

          <p className="text-slate-600 font-solaiman text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            {isEn 
              ? 'You too can join our ongoing initiatives for the welfare of humanity and eternal rewards.'
              : 'মানবতার কল্যাণে ও স্থায়ী সওয়াবের লক্ষ্যে আমাদের চলমান কার্যক্রমে আপনিও যুক্ত হতে পারেন।'}
          </p>
        </ScrollReveal>

        {/* Responsive Grid Card Layout: বাম থেকে -> ডান দিক থেকে -> zoom -> উপর থেকে -> নিচ দিক থেকে */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-7 items-stretch">
          {ONGOING_PROJECTS.map((project, idx) => {
            const isLastCard = idx === 6;
            const patterns: RevealDirection[] = ['left', 'right', 'zoom', 'down', 'up'];
            const delays: RevealDelay[] = [0, 80, 150];
            const direction: RevealDirection = patterns[idx % patterns.length];
            const delay: RevealDelay = delays[idx % delays.length];
            return (
              <ScrollReveal
                key={project.id}
                direction={direction}
                delay={delay}
                className={`flex ${
                  isLastCard ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full' : ''
                }`}
              >
                <div
                  onClick={() => handleCardClick(project)}
                  className="w-full h-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-200/85 shadow-[0_2px_10px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-emerald-900/20 active:scale-[0.985] transition-all duration-200 flex flex-col justify-between overflow-hidden group cursor-pointer sm:hover:-translate-y-1"
                >
                <div>
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={isEn ? project.titleEn : project.titleBn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg';
                      }}
                    />
                    {/* Subtle Gradient Scrim at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                    {/* White Pill-shaped Badge on Top Left: প্রজেক্ট */}
                    <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 text-[9.5px] sm:text-xs font-bold shadow-sm sm:shadow-md border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#064e3b]" />
                        <span>{isEn ? 'Project' : 'প্রজেক্ট'}</span>
                      </span>
                    </div>

                    {/* Small Circular White Frame with Foundation Logo on Bottom Right */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white p-0.5 shadow-md sm:shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={FOUNDATION_INFO.logoUrl}
                        alt="Zikrullah Foundation"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-2.5 sm:p-5 md:p-6 pb-1.5 sm:pb-2">
                    {/* Project Title */}
                    <h3 className="font-serif-bn font-bold text-[13px] sm:text-lg md:text-xl text-slate-900 group-hover:text-[#064e3b] transition-colors leading-snug line-clamp-2 mb-1 sm:mb-2.5">
                      {isEn ? project.titleEn : project.titleBn}
                    </h3>

                    {/* Short Description */}
                    <p className="font-solaiman text-slate-600 text-[11px] sm:text-[13.5px] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2.5 sm:mb-5 font-normal">
                      {isEn ? project.shortDescEn : project.shortDescBn}
                    </p>

                    {/* Fund Progress Bar Section */}
                    <div className="bg-[#f8faf9] rounded-lg sm:rounded-xl p-2 sm:p-3 border border-emerald-900/10 mb-2 sm:mb-4">
                      {/* Top Stats: Left Collected, Right Target */}
                      <div className="flex flex-wrap items-center justify-between gap-x-1.5 gap-y-0.5 text-[10px] sm:text-[13px] font-solaiman mb-1.5 sm:mb-2">
                        <span className="font-semibold text-slate-700 whitespace-nowrap">
                          {isEn ? 'Raised: ' : 'সংগৃহীত: '}
                          <span className="text-[#064e3b] font-bold font-mono">
                            {isEn ? project.raisedAmountEn : project.raisedAmountBn}
                          </span>
                        </span>
                        <span className="font-semibold text-slate-700 whitespace-nowrap">
                          {isEn ? 'Goal: ' : 'লক্ষ্য: '}
                          <span className="text-slate-900 font-bold font-mono">
                            {isEn ? project.targetAmountEn : project.targetAmountBn}
                          </span>
                        </span>
                      </div>

                      {/* Dark Green Progress Track & Fill */}
                      <div className="w-full bg-slate-200/80 rounded-full h-1.5 sm:h-2.5 overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-[#064e3b] via-[#087443] to-[#10b981] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${Math.min(project.percentage, 100)}%` }}
                        />
                      </div>

                      {/* Percentage indicator */}
                      <div className="flex justify-end items-center mt-1 sm:mt-1.5">
                        <span className="text-[9.5px] sm:text-xs font-bold text-[#064e3b] font-mono">
                          {isEn ? project.percentageEn : project.percentageBn}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: 'অংশগ্রহণ করুন' Button Centered */}
                <div className="px-2.5 sm:px-5 md:px-6 pb-2.5 sm:pb-5 md:pb-6 pt-0.5 sm:pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project);
                    }}
                    className="w-full py-2 sm:py-3 px-2.5 sm:px-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#064e3b] hover:bg-[#043d2e] active:scale-98 text-white font-bold text-[11px] sm:text-sm shadow-sm sm:shadow-md shadow-emerald-950/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 group-hover:bg-[#043d2e] whitespace-nowrap"
                  >
                    <span>{isEn ? 'Participate Now' : 'অংশগ্রহণ করুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200 transition-transform group-hover:translate-x-1 shrink-0" />
                  </button>
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Detail Modal View (Interactive Page View) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full relative border border-emerald-900/15 shadow-2xl overflow-hidden my-auto text-slate-800 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden shrink-0 group">
              <img
                src={selectedProject.image}
                alt={isEn ? selectedProject.titleEn : selectedProject.titleBn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

              {/* Badges on Top Left */}
              <div className="absolute top-3.5 left-3.5 right-14 z-10 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#064e3b]/90 backdrop-blur-md border border-emerald-300/30 shadow-md">
                  {isEn ? 'Active Project' : 'চলমান প্রজেক্ট'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-black/55 backdrop-blur-md border border-white/20 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                  <span>{isEn ? selectedProject.locationEn : selectedProject.locationBn}</span>
                </span>
              </div>

              {/* Close Button on Top Right */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 text-white/90 hover:text-white cursor-pointer z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 transition-all active:scale-95 shadow-lg"
                aria-label={isEn ? 'Close modal' : 'বন্ধ করুন'}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Overlay at bottom of banner */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <h3 className="font-serif-bn font-bold text-xl sm:text-2xl md:text-3xl leading-tight drop-shadow-md">
                  {isEn ? selectedProject.titleEn : selectedProject.titleBn}
                </h3>
                {(isEn ? selectedProject.subtitleEn : selectedProject.subtitleBn) && (
                  <p className="font-solaiman text-xs sm:text-sm text-emerald-200 font-medium mt-1 drop-shadow-sm">
                    {isEn ? selectedProject.subtitleEn : selectedProject.subtitleBn}
                  </p>
                )}
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-5 font-solaiman flex-1">
              
              {/* Green Border Quotation Box (As requested: সবুজ বর্ডার দেওয়া কোটেশন বক্স) */}
              <div className="bg-emerald-50/90 border-l-4 border-[#064e3b] rounded-r-2xl p-4 sm:p-5 shadow-xs">
                {selectedProject.quoteArabic && (
                  <p
                    className="font-arabic font-bold text-[#064e3b] text-base sm:text-lg leading-loose text-right mb-2"
                    dir="rtl"
                    lang="ar"
                  >
                    {selectedProject.quoteArabic}
                  </p>
                )}
                <p className="font-serif-bn text-emerald-950 text-sm sm:text-base leading-relaxed font-semibold italic">
                  {isEn ? selectedProject.quoteEn : selectedProject.quoteBn}
                </p>
                {(isEn ? selectedProject.quoteRefEn : selectedProject.quoteRefBn) && (
                  <span className="block text-right text-xs font-bold text-[#d97706] mt-2 font-mono">
                    {isEn ? selectedProject.quoteRefEn : selectedProject.quoteRefBn}
                  </span>
                )}
              </div>

              {/* Project Detailed Narrative */}
              <div>
                <h4 className="font-serif-bn font-bold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#064e3b]" />
                  <span>{isEn ? 'Project Overview & Field Context' : 'প্রকল্পের পটভূমি ও লক্ষ্য'}</span>
                </h4>
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                  {isEn ? selectedProject.detailedDescEn : selectedProject.detailedDescBn}
                </p>
              </div>

              {/* Key Highlights / Steps */}
              {(isEn ? selectedProject.highlightsEn : selectedProject.highlightsBn).length > 0 && (
                <div className="bg-[#f8faf9] border border-emerald-900/10 rounded-2xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#064e3b] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#d97706]" />
                    <span>{isEn ? 'Key Action Steps & Execution' : 'কাজের প্রধান ধাপসমূহ'}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {(isEn ? selectedProject.highlightsEn : selectedProject.highlightsBn).map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#064e3b] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Photo Gallery / Previews (ছবি ও গ্যালারি) */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div>
                  <h4 className="font-serif-bn font-bold text-slate-900 text-sm sm:text-base mb-2.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#064e3b]" />
                    <span>{isEn ? 'Field Action Photos' : 'মাঠপর্যায়ের চিত্র ও গ্যালারি'}</span>
                  </h4>
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {selectedProject.galleryImages.map((imgUrl, imgIdx) => (
                      <div key={imgIdx} className="aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <img
                          src={imgUrl}
                          alt="Activity preview"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fund Progress Bar inside Modal */}
              {!selectedProject.hideProgressInModal && (
                <div className="bg-[#f3f7f5] rounded-2xl p-4 sm:p-5 border border-emerald-900/15">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-solaiman mb-2.5">
                    <span className="font-semibold text-slate-800">
                      {isEn ? 'Raised: ' : 'সংগৃহীত: '}
                      <span className="text-[#064e3b] font-bold font-mono">
                        {isEn ? selectedProject.raisedAmountEn : selectedProject.raisedAmountBn}
                      </span>
                    </span>
                    <span className="font-semibold text-slate-800">
                      {isEn ? 'Goal: ' : 'লক্ষ্য: '}
                      <span className="text-slate-900 font-bold font-mono">
                        {isEn ? selectedProject.targetAmountEn : selectedProject.targetAmountBn}
                      </span>
                    </span>
                  </div>

                  <div className="w-full bg-slate-300/70 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#064e3b] via-[#087443] to-[#10b981] rounded-full"
                      style={{ width: `${Math.min(selectedProject.percentage, 100)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#064e3b]" />
                      <span>{isEn ? '100% Transparent Amanah' : '১০০% বিশ্বস্ত ও স্বচ্ছ পরিচালনা'}</span>
                    </span>
                    <span className="font-bold text-[#064e3b] font-mono text-sm">
                      {isEn ? selectedProject.percentageEn : selectedProject.percentageBn}
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Matching Action & Update Blocks (Same as ThoughtsSection) */}
              <div className="pt-2 space-y-5 font-sans-bn">
                {/* 1. Deep Emerald Green "চলুন একসাথে কাজ করি" Card */}
                <div className="bg-gradient-to-br from-[#043927] via-[#064E3B] to-[#087443] border border-emerald-700/40 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md text-center">
                  <h3 className="font-serif-bn font-bold text-2xl sm:text-3xl text-white mb-2 leading-snug">
                    {isEn ? 'Let Us Work Together' : 'চলুন একসাথে কাজ করি'}
                  </h3>
                  <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6">
                    {isEn
                      ? 'Your sincere support and voluntary service help transform lives across Bogura and northern Bangladesh.'
                      : 'আপনার আন্তরিক সহযোগিতা ও স্বেচ্ছাশ্রম অসহায় মানুষের জীবনে স্থায়ী স্বস্তি ও পরিবর্তন আনতে পারে।'}
                  </p>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => handleDonateNow(selectedProject)}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#b45309] hover:from-[#fcd34d] hover:via-[#f59e0b] hover:to-[#92400e] active:scale-[0.99] text-white font-bold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] shadow-lg shadow-amber-950/25 border border-amber-300/40 transition-all cursor-pointer text-center"
                    >
                      {isEn ? 'Join the Cause' : 'খেদমতে শরীক হন'}
                    </button>

                    <button
                      type="button"
                      onClick={handleJoinVolunteer}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-white hover:bg-emerald-50 active:scale-[0.99] text-[#0F172A] font-bold text-sm sm:text-base transition-all cursor-pointer text-center"
                    >
                      {isEn ? 'Be a Volunteer' : 'স্বেচ্ছাসেবক হোন'}
                    </button>
                  </div>
                </div>

                {/* 2. Deep Navy Blue Newsletter Subscribe Box */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#0e1b4d] via-[#0b1742] to-[#081236] text-white rounded-2xl sm:rounded-3xl px-4 py-8 sm:px-8 sm:py-10 shadow-sm text-center">
                  <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-amber-300/10 blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-2xl mx-auto">
                    {/* Top Circular Paper-Plane Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#FACC15]" />
                    </div>

                    {/* Centered Heading */}
                    <h3 className="font-serif-bn font-bold text-xl sm:text-3xl text-white mb-2.5 leading-snug">
                      {isEn
                        ? 'Stay Connected for Our Latest Updates'
                        : 'আমাদের সর্বশেষ আপডেট পেতে যুক্ত থাকুন'}
                    </h3>

                    {/* Centered Subtitle */}
                    <p className="text-slate-200/90 text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-7">
                      {isEn
                        ? 'Subscribe with your mobile number or email to receive regular updates on our charitable activities, field reports, and public welfare initiatives first.'
                        : 'আমাদের সেবামূলক কার্যক্রম, মাঠপর্যায়ের প্রতিবেদন ও জনকল্যাণমূলক উদ্যোগের নিয়মিত আপডেট সবার আগে পেতে আপনার মোবাইল নাম্বার অথবা ইমেইল দিয়ে সাবস্ক্রাইব করুন।'}
                    </p>

                    <form
                      action="https://formsubmit.co/e683378f5399c9eb0088210959a9ef46"
                      method="POST"
                      onSubmit={handleProjectSubscribe}
                      className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-stretch shadow-xl max-w-2xl mx-auto border border-white/20"
                    >
                      <input
                        type="hidden"
                        name="_subject"
                        value="[নতুন সাবস্ক্রাইবার] জিকরুল্লাহ ফাউন্ডেশন"
                      />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_next"
                        value={
                          typeof window !== 'undefined'
                            ? window.location.href
                            : 'https://zikrullahfoundation.com/'
                        }
                      />
                      <input
                        type="hidden"
                        name="source"
                        value={`প্রকল্প: ${selectedProject.titleBn}`}
                      />

                      <div className="flex-1 flex items-center pl-3 sm:pl-5 min-w-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                        <input
                          type="text"
                          name={subscribeInput.includes('@') ? 'email' : 'contact'}
                          required
                          value={subscribeInput}
                          onChange={(e) => setSubscribeInput(e.target.value)}
                          placeholder={
                            isEn
                              ? 'Email or phone number ...'
                              : 'ইমেইল বা ফোন নাম্বার দিন ...'
                          }
                          aria-label={isEn ? 'Email or phone number' : 'ইমেইল বা ফোন নাম্বার'}
                          className="w-full px-2.5 sm:px-3.5 py-3.5 sm:py-4 text-xs sm:text-base text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none min-w-0"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-7 py-3.5 sm:py-4 bg-[#FACC15] hover:bg-[#eab308] active:bg-[#ca8a04] text-[#0F172A] font-bold text-xs sm:text-base transition-colors cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>{isEn ? 'Subscribe' : 'সাবস্ক্রাইব করুন'}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </form>

                    <p className="mt-4 text-[11px] sm:text-xs text-slate-300/80 text-center">
                      {isEn
                        ? '* We are committed to protecting your privacy.'
                        : '* আমরা আপনার তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।'}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer with Actions: 'এখনই দান করুন' Button */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="py-3 px-4 sm:px-5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold transition-colors cursor-pointer text-xs sm:text-sm"
              >
                {isEn ? 'Close' : 'বন্ধ করুন'}
              </button>

              <button
                type="button"
                onClick={() => handleShare(selectedProject)}
                className="py-3 px-3.5 rounded-full border border-slate-300 hover:bg-emerald-50 hover:text-[#064e3b] text-slate-700 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                title={isEn ? 'Share project' : 'শেয়ার করুন'}
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedLink ? (isEn ? 'Copied' : 'কপি হয়েছে') : (isEn ? 'Share' : 'শেয়ার')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleDonateNow(selectedProject)}
                className="flex-1 py-3 px-5 sm:px-7 rounded-full bg-[#064e3b] hover:bg-[#043d2e] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/20 transition-all cursor-pointer flex items-center justify-center gap-2 border border-emerald-600/30"
              >
                <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
                <span>{isEn ? 'Join Khidmat' : 'খেদমতে শরীক হোন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
