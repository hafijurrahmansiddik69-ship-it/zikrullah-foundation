import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ClipboardList,
  Info,
  AlertTriangle,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  AlertCircle,
  Tag,
  User,
  UserCheck,
  Phone,
  Briefcase,
  CalendarDays,
  Calendar,
  CalendarCheck2,
  MapPin,
  Globe,
  Compass,
  Navigation,
  Home,
  Link2,
  Layers,
  Landmark,
  Users,
  PhoneCall,
  UserPlus,
  Clock,
  Car,
  ShieldCheck,
  FileText,
  FileCheck2,
  Hash,
  History,
  BookOpen,
  Flag,
  Edit3,
  Gift,
  HeartHandshake,
  Banknote,
  Wallet,
  Award,
  ScrollText,
  Scale,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { adminDataService } from '../services/adminDataService';
import {
  RECIPIENT_EMAIL,
  sendFounderInvitationEmail,
  triggerSmartEmailOpen,
} from '../services/emailService';

interface OfficialInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  invitationType: string;
  organizerName: string;
  phone: string;
  email: string;
  organizerRole: string;
  startDate: string;
  endDate: string;
  division: string;
  district: string;
  upazila: string;
  detailedAddress: string;
  googleMapLink: string;
  // Section 5: আয়োজনের বিবরণ
  institutionName: string;
  chiefOrganizerName: string;
  chiefOrganizerPhone: string;
  majlisEdition: string;
  lastMajlisDate: string;
  lectureTimingFormat: string;
  otherSpeakers: string;
  previousYearSpeakers: string;
  discussionTopic: string;
  expectedAudience: string;
  transportManagement: string;
  securityManagement: string;
  // Section 6: প্রশাসন ও ভলান্টিয়ার
  adminPermission: string;
  sufficientVolunteers: string;
  volunteerCount: string;
  // Section 7: দলীয় ও সামাজিক প্রেক্ষাপট
  religiousGroupInvolvement: string;
  audienceBackground: string;
  otherBackground: string;
  politicalGuestPresent: string;
  politicalGuestDetails: string;
  // Section 8: হাদিয়া ও সম্মাননা সংক্রান্ত
  hadiyaProvided: string;
  hadiyaAmount: string;
  hadiyaType: string;
  crestProvided: string;
  crestDetails: string;
  // Section 9: শর্তাবলি
  agreedToTerms: boolean;
}

const INITIAL_FORM: FormState = {
  invitationType: '',
  organizerName: '',
  phone: '',
  email: '',
  organizerRole: '',
  startDate: '',
  endDate: '',
  division: 'রাজশাহী বিভাগ',
  district: 'বগুড়া',
  upazila: '',
  detailedAddress: '',
  googleMapLink: '',
  institutionName: '',
  chiefOrganizerName: '',
  chiefOrganizerPhone: '',
  majlisEdition: '',
  lastMajlisDate: '',
  lectureTimingFormat: '',
  otherSpeakers: '',
  previousYearSpeakers: '',
  discussionTopic: '',
  expectedAudience: '',
  transportManagement: '',
  securityManagement: '',
  adminPermission: '',
  sufficientVolunteers: '',
  volunteerCount: '',
  religiousGroupInvolvement: '',
  audienceBackground: '',
  otherBackground: '',
  politicalGuestPresent: '',
  politicalGuestDetails: '',
  hadiyaProvided: '',
  hadiyaAmount: '',
  hadiyaType: '',
  crestProvided: '',
  crestDetails: '',
  agreedToTerms: false,
};

function generateUniqueRefCode(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `ZKF-INV-${num}`;
}

export const OfficialInvitationModal: React.FC<OfficialInvitationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isEn } = useLanguage();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [emailUrls, setEmailUrls] = useState<{ gmailUrl: string; mailtoUrl: string } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const invitationOptions = [
    { value: "জুমু'আর খুতবা", labelBn: "জুমু'আর খুতবা", labelEn: "Jumu'ah Khutbah" },
    { value: 'ওয়াজ মাহফিল', labelBn: 'ওয়াজ মাহফিল', labelEn: 'Waz Mahfil' },
    { value: 'তাফসির মাহফিল', labelBn: 'তাফসির মাহফিল', labelEn: 'Tafsir Mahfil' },
    { value: 'ইসলাহী বয়ান', labelBn: 'ইসলাহী বয়ান', labelEn: 'Islahi Bayan' },
    { value: 'সেমিনার আলোচনা', labelBn: 'সেমিনার আলোচনা', labelEn: 'Seminar Discussion' },
  ];

  const divisionOptions = [
    'রাজশাহী বিভাগ',
    'ঢাকা বিভাগ',
    'রংপুর বিভাগ',
    'চট্টগ্রাম বিভাগ',
    'সিলেট বিভাগ',
    'খুলনা বিভাগ',
    'বরিশাল বিভাগ',
    'ময়মনসিংহ বিভাগ',
  ];

  const districtOptions = [
    'বগুড়া',
    'জয়পুরহাট',
    'নওগাঁ',
    'নাটোর',
    'পাবনা',
    'সিরাজগঞ্জ',
    'চাঁপাইনবাবগঞ্জ',
    'রাজশাহী',
    'গাইবান্ধা',
    'রংপুর',
    'দিনাজপুর',
    'ঢাকা',
    'গাজীপুর',
    'নারায়ণগঞ্জ',
    'কুমিল্লা',
    'চট্টগ্রাম',
    'সিলেট',
    'খুলনা',
    'বরিশাল',
    'ময়মনসিংহ',
    'অন্যান্য জেলা',
  ];

  const upazilaOptions = [
    'শিবগঞ্জ (গুজিয়া / মোকামতলা)',
    'বগুড়া সদর',
    'কাহালু',
    'শেরপুর',
    'দুপচাঁচিয়া',
    'সোনাতলা',
    'সারিয়াকান্দি',
    'আদমদীঘি',
    'নন্দীগ্রাম',
    'অন্যান্য উপজেলা/থানা',
  ];

  const backgroundOptions = [
    { value: 'কওমি মাদ্রাসা', labelBn: 'কওমি মাদ্রাসা', labelEn: 'Qawmi Madrasah' },
    { value: 'আলিয়া মাদ্রাসা', labelBn: 'আলিয়া মাদ্রাসা', labelEn: 'Alia Madrasah' },
    { value: 'তাবলীগ ও দাওয়াতি', labelBn: 'তাবলীগ ও দাওয়াতি', labelEn: 'Tabligh & Dawah' },
    { value: 'যুব ও শিক্ষার্থী সমাজ', labelBn: 'যুব ও শিক্ষার্থী সমাজ', labelEn: 'Youth & Students' },
    { value: 'সর্বস্তরের সাধারণ মুসল্লি', labelBn: 'সর্বস্তরের সাধারণ মুসল্লি', labelEn: 'General Muslim Community' },
    { value: 'অন্যান্য', labelBn: 'অন্যান্য', labelEn: 'Others' },
  ];

  const handleFieldChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg(null);
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): { isValid: boolean; firstErrorField: keyof FormState | null } => {
    const errors: Partial<Record<keyof FormState, string>> = {};
    const requiredText = isEn ? 'Please fill this out' : 'অনুগ্রহ করে এটি পূরণ করুন';

    if (!form.invitationType) {
      errors.invitationType = requiredText;
    }
    if (!form.organizerName.trim()) {
      errors.organizerName = requiredText;
    }
    const cleanPhone = form.phone.replace(/[\s-]/g, '').trim();
    if (!cleanPhone) {
      errors.phone = requiredText;
    } else if (!/^01[0-9]{9}$/.test(cleanPhone)) {
      errors.phone = isEn
        ? 'Enter a valid 11-digit mobile number (01XXXXXXXXX)'
        : 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (01XXXXXXXXX)';
    }
    if (!form.startDate) {
      errors.startDate = requiredText;
    }
    if (!form.endDate) {
      errors.endDate = requiredText;
    }
    if (!form.division) {
      errors.division = requiredText;
    }
    if (!form.district) {
      errors.district = requiredText;
    }
    if (!form.detailedAddress.trim()) {
      errors.detailedAddress = requiredText;
    }
    if (!form.institutionName.trim()) {
      errors.institutionName = requiredText;
    }
    if (!form.chiefOrganizerName.trim()) {
      errors.chiefOrganizerName = requiredText;
    }
    const cleanChiefPhone = form.chiefOrganizerPhone.replace(/[\s-]/g, '').trim();
    if (!cleanChiefPhone) {
      errors.chiefOrganizerPhone = requiredText;
    } else if (!/^01[0-9]{9}$/.test(cleanChiefPhone)) {
      errors.chiefOrganizerPhone = isEn
        ? 'Enter a valid 11-digit mobile number (01XXXXXXXXX)'
        : 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (01XXXXXXXXX)';
    }
    if (!form.expectedAudience.trim()) {
      errors.expectedAudience = requiredText;
    }
    if (!form.agreedToTerms) {
      errors.agreedToTerms = requiredText;
    }

    const orderedFields: (keyof FormState)[] = [
      'invitationType',
      'organizerName',
      'phone',
      'startDate',
      'endDate',
      'division',
      'district',
      'detailedAddress',
      'institutionName',
      'chiefOrganizerName',
      'chiefOrganizerPhone',
      'expectedAudience',
      'agreedToTerms',
    ];
    const firstErrorField = orderedFields.find((f) => Boolean(errors[f])) || null;

    setFieldErrors(errors);
    if (firstErrorField) {
      setErrorMsg(
        isEn
          ? 'Please fill in all required fields marked in red.'
          : 'লাল চিহ্নিত প্রয়োজনীয় অংশগুলো পূরণ করুন।'
      );
      return { isValid: false, firstErrorField };
    }

    setErrorMsg(null);
    return { isValid: true, firstErrorField: null };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, firstErrorField } = validate();
    if (!isValid) {
      if (firstErrorField && scrollRef.current) {
        const container = scrollRef.current.querySelector(
          `[data-field-name="${firstErrorField}"]`
        ) as HTMLElement | null;
        if (container) {
          container.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const focusable = container.querySelector('input, select, textarea') as HTMLElement | null;
          if (focusable) {
            setTimeout(() => focusable.focus({ preventScroll: true }), 260);
          }
        } else {
          scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }
    if (isSubmitting) return;

    setIsSubmitting(true);
    const refCode = generateUniqueRefCode();

    const combinedOrganizer = [
      form.organizerName.trim(),
      form.organizerRole.trim() ? `(${form.organizerRole.trim()})` : '',
      form.email.trim() ? `— Email: ${form.email.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const combinedPhone = [
      form.phone.trim(),
      form.chiefOrganizerPhone.trim()
        ? `প্রধান আয়োজক: ${form.chiefOrganizerName.trim()} (${form.chiefOrganizerPhone.trim()})`
        : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const scheduleParts = [
      `প্রস্তাবিত তারিখ: ${form.startDate} থেকে ${form.endDate}`,
      form.lectureTimingFormat.trim() ? `সময় বিন্যাস: ${form.lectureTimingFormat.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const venueParts = [
      form.division,
      form.district,
      form.upazila,
      form.detailedAddress.trim(),
      form.googleMapLink.trim() ? `Map: ${form.googleMapLink.trim()}` : '',
    ]
      .filter(Boolean)
      .join(', ');

    const chiefOrganizerInfo = `${form.chiefOrganizerName.trim()} — মোবাইল: ${form.chiefOrganizerPhone.trim()}`;

    const majlisDetailsParts = [
      form.majlisEdition.trim() ? `কততম মাহফিল: ${form.majlisEdition.trim()}` : '',
      form.lastMajlisDate ? `সর্বশেষ মাহফিলের তারিখ: ${form.lastMajlisDate}` : '',
      form.lectureTimingFormat.trim() ? `আলোচনার সময় বিন্যাস: ${form.lectureTimingFormat.trim()}` : '',
      form.otherSpeakers.trim() ? `অন্যান্য আলোচক: ${form.otherSpeakers.trim()}` : '',
      form.previousYearSpeakers.trim() ? `বিগত বারের আলোচক: ${form.previousYearSpeakers.trim()}` : '',
      form.discussionTopic.trim() ? `আলোচনার বিষয়: ${form.discussionTopic.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const protocolParts = [
      `প্রত্যাশিত শ্রোতা: ${form.expectedAudience.trim()}`,
      form.securityManagement.trim() ? `নিরাপত্তা: ${form.securityManagement.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const travelParts =
      form.transportManagement.trim() || 'আয়োজক কমিটির ব্যবস্থাপনায় নিরাপদ যাতায়াত নিশ্চিত';

    const adminParts = [
      form.adminPermission ? `প্রশাসনের অনুমতি: ${form.adminPermission}` : '',
      form.sufficientVolunteers ? `পর্যাপ্ত ভলান্টিয়ার: ${form.sufficientVolunteers}` : '',
      form.volunteerCount.trim() ? `ভলান্টিয়ার সংখ্যা: ${form.volunteerCount.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const contextParts = [
      form.religiousGroupInvolvement ? `ধর্মীয় দলের সম্পৃক্ততা: ${form.religiousGroupInvolvement}` : '',
      form.audienceBackground ? `ঘরানা: ${form.audienceBackground}` : '',
      form.otherBackground.trim() ? `অন্যান্য ঘরানা: ${form.otherBackground.trim()}` : '',
      form.politicalGuestPresent ? `রাজনৈতিক ব্যক্তি উপস্থিতি: ${form.politicalGuestPresent}` : '',
      form.politicalGuestDetails.trim() ? `রাজনৈতিক ব্যক্তির বিবরণ: ${form.politicalGuestDetails.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const hadiyaParts =
      [
        form.hadiyaProvided ? `হাদিয়া: ${form.hadiyaProvided}` : '',
        form.hadiyaAmount.trim() ? `পরিমাণ: ${form.hadiyaAmount.trim()} টাকা` : '',
        form.hadiyaType.trim() ? `ধরন: ${form.hadiyaType.trim()}` : '',
        form.crestProvided ? `সম্মাননা/ক্রেস্ট: ${form.crestProvided}` : '',
        form.crestDetails.trim() ? `বিবরণ: ${form.crestDetails.trim()}` : '',
      ]
        .filter(Boolean)
        .join(' | ') || 'উল্লেখ করা হয়নি';

    try {
      adminDataService.addInvitation({
        referenceCode: refCode,
        organizerNameAndRole: combinedOrganizer,
        institutionName: form.institutionName.trim(),
        phone: combinedPhone,
        invitationType: form.invitationType,
        proposedDateTime: scheduleParts,
        venueAddressAndDistance: venueParts,
        expectedAudienceAndProtocol: [protocolParts, majlisDetailsParts, adminParts, contextParts]
          .filter(Boolean)
          .join(' || '),
        travelHospitalityAssurance: travelParts,
        hadiyaConfirmation: hadiyaParts,
      });

      const emailResult = await sendFounderInvitationEmail({
        referenceCode: refCode,
        organizerNameAndRole: combinedOrganizer,
        institutionName: form.institutionName.trim(),
        phone: combinedPhone,
        invitationType: form.invitationType,
        proposedDateTime: scheduleParts,
        venueAddressAndDistance: venueParts,
        expectedAudienceAndProtocol: protocolParts,
        travelHospitalityAssurance: travelParts,
        hadiyaConfirmation: hadiyaParts,
        agreedToTerms: form.agreedToTerms,
        chiefOrganizerInfo,
        majlisDetails: majlisDetailsParts || undefined,
        adminAndVolunteerInfo: adminParts || undefined,
        religiousAndSocialContext: contextParts || undefined,
      });

      setEmailUrls({ gmailUrl: emailResult.gmailUrl, mailtoUrl: emailResult.mailtoUrl });
      setSubmittedData({ ...form });
      setSubmittedRef(refCode);
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    setSubmittedData(null);
    setEmailUrls(null);
    setErrorMsg(null);
    setFieldErrors({});
    setForm(INITIAL_FORM);
    onClose();
  };

  const handleCopyRef = () => {
    if (!submittedRef) return;
    navigator.clipboard?.writeText(submittedRef).catch(() => {});
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const getFieldClass = (baseCls: string, field: keyof FormState) =>
    fieldErrors[field]
      ? `${baseCls} !border-[#dc2626] !bg-[#fef2f2] !ring-2 !ring-[#dc2626]/25`
      : baseCls;

  const renderFieldError = (field: keyof FormState) => {
    const msg = fieldErrors[field];
    if (!msg) return null;
    return (
      <div
        role="alert"
        className="mt-1.5 inline-flex items-center gap-1.5 rounded-[6px] bg-[#dc2626] text-white px-2.5 py-1 text-[11.5px] font-semibold shadow-[0_3px_10px_rgba(220,38,38,0.28)] animate-in fade-in slide-in-from-top-1 duration-150 relative"
      >
        <span className="absolute -top-1 left-3 w-2 h-2 bg-[#dc2626] rotate-45" aria-hidden="true" />
        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-white relative z-10" aria-hidden="true" />
        <span className="relative z-10">{msg}</span>
      </div>
    );
  };

  const baseInputClass =
    'w-full px-2.5 py-2 text-[13px] text-[#1f2937] bg-white border border-[#cbd5e1] rounded-[6px] outline-none transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)] placeholder:text-slate-400';
  const labelClass = 'flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1f2937] mb-1.5';
  const optionalSpanClass = 'text-[#4b5563] font-normal text-[11.5px]';
  const requiredStar = <span className="text-[#dc2626] font-bold">*</span>;

  const cardClass =
    'bg-[#ecfdf5] border border-[#6ee7b7] border-t-[4px] border-t-[#064E3B] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(6,78,59,0.08)] text-[#1f2937]';
  const sectionHeaderClass =
    'flex items-center gap-2 text-[15px] font-bold text-[#064E3B] pb-2 mb-2.5 border-b border-[#a7f3d0]';

  // 9 harmonious, eye-pleasing full-box section themes (1 & 8 Green, 3/6/9 Red, 7 Golden Yellow, 2/4/5 soothing accents)
  const sec = {
    1: {
      card: 'bg-[#dcfce7] border border-[#4ade80] border-t-[4px] border-t-[#15803d] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(21,128,61,0.1)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#14532d] pb-2 mb-2.5 border-b border-[#bbf7d0]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#15803d] to-[#16a34a] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#15803d]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#15803d]',
      info: 'bg-white/85 border border-[#4ade80] text-[#166534] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#16a34a]',
      input: `${baseInputClass} focus:border-[#15803d] focus:ring-3 focus:ring-[#15803d]/15`,
    },
    2: {
      card: 'bg-[#dbeafe] border border-[#60a5fa] border-t-[4px] border-t-[#1d4ed8] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(29,78,216,0.1)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#1e3a8a] pb-2 mb-2.5 border-b border-[#bfdbfe]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#1d4ed8]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#1d4ed8]',
      info: 'bg-white/85 border border-[#60a5fa] text-[#1e40af] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#2563eb]',
      input: `${baseInputClass} focus:border-[#1d4ed8] focus:ring-3 focus:ring-[#1d4ed8]/15`,
    },
    3: {
      card: 'bg-[#fee2e2] border border-[#f87171] border-t-[4px] border-t-[#dc2626] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(220,38,38,0.11)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#7f1d1d] pb-2 mb-2.5 border-b border-[#fecaca]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#dc2626]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#dc2626]',
      info: 'bg-white/85 border border-[#f87171] text-[#991b1b] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#dc2626]',
      input: `${baseInputClass} focus:border-[#dc2626] focus:ring-3 focus:ring-[#dc2626]/15`,
    },
    4: {
      card: 'bg-[#ccfbf1] border border-[#2dd4bf] border-t-[4px] border-t-[#0f766e] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(15,118,110,0.1)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#134e4a] pb-2 mb-2.5 border-b border-[#99f6e4]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#0f766e]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#0f766e]',
      info: 'bg-white/85 border border-[#2dd4bf] text-[#115e59] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#0d9488]',
      input: `${baseInputClass} focus:border-[#0f766e] focus:ring-3 focus:ring-[#0f766e]/15`,
    },
    5: {
      card: 'bg-[#ede9fe] border border-[#a78bfa] border-t-[4px] border-t-[#6d28d9] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(109,40,217,0.1)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#4c1d95] pb-2 mb-2.5 border-b border-[#ddd6fe]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#6d28d9]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#6d28d9]',
      info: 'bg-white/85 border border-[#a78bfa] text-[#5b21b6] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#7c3aed]',
      input: `${baseInputClass} focus:border-[#6d28d9] focus:ring-3 focus:ring-[#6d28d9]/15`,
    },
    6: {
      card: 'bg-[#fee2e2] border border-[#f87171] border-t-[4px] border-t-[#dc2626] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(220,38,38,0.11)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#7f1d1d] pb-2 mb-2.5 border-b border-[#fecaca]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#dc2626]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#dc2626]',
      info: 'bg-white/85 border border-[#f87171] text-[#991b1b] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#dc2626]',
      input: `${baseInputClass} focus:border-[#dc2626] focus:ring-3 focus:ring-[#dc2626]/15`,
    },
    7: {
      card: 'bg-[#fef08a] border border-[#ca8a04] border-t-[4px] border-t-[#a16207] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(161,98,7,0.14)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#713f12] pb-2 mb-2.5 border-b border-[#fde047]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#ca8a04] to-[#854d0e] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#854d0e]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#854d0e]',
      info: 'bg-white/85 border border-[#eab308] text-[#713f12] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#a16207]',
      input: `${baseInputClass} focus:border-[#a16207] focus:ring-3 focus:ring-[#a16207]/20`,
    },
    8: {
      card: 'bg-[#d1fae5] border border-[#34d399] border-t-[4px] border-t-[#047857] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(4,120,87,0.11)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#064e3b] pb-2 mb-2.5 border-b border-[#a7f3d0]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#059669] to-[#047857] text-white text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#047857]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#047857]',
      info: 'bg-white/85 border border-[#34d399] text-[#065f46] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#059669]',
      input: `${baseInputClass} focus:border-[#047857] focus:ring-3 focus:ring-[#047857]/15`,
    },
    9: {
      card: 'bg-[#fee2e2] border border-[#f87171] border-t-[4px] border-t-[#b91c1c] rounded-[10px] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(185,28,28,0.12)]',
      header: 'flex items-center gap-2 text-[15px] font-bold text-[#7f1d1d] pb-2 mb-2.5 border-b border-[#fecaca]',
      badge: 'w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#dc2626] to-[#991b1b] text-white border border-white/50 text-[12px] font-bold inline-flex items-center justify-center shrink-0 shadow-xs',
      titleIcon: 'w-4 h-4 shrink-0 text-[#b91c1c]',
      fieldIcon: 'w-3.5 h-3.5 shrink-0 text-[#b91c1c]',
      info: 'bg-white/85 border border-[#f87171] text-[#991b1b] text-[12px] px-2.5 py-2 rounded-[6px] mb-3 flex items-start gap-2',
      infoIcon: 'w-4 h-4 shrink-0 mt-0.5 text-[#dc2626]',
      input: `${baseInputClass} focus:border-[#dc2626] focus:ring-3 focus:ring-[#dc2626]/15`,
    },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="invitation-modal-title"
    >
      <div
        className="max-w-[580px] w-full rounded-[12px] shadow-2xl overflow-hidden relative my-auto bg-[#f2f5f3] text-[#1f2937] border border-[#15803d]/25 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Green Banner with Pure White Text */}
        <div className="bg-gradient-to-br from-[#064E3B] via-[#146c2f] to-[#1b8a3e] text-white px-4 py-4 sm:px-5 sm:py-5 shadow-[0_4px_14px_rgba(20,108,47,0.35)] border-b-2 border-[#6ee7b7]/60 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label={isEn ? 'Close modal' : 'বন্ধ করুন'}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[18px] sm:text-[20px] font-bold mb-1 pr-8 text-white">
            <ClipboardList className="w-5 h-5 shrink-0 text-white" aria-hidden="true" />
            <h3 id="invitation-modal-title" className="text-white">
              {isEn ? 'Dawah Invitation Application Form' : 'দাওয়াত আবেদন ফর্ম'}
            </h3>
          </div>

          <p className="text-[12.5px] text-white leading-snug">
            {isEn
              ? 'Please complete the form below accurately for Mahfil, Jumu’ah Khutbah, and special lecture invitations.'
              : 'অনুগ্রহ করে মাহফিল, জুমার খুতবা ও বিশেষ আলোচনার দাওয়াতের জন্য নিচের ফর্মটি নির্ভুলভাবে পূরণ করুন।'}
          </p>

          <div className="mt-2.5 text-[11.5px] sm:text-[12px] bg-white/15 border border-white/30 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium text-white">
            <Award className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
            <span>
              {isEn
                ? 'Hafizur Rahman Siddik (Bogura) — Founder & Chairman, Zikrullah Foundation'
                : 'হাফিজুর রহমান সিদ্দিক (বগুড়া) — প্রতিষ্ঠাতা ও চেয়ারম্যান, জিকরুল্লাহ ফাউন্ডেশন'}
            </span>
          </div>
        </div>

        {/* Restored Clean Form Scrollable Area */}
        <div
          ref={scrollRef}
          className="p-3 sm:p-4 max-h-[80vh] overflow-y-auto space-y-3 bg-[#f2f5f3] text-[#1f2937]"
        >
          {submittedRef && submittedData ? (
            <div className="space-y-3">
              <div className="bg-[#e3f7ec] border border-[#6ee7b7] text-[#064E3B] rounded-[10px] p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-6 h-6 text-[#064E3B] shrink-0" />
                  <h4 className="font-bold text-base sm:text-lg">
                    {isEn
                      ? 'Your invitation application has been received!'
                      : 'জাযাকাল্লাহু খাইরান — আপনার দাওয়াত আবেদনটি সফলভাবে জমা হয়েছে।'}
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed">
                  {isEn
                    ? `Your application has been sent directly to our official Gmail (${RECIPIENT_EMAIL}). Our coordination desk will contact you based on schedule availability.`
                    : `আপনার দাওয়াতের আবেদনটি সরাসরি ফাউন্ডেশনের অফিসিয়াল জিমেইল (${RECIPIENT_EMAIL}) এবং দপ্তরে পৌঁছে গেছে। সময়সূচি সাপেক্ষে নির্ধারিত প্রোগ্রামের জন্য যোগাযোগ করা হবে।`}
                </p>

                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[6px] bg-white border border-[#6ee7b7]">
                  <span className="text-xs font-semibold text-[#064E3B]">
                    {isEn ? 'Reference Code:' : 'রেফারেন্স কোড:'}
                  </span>
                  <span className="font-mono font-bold text-sm sm:text-base text-[#1f2937] tabular-nums">
                    {submittedRef}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-1 rounded bg-[#ecfdf5] hover:bg-[#d1fae5] text-[#064E3B] cursor-pointer"
                    title={isEn ? 'Copy reference code' : 'কপি করুন'}
                  >
                    {copiedRef ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className={cardClass}>
                <div className={sectionHeaderClass}>
                  <FileText className="w-4 h-4 text-[#064E3B] shrink-0" aria-hidden="true" />
                  <span>{isEn ? 'Application Summary' : 'জমাকৃত আবেদনের সারসংক্ষেপ'}</span>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px]">
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <Tag className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Invitation Type' : 'দাওয়াতের ধরন'}</span>
                    </dt>
                    <dd className="font-semibold text-[#064E3B] mt-0.5">{submittedData.invitationType}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <User className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Applicant' : 'আবেদনকারীর নাম'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">
                      {submittedData.organizerName}
                      {submittedData.organizerRole ? ` (${submittedData.organizerRole})` : ''}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Mobile' : 'মোবাইল নম্বর'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">{submittedData.phone}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <Landmark className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Institution' : 'প্রতিষ্ঠান / মসজিদ'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">{submittedData.institutionName}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <UserCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Chief Organizer' : 'প্রধান আয়োজক'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">
                      {submittedData.chiefOrganizerName} ({submittedData.chiefOrganizerPhone})
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Proposed Dates' : 'প্রস্তাবিত তারিখ'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">
                      {submittedData.startDate} — {submittedData.endDate}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="flex items-center gap-1 text-[#064E3B]/80 font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{isEn ? 'Address' : 'ঠিকানা'}</span>
                    </dt>
                    <dd className="font-semibold mt-0.5">
                      {submittedData.division}, {submittedData.district}
                      {submittedData.upazila ? `, ${submittedData.upazila}` : ''} — {submittedData.detailedAddress}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
                {emailUrls && (
                  <button
                    type="button"
                    onClick={() => triggerSmartEmailOpen(emailUrls.mailtoUrl, emailUrls.gmailUrl)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[8px] border border-[#6ee7b7] bg-white hover:bg-[#ecfdf5] text-[#064E3B] text-xs sm:text-sm font-semibold cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{isEn ? 'Send Extra Copy via Gmail' : 'অতিরিক্ত কপি জিমেইলে দেখুন'}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[8px] bg-gradient-to-r from-[#064E3B] to-[#042F2E] hover:from-[#042F2E] hover:to-[#064E3B] text-white text-xs sm:text-sm font-bold cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isEn ? 'Close' : 'সম্পন্ন ও বন্ধ করুন'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {errorMsg && (
                <div className="rounded-[8px] bg-red-50 border border-red-200 px-3.5 py-2.5 flex items-start gap-2 text-red-700 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* ১. দাওয়াতের ধরন নির্বাচন করুন */}
              <div className={sec[1].card}>
                <div className={sec[1].header}>
                  <span className={sec[1].badge}>{isEn ? '1' : '১'}</span>
                  <Tag className={sec[1].titleIcon} aria-hidden="true" />
                  <span>
                    {isEn ? 'Select Invitation Type' : 'দাওয়াতের ধরন নির্বাচন করুন'}
                  </span>
                </div>
                <div className={sec[1].info}>
                  <Info className={sec[1].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'What kind of program would you like to organize?'
                      : 'আপনি কোন ধরনের আয়োজন করতে চান?'}
                  </span>
                </div>
                <div data-field-name="invitationType">
                  <label className={labelClass}>
                    <CalendarCheck2 className={sec[1].fieldIcon} aria-hidden="true" />
                    <span>
                      {isEn ? 'Invitation Type' : 'দাওয়াতের ধরন'} {requiredStar}
                    </span>
                  </label>
                  <select
                    value={form.invitationType}
                    onChange={(e) => handleFieldChange('invitationType', e.target.value)}
                    className={getFieldClass(sec[1].input, 'invitationType')}
                    aria-invalid={Boolean(fieldErrors.invitationType)}
                    required
                  >
                    <option value="">{isEn ? '- Select -' : '- নির্বাচন করুন -'}</option>
                    {invitationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {isEn ? opt.labelEn : opt.labelBn}
                      </option>
                    ))}
                  </select>
                  {renderFieldError('invitationType')}
                </div>
              </div>

              {/* ২. আবেদনকারীর তথ্য */}
              <div className={sec[2].card}>
                <div className={sec[2].header}>
                  <span className={sec[2].badge}>{isEn ? '2' : '২'}</span>
                  <User className={sec[2].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Applicant Information' : 'আবেদনকারীর তথ্য'}</span>
                </div>
                <div className={sec[2].info}>
                  <Info className={sec[2].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Please provide your personal information accurately so that we can contact you.'
                      : 'মেহেরবানী করে, আপনার ব্যক্তিগত তথ্য সঠিকভাবে দিন যাতে আমরা আপনার সাথে যোগাযোগ করতে পারি'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div data-field-name="organizerName">
                    <label className={labelClass}>
                      <User className={sec[2].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Applicant Name' : 'আবেদনকারীর নাম'} {requiredStar}
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.organizerName}
                      onChange={(e) => handleFieldChange('organizerName', e.target.value)}
                      placeholder={isEn ? 'Full name' : 'পূর্ণ নাম'}
                      className={getFieldClass(sec[2].input, 'organizerName')}
                      aria-invalid={Boolean(fieldErrors.organizerName)}
                      required
                    />
                    {renderFieldError('organizerName')}
                  </div>
                  <div data-field-name="phone">
                    <label className={labelClass}>
                      <Phone className={sec[2].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Mobile Number' : 'মোবাইল নম্বর'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? '11 digits in English' : '১১ ডিজিট ইংরেজিতে দিন'})
                        </span>{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      placeholder="01XXXXXXXXX"
                      pattern="01[0-9]{9}"
                      className={getFieldClass(sec[2].input, 'phone')}
                      aria-invalid={Boolean(fieldErrors.phone)}
                      required
                    />
                    {renderFieldError('phone')}
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Mail className={sec[2].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Email Address' : 'ইমেইল ঠিকানা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      placeholder="name@example.com"
                      className={sec[2].input}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Briefcase className={sec[2].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Role / Designation' : 'দায়িত্ব / পদবি'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.organizerRole}
                      onChange={(e) => handleFieldChange('organizerRole', e.target.value)}
                      placeholder={isEn ? 'Designation' : 'পদবি'}
                      className={sec[2].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৩. প্রস্তাবিত তারিখ */}
              <div className={sec[3].card}>
                <div className={sec[3].header}>
                  <span className={sec[3].badge}>{isEn ? '3' : '৩'}</span>
                  <CalendarDays className={sec[3].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Proposed Dates' : 'প্রস্তাবিত তারিখ'}</span>
                </div>
                <div className={sec[3].info}>
                  <Info className={sec[3].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Specify the proposed start and end dates of the program.'
                      : 'প্রোগ্রামের প্রস্তাবিত আরম্ভ ও সমাপ্ত তারিখ উল্লেখ করুন।'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div data-field-name="startDate">
                    <label className={labelClass}>
                      <Calendar className={sec[3].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Proposed Date (Start)' : 'প্রস্তাবিত তারিখ (আরম্ভ)'}{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => handleFieldChange('startDate', e.target.value)}
                      className={getFieldClass(sec[3].input, 'startDate')}
                      aria-invalid={Boolean(fieldErrors.startDate)}
                      required
                    />
                    {renderFieldError('startDate')}
                  </div>
                  <div data-field-name="endDate">
                    <label className={labelClass}>
                      <CalendarCheck2 className={sec[3].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Proposed Date (End)' : 'প্রস্তাবিত তারিখ (সমাপ্ত)'}{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <input
                      type="date"
                      value={form.endDate}
                      onChange={(e) => handleFieldChange('endDate', e.target.value)}
                      className={getFieldClass(sec[3].input, 'endDate')}
                      aria-invalid={Boolean(fieldErrors.endDate)}
                      required
                    />
                    {renderFieldError('endDate')}
                  </div>
                </div>
              </div>

              {/* ৪. স্থান নির্বাচন */}
              <div className={sec[4].card}>
                <div className={sec[4].header}>
                  <span className={sec[4].badge}>{isEn ? '4' : '৪'}</span>
                  <MapPin className={sec[4].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Location Selection' : 'স্থান নির্বাচন'}</span>
                </div>
                <div className={sec[4].info}>
                  <Info className={sec[4].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Select the program venue, area, and complete address.'
                      : 'প্রোগ্রামের স্থান, এলাকা ও পূর্ণ ঠিকানা নির্বাচন করুন।'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div data-field-name="division">
                    <label className={labelClass}>
                      <Globe className={sec[4].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Division' : 'বিভাগ'} {requiredStar}
                      </span>
                    </label>
                    <select
                      value={form.division}
                      onChange={(e) => handleFieldChange('division', e.target.value)}
                      className={getFieldClass(sec[4].input, 'division')}
                      aria-invalid={Boolean(fieldErrors.division)}
                      required
                    >
                      <option value="">{isEn ? '- Select Division -' : '- বিভাগ নির্বাচন করুন -'}</option>
                      {divisionOptions.map((div) => (
                        <option key={div} value={div}>
                          {div}
                        </option>
                      ))}
                    </select>
                    {renderFieldError('division')}
                  </div>
                  <div data-field-name="district">
                    <label className={labelClass}>
                      <Compass className={sec[4].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'District' : 'জেলা'} {requiredStar}
                      </span>
                    </label>
                    <select
                      value={form.district}
                      onChange={(e) => handleFieldChange('district', e.target.value)}
                      className={getFieldClass(sec[4].input, 'district')}
                      aria-invalid={Boolean(fieldErrors.district)}
                      required
                    >
                      <option value="">{isEn ? '- Select District -' : '- জেলা নির্বাচন করুন -'}</option>
                      {districtOptions.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                    {renderFieldError('district')}
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Navigation className={sec[4].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Upazila / Thana' : 'উপজেলা/থানা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <select
                      value={form.upazila}
                      onChange={(e) => handleFieldChange('upazila', e.target.value)}
                      className={sec[4].input}
                    >
                      <option value="">
                        {isEn ? '- Select Upazila/Thana -' : '- উপজেলা/থানা নির্বাচন করুন -'}
                      </option>
                      {upazilaOptions.map((upz) => (
                        <option key={upz} value={upz}>
                          {upz}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div data-field-name="detailedAddress">
                    <label className={labelClass}>
                      <Home className={sec[4].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Detailed Address' : 'বিস্তারিত ঠিকানা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Village/Area/Ward, Road No.' : 'গ্রাম/মহল্লা/ওয়ার্ড, রোড নং'})
                        </span>{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.detailedAddress}
                      onChange={(e) => handleFieldChange('detailedAddress', e.target.value)}
                      placeholder={
                        isEn ? 'Village, neighborhood, ward, address' : 'গ্রাম, মহল্লা, ওয়ার্ড, ঠিকানা'
                      }
                      className={getFieldClass(sec[4].input, 'detailedAddress')}
                      aria-invalid={Boolean(fieldErrors.detailedAddress)}
                      required
                    />
                    {renderFieldError('detailedAddress')}
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Link2 className={sec[4].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Google Map Link' : 'গুগল ম্যাপ লিংক'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional — to locate the venue easily' : 'ঐচ্ছিক — স্থানটি সহজে খুঁজে পাওয়ার জন্য'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.googleMapLink}
                      onChange={(e) => handleFieldChange('googleMapLink', e.target.value)}
                      placeholder="https://maps.google.com/..."
                      className={sec[4].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৫. আয়োজনের বিবরণ */}
              <div className={sec[5].card}>
                <div className={sec[5].header}>
                  <span className={sec[5].badge}>{isEn ? '5' : '৫'}</span>
                  <Layers className={sec[5].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Event Details' : 'আয়োজনের বিবরণ'}</span>
                </div>
                <div className={sec[5].info}>
                  <Info className={sec[5].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Provide detailed information regarding organization and event management.'
                      : 'আয়োজন ও ব্যবস্থাপনা সংক্রান্ত বিস্তারিত তথ্য দিন।'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div data-field-name="institutionName">
                    <label className={labelClass}>
                      <Landmark className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Mosque / Madrasah / Institution Name' : 'মসজিদ / মাদরাসা / প্রতিষ্ঠানের নাম'}{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.institutionName}
                      onChange={(e) => handleFieldChange('institutionName', e.target.value)}
                      placeholder={
                        isEn
                          ? 'Mosque / Madrasah / Institution name'
                          : 'মসজিদ / মাদরাসা / প্রতিষ্ঠানের নাম'
                      }
                      className={getFieldClass(sec[5].input, 'institutionName')}
                      aria-invalid={Boolean(fieldErrors.institutionName)}
                      required
                    />
                    {renderFieldError('institutionName')}
                  </div>

                  <div data-field-name="chiefOrganizerName">
                    <label className={labelClass}>
                      <UserCheck className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Chief Organizer Name' : 'প্রধান আয়োজকের নাম'} {requiredStar}
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.chiefOrganizerName}
                      onChange={(e) => handleFieldChange('chiefOrganizerName', e.target.value)}
                      placeholder={isEn ? 'Chief organizer full name' : 'প্রধান আয়োজকের পূর্ণ নাম'}
                      className={getFieldClass(sec[5].input, 'chiefOrganizerName')}
                      aria-invalid={Boolean(fieldErrors.chiefOrganizerName)}
                      required
                    />
                    {renderFieldError('chiefOrganizerName')}
                  </div>

                  <div data-field-name="chiefOrganizerPhone">
                    <label className={labelClass}>
                      <PhoneCall className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Chief Organizer Mobile' : 'প্রধান আয়োজকের মোবাইল'} {requiredStar}
                      </span>
                    </label>
                    <input
                      type="tel"
                      value={form.chiefOrganizerPhone}
                      onChange={(e) => handleFieldChange('chiefOrganizerPhone', e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className={getFieldClass(sec[5].input, 'chiefOrganizerPhone')}
                      aria-invalid={Boolean(fieldErrors.chiefOrganizerPhone)}
                      required
                    />
                    {renderFieldError('chiefOrganizerPhone')}
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Hash className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Which Edition of Mahfil?' : 'কততম মাহফিল?'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional - e.g. 12th' : 'ঐচ্ছিক - যেমন: ১২তম'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.majlisEdition}
                      onChange={(e) => handleFieldChange('majlisEdition', e.target.value)}
                      placeholder={isEn ? 'e.g. 12th' : 'যেমন: ১২তম'}
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Calendar className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Date of Last Mahfil' : 'সর্বশেষ মাহফিলের তারিখ'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="date"
                      value={form.lastMajlisDate}
                      onChange={(e) => handleFieldChange('lastMajlisDate', e.target.value)}
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Clock className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Lecture Timing Format' : 'আলোচনার সময় বিন্যাস'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional - e.g. 2 hours after Maghrib' : 'ঐচ্ছিক - যেমন: বাদ মাগরিব ২ ঘণ্টা'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.lectureTimingFormat}
                      onChange={(e) => handleFieldChange('lectureTimingFormat', e.target.value)}
                      placeholder={isEn ? 'e.g. 2 hours after Maghrib' : 'যেমন: বাদ মাগরিব ২ ঘণ্টা'}
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Users className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Other Speakers' : 'অন্যান্য আলোচক'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.otherSpeakers}
                      onChange={(e) => handleFieldChange('otherSpeakers', e.target.value)}
                      placeholder={isEn ? 'Names of other invited speakers' : 'অন্যান্য আলোচকের নাম'}
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <History className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Previous Edition Speakers' : 'বিগত বারের আলোচক'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.previousYearSpeakers}
                      onChange={(e) => handleFieldChange('previousYearSpeakers', e.target.value)}
                      placeholder={isEn ? 'Speakers from the previous year' : 'বিগত বারের আলোচকদের নাম'}
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <BookOpen className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Discussion Topic' : 'আলোচনার বিষয়'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional - if you want any specific topic' : 'ঐচ্ছিক - যদি কোনো নির্দিষ্ট বিষয়ে আলোচনা চান'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.discussionTopic}
                      onChange={(e) => handleFieldChange('discussionTopic', e.target.value)}
                      placeholder={isEn ? 'Specific topic (if any)' : 'নির্দিষ্ট কোনো বিষয় থাকলে লিখুন'}
                      className={sec[5].input}
                    />
                  </div>

                  <div data-field-name="expectedAudience">
                    <label className={labelClass}>
                      <UserPlus className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Expected Audience / Attendees' : 'প্রত্যাশিত শ্রোতা / দর্শক সংখ্যা'}{' '}
                        {requiredStar}
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.expectedAudience}
                      onChange={(e) => handleFieldChange('expectedAudience', e.target.value)}
                      placeholder={isEn ? 'e.g. 1000 people' : 'যেমন: ১০০০ জন'}
                      className={getFieldClass(sec[5].input, 'expectedAudience')}
                      aria-invalid={Boolean(fieldErrors.expectedAudience)}
                      required
                    />
                    {renderFieldError('expectedAudience')}
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Car className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Transport Management' : 'যাতায়াত ব্যবস্থাপনা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.transportManagement}
                      onChange={(e) => handleFieldChange('transportManagement', e.target.value)}
                      placeholder={
                        isEn ? 'Details of transport arrangements' : 'যাতায়াত ব্যবস্থার বিবরণ'
                      }
                      className={sec[5].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <ShieldCheck className={sec[5].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Security Arrangements' : 'নিরাপত্তা ব্যবস্থা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.securityManagement}
                      onChange={(e) => handleFieldChange('securityManagement', e.target.value)}
                      placeholder={
                        isEn
                          ? 'Details of security and crowd discipline'
                          : 'নিরাপত্তা ও শৃঙ্খলা ব্যবস্থার বিবরণ'
                      }
                      className={sec[5].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৬. প্রশাসন ও ভলান্টিয়ার */}
              <div className={sec[6].card}>
                <div className={sec[6].header}>
                  <span className={sec[6].badge}>{isEn ? '6' : '৬'}</span>
                  <ShieldCheck className={sec[6].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Administration & Volunteers' : 'প্রশাসন ও ভলান্টিয়ার'}</span>
                </div>
                <div className={sec[6].info}>
                  <Info className={sec[6].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Inform us about the administrative arrangements for the Mahfil.'
                      : 'মাহফিলের প্রশাসনিক ব্যবস্থাপনা সম্পর্কে জানান'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>
                      <FileCheck2 className={sec[6].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Will you be able to obtain written administrative permission?'
                          : 'প্রশাসনের লিখিত অনুমতি নিতে পারবেন?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                        { val: 'প্রক্রিয়াধীন', labelEn: 'In Process', labelBn: 'প্রক্রিয়াধীন' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="admin_permission"
                            value={opt.val}
                            checked={form.adminPermission === opt.val}
                            onChange={(e) => handleFieldChange('adminPermission', e.target.value)}
                            className="accent-[#dc2626]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Users className={sec[6].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Will sufficient volunteers be available?' : 'পর্যাপ্ত ভলান্টিয়ার থাকবে?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="sufficient_volunteers"
                            value={opt.val}
                            checked={form.sufficientVolunteers === opt.val}
                            onChange={(e) =>
                              handleFieldChange('sufficientVolunteers', e.target.value)
                            }
                            className="accent-[#dc2626]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Hash className={sec[6].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Number of Volunteers' : 'ভলান্টিয়ার সংখ্যা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.volunteerCount}
                      onChange={(e) => handleFieldChange('volunteerCount', e.target.value)}
                      placeholder={isEn ? 'e.g. 25 volunteers' : 'যেমন: ২৫ জন'}
                      className={sec[6].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৭. দলীয় ও সামাজিক প্রেক্ষাপট */}
              <div className={sec[7].card}>
                <div className={sec[7].header}>
                  <span className={sec[7].badge}>{isEn ? '7' : '৭'}</span>
                  <Users className={sec[7].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Organizational & Social Context' : 'দলীয় ও সামাজিক প্রেক্ষাপট'}</span>
                </div>
                <div className={sec[7].info}>
                  <Info className={sec[7].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Inform us about the involvement of religious or social groups at the Mahfil.'
                      : 'মাহফিলে বিভিন্ন ধর্মীয় ও সামাজিক দলের উপস্থিতি সম্পর্কে জানান'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>
                      <Flag className={sec[7].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Is any religious organization/party involved?'
                          : 'কোনো ধর্মীয় দলের সম্পৃক্ততা আছে কি?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="religious_group"
                            value={opt.val}
                            checked={form.religiousGroupInvolvement === opt.val}
                            onChange={(e) =>
                              handleFieldChange('religiousGroupInvolvement', e.target.value)
                            }
                            className="accent-[#a16207]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Users className={sec[7].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Which community/circle will attend the Mahfil?'
                          : 'কোন ঘরানার মানুষদের মধ্যে মাহফিল হবে?'}
                      </span>
                    </label>
                    <select
                      value={form.audienceBackground}
                      onChange={(e) => handleFieldChange('audienceBackground', e.target.value)}
                      className={sec[7].input}
                    >
                      <option value="">{isEn ? '- Select -' : '- নির্বাচন করুন -'}</option>
                      {backgroundOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {isEn ? opt.labelEn : opt.labelBn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Edit3 className={sec[7].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Other Background' : 'অন্যান্য ঘরানা'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.otherBackground}
                      onChange={(e) => handleFieldChange('otherBackground', e.target.value)}
                      placeholder={isEn ? 'Other background' : 'অন্যান্য ঘরানা'}
                      className={sec[7].input}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <UserCheck className={sec[7].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Will any political figure attend the program?'
                          : 'প্রোগ্রামে কোনো রাজনৈতিক ব্যক্তি উপস্থিত থাকবেন?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="political_guest"
                            value={opt.val}
                            checked={form.politicalGuestPresent === opt.val}
                            onChange={(e) =>
                              handleFieldChange('politicalGuestPresent', e.target.value)
                            }
                            className="accent-[#a16207]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <ScrollText className={sec[7].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Political Figure Details' : 'রাজনৈতিক ব্যক্তির বিবরণ'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.politicalGuestDetails}
                      onChange={(e) => handleFieldChange('politicalGuestDetails', e.target.value)}
                      placeholder={
                        isEn
                          ? 'Name, role, or details if any political guest will attend'
                          : 'উপস্থিত থাকলে নাম, পদবি বা বিবরণ লিখুন'
                      }
                      className={sec[7].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৮. হাদিয়া ও সম্মাননা সংক্রান্ত */}
              <div className={sec[8].card}>
                <div className={sec[8].header}>
                  <span className={sec[8].badge}>{isEn ? '8' : '৮'}</span>
                  <Gift className={sec[8].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Hadiya & Honorarium Details' : 'হাদিয়া ও সম্মাননা সংক্রান্ত'}</span>
                </div>
                <div className={sec[8].info}>
                  <Info className={sec[8].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Provide details regarding Hadiya and honorarium after the program.'
                      : 'প্রোগ্রাম শেষে হাদিয়া ও সম্মাননা সংক্রান্ত তথ্য দিন।'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>
                      <HeartHandshake className={sec[8].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Will Hadiya be provided after the program?'
                          : 'প্রোগ্রাম শেষে হাদিয়া প্রদান করা হবে কি?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'আলোচনাসাপেক্ষে', labelEn: 'Upon Discussion', labelBn: 'আলোচনাসাপেক্ষে' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="hadiya_provided"
                            value={opt.val}
                            checked={form.hadiyaProvided === opt.val}
                            onChange={(e) => handleFieldChange('hadiyaProvided', e.target.value)}
                            className="accent-[#059669]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Banknote className={sec[8].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'If Hadiya is provided, what amount will be given?'
                          : 'হাদিয়া প্রদান করা হলে কত টাকা প্রদান করবেন?'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="number"
                      value={form.hadiyaAmount}
                      onChange={(e) => handleFieldChange('hadiyaAmount', e.target.value)}
                      placeholder={isEn ? 'Amount in BDT' : 'টাকার পরিমাণ'}
                      className={sec[8].input}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Wallet className={sec[8].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Hadiya Method' : 'হাদিয়ার ধরন'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.hadiyaType}
                      onChange={(e) => handleFieldChange('hadiyaType', e.target.value)}
                      placeholder={isEn ? 'Cash / Cheque / Other' : 'নগদ / চেক / অন্য'}
                      className={sec[8].input}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Award className={sec[8].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn
                          ? 'Will a crest / honorarium memento be given?'
                          : 'প্রোগ্রাম শেষে সম্মাননা/ক্রেস্ট দেওয়া হবে কি?'}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-0.5 text-[#1f2937]">
                      {[
                        { val: 'হ্যাঁ', labelEn: 'Yes', labelBn: 'হ্যাঁ' },
                        { val: 'না', labelEn: 'No', labelBn: 'না' },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1f2937] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="crest_provided"
                            value={opt.val}
                            checked={form.crestProvided === opt.val}
                            onChange={(e) => handleFieldChange('crestProvided', e.target.value)}
                            className="accent-[#059669]"
                          />
                          <span>{isEn ? opt.labelEn : opt.labelBn}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      <ScrollText className={sec[8].fieldIcon} aria-hidden="true" />
                      <span>
                        {isEn ? 'Additional Honorarium Details' : 'সম্মাননার অতিরিক্ত বিবরণ'}{' '}
                        <span className={optionalSpanClass}>
                          ({isEn ? 'Optional' : 'ঐচ্ছিক'})
                        </span>
                      </span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.crestDetails}
                      onChange={(e) => handleFieldChange('crestDetails', e.target.value)}
                      placeholder={
                        isEn
                          ? 'Information regarding crest or honorarium'
                          : 'সম্মাননা বা ক্রেস্ট সংক্রান্ত তথ্য'
                      }
                      className={sec[8].input}
                    />
                  </div>
                </div>
              </div>

              {/* ৯. শর্তাবলি */}
              <div className={sec[9].card}>
                <div className={sec[9].header}>
                  <span className={sec[9].badge}>{isEn ? '9' : '৯'}</span>
                  <Scale className={sec[9].titleIcon} aria-hidden="true" />
                  <span>{isEn ? 'Terms & Conditions' : 'শর্তাবলি'}</span>
                </div>
                <div className={sec[9].info}>
                  <Info className={sec[9].infoIcon} aria-hidden="true" />
                  <span>
                    {isEn
                      ? 'Please read the following terms carefully before submitting the application.'
                      : 'আবেদন জমা দেওয়ার আগে নিচের শর্তাবলি মনোযোগ দিয়ে পড়ে নিন।'}
                  </span>
                </div>

                {/* Red Important Terms Box */}
                <div className="bg-white/95 border border-[#ef4444] border-l-[4px] border-l-[#b91c1c] rounded-[8px] p-3 mb-3 text-[#7f1d1d] shadow-[0_1px_4px_rgba(185,28,28,0.1)]">
                  <div className="text-[13.5px] font-bold mb-2 flex items-center gap-1.5 text-[#b91c1c]">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-[#dc2626]" aria-hidden="true" />
                    <span>{isEn ? 'Important Terms & Conditions' : 'গুরুত্বপূর্ণ শর্তাবলি'}</span>
                  </div>
                  <ol className="list-decimal pl-5 text-[12px] leading-relaxed space-y-1.5">
                    <li>
                      <strong>{isEn ? 'Accurate Information:' : 'সঠিক তথ্য:'}</strong>{' '}
                      {isEn
                        ? 'All information must be accurate; providing false information will result in cancellation of the application.'
                        : 'সব তথ্য নির্ভুল হতে হবে; মিথ্যা তথ্য প্রদান করলে আবেদনটি বাতিল বলে গণ্য হবে।'}
                    </li>
                    <li>
                      <strong>{isEn ? 'Publicity:' : 'প্রচারণা:'}</strong>{' '}
                      {isEn
                        ? 'Advertising by name, poster, or loudspeaker announcement before final approval is prohibited.'
                        : 'চূড়ান্ত সম্মতির আগে নাম, পোস্টার বা মাইকিং প্রচার নিষিদ্ধ।'}
                    </li>
                    <li>
                      <strong>{isEn ? 'Travel & Protocol:' : 'যাতায়াত ও প্রোটোকল:'}</strong>{' '}
                      {isEn
                        ? 'Ensuring respectful travel and protocol is the responsibility of the organizing committee.'
                        : 'সম্মানজনক যাতায়াত ও প্রোটোকল আয়োজক কমিটির দায়িত্ব।'}
                    </li>
                    <li>
                      <strong>{isEn ? 'Permission & Security:' : 'অনুমতি ও নিরাপত্তা:'}</strong>{' '}
                      {isEn
                        ? 'Administrative permission and security for the Mahfil are the responsibility of the organizing committee.'
                        : 'প্রশাসনিক অনুমতি এবং মাহফিলের নিরাপত্তার দায়িত্ব আয়োজক কমিটির।'}
                    </li>
                    <li>
                      <strong>{isEn ? 'Date, Time & Changes:' : 'তারিখ, সময় ও পরিবর্তন:'}</strong>{' '}
                      {isEn
                        ? 'Please consult with us before finalizing the program date and time. Dates may change due to natural disasters or unforeseen circumstances.'
                        : 'প্রোগ্রামের তারিখ ও সময় চূড়ান্ত করার পূর্বে আমাদের সাথে পরামর্শ করবেন। প্রাকৃতিক দুর্যোগ বা অনাকাঙ্ক্ষিত সমস্যার কারণে তারিখ পরিবর্তন হতে পারে।'}
                    </li>
                  </ol>
                  <p className="mt-2.5 pt-2 border-t border-[#fecaca] text-[12px] italic font-semibold text-[#991b1b]">
                    {isEn
                      ? 'Acceptance or rescheduling of the invitation will be finalized through mutual coordination, InshaAllah.'
                      : 'পারস্পরিক সমন্বয়ে দাওয়াত গ্রহণ বা পরিবর্তনের বিষয়টি চূড়ান্ত করা হবে, ইনশাআল্লাহ।'}
                  </p>
                </div>

                <div data-field-name="agreedToTerms">
                  <label
                    className={`flex items-start gap-2 text-[12.5px] font-semibold cursor-pointer rounded-[6px] p-2 transition-colors ${
                      fieldErrors.agreedToTerms
                        ? 'bg-[#fef2f2] border border-[#dc2626] text-[#991b1b] ring-2 ring-[#dc2626]/20'
                        : 'text-[#7f1d1d]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.agreedToTerms}
                      onChange={(e) => handleFieldChange('agreedToTerms', e.target.checked)}
                      className="mt-0.5 accent-[#dc2626]"
                      aria-invalid={Boolean(fieldErrors.agreedToTerms)}
                      required
                    />
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#dc2626]" aria-hidden="true" />
                    <span>
                      {isEn
                        ? 'I have read and agree to all the terms and conditions above.'
                        : 'আমি উপরের সকল শর্তাবলি পড়েছি ও সম্মত আছি।'}
                    </span>
                  </label>
                  {renderFieldError('agreedToTerms')}
                </div>
              </div>

              {/* Vibrant Emerald Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3.5 bg-gradient-to-r from-[#047857] via-[#059669] to-[#10b981] hover:from-[#065f46] hover:to-[#059669] disabled:opacity-60 text-white border border-white/30 rounded-[8px] px-4 py-3 text-[15px] font-bold cursor-pointer shadow-[0_6px_18px_rgba(5,150,105,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
                <span>
                  {isSubmitting
                    ? isEn
                      ? 'Submitting & Sending to Official Gmail...'
                      : 'অফিসিয়াল জিমেইলে পাঠানো হচ্ছে...'
                    : isEn
                      ? 'Submit Application'
                      : 'আবেদন জমা দিন'}
                </span>
              </button>

              <div className="text-center text-[11.5px] text-[#064E3B]/80 font-medium pt-1 pb-2">
                {isEn
                  ? '🔒 All your information will be kept safe and preserved as an Amanat (trust).'
                  : '🔒 আপনার সকল তথ্য নিরাপদ ও আমানত হিসেবে সংরক্ষিত থাকবে।'}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
