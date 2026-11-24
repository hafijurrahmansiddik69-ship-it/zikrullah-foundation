import React, { useEffect, useState } from 'react';
import {
  Crown,
  ShieldCheck,
  FileText,
  Users,
  Briefcase,
  Globe,
  HeartHandshake,
  BookOpen,
  GraduationCap,
  Stethoscope,
  Megaphone,
  Cpu,
  UserCheck,
  Award,
  X,
} from 'lucide-react';
import {
  CommitteeMemberItem,
  EXECUTIVE_MEMBERS,
  EXECUTIVE_SUB_MEMBERS,
  HONORABLE_MEMBERS,
} from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal, RevealDelay, RevealDirection } from './ScrollReveal';

type CommitteeModalTheme = 'green' | 'blue' | 'yellow';

const THEME_CONFIG: Record<
  CommitteeModalTheme,
  {
    gradientClass: string;
    cardBorderClass: string;
    cardHoverShadow: string;
    accentText: string;
    modalTopBarClass: string;
    modalCardBorderClass: string;
    modalRoleTextClass: string;
    modalIconTextClass: string;
    badgeBgClass: string;
  }
> = {
  green: {
    gradientClass: 'from-[#11998e] to-[#38ef7d]',
    cardBorderClass: 'border-emerald-400',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(16,185,129,0.28)]',
    accentText: 'text-[#047857]',
    modalTopBarClass: 'bg-gradient-to-r from-[#11998e] to-[#38ef7d]',
    modalCardBorderClass: 'border-emerald-500/35 hover:border-[#38ef7d]/70',
    modalRoleTextClass: 'text-[#38ef7d]',
    modalIconTextClass: 'text-emerald-400',
    badgeBgClass: 'bg-emerald-500/15 text-[#38ef7d] border-emerald-400/35',
  },
  blue: {
    gradientClass: 'from-[#00c6ff] to-[#0072ff]',
    cardBorderClass: 'border-sky-400',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(14,165,233,0.28)]',
    accentText: 'text-[#0369a1]',
    modalTopBarClass: 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff]',
    modalCardBorderClass: 'border-cyan-400/35 hover:border-[#00c6ff]/70',
    modalRoleTextClass: 'text-[#38bdf8]',
    modalIconTextClass: 'text-cyan-400',
    badgeBgClass: 'bg-cyan-500/15 text-[#38bdf8] border-cyan-400/35',
  },
  yellow: {
    gradientClass: 'from-[#fbbf24] via-[#f59e0b] to-[#b45309]',
    cardBorderClass: 'border-amber-400',
    cardHoverShadow: 'hover:shadow-[0_12px_28px_rgba(245,158,11,0.3)]',
    accentText: 'text-[#b45309]',
    modalTopBarClass: 'bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#b45309]',
    modalCardBorderClass: 'border-amber-400/35 hover:border-[#fbbf24]/70',
    modalRoleTextClass: 'text-[#fbbf24]',
    modalIconTextClass: 'text-amber-400',
    badgeBgClass: 'bg-amber-500/15 text-[#fbbf24] border-amber-400/35',
  },
};

const getRoleIcon = (iconKey: string): React.ElementType => {
  switch (iconKey) {
    case 'crown':
      return Crown;
    case 'shield':
      return ShieldCheck;
    case 'file-text':
      return FileText;
    case 'users':
      return Users;
    case 'briefcase':
      return Briefcase;
    case 'globe':
      return Globe;
    case 'heart-handshake':
      return HeartHandshake;
    case 'book-open':
      return BookOpen;
    case 'graduation-cap':
      return GraduationCap;
    case 'stethoscope':
      return Stethoscope;
    case 'megaphone':
      return Megaphone;
    case 'cpu':
      return Cpu;
    case 'user-check':
      return UserCheck;
    case 'award':
    default:
      return Award;
  }
};

interface MemberAvatarProps {
  member: CommitteeMemberItem;
  displayName: string;
}

const MemberAvatar: React.FC<MemberAvatarProps> = ({ member, displayName }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = getRoleIcon(member.iconKey);

  return (
    <div className="relative shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-br from-[#10b981] via-[#087443] to-[#045332] shadow-md shadow-emerald-950/30 ring-2 ring-emerald-400/35 group-hover:scale-105 transition-transform duration-300">
      {member.image && !imgFailed ? (
        <img
          src={member.image}
          alt={displayName}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full rounded-full object-cover object-top bg-emerald-950 border-2 border-[#0f1422]"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#064e3b] via-[#045332] to-[#02311d] border-2 border-[#0f1422] flex items-center justify-center text-emerald-200">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
        </div>
      )}
    </div>
  );
};

interface ModalMemberCardProps {
  member: CommitteeMemberItem;
  isEn: boolean;
  theme: CommitteeModalTheme;
}

const ModalMemberCard: React.FC<ModalMemberCardProps> = ({
  member,
  isEn,
  theme,
}) => {
  const Icon = getRoleIcon(member.iconKey);
  const displayName = isEn ? member.name : member.nameBn;
  const displayRole = isEn ? member.role : member.roleBn;
  const themeStyle = THEME_CONFIG[theme];

  return (
    <div
      className={`w-full h-full relative overflow-hidden rounded-2xl p-2.5 sm:p-4 bg-[#141b2d] border ${themeStyle.modalCardBorderClass} shadow-md transition-all duration-300 text-center flex flex-col items-center justify-start group`}
    >
      <div className="mt-1 mb-2 sm:mb-3">
        <MemberAvatar member={member} displayName={displayName} />
      </div>

      <h4 className="font-serif-bn font-bold text-white text-[11px] sm:text-sm md:text-[15px] leading-snug tracking-tight mb-1.5 break-words">
        {displayName}
      </h4>

      <div
        className={`mt-auto pt-1.5 sm:pt-2 border-t border-slate-700/70 w-full flex flex-col sm:flex-row items-center justify-center gap-1 text-[9.5px] sm:text-xs font-semibold font-sans-bn leading-tight sm:leading-snug ${themeStyle.modalRoleTextClass}`}
      >
        <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${themeStyle.modalIconTextClass}`} strokeWidth={1.8} />
        <span>{displayRole}</span>
      </div>
    </div>
  );
};

interface CommitteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  badgeText: string;
  icon: React.ElementType;
  members: CommitteeMemberItem[];
  isEn: boolean;
  theme: CommitteeModalTheme;
  gridColsClass?: string;
}

const CommitteeMembersModal: React.FC<CommitteeModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  badgeText,
  icon: HeaderIcon,
  members,
  isEn,
  theme,
  gridColsClass = 'grid-cols-3',
}) => {
  const themeStyle = THEME_CONFIG[theme];

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#0f1422] rounded-3xl max-w-3xl w-full relative border-2 ${themeStyle.cardBorderClass} shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden my-auto text-slate-100 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col`}
      >
        {/* Top Colorful Header Banner (Matches Hero.tsx Service Activity Popup Style) */}
        <div
          className={`relative shrink-0 ${themeStyle.modalTopBarClass} px-4 py-4 sm:px-7 sm:py-5 flex items-center justify-between gap-3`}
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-black/25 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0 text-white shadow-inner">
              <HeaderIcon className="w-6 h-6" strokeWidth={1.9} />
            </div>
            <div className="min-w-0">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-black/30 text-white border border-white/20 mb-1 font-solaiman">
                {badgeText}
              </span>
              <h3 className="font-serif-bn font-bold text-lg sm:text-2xl text-white leading-tight drop-shadow-sm truncate">
                {title}
              </h3>
              <p className="font-solaiman text-xs sm:text-sm text-white/90 truncate">
                {subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={isEn ? 'Close' : 'বন্ধ করুন'}
            className="text-white hover:text-white cursor-pointer p-2 rounded-full bg-black/45 hover:bg-black/70 backdrop-blur-md border border-white/25 transition-all active:scale-95 shadow-md shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body with Members */}
        <div className="p-3.5 sm:p-6 flex-1 overflow-y-auto">
          <div className={`grid ${gridColsClass} gap-2 sm:gap-4`}>
            {members.map((member) => (
              <ModalMemberCard
                key={member.id}
                member={member}
                isEn={isEn}
                theme={theme}
              />
            ))}
          </div>
        </div>

        {/* Dark Modal Footer (Matches Hero.tsx Service Activity Popup Style) */}
        <div className="p-4 sm:p-5 bg-[#0a0d17] border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border font-solaiman ${themeStyle.badgeBgClass}`}>
            {isEn ? 'Zikrullah Foundation' : 'জিকরুল্লাহ ফাউন্ডেশন'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-6 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/70 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold transition-colors cursor-pointer text-xs sm:text-sm font-solaiman"
          >
            {isEn ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface TriggerCardItem {
  id: CommitteeModalTheme;
  badgeBn: string;
  badgeEn: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
  modalSubBn: string;
  modalSubEn: string;
  icon: React.ElementType;
  members: CommitteeMemberItem[];
  gridColsClass: string;
}

export const LeadershipCommitteeGrid: React.FC = () => {
  const { isEn } = useLanguage();
  const [activeModal, setActiveModal] = useState<CommitteeModalTheme | null>(null);

  const cards: TriggerCardItem[] = [
    {
      id: 'green',
      badgeBn: '১২ জন',
      badgeEn: '12 Leaders',
      titleBn: 'কার্যনির্বাহী টিম',
      titleEn: 'Executive Team',
      subtitleBn: 'নেতৃত্ব ও পরিচালনা',
      subtitleEn: 'Leadership Board',
      modalSubBn: 'জিকরুল্লাহ ফাউন্ডেশনের ১২ সদস্যবিশিষ্ট কার্যনির্বাহী টিম',
      modalSubEn: 'The 12-member Executive Team of Zikrullah Foundation',
      icon: ShieldCheck,
      members: EXECUTIVE_MEMBERS,
      gridColsClass: 'grid-cols-3',
    },
    {
      id: 'blue',
      badgeBn: '৩ জন',
      badgeEn: '3 Members',
      titleBn: 'কার্যনির্বাহী সদস্য',
      titleEn: 'Executive Members',
      subtitleBn: 'দায়িত্বশীল সদস্যবৃন্দ',
      subtitleEn: 'Committee Members',
      modalSubBn: 'জিকরুল্লাহ ফাউন্ডেশনের নিবেদিতপ্রাণ কার্যনির্বাহী সদস্যবৃন্দ',
      modalSubEn: 'Dedicated Executive Members of Zikrullah Foundation',
      icon: Users,
      members: EXECUTIVE_SUB_MEMBERS,
      gridColsClass: 'grid-cols-3',
    },
    {
      id: 'yellow',
      badgeBn: '৪ জন',
      badgeEn: '4 Members',
      titleBn: 'সম্মানিত সদস্যবৃন্দ',
      titleEn: 'Honorable Members',
      subtitleBn: 'মাসিক খেদমতে শরীক',
      subtitleEn: 'Monthly Khidmat',
      modalSubBn: 'প্রতি মাসে নিয়মিত খেদমতে শরীক হওয়া সম্মানিত সদস্যবৃন্দ',
      modalSubEn: 'Honored contributors participating in monthly Khidmat',
      icon: Award,
      members: HONORABLE_MEMBERS,
      gridColsClass: 'grid-cols-2 sm:grid-cols-4',
    },
  ];

  const selectedCard = cards.find((c) => c.id === activeModal) || null;

  return (
    <div className="pt-2">
      {/* Light Emerald-Tinted Showcase Container Matching AboutPage Design */}
      <div className="bg-gradient-to-br from-emerald-50/75 via-white to-amber-50/40 rounded-2xl sm:rounded-3xl border border-emerald-100 shadow-md p-4 sm:p-7">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5 md:gap-6 justify-items-center max-w-4xl mx-auto w-full">
          {cards.map((card, idx) => {
            const themeStyle = THEME_CONFIG[card.id];
            const Icon = card.icon;
            const dirs: RevealDirection[] = ['left', 'zoom', 'right'];
            const delays: RevealDelay[] = [0, 80, 150];

            return (
              <ScrollReveal
                key={card.id}
                direction={dirs[idx % 3]}
                delay={delays[idx % 3]}
                className="w-full flex justify-center"
              >
                <button
                  type="button"
                  onClick={() => setActiveModal(card.id)}
                  className={`w-full max-w-[230px] bg-white border-2 ${themeStyle.cardBorderClass} rounded-[20px] sm:rounded-[26px] p-2 sm:p-3 shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center hover:-translate-y-2 ${themeStyle.cardHoverShadow} active:scale-95 group text-center`}
                >
                  {/* Inner Colorful Rounded Squircle Box (Green, Blue, Yellow) */}
                  <div
                    className={`w-full rounded-xl sm:rounded-2xl py-2.5 sm:py-4 px-1 min-h-[68px] sm:min-h-[100px] flex flex-col justify-center items-center bg-gradient-to-br ${themeStyle.gradientClass} shadow-inner group-hover:scale-[1.02] transition-transform`}
                  >
                    <span className="text-white font-extrabold text-[10px] sm:text-xs mb-0.5 text-center drop-shadow-md leading-tight px-0.5 font-serif-bn line-clamp-1">
                      {isEn ? card.badgeEn : card.badgeBn}
                    </span>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-md mt-0.5" strokeWidth={2} />
                  </div>

                  {/* Card Title & Subtitle Below */}
                  <div className="py-1.5 sm:py-2.5 px-0.5 w-full flex flex-col items-center justify-center text-center">
                    <h3 className="font-bold text-[11px] sm:text-[15px] text-slate-900 leading-tight font-serif-bn">
                      {isEn ? card.titleEn : card.titleBn}
                    </h3>
                    <span className={`text-[9px] sm:text-xs font-semibold tracking-tight mt-0.5 sm:mt-1 leading-snug font-solaiman ${themeStyle.accentText}`}>
                      {isEn ? card.subtitleEn : card.subtitleBn}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Matching Hero-Style Dark Popup Modal for the Selected Group */}
      {selectedCard && (
        <CommitteeMembersModal
          isOpen={Boolean(selectedCard)}
          onClose={() => setActiveModal(null)}
          title={isEn ? selectedCard.titleEn : selectedCard.titleBn}
          subtitle={isEn ? selectedCard.modalSubEn : selectedCard.modalSubBn}
          badgeText={isEn ? selectedCard.badgeEn : selectedCard.badgeBn}
          icon={selectedCard.icon}
          members={selectedCard.members}
          isEn={isEn}
          theme={selectedCard.id}
          gridColsClass={selectedCard.gridColsClass}
        />
      )}
    </div>
  );
};
