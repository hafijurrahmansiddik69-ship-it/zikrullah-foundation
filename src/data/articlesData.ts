
export type ArticleBlock =
  | {
      type: 'paragraph';
      textBn: string;
      textEn: string;
    }
  | {
      type: 'heading';
      textBn: string;
      textEn: string;
    }
  | {
      type: 'quote';
      textBn: string;
      textEn: string;
      attributionBn?: string;
      attributionEn?: string;
    }
  | {
      type: 'image';
      src: string;
      altBn: string;
      altEn: string;
      captionBn?: string;
      captionEn?: string;
    };

export interface ArticleEntry {
  id: string;
  slug: string;
  titleBn: string;
  titleEn: string;
  excerptBn: string;
  excerptEn: string;
  categoryBn: string;
  categoryEn: string;
  dateBn: string;
  dateEn: string;
  readTimeBn: string;
  readTimeEn: string;
  locationBn: string;
  locationEn: string;
  authorBn: string;
  authorEn: string;
  bannerImage: string;
  bannerAltBn: string;
  bannerAltEn: string;
  blocks: ArticleBlock[];
}

/**
 * নতুন সাপ্তাহিক লেখা যোগ করার নিয়ম:
 * নিচের ARTICLES_DATA অ্যারের একদম শুরুতে (উপরে) নতুন একটি অবজেক্ট যোগ করুন।
 * হোমপেজের "ভাবনা ও কর্মকথা" অংশে স্বয়ংক্রিয়ভাবে সর্বশেষ প্রথম ২টি লেখা প্রদর্শিত হবে
 * এবং বাকি সব লেখা "সব লেখা দেখুন →" আর্কাইভ পেজে দেখা যাবে।
 */
export const ARTICLES_DATA: ArticleEntry[] = [
  {
    id: 'art-winter-field-notes-2026',
    slug: 'mokamtala-shibganj-winter-field-experience',
    titleBn: 'মোকামতলা ও শিবগঞ্জের শীতসন্ধ্যায়: উষ্ণতার খোঁজে মাঠপর্যায়ের অভিজ্ঞতা',
    titleEn: 'Winter Evenings in Mokamtala & Shibganj: Field Reflections in Search of Warmth',
    excerptBn:
      'কুয়াশাচ্ছন্ন ভোরে গুজিয়া ও শিবগঞ্জের গ্রামীণ পথ ধরে হাঁটলে দেখা যায়—অনেক পরিবারের জন্য শীত মানে কেবল ঋতুর পরিবর্তন নয়, বরং দীর্ঘ এক সংগ্রামের রাত। মাঠপর্যায়ের সরাসরি অভিজ্ঞতা ও আমাদের প্রস্তুতির কথা।',
    excerptEn:
      'Walking through the foggy morning lanes of Gujia and Shibganj reveals that winter for many rural families is not merely a change of season, but a long night of quiet struggle.',
    categoryBn: 'মাঠপর্যায়ের অভিজ্ঞতা',
    categoryEn: 'Field Experience',
    dateBn: '১৮ নভেম্বর ২০২৬',
    dateEn: '18 November 2026',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    locationBn: 'গুজিয়া ও মোকামতলা, শিবগঞ্জ, বগুড়া',
    locationEn: 'Gujia & Mokamtala, Shibganj, Bogura',
    authorBn: 'মাঠপর্যায় ও সম্পাদনা ডেস্ক, জিকরুল্লাহ ফাউন্ডেশন',
    authorEn: 'Field & Editorial Desk, Zikrullah Foundation',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062210/xozx5n4eovwro6gsjt4v.jpg',
    bannerAltBn: 'মোকামতলা ও শিবগঞ্জ অঞ্চলে জিকরুল্লাহ ফাউন্ডেশনের শীতবস্ত্র বিতরণ কার্যক্রম',
    bannerAltEn: 'Zikrullah Foundation winter clothing distribution in Mokamtala and Shibganj',
    blocks: [
      {
        type: 'paragraph',
        textBn:
          'হেমন্তের শেষ দিকে যখন বগুড়ার উত্তর প্রান্তে মোকামতলা ও গুজিয়ার ফসলের মাঠজুড়ে কুয়াশা নামতে শুরু করে, তখন আমাদের স্বেচ্ছাসেবক দল প্রতিবছরের মতোই গ্রামে গ্রামে তালিকা হালনাগাদের কাজ শুরু করে। শহরের তুলনায় খোলা মাঠ, করতোয়া তীরবর্তী জনপদ এবং কাঁচা-বেড়ার ঘরগুলোতে শীতের তীব্রতা নামে অনেক আগেই।',
        textEn:
          'As autumn closes and mist settles across the farmlands of Mokamtala and Gujia in northern Bogura, our volunteer teams begin updating household lists from village to village. Compared to urban centers, winter hits open fields and lightly constructed rural homes far earlier and harder.'
      },
      {
        type: 'paragraph',
        textBn:
          'একটি জীর্ণ ঘরের বারান্দায় বসে থাকা বয়োবৃদ্ধ মাতার সঙ্গে কথা বলে আমরা অনুধাবন করি—একটি ভারী কম্বল বা শীতের চাদর কেবল সামান্য কাপড় নয়; এটি একজন মানুষের রাতের ঘুম আর সম্মানের আশ্রয়। অনেকেই সংকোচের কারণে কারও কাছে হাত পাততে পারেন না, নীরবে কষ্ট সয়ে যান।',
        textEn:
          'Speaking with an elderly mother sitting on a worn veranda reminded us that a warm blanket or shawl is never just cloth—it is peaceful sleep and dignity for a human being. Many deserving elders never ask aloud for help and silently endure the cold.'
      },
      {
        type: 'heading',
        textBn: 'যাচাই-বাছাই ও নীরব পৌঁছে দেওয়ার নীতি',
        textEn: 'Door-to-Door Verification & Dignified Delivery'
      },
      {
        type: 'paragraph',
        textBn:
          '১লা জানুয়ারি ২০২৩-এ যাত্রা শুরুর পর থেকেই আমাদের মূল নীতি ছিল—প্রকৃত হকদারের মর্যাদা অক্ষুণ্ণ রাখা। আমরা কেবল সড়কের পাশে মাইকিং করে বিতরণ করি না; বরং শিবগঞ্জ ও মোকামতলার প্রতিটি ওয়ার্ডে স্বেচ্ছাসেবকদের মাধ্যমে বিধবা, এতিম, প্রতিবন্ধী এবং কর্মহীন প্রবীণদের ঘরে গিয়ে শীতবস্ত্র পৌঁছে দেওয়ার চেষ্টা করি।',
        textEn:
          'Since our founding on January 1, 2023, preserving the dignity of every recipient has remained central to our mission. Rather than relying solely on public queues, our volunteers verify households and hand-deliver winter essentials directly to widows, orphans, persons with disabilities, and elderly villagers.'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795054479/h2st0b9ide6rjqwlm5m0.jpg',
        altBn: 'শীতবস্ত্র বিতরণের সময় স্থানীয় মানুষের সাথে স্বেচ্ছাসেবকদের মুহূর্ত',
        altEn: 'Volunteers handing over winter garments in rural Bogura',
        captionBn: 'চিত্র ১: মোকামতলা ও শিবগঞ্জ অঞ্চলে মাঠপর্যায়ে শীতবস্ত্র হস্তান্তরের একটি মুহূর্ত।',
        captionEn: 'Fig. 1: Handing over winter blankets during field visits in Mokamtala & Shibganj.'
      },
      {
        type: 'quote',
        textBn:
          'মানবসেবা তখনই সার্থক হয়, যখন সাহায্যপ্রার্থীর চেহারায় সংকোচের বদলে স্বস্তি ও সম্মানের প্রশান্তি ফুটে ওঠে।',
        textEn:
          'Humanitarian service fulfills its purpose when relief brings comfort and dignity rather than hesitation to the recipient’s face.'
      },
      {
        type: 'paragraph',
        textBn:
          'আসন্ন শীত ২০২৬-২৭ মৌসুমে আমাদের লক্ষ্য বগুড়ার গুজিয়া ও শিবগঞ্জ ছাড়িয়ে পার্শ্ববর্তী জয়পুরহাট ও দিনাজপুরের কয়েকটি চরাঞ্চল ও দরিদ্র পাড়ায় উষ্ণতা পৌঁছে দেওয়া। আপনার সামান্য অংশগ্রহণ এবং আন্তরিক দোয়া আমাদের এই মাঠপর্যায়ের পথচলাকে আরও বেগবান করবে, ইনশাআল্লাহ।',
        textEn:
          'For the upcoming 2026–27 winter season, we plan to extend warmth beyond Gujia and Shibganj into underserved neighborhoods in neighboring Joypurhat and Dinajpur. Your thoughtful support and prayers strengthen every step of this field journey.'
      }
    ]
  },
  {
    id: 'art-orphan-care-northern-districts',
    slug: 'orphan-care-bogura-joypurhat-dinajpur-plan',
    titleBn: 'বগুড়া থেকে জয়পুরহাট ও দিনাজপুর: এতিম ও অসচ্ছল শিশুদের পাশে সম্মিলিত দায়বদ্ধতা',
    titleEn: 'From Bogura to Joypurhat & Dinajpur: Our Shared Responsibility for Orphaned Children',
    excerptBn:
      'পিতৃহীন একটি শিশুর শিক্ষা ও খাদ্য নিশ্চিত করা কেবল দয়া নয়, এটি পুরো সমাজের নৈতিক আমানত। উত্তরাঞ্চলের প্রান্তিক মাদ্রাসা ও বিদ্যালয়ের শিশুদের নিয়ে আমাদের আগামী দিনের ভাবনা।',
    excerptEn:
      'Ensuring food and education for a fatherless child is not merely charity—it is a collective moral trust. Reflections on expanding care across northern Bangladesh.',
    categoryBn: 'আগামী দিনের পরিকল্পনা',
    categoryEn: 'Future Roadmap',
    dateBn: '১২ নভেম্বর ২০২৬',
    dateEn: '12 November 2026',
    readTimeBn: '৫ মিনিট পাঠ',
    readTimeEn: '5 min read',
    locationBn: 'বগুড়া, জয়পুরহাট ও দিনাজপুর',
    locationEn: 'Bogura, Joypurhat & Dinajpur',
    authorBn: 'জিকরুল্লাহ ফাউন্ডেশন গবেষণা ও শিক্ষা উইং',
    authorEn: 'Education & Research Wing, Zikrullah Foundation',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795061051/e9anj19wzwxbp90kqqre.jpg',
    bannerAltBn: 'এতিম ও সুবিধাবঞ্চিত শিক্ষার্থীদের পড়াশোনা ও খাবারের তত্ত্বাবধান',
    bannerAltEn: 'Supporting orphaned and underprivileged students in northern districts',
    blocks: [
      {
        type: 'paragraph',
        textBn:
          'একটি শিশু যখন শৈশবেই বাবা কিংবা মাকে হারায়, তখন তার জীবনে কেবল অভিভাবকের শূন্যতাই তৈরি হয় না—অনিশ্চিত হয়ে পড়ে তার দুই বেলার খাবার, বই-খাতা আর সুস্থভাবে বেড়ে ওঠার পরিবেশ। গুজিয়ার বিভিন্ন মক্তব, হিফজখানা ও প্রাথমিক বিদ্যালয়ে ঘুরে আমরা এমন অনেক প্রতিভাবান শিশুকে দেখেছি, যারা কেবল সামান্য মাসিক খরচের অভাবে পড়াশোনা ছেড়ে দিতে বাধ্য হচ্ছে।',
        textEn:
          'When a child loses a parent in early childhood, the void extends beyond emotional grief—daily nutrition, school books, and a safe environment for growth suddenly hang in uncertainty. Visiting local maktabs, hifz centers, and primary schools around Gujia, we regularly meet bright children at risk of dropping out simply for lack of modest monthly support.'
      },
      {
        type: 'heading',
        textBn: 'একজন শিক্ষার্থীর পাশে দীর্ঘমেয়াদী অভিভাবকত্ব',
        textEn: 'Long-Term Guardianship Over One-Off Aid'
      },
      {
        type: 'paragraph',
        textBn:
          'আমাদের অভিজ্ঞতা বলে, বছর শেষে একবার কিছু উপহার দেওয়ার চেয়ে প্রতি মাসে নির্দিষ্টভাবে একটি এতিম শিশুর খাদ্য, পোশাক ও মাদ্রাসা-স্কুলের বেতন নিশ্চিত করা অনেক বেশি কার্যকর। এতে শিশুর মা কিংবা বৃদ্ধ দাদা-দাদি মানসিক দুশ্চিন্তা থেকে মুক্তি পান এবং শিশুটি আত্মবিশ্বাস নিয়ে পড়াশোনায় মনোযোগী হতে পারে।',
        textEn:
          'Our field experience shows that consistent monthly support for an orphan’s meals, uniforms, and madrasah or school tuition accomplishes far more than occasional gifts. It lifts daily anxiety from widowed mothers and elderly grandparents while giving the child confidence to focus on learning.'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763851/uhoy2dhdewkxkbqpf6hs.jpg',
        altBn: 'নতুন বই ও শিক্ষা উপকরণ হাতে গ্রামীণ শিক্ষার্থী',
        altEn: 'Rural students with new textbooks and educational kits',
        captionBn: 'চিত্র ১: অসচ্ছল ও এতিম শিক্ষার্থীদের মাঝে বছরব্যাপী শিক্ষা উপকরণ ও নিয়মিত সহায়তা কার্যক্রম।',
        captionEn: 'Fig. 1: Year-round educational materials and continuous mentorship for vulnerable students.'
      },
      {
        type: 'heading',
        textBn: 'উত্তরাঞ্চলের পার্শ্ববর্তী জেলাগুলোতে সম্প্রসারণের লক্ষ্য',
        textEn: 'Expanding Our Horizon to Neighboring Districts'
      },
      {
        type: 'paragraph',
        textBn:
          'বগুড়ার শিবগঞ্জ ও মোকামতলায় গড়ে ওঠা আমাদের স্বেচ্ছাসেবী নেটওয়ার্ক এখন ধীরে ধীরে পার্শ্ববর্তী জয়পুরহাট ও দিনাজপুর জেলার প্রান্তিক গ্রামগুলোর এতিম শিক্ষার্থীদের তথ্য সংগ্রহ করছে। স্থানীয় ইমাম, শিক্ষক ও সমাজসেবীদের সমন্বয়ে আমরা প্রতিটি শিক্ষার্থীর পড়াশোনার অগ্রগতি ও স্বাস্থ্য পরীক্ষার রেকর্ড সংরক্ষণ করার উদ্যোগ নিয়েছি।',
        textEn:
          'Building on our volunteer network in Shibganj and Mokamtala, we are now mapping orphaned students in underserved villages across neighboring Joypurhat and Dinajpur. Working alongside local imams, teachers, and elders, we aim to track both academic progress and basic health checkups systematically.'
      },
      {
        type: 'paragraph',
        textBn:
          'ভবিষ্যতে প্রতিটি ইউনিয়নে অন্তত পাঁচজন এতিম শিক্ষার্থীর পূর্ণাঙ্গ শিক্ষাবৃত্তি এবং বছরে দুইবার নিয়মিত স্বাস্থ্য পরীক্ষা নিশ্চিত করাই আমাদের ২০২৭ সালের অন্যতম প্রধান কর্মপরিকল্পনা।',
        textEn:
          'Ensuring complete educational sponsorship for at least five orphans per union alongside biannual medical screenings stands as one of our core priorities moving into 2027.'
      }
    ]
  },
  {
    id: 'art-self-reliance-gujia-model',
    slug: 'sustainable-self-reliance-gujia-shibganj-model',
    titleBn: 'সাময়িক ত্রাণ নয়, স্থায়ী স্বাবলম্বিতা: আত্মকর্মসংস্থান ভাবনা ও গুজিয়া-শিবগঞ্জ মডেল',
    titleEn: 'Beyond Temporary Relief: Reflections on the Gujia-Shibganj Self-Reliance Model',
    excerptBn:
      'ত্রাণ জরুরি সংকটে প্রাণ বাঁচায়, কিন্তু একটি পরিবারকে পরনির্ভরশীলতা থেকে চিরতরে মুক্তি দেয় সম্মানের উপার্জন। একটি সেলাই মেশিন বা ভ্যানগাড়ি কীভাবে একটি ঘরের চিত্র বদলে দেয়, তার বাস্তব পর্যবেক্ষণ।',
    excerptEn:
      'Relief saves lives during urgent crises, but dignified livelihood frees a family permanently. Field observations on how a sewing machine or cargo van transforms an entire household.',
    categoryBn: 'পরিকল্পনা ও ভাবনা',
    categoryEn: 'Strategy & Reflections',
    dateBn: '৫ নভেম্বর ২০২৬',
    dateEn: '5 November 2026',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    locationBn: 'মোকামতলা ও শিবগঞ্জ, বগুড়া',
    locationEn: 'Mokamtala & Shibganj, Bogura',
    authorBn: 'জিকরুল্লাহ ফাউন্ডেশন কর্মসংস্থান টিম',
    authorEn: 'Livelihood & Rehabilitation Team',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795062375/tbthh7wvmaybjfekcnnq.jpg',
    bannerAltBn: 'আত্মকর্মসংস্থান প্রকল্পের মাধ্যমে স্বাবলম্বী পরিবার',
    bannerAltEn: 'Families empowered through self-reliance and livelihood support',
    blocks: [
      {
        type: 'paragraph',
        textBn:
          'প্রতিটি মানবিক সংগঠনের জন্যই একটি বড় প্রশ্ন থাকে—একই পরিবারকে প্রতি বছর বারবার ত্রাণের লাইনে দাঁড় করানো কি সমাধান, নাকি তাদের হাতকে কর্মের হাতিয়ারে পরিণত করা? জিকরুল্লাহ ফাউন্ডেশন শুরু থেকেই জরুরি খাদ্য ও চিকিৎসা সহায়তার পাশাপাশি স্থায়ী পুনর্বাসনের ওপর বিশেষ গুরুত্ব দিয়ে আসছে।',
        textEn:
          'Every humanitarian organization eventually confronts a vital question: is recurring annual relief the answer, or helping families turn their skills into steady income? Alongside urgent food and medical aid, Zikrullah Foundation has prioritized permanent rehabilitation from the start.'
      },
      {
        type: 'paragraph',
        textBn:
          'গত দুই বছরে শিবগঞ্জ ও মোকামতলার যে পরিবারগুলোতে সেলাই মেশিন কিংবা ক্ষুদ্র ব্যবসার পুঁজি দেওয়া হয়েছিল, ছয় মাস পর ফলোআপ করতে গিয়ে আমরা এক অভাবনীয় পরিবর্তন দেখেছি। একসময় যারা অন্যের সাহায্যের অপেক্ষায় থাকতেন, আজ তাদের অনেকেই নিজের সন্তানের স্কুলের খাতা-কলম নিজেই কিনতে পারছেন।',
        textEn:
          'Visiting households across Shibganj and Mokamtala six months after providing sewing machines or modest trade grants revealed remarkable progress. Families once waiting on seasonal relief are now purchasing their children’s school supplies independently.'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792763774/zwnrunrscvxecmhnm1zk.jpg',
        altBn: 'গ্রামীণ নারীদের জন্য সেলাই প্রশিক্ষণ ও স্বাবলম্বীকরণ উদ্যোগ',
        altEn: 'Tailoring equipment and self-reliance support for rural families',
        captionBn: 'চিত্র ১: উপার্জনের উপকরণ হস্তান্তরের পর নিয়মিত তদারকি ও টেকসই আয়ের ফলোআপ।',
        captionEn: 'Fig. 1: Follow-up mentorship after providing tools for sustainable household income.'
      },
      {
        type: 'heading',
        textBn: 'আগামী দিনের ফলোআপ ও দক্ষতা প্রশিক্ষণ',
        textEn: 'Strengthening Mentorship & Practical Training'
      },
      {
        type: 'paragraph',
        textBn:
          'শুধু উপকরণ কিনে দিলেই দায়িত্ব শেষ হয় না—সঠিক ব্যবহার ও বাজার সংযোগ না থাকলে অনেক সময় ক্ষুদ্র উদ্যোগ থেমে যায়। তাই আমরা স্থানীয় পর্যায়ে অভিজ্ঞ দর্জি ও ক্ষুদ্র ব্যবসায়ীদের পরামর্শক্রমে প্রাথমিক প্রশিক্ষণ এবং প্রতি তিন মাস অন্তর খোঁজখবর নেওয়ার একটি কাঠামো গড়ে তুলছি, যাতে কোনো অনুদান অপচয় না হয়।',
        textEn:
          'Simply handing over equipment is never enough without guidance and market access. We are therefore pairing recipients with experienced local tailors and tradespeople for foundational training and quarterly follow-ups so every grant grows sustainably.'
      }
    ]
  },
  {
    id: 'art-journey-since-jan-2023',
    slug: 'foundation-journey-since-january-2023-amanah',
    titleBn: '১লা জানুয়ারি ২০২৩ থেকে পথচলা: আমানতদারিতা, যাচাই-বাছাই ও আমাদের কর্মনীতি',
    titleEn: 'Journey Since January 1, 2023: Integrity, Verification, and Our Guiding Principles',
    excerptBn:
      'একটি ছোট মানবিক উদ্যোগ কীভাবে বগুড়ার গুজিয়া ও মোকামতলার মানুষের বিশ্বাসের ঠিকানায় পরিণত হলো? দাতার আমানত রক্ষায় আমাদের সরেজমিন যাচাই এবং স্বচ্ছতার গল্প।',
    excerptEn:
      'How a modest local initiative grew into a trusted bridge of compassion in Gujia and Mokamtala. Our standards for donor accountability and grassroots verification.',
    categoryBn: 'প্রতিষ্ঠানের দর্শন',
    categoryEn: 'Institutional Values',
    dateBn: '২৮ অক্টোবর ২০২৬',
    dateEn: '28 October 2026',
    readTimeBn: '৪ মিনিট পাঠ',
    readTimeEn: '4 min read',
    locationBn: 'গুজিয়া, মোকামতলা, বগুড়া',
    locationEn: 'Gujia, Mokamtala, Bogura',
    authorBn: 'হাফিজুর রহমান সিদ্দিক ও কার্যনির্বাহী পরিষদ',
    authorEn: 'Hafizur Rahman Siddik & Executive Committee',
    bannerImage: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1795073660/pwijcipvwpgs5eyvgkfx.jpg',
    bannerAltBn: 'জিকরুল্লাহ ফাউন্ডেশনের প্রতিষ্ঠাতা হাফিজুর রহমান সিদ্দিক — ১লা জানুয়ারি ২০২৩ থেকে মানবতার সেবায় পথচলা',
    bannerAltEn: 'Hafizur Rahman Siddik, Founder of Zikrullah Foundation — Journey Since January 1, 2023',
    blocks: [
      {
        type: 'paragraph',
        textBn:
          '২০২৩ সালের ১লা জানুয়ারি যখন জিকরুল্লাহ ফাউন্ডেশনের আনুষ্ঠানিক পথচলা শুরু হয়, তখন আমাদের পুঁজি ছিল কেবল একদল সৎ ও উদ্যমী তরুণের সময়, শ্রম এবং মানুষের প্রতি গভীর দায়বদ্ধতা। আমাদের বিশ্বাস ছিল—সামর্থ্য ছোট হলেও নিয়ত যদি খাঁটি হয় এবং হিসাব যদি স্বচ্ছ থাকে, তবে আল্লাহ তাআলা বরকত দান করবেন।',
        textEn:
          'When Zikrullah Foundation began its formal journey on January 1, 2023, our greatest capital was the dedication of sincere young volunteers and an unwavering sense of duty toward our neighbors. Even modest efforts, when grounded in sincerity and strict transparency, carry immense blessing.'
      },
      {
        type: 'image',
        src: 'https://res.cloudinary.com/dlklqihg6/image/upload/v1792177305/udpqc7mfiwsc57x1ougp.jpg',
        altBn: 'অসহায় পরিবারগুলোর মাঝে খাদ্য সামগ্রী বিতরণ',
        altEn: 'Essential food pack distribution to vulnerable households',
        captionBn: 'চিত্র ১: সরেজমিন যাচাইয়ের পর অসহায় পরিবারগুলোর ঘরে খাদ্য সহায়তা পৌঁছে দেওয়া।',
        captionEn: 'Fig. 1: Delivering verified staple food packs directly to vulnerable homes.'
      },
      {
        type: 'heading',
        textBn: 'প্রতিটি টাকা একটি পবিত্র আমানত',
        textEn: 'Every Contribution Is a Sacred Trust'
      },
      {
        type: 'paragraph',
        textBn:
          'যিনি দূর প্রবাস থেকে কিংবা নিজ উপার্জনের কষ্টার্জিত অর্থ থেকে আমাদের ফান্ডে সহযোগিতা পাঠান, তিনি কেবল টাকা দেন না—তিনি তাঁর বিশ্বাস আমাদের হাতে তুলে দেন। তাই প্রতিটি প্রকল্পে অনুদানের অর্থ ব্যয়ের আগে স্বেচ্ছাসেবকদের সরেজমিন পরিদর্শন এবং প্রকৃত প্রয়োজন যাচাই করা আমাদের অলিখিত কিন্তু অলঙ্ঘনীয় নিয়ম।',
        textEn:
          'Whether a supporter contributes from abroad or from modest local earnings, they entrust us not merely with funds, but with their faith. Field inspection prior to disbursement and clean record-keeping remain non-negotiable rules across every project.'
      },
      {
        type: 'paragraph',
        textBn:
          'আগামী দিনগুলোতে বগুড়া, জয়পুরহাট ও দিনাজপুর অঞ্চলে শিক্ষা, জরুরি চিকিৎসা, শীতবস্ত্র এবং সুপেয় পানির প্রকল্পগুলোকে আরও প্রাতিষ্ঠানিক রূপ দেওয়াই আমাদের লক্ষ্য। কুরআন ও সুন্নাহর আলোকে এই মানবিক খেদমতে আপনার পরামর্শ ও দোয়া আমাদের পাথেয়।',
        textEn:
          'Looking ahead, we are focused on institutionalizing our education, emergency healthcare, winter relief, and clean water initiatives across Bogura, Joypurhat, and Dinajpur—guided always by the Quran and Sunnah.'
      }
    ]
  }
];
