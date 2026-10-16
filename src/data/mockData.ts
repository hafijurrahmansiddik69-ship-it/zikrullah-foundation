import { Project, ServiceItem, NewsItem, GalleryItem } from '../types';

const heroImg = "https://res.cloudinary.com/dlklqihg6/image/upload/v1791214336/bfl9h9ic5e2zvkynca1b.jpg";
import foodImg from '../assets/images/food_aid_relief_1791208757690.jpg';
import eduImg from '../assets/images/education_aid_students_1791208774675.jpg';
import medImg from '../assets/images/medical_camp_aid_1791208791787.jpg';
import selfRelianceImg from '../assets/images/self_reliance_aid_1791986374204.jpg';
import scholar1 from '../assets/images/milon_hossain_portrait_1791292236483.jpg';
import scholar2 from '../assets/images/mamun_islam_portrait_1791292689791.jpg';
import scholar3 from '../assets/images/borhan_ali_portrait_1791293367263.jpg';
import scholar4 from '../assets/images/scholar_portrait_4_1791215689324.jpg';
import scholar5 from '../assets/images/scholar_portrait_5_1791215706422.jpg';
import scholar6 from '../assets/images/scholar_portrait_6_1791215718775.jpg';

export { heroImg, foodImg, eduImg, medImg, selfRelianceImg, scholar1, scholar2, scholar3, scholar4, scholar5, scholar6 };

export const EXECUTIVE_MEMBERS = [
  {
    id: 1,
    name: 'MD. MILON HOSEN',
    role: 'VICE CHAIRMAN',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791638482/wregsbuodnmjqptjtrxh.jpg',
  },
  {
    id: 2,
    name: 'MD. MAMUN ISLAM',
    role: 'EXECUTIVE MEMBER',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791638736/wizyfodi4s2zwm8kd47a.jpg',
  },
  {
    id: 3,
    name: 'MD. BORHAN ALI',
    role: 'EXECUTIVE MEMBER',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791638633/cujqjrrv3hi9oka4lqx6.jpg',
  },
  {
    id: 4,
    name: 'MD. JAKIRUL ISLAM',
    role: 'EXECUTIVE MEMBER',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791652095/eswwsejypdjy6cwkadd2.jpg',
  },
  {
    id: 5,
    name: 'MD. SHIPON ALI',
    role: 'EXECUTIVE MEMBER',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791641077/l2em2pkkm5c69iyudhb2.jpg',
  },
  {
    id: 6,
    name: 'MD. REJAUL ISLAM',
    role: 'EXECUTIVE MEMBER',
    image: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1791652723/akbkmpdqu9kmhdlle3er.jpg',
  },
];

export const FOUNDATION_INFO = {
  name: "জিকরুল্লাহ ফাউন্ডেশন",
  englishName: "ZIKRULLAH FOUNDATION",
  logoUrl: "https://res.cloudinary.com/dlklqihg6/image/upload/v1791212936/xkufns6zn3c7rhaccxo2.png",
  homeBackgroundUrl: "https://res.cloudinary.com/dlklqihg6/image/upload/v1792118844/hk3ytqebhh3unwlwsb3m.jpg",
  aboutImageUrl: "https://res.cloudinary.com/dlklqihg6/image/upload/v1791215813/zchzkth66qkenrlqmjmg.jpg",
  founderImageUrl: "https://res.cloudinary.com/dlklqihg6/image/upload/v1791215813/zchzkth66qkenrlqmjmg.jpg",
  slogan: "কুরআন-সুন্নাহর আলোকে, উম্মাহর খেদমতে",
  motto: "সৎকাজ, ইসলামের আদর্শ ও মানবতার সেবাই আমাদের পথচলা।",
  founder: "হাফিজুর রহমান সিদ্দিক (বগুড়া)",
  established: "১লা জানুয়ারি ২০২৩",
  address: "গুজিয়া, মোকামতলা, বগুড়া, বাংলাদেশ",
  email: "zikrullahfd@gmail.com",
  phone: "016 20 500 920",
  altPhone: "+880 16 20 500 920",
  officeHours: "শনিবার – বৃহস্পতিবার: সকাল ৯টা – সন্ধ্যা ৬টা",
  bkashNumber: "016 20 500 920 (পার্সোনাল)",
  nagadNumber: "016 20 500 920 (পার্সোনাল)",
  rocketNumber: "016 20 500 920-2",
  bankDetails: {
    bankName: "ইসলামী ব্যাংক বাংলাদেশ পিএলসি (Islami Bank Bangladesh PLC)",
    branch: "মোকামতলা শাখা, বগুড়া",
    accountName: "জিকরুল্লাহ ফাউন্ডেশন (Zikrullah Foundation)",
    accountNumber: "২০৫০১২৩৪৫৬৭৮৯০১০০",
    routingNumber: "125272183"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "food-aid",
    title: "খাদ্য সহায়তা ও খাদ্য ব্যাংক",
    subtitle: "Emergency Food Relief",
    description: "মোকামতলা, গুজিয়া ও বগুড়ার প্রত্যন্ত অঞ্চলের হতদরিদ্র, বিধবা ও অক্ষম পরিবারগুলোর মাঝে মাসব্যাপী খাদ্যপণ্য বিতরণ।",
    iconName: "Utensils"
  },
  {
    id: "education",
    title: "দরিদ্র ও এতিম শিক্ষা সহায়তা",
    subtitle: "Education & Orphan Care",
    description: "বই, খাতা, স্কুল ড্রেস, পরীক্ষার ফি এবং মেধাবী অস্বচ্ছল শিক্ষার্থীদের জন্য মাসিক শিক্ষা বৃত্তি প্রদান।",
    iconName: "GraduationCap"
  },
  {
    id: "healthcare",
    title: "ফ্রি চিকিৎসা ক্যাম্প ও ঔষধ বিতরণ",
    subtitle: "Medical & Health Care",
    description: "অভিজ্ঞ চিকিৎসকদের মাধ্যমে গ্রামীণ মানুষের মাঝে বিনামূল্যে স্বাস্থ্যসেবা, চোখের ছানি অপারেশন ও ঔষধ সহায়তা।",
    iconName: "HeartPulse"
  },
  {
    id: "clean-water",
    title: "সুপেয় পানি ও স্যানিটেশন",
    subtitle: "Safe Water Tube-wells",
    description: "আর্সেনিকমুক্ত গভীর নলকূপ স্থাপন এবং অস্বচ্ছল পরিবারের স্বাস্থ্যসম্মত স্যানিটেশন ব্যবস্থা গড়ে তোলা।",
    iconName: "Droplets"
  },
  {
    id: "dawah",
    title: "দ্বীনি দাওয়াহ ও নৈতিক শিক্ষা",
    subtitle: "Islamic Dawah & Values",
    description: "সহীহ কুরআন শিক্ষা মক্তব পরিচালনা, যুবসমাজকে মাদকমুক্ত রাখা এবং দ্বীনি সচেতনতামূলক সেমিনার আয়োজন।",
    iconName: "BookOpen"
  },
  {
    id: "self-reliance",
    title: "স্বাবলম্বীকরণ ও কর্মসংস্থান",
    subtitle: "Livelihood & Self-reliance",
    description: "দরিদ্র পরিবারকে সেলাই মেশিন, রিকশা-ভ্যান, কিংবা ক্ষুদ্র ব্যবসার পুঁজি দিয়ে স্থায়ীভাবে আত্মনির্ভরশীল করা।",
    iconName: "Sparkles"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p-food",
    title: "খাদ্য ও পুষ্টি সহায়তা প্রকল্প",
    category: "খাদ্য ও পুষ্টি সহায়তা",
    description: "আমাদের চারপাশের বহু পরিবার প্রতিদিন দুবেলা দুমুঠো অন্নের অভাবে নিরব কান্নায় দিন কাটায়। জিকরুল্লাহ ফাউন্ডেশন বগুড়া জেলার শিবগঞ্জ ও মোকামতলা উপজেলার অসহায় পরিবারগুলোর খাদ্য নিরাপত্তা নিশ্চিত করতে কাজ করে যাচ্ছে।",
    longDescription: "আমাদের চারপাশের বহু পরিবার প্রতিদিন দুবেলা দুমুঠো অন্নের অভাবে নিরব কান্নায় দিন কাটায়। জিকরুল্লাহ ফাউন্ডেশন বগুড়া জেলার শিবগঞ্জ ও মোকামতলা উপজেলার অসহায় পরিবারগুলোর খাদ্য নিরাপত্তা নিশ্চিত করতে কাজ করে যাচ্ছে। আমাদের লক্ষ্য কেবল অন্ন সংস্থান নয়, বরং সুবিধাবঞ্চিত মানুষের মুখে হাসি ফুটিয়ে তাদের মাঝে আত্মমর্যাদা ও আশা ফিরিয়ে দেওয়া। এই মানবিক পথচলায় আসুন আমরা সবাই সহমর্মিতার হাত বাড়িয়ে দিই এবং একটি ক্ষুধা ও অভাবমুক্ত সমাজ গড়ে তুলি।",
    objectives: [
      "জরুরি খাদ্য ব্যাংক পরিচালনা ও নিয়মিত খাদ্য সামগ্রী সরবরাহ",
      "বিধবা, এতিম ও শারীরিক প্রতিবন্ধী পরিবারগুলোকে অগ্রাধিকার প্রদান",
      "পবিত্র রমজান মাসে বিশেষ সেহরি ও ইফতার ফুড প্যাক বিতরণ",
      "বন্যা ও প্রাকৃতিক দুর্যোগে দ্রুত রান্না করা খাবার ও শুকনো রসদ পৌঁছানো"
    ],
    targetAmount: 250000,
    raisedAmount: 195000,
    beneficiaries: "৩৫০+ পরিবার",
    location: "মোকামতলা ও গুজিয়া, বগুড়া",
    image: foodImg,
    status: "চলমান",
    iconType: "Utensils"
  },
  {
    id: "p-education",
    title: "শিক্ষা ও মেধা বিকাশ কর্মসূচি",
    category: "শিক্ষা ও মেধা বিকাশ",
    subtitle: "শিক্ষা উপকরণ, উপবৃত্তি ও নৈতিক চরিত্র গঠন",
    description: "স্কুল ও মাদ্রাসাগামী অসচ্ছল ও এতিম শিক্ষার্থীদের বিনামূল্যে নতুন ব্যাগ, বই-খাতা, পোশাক ও নিয়মিত শিক্ষা সহায়তা প্রদান।",
    longDescription: "অভাবের কারণে যেন কোনো সম্ভাবনাময় শিশুর ভবিষ্যৎ নষ্ট না হয়—এই প্রত্যয়ে জিকরুল্লাহ ফাউন্ডেশন পরিচালনা করছে শিক্ষা ও মেধা বিকাশ প্রকল্প। এ প্রকল্পের অধীনে ১৮০+ এতিম ও অসচ্ছল শিক্ষার্থীকে নতুন স্কুল ব্যাগ, বই-খাতা, জ্যামিতি বক্স ও মাসিক বৃত্তি প্রদান করা হয়। একইসাথে দ্বীনি সহীহ কুরআন শিক্ষা ও নৈতিক মূল্যবোধ শিক্ষার মাধ্যমে শিক্ষার্থীদের সুনাগরিক হিসেবে গড়ে তোলা হচ্ছে।",
    objectives: [
      "বছরের শুরুতে নতুন শিক্ষা উপকরণ, স্কুল ব্যাগ ও ড্রেস প্রদান",
      "অসচ্ছল ও এতিম মেধাবী শিক্ষার্থীদের জন্য নিয়মিত মাসিক শিক্ষা উপবৃত্তি",
      "সহীহ কুরআন তিলাওয়াত ও নৈতিক শিষ্টাচার প্রশিক্ষণ পাঠশালা",
      "ঝরে পড়া শিশুদের পুনরায় বিদ্যালয় ও মাদ্রাসায় ভর্তির পূর্ণ সহায়তা"
    ],
    targetAmount: 200000,
    raisedAmount: 155000,
    beneficiaries: "১৮০+ শিক্ষার্থী",
    location: "গুজিয়া ও শিবগঞ্জ, বগুড়া",
    image: eduImg,
    status: "চলমান",
    iconType: "GraduationCap"
  },
  {
    id: "p-health",
    title: "স্বাস্থ্য ও চিকিৎসা সেবা প্রকল্প",
    category: "স্বাস্থ্য ও চিকিৎসা",
    subtitle: "ফ্রি বিশেষজ্ঞ চিকিৎসা ক্যাম্প ও প্রয়োজনীয় ওষুধ বিতরণ",
    description: "পল্লী অঞ্চলের প্রান্তিক ও অসচ্ছল রোগীদের বিনামূল্যে বিশেষজ্ঞ ডাক্তার পরামর্শ, ডায়াগনস্টিক সুবিধা ও জীবনরক্ষাকারী ওষুধ বিতরণ।",
    longDescription: "দারিদ্র্যের কারণে পল্লী অঞ্চলের হাজারো মানুষ ন্যূনতম স্বাস্থ্যসেবা থেকে বঞ্চিত থাকে। জিকরুল্লাহ ফাউন্ডেশন বিশেষজ্ঞ এমবিবিএস ডাক্তারদের সমন্বয়ে নিয়মিত ফ্রি মেডিকেল ক্যাম্পের আয়োজন করে। ক্যাম্পে আগত রোগীদের স্বাস্থ্য পরীক্ষা, বিনামূল্যে ব্যবস্থাপত্র ও প্রয়োজনীয় ওষুধ সরবরাহ করা হয়। এছাড়া অসচ্ছল রোগীদের চোখের ছানি অপারেশন ও জটিল রোগীদের জন্য বিশেষ চিকিৎসা অনুদান প্রদান করা হয়।",
    objectives: [
      "অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকদের নিয়ে নিয়মিত গ্রামীণ ফ্রি মেডিকেল ক্যাম্প",
      "সম্পূর্ণ বিনামূল্যে প্রয়োজনীয় ও জীবনরক্ষাকারী ওষুধ সরবরাহ",
      "বয়োবৃদ্ধ অসহায় রোগীদের চোখের ছানি অপারেশন কার্যক্রম",
      "গুরুতর অসুস্থ ও অসহায় রোগীদের জরুরি চিকিৎসা অনুদান তহবিল"
    ],
    targetAmount: 180000,
    raisedAmount: 135000,
    beneficiaries: "৫০০+ রোগী",
    location: "গুজিয়া কমিউনিটি সেন্টার ও চরাঞ্চল",
    image: medImg,
    status: "চলমান",
    iconType: "HeartPulse"
  },
  {
    id: "p-livelihood",
    title: "আত্মকর্মসংস্থান ও স্বাবলম্বীকরণ প্রকল্প",
    category: "আত্মকর্মসংস্থান",
    subtitle: "স্থায়ী উপার্জনের পথ তৈরি ও আত্মমর্যাদায় স্বাবলম্বী করা",
    description: "অসহায় পরিবার ও যুবকদের সেলাই মেশিন, রিকশা-ভ্যান এবং ক্ষুদ্র ব্যবসার প্রাথমিক পুঁজি প্রদান করে পরনির্ভরশীলতা দূরীকরণ।",
    longDescription: "ত্রাণ কেবল সাময়িক ক্ষুধা মেটায়, কিন্তু স্থায়ী মুক্তি আনে আত্মকর্মসংস্থান। জিকরুল্লাহ ফাউন্ডেশন অসহায় পরিবারগুলোকে পরনির্ভরশীলতা থেকে মুক্ত করতে টেকসই স্বাবলম্বীকরণ প্রকল্প বাস্তবায়ন করছে। এর আওতায় অসচ্ছল নারীদের সেলাই প্রশিক্ষণ ও নতুন সেলাই মেশিন বিতরণ করা হয়, কর্মক্ষম বেকার যুবকদের রিকশা ও ভ্যান গাড়ি কিনে দেওয়া হয় এবং ক্ষুদ্র ব্যবসার প্রাথমিক পুঁজি প্রদান করা হয় যাতে তারা মাথা উঁচু করে স্বাবলম্বী হতে পারে।",
    objectives: [
      "অসচ্ছল মা-বোনদের সেলাই প্রশিক্ষণ ও সম্পূর্ণ নতুন সেলাই মেশিন প্রদান",
      "কর্মক্ষম যুবকদের জীবিকার জন্য রিকশা ও পণ্যবাহী ভ্যান গাড়ি বিতরণ",
      "ক্ষুদ্র উদ্যোক্তাদের সুদমুক্ত কর্জে হাসানা ও ক্ষুদ্র ব্যবসার মূলধন সহায়তা",
      "নিয়মিত তত্ত্বাবধান ও টেকসই ব্যবসায়িক দিকনির্দেশনা প্রদান"
    ],
    targetAmount: 300000,
    raisedAmount: 210000,
    beneficiaries: "৮৫+ উদ্যমী পরিবার",
    location: "মোকামতলা, শিবগঞ্জ ও বগুড়া",
    image: selfRelianceImg,
    status: "চলমান",
    iconType: "Briefcase"
  }
];

export const STATS_DATA = [
  {
    value: "৭৫০+",
    label: "উপকারভোগী পরিবার",
    sub: "সরাসরি সহায়তা প্রাপ্ত"
  },
  {
    value: "৩২০+",
    label: "শিক্ষার্থী সুবিধাভোগী",
    sub: "বই, খাতা ও উপবৃত্তি"
  },
  {
    value: "৬০০+",
    label: "চিকিৎসা ও ঔষধ সেবা",
    sub: "ফ্রি ক্যাম্প ও রোগী ফান্ড"
  },
  {
    value: "৩৫+",
    label: "সফল সামাজিক প্রকল্প",
    sub: "মোকামতলা ও বগুড়া অঞ্চলে"
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: "news-1",
    title: "নতুন শিক্ষাবর্ষে ১২০ শিক্ষার্থীর মাঝে শিক্ষা উপকরণ বিতরণ সম্পন্ন",
    date: "২৮ সেপ্টেম্বর ২০২৬",
    category: "শিক্ষা প্রকল্প",
    summary: "মোকামতলা ইউনিয়নের গুজিয়া অঞ্চলের অস্বচ্ছল পরিবারের কোমলমতি শিক্ষার্থীদের মাঝে ব্যাগ, খাতা ও জ্যামিতি বক্স তুলে দেওয়া হয়েছে।",
    content: "জিকিরুল্লাহ ফাউন্ডেশনের নিয়মিত শিক্ষা সহায়তা প্রকল্পের অংশ হিসেবে আজ স্থানীয় গুজিয়া কেন্দ্রে এক অনাড়ম্বর অনুষ্ঠানের মাধ্যমে ১২০ জন এতিম ও দরিদ্র শিক্ষার্থীর হাতে নতুন বই-খাতা, ব্যাগ ও পোশাক বিতরণ করা হয়েছে। অনুষ্ঠানের সার্বিক তত্ত্বাবধানে ছিলেন ফাউন্ডেশনের সম্মানিত উপদেষ্টা ও এলাকার গুণী ব্যক্তিবর্গ।"
  },
  {
    id: "news-2",
    title: "জরুরি খাদ্য সহায়তা: বন্যায় ক্ষতিগ্রস্ত ১০০ পরিবারের পাশে ফাউন্ডেশন",
    date: "২৫ সেপ্টেম্বর ২০২৬",
    category: "ত্রাণ কার্যক্রম",
    summary: "সম্প্রতি আকস্মিক বন্যায় ক্ষতিগ্রস্থ চরাঞ্চলের পরিবারগুলোর মাঝে ১৫ দিনের শুকনো খাবার ও শুকনো রসদ বিতরণ।",
    content: "দুর্যোগের এই কঠিন মুহূর্তে বগুড়ার স্থানীয় মোকামতলা ও চরাঞ্চলে পানিবন্দি ১০০ পরিবারের মাঝে ফাউন্ডেশনের স্বেচ্ছাসেবক দল চাল, ডাল, চিঁড়া, গুড় ও স্যালাইন নিয়ে সরাসরি উপস্থিত হয়। স্থানীয় প্রশাসনের সহযোগিতায় সুষ্ঠুভাবে ত্রাণ সামগ্রী বণ্টন সম্পন্ন হয়েছে।"
  },
  {
    id: "news-3",
    title: "মাসিক ফ্রি মেডিকেল ক্যাম্প ও চক্ষু পরীক্ষা অনুষ্ঠিত",
    date: "২০ সেপ্টেম্বর ২০২৬",
    category: "স্বাস্থ্যসেবা",
    summary: "বগুড়ার গুজিয়া সরকারি প্রাথমিক বিদ্যালয় প্রাঙ্গণে ৩ শতাধিক গ্রামবাসীর ফ্রি স্বাস্থ্য পরীক্ষা ও বিনামূল্যে ওষুধ সরবরাহ।",
    content: "ফাউন্ডেশনের উদ্যোগে এবং বগুড়া শহীদ জিয়াউর রহমান মেডিকেল কলেজের স্বেচ্ছাসেবী ডাক্তারদের আন্তরিক অংশগ্রহণে দিনব্যাপী ফ্রি মেডিকেল ক্যাম্প সম্পন্ন হয়েছে। এতে বিশেষ করে নারী, শিশু ও বৃদ্ধ রোগীরা জরুরি চিকিৎসা সুবিধা লাভ করেন।"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "মানবসেবা ও ত্রাণ বিতরণ কার্যক্রম",
    category: "খাদ্য সহায়তা",
    location: "গুজিয়া, মোকামতলা",
    imageUrl: foodImg,
    date: "সেপ্টেম্বর ২০২৬"
  },
  {
    id: "g2",
    title: "শিক্ষার্থীদের মাঝে পাঠ্যবই ও ব্যাগ উপহার",
    category: "শিক্ষা সহায়তা",
    location: "মোকামতলা, বগুড়া",
    imageUrl: eduImg,
    date: "আগস্ট ২০২৬"
  },
  {
    id: "g3",
    title: "বিনামূল্যে বিশেষজ্ঞ চিকিৎসা ক্যাম্প",
    category: "স্বাস্থ্যসেবা",
    location: "গুজিয়া, বগুড়া",
    imageUrl: medImg,
    date: "জুলাই ২০২৬"
  },
  {
    id: "g4",
    title: "স্বেচ্ছাসেবীদের মানবিক উদ্যোগ সমাবেশ",
    category: "সামাজিক সমাবেশ",
    location: "বগুড়া কার্যালয়",
    imageUrl: heroImg,
    date: "মে ২০২৬"
  }
];

export const DAILY_HADITH = {
  arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
  bengali: "“সাদাকাহ প্রদানে কোনো সম্পদ কখনো কমে না।”",
  source: "সহীহ মুসলিম — ২৫৮৮",
  context: "মানবতার কল্যাণে আপনার যেকোনো সামান্য অনুদানও পরকালে মহা প্রতিদান বয়ে আনবে।"
};
