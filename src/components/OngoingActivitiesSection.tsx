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
  Check
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export interface OngoingProjectItem {
  id: string;
  donationCategoryKey: string;
  titleBn: string;
  titleEn: string;
  shortDescBn: string;
  shortDescEn: string;
  quoteBn: string;
  quoteEn: string;
  quoteRefBn: string;
  quoteRefEn: string;
  detailedDescBn: string;
  detailedDescEn: string;
  highlightsBn: string[];
  highlightsEn: string[];
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
    shortDescBn: 'হিমেল হাওয়া ও কনকনে শীতে অসহায়, এতিম ও ছিন্নমূল মানুষের মাঝে উষ্ণতা ছড়িয়ে দিতে জিকরুল্লাহ ফাউন্ডেশনের বিশেষ মানবিক উদ্যোগ...',
    shortDescEn: 'A special humanitarian initiative by Zikrullah Foundation to spread warmth among vulnerable, orphaned, and destitute people during freezing winters...',
    quoteBn: '“কোনো মুসলমান অপর কোনো মুসলমানকে বস্ত্রহীন অবস্থায় পোশাক পরিধান করালে আল্লাহ তাআলা তাকে জান্নাতের সবুজ পোশাক পরিধান করাবেন।”',
    quoteEn: '“Whosoever clothes a Muslim when he is unclothed, Allah will clothe him with the green garments of Paradise.”',
    quoteRefBn: '— সুনান আবু দাউদ : ১৬৮২',
    quoteRefEn: '— Sunan Abi Dawud : 1682',
    detailedDescBn: 'উত্তরবঙ্গের বগুড়া, শিবগঞ্জ ও মোকামতলা অঞ্চলে পৌষ-মাঘের হাড়কাঁপানো কনকনে শীতে অসহায় ছিন্নমূল মানুষ, দরিদ্র কৃষক, দিনমজুর ও এতিম শিশুরা সীমাহীন কষ্টে দিনাতিপাত করে। তীব্র শীতে প্রবীণ ও শিশুরা ঠান্ডাজনিত নানাবিধ জটিল রোগে আক্রান্ত হন। জিকরুল্লাহ ফাউন্ডেশন সরাসরি প্রত্যন্ত গ্রামগুলোতে বাড়ি বাড়ি গিয়ে প্রকৃত অভাবগ্রস্তদের তালিকা প্রণয়ন করে উন্নত মানের ভারী কম্বল, সোয়েটার ও শিশুদের শীতবস্ত্র পৌঁছে দিচ্ছে।',
    detailedDescEn: 'In rural northern Bangladesh including Mokamtala, Gujia, and Shibganj, destitute laborers, elderly folks, and orphaned children suffer severe distress during freezing winter waves. Zikrullah Foundation conducts direct field surveys to hand over high-grade warm blankets, sweaters, and winter garments directly to those most in need.',
    highlightsBn: [
      'বগুড়ার প্রত্যন্ত চরাঞ্চল ও দুর্গম গ্রামে বাড়ি বাড়ি গিয়ে উন্নত মানের ভারী কম্বল বিতরণ',
      'গ্রামের এতিমখানা ও মাদ্রাসার শিশুদের মাঝে উষ্ণ পোশাক ও সোয়েটার উপহার',
      'প্রতিবন্ধী, প্রবীণ ও অসহায় বিধবাদের দ্বারে সরাসরি শীতবস্ত্র হস্তান্তর',
      '১০০% আমানতদারিতা ও স্বচ্ছতার সাথে মাঠপর্যায়ের ছবি ও অডিট রিপোর্ট প্রকাশ'
    ],
    highlightsEn: [
      'Door-to-door distribution of heavy high-grade warm blankets in rural villages',
      'Sweaters and winter warm clothes gifted to madrasah and orphanage students',
      'Direct winter warmth delivery to elderly, disabled, and destitute widows',
      '100% transparent audit report and field photography documentation'
    ],
    raisedAmount: 15000,
    raisedAmountBn: '৳১৫,০০০',
    raisedAmountEn: '৳15,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 15,
    percentageBn: '১৫% সম্পন্ন',
    percentageEn: '15% Completed',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা, গুজিয়া ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala, Gujia & Shibganj, Bogura'
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
    locationBn: 'গুজিয়া ও আশপাশের চরাঞ্চল, বগুড়া',
    locationEn: 'Gujia and nearby rural areas, Bogura'
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
    highlightsBn: [
      'মুমূর্ষু ও অসহায় রোগীদের প্রেসক্রিপশন অনুযায়ী সরাসরি ১০০% বিনামূল্যে ওষুধ প্রদান',
      'জরুরি ডায়াগনস্টিক পরীক্ষা ও রক্তের ল্যাব টেস্ট ফি ফাউন্ডেশন ফান্ড থেকে পরিশোধ',
      'বয়স্ক ও দীর্ঘমেয়াদি জটিল রোগীদের নিয়মিত মাসিক ওষুধ সহায়তা',
      'অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকদের তত্ত্বাবধানে ফ্রি মেডিকেল ক্যাম্প পরিচালনা'
    ],
    highlightsEn: [
      '100% free authentic prescription medicines purchased directly for critical patients',
      'Full coverage of urgent diagnostic, blood, and pathology laboratory tests',
      'Monthly continuous medicine support for destitute chronic patients',
      'Free periodic specialist medical camps in underserved village centers'
    ],
    raisedAmount: 18000,
    raisedAmountBn: '৳১৮,০০০',
    raisedAmountEn: '৳18,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 18,
    percentageBn: '১৮% সম্পন্ন',
    percentageEn: '18% Completed',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা ও শিবগঞ্জ স্বাস্থ্য কেন্দ্র এলাকা',
    locationEn: 'Mokamtala & Shibganj Healthcare Reach'
  },

  // ৪ নম্বর কার্ড — এতিম লালন-পালন
  {
    id: 'proj-orphan',
    donationCategoryKey: 'orphan-care',
    titleBn: 'এতিম লালন-পালন',
    titleEn: 'Orphan Care & Sponsorship',
    shortDescBn: 'পিতৃহীন ও অসহায় এতিম শিশুদের নিরাপদ আশ্রয়, পুষ্টিকর খাদ্য, পোশাক ও আদর্শ মানুষ হিসেবে গড়ে তোলার দায়িত্বশীল উদ্যোগ...',
    shortDescEn: 'A responsible initiative to provide safe shelter, wholesome food, clothing, and moral upbringing for fatherless and vulnerable orphaned children...',
    quoteBn: 'রাসূলুল্লাহ (ﷺ) তর্জনী ও মধ্যমা আঙুল মিলিয়ে বললেন: “আমি ও এতিমের দায়িত্ব গ্রহণকারী জান্নাতে এভাবে পাশাপাশি থাকব।”',
    quoteEn: 'The Messenger of Allah (ﷺ) said, holding his index and middle fingers together: “I and the sponsor of an orphan will be in Paradise like this.”',
    quoteRefBn: '— সহীহ বুখারী : ৫৩০৪',
    quoteRefEn: '— Sahih Al-Bukhari : 5304',
    detailedDescBn: 'পিতা হারানো নিষ্পাপ শিশুরা যখন চরম নিরাপত্তাহীনতা ও দারিদ্র্যের মুখে পড়ে, তখন তাদের পাশে দাঁড়ানো উম্মাহর সবচেয়ে বড় দায়িত্ব। জিকরুল্লাহ ফাউন্ডেশন এতিম শিশুদের অভিভাবকত্ব গ্রহণ করে তাদের পুষ্টিকর খাবার, স্বাস্থ্যসম্মত পোশাক, চিকিৎসা এবং ধর্মীয় ও যুগোপযোগী শিক্ষার সার্বিক দায়িত্ব বহন করে, যাতে তারা আত্মমর্যাদা নিয়ে আদর্শ মানুষ হতে পারে।',
    detailedDescEn: 'When young fatherless children face acute vulnerability, standing by them is one of the highest deeds in Islam. Zikrullah Foundation provides comprehensive orphan sponsorships covering wholesome food, clothes, healthcare, and high-quality Islamic and formal education.',
    highlightsBn: [
      'মাসিক কাফালত স্পনসরশিপের মাধ্যমে এতিম শিশুদের সম্পূর্ণ খাদ্য ও পোশাকের দায়িত্ব',
      'সহীহ কুরআন হেফজখানা ও স্কুলে পড়াশোনার যাবতীয় খরচ বহন',
      'শিশুদের নিয়মিত স্বাস্থ্য পরীক্ষা ও মানসিক বিকাশে নিবিড় তত্ত্বাবধান',
      'পবিত্র ঈদ ও ধর্মীয় উৎসবে নতুন পোশাক ও বিশেষ উৎসব উপহার প্রদান'
    ],
    highlightsEn: [
      'Comprehensive monthly Kafalah sponsorship covering full food and clothes',
      'All educational fees and books for Hifzul Quran and primary schooling',
      'Regular medical checkups, hygiene care, and compassionate emotional guidance',
      'New festival clothes and gifts during Eid and auspicious Islamic celebrations'
    ],
    raisedAmount: 20000,
    raisedAmountBn: '৳২০,০০০',
    raisedAmountEn: '৳20,000',
    targetAmount: 100000,
    targetAmountBn: '৳১,০০,০০০',
    targetAmountEn: '৳100,000',
    percentage: 20,
    percentageBn: '২০% সম্পন্ন',
    percentageEn: '20% Completed',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg'
    ],
    locationBn: 'গুজিয়া ও শিবগঞ্জ এলাকা, বগুড়া',
    locationEn: 'Gujia & Shibganj Area, Bogura'
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
    locationBn: 'মোকামতলা ও শিবগঞ্জের বিভিন্ন শিক্ষাপ্রতিষ্ঠান',
    locationEn: 'Schools & Madrasahs across Mokamtala & Shibganj'
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
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763774/zwnrunrscvxecmhnm1zk.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763774/zwnrunrscvxecmhnm1zk.jpg',
      'https://res.cloudinary.com/dlklqihg6/image/upload/v1792153191/wi0sp7ihynsemd1lmooq.jpg',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80'
    ],
    locationBn: 'মোকামতলা ও বগুড়ার বিভিন্ন ইউনিয়ন',
    locationEn: 'Rural Unions across Mokamtala & Bogura'
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
    locationBn: 'বগুড়ার চরাঞ্চল ও গ্রামীণ জনপদ',
    locationEn: 'River-islands & Rural Communities in Bogura'
  }
];

interface OngoingActivitiesSectionProps {
  onOpenDonation?: (categoryKey?: string, amount?: number) => void;
}

export const OngoingActivitiesSection: React.FC<OngoingActivitiesSectionProps> = ({ onOpenDonation }) => {
  const { isEn } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<OngoingProjectItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCardClick = (project: OngoingProjectItem) => {
    setSelectedProject(project);
  };

  const handleDonateNow = (project: OngoingProjectItem) => {
    const categoryKey = project.donationCategoryKey;
    setSelectedProject(null);
    if (onOpenDonation) {
      onOpenDonation(categoryKey, 1000);
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
      className="py-16 sm:py-24 bg-[#fafcfb] border-b border-emerald-100/70 relative selection:bg-emerald-100 selection:text-emerald-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Styled strictly to user prompt */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Small green badge: • আমাদের কাজ */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#064e3b] text-xs sm:text-sm font-bold mb-3.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#064e3b] animate-pulse" />
            <span>{isEn ? '• Our Work' : '• আমাদের কাজ'}</span>
          </div>

          {/* Large crisp title: চলমান কার্যক্রমসমূহ */}
          <h2 className="font-serif-bn font-bold text-3xl sm:text-4xl lg:text-5xl text-[#064e3b] tracking-tight leading-tight mb-3 sm:mb-4">
            {isEn ? 'Ongoing Initiatives' : 'চলমান কার্যক্রমসমূহ'}
          </h2>

          <p className="text-slate-600 font-solaiman text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {isEn 
              ? 'Stand beside our blessed ongoing humanitarian initiatives with your sincere charity and Sadaqah to bring smiles and build eternal rewards.'
              : 'মানবতার নিঃস্বার্থ সেবা ও আখিরাতের স্থায়ী সঞ্চয় গড়ে তুলতে জিকরুল্লাহ ফাউন্ডেশনের চলমান বরকতময় প্রকল্পসমূহে আপনার সাদাকাহ ও অনুদান দিয়ে শরিক হোন।'}
          </p>
        </div>

        {/* Responsive Grid Card Layout: 7 Cards in As-Sunnah Trust Style */}
        {/* Mobile: 1 Col, Tablet: 2 Cols, Desktop: 3 Cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {ONGOING_PROJECTS.map((project, idx) => {
            const isLastCard = idx === 6;
            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className={`bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer hover:-translate-y-1.5 ${
                  isLastCard ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full' : ''
                }`}
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
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] sm:text-xs font-bold shadow-md border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#064e3b]" />
                        <span>{isEn ? 'Project' : 'প্রজেক্ট'}</span>
                      </span>
                    </div>

                    {/* Small Circular White Frame with Foundation Logo on Bottom Right */}
                    <div className="absolute bottom-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-0.5 shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={FOUNDATION_INFO.logoUrl}
                        alt="Zikrullah Foundation"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 pb-2">
                    {/* Project Title */}
                    <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#064e3b] transition-colors leading-snug mb-2.5">
                      {isEn ? project.titleEn : project.titleBn}
                    </h3>

                    {/* Short Description */}
                    <p className="font-solaiman text-slate-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 mb-5 font-normal">
                      {isEn ? project.shortDescEn : project.shortDescBn}
                    </p>

                    {/* Fund Progress Bar Section */}
                    <div className="bg-[#f8faf9] rounded-xl p-3 border border-emerald-900/10 mb-4">
                      {/* Top Stats: Left Collected, Right Target */}
                      <div className="flex items-center justify-between text-xs sm:text-[13px] font-solaiman mb-2">
                        <span className="font-semibold text-slate-700">
                          {isEn ? 'Raised: ' : 'সংগৃহীত: '}
                          <span className="text-[#064e3b] font-bold font-mono">
                            {isEn ? project.raisedAmountEn : project.raisedAmountBn}
                          </span>
                        </span>
                        <span className="font-semibold text-slate-700">
                          {isEn ? 'Goal: ' : 'লক্ষ্য: '}
                          <span className="text-slate-900 font-bold font-mono">
                            {isEn ? project.targetAmountEn : project.targetAmountBn}
                          </span>
                        </span>
                      </div>

                      {/* Dark Green Progress Track & Fill */}
                      <div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-[#064e3b] via-[#087443] to-[#10b981] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${Math.min(project.percentage, 100)}%` }}
                        />
                      </div>

                      {/* Percentage indicator */}
                      <div className="flex justify-end items-center mt-1.5">
                        <span className="text-[11px] sm:text-xs font-bold text-[#d97706] font-mono">
                          {isEn ? project.percentageEn : project.percentageBn}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: 'অংশগ্রহণ করুন' Button Centered */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project);
                    }}
                    className="w-full py-3 px-4 rounded-xl sm:rounded-2xl bg-[#064e3b] hover:bg-[#043d2e] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group-hover:bg-[#043d2e]"
                  >
                    <span>{isEn ? 'Participate Now' : 'অংশগ্রহণ করুন'}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-200 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
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
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#064e3b]/90 backdrop-blur-md border border-emerald-300/30 shadow-md">
                  {isEn ? 'Active Project' : 'চলমান প্রজেক্ট'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-black/50 backdrop-blur-md border border-white/20">
                  {isEn ? selectedProject.locationEn : selectedProject.locationBn}
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
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-5 font-solaiman flex-1">
              
              {/* Green Border Quotation Box (As requested: সবুজ বর্ডার দেওয়া কোটেশন বক্স) */}
              <div className="bg-emerald-50/90 border-l-4 border-[#064e3b] rounded-r-2xl p-4 sm:p-5 shadow-xs">
                <p className="font-serif-bn text-emerald-950 text-sm sm:text-base leading-relaxed font-semibold italic">
                  {isEn ? selectedProject.quoteEn : selectedProject.quoteBn}
                </p>
                <span className="block text-right text-xs font-bold text-[#d97706] mt-2 font-mono">
                  {isEn ? selectedProject.quoteRefEn : selectedProject.quoteRefBn}
                </span>
              </div>

              {/* Project Detailed Narrative */}
              <div>
                <h4 className="font-serif-bn font-bold text-slate-900 text-base sm:text-lg mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#064e3b]" />
                  <span>{isEn ? 'Project Overview & Field Context' : 'প্রকল্পের পটভূমি ও লক্ষ্য'}</span>
                </h4>
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                  {isEn ? selectedProject.detailedDescEn : selectedProject.detailedDescBn}
                </p>
              </div>

              {/* Key Highlights / Steps */}
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
                  <span className="font-bold text-[#d97706] font-mono text-sm">
                    {isEn ? selectedProject.percentageEn : selectedProject.percentageBn}
                  </span>
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
                <span>{isEn ? 'Donate to This Project' : 'এই প্রকল্পে এখনই দান করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
