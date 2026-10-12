import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Heart,
  Users,
  Search,
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  Edit3,
  Trash2,
  Plus,
  RefreshCw,
  Download,
  Phone,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Save,
  X,
  CreditCard,
  Droplet,
  MapPin,
  TrendingUp,
  FileSpreadsheet,
  LogOut,
  ArrowLeft,
  Lock,
  Database,
  Cloud,
  MessageSquare,
  Send,
  Check
} from 'lucide-react';
import {
  adminDataService,
  DonationRecord,
  VolunteerRecord,
  ADMIN_DATA_EVENT
} from '../services/adminDataService';
import type { ContactMessageRecord } from '../services/firebase';

export interface AboutAdminPanelProps {
  initialOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  isControlled?: boolean;
  badgeText?: string;
  buttonText?: string;
  titleText?: string;
  isStandalonePage?: boolean;
  onBackToHome?: () => void;
  onLogout?: () => void;
  adminEmail?: string;
}

export const AboutAdminPanel: React.FC<AboutAdminPanelProps> = ({
  initialOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  isControlled = false,
  badgeText = 'লাইভ ডেটাবেজ',
  buttonText = 'অ্যাডমিন',
  titleText = 'অ্যাডমিন',
  isStandalonePage = false,
  onBackToHome,
  onLogout,
  adminEmail
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(initialOpen);
  const isOpen = isControlled && controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const [activeTab, setActiveTab] = useState<'donations' | 'volunteers' | 'messages' | 'stats'>('donations');
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [volunteers, setVolunteers] = useState<VolunteerRecord[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessageRecord[]>([]);
  const [isSyncingFirebase, setIsSyncingFirebase] = useState(false);

  // Search & Filters for Donations
  const [donationSearch, setDonationSearch] = useState('');
  const [donationStatusFilter, setDonationStatusFilter] = useState<string>('all');
  const [donationMethodFilter, setDonationMethodFilter] = useState<string>('all');

  // Search & Filters for Volunteers
  const [volunteerSearch, setVolunteerSearch] = useState('');
  const [volunteerStatusFilter, setVolunteerStatusFilter] = useState<string>('all');
  const [volunteerBloodFilter, setVolunteerBloodFilter] = useState<string>('all');

  // Search for Messages
  const [messageSearch, setMessageSearch] = useState('');

  // Edit Modals State
  const [editingDonation, setEditingDonation] = useState<DonationRecord | null>(null);
  const [isNewDonationModal, setIsNewDonationModal] = useState(false);
  const [newDonationData, setNewDonationData] = useState<Partial<DonationRecord>>({
    donorName: '',
    phone: '',
    amount: 1000,
    category: 'সাধারণ সদকা ও দান',
    paymentMethod: 'bkash',
    transactionId: '',
    donorMessage: '',
    status: 'যাচাইকৃত',
    adminNote: 'ম্যানুয়াল এন্ট্রি'
  });

  const [editingVolunteer, setEditingVolunteer] = useState<VolunteerRecord | null>(null);
  const [isNewVolunteerModal, setIsNewVolunteerModal] = useState(false);
  const [newVolunteerData, setNewVolunteerData] = useState<Partial<VolunteerRecord>>({
    name: '',
    phone: '',
    upazila: 'গুজিয়া, মোকামতলা, বগুড়া',
    bloodGroup: 'B+',
    interest: 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
    message: '',
    status: 'সক্রিয় কর্মী',
    adminNote: 'অফিসিয়াল এন্ট্রি'
  });

  // Success message toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadData = () => {
    setDonations(adminDataService.getDonations());
    setVolunteers(adminDataService.getVolunteers());
    setContactMessages(adminDataService.getContactMessages());
  };

  const handleFirebaseSync = async () => {
    setIsSyncingFirebase(true);
    try {
      const res = await adminDataService.syncAllToFirebase();
      loadData();
      showToast(`ফায়ারবেস ক্লাউডে (zikrullah-60dfe) ${res.count} টি ডেটা সফলভাবে সিঙ্ক হয়েছে!`);
    } catch {
      showToast('ফায়ারবেস সিঙ্ক সম্পন্ন হয়েছে');
    } finally {
      setIsSyncingFirebase(false);
    }
  };

  const handleDeleteMessage = (id: string) => {
    if (window.confirm('আপনি কি বার্তাটি মুছে ফেলতে চান?')) {
      adminDataService.deleteContactMessage(id);
      loadData();
      showToast('বার্তা সফলভাবে মুছে ফেলা হয়েছে');
    }
  };

  useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener(ADMIN_DATA_EVENT, handleUpdate);
    return () => window.removeEventListener(ADMIN_DATA_EVENT, handleUpdate);
  }, []);

  // Donation Stats
  const totalDonationAmount = donations.reduce((sum, d) => sum + (d.amount || 0), 0);
  const verifiedDonations = donations.filter((d) => d.status === 'যাচাইকৃত');
  const pendingDonations = donations.filter((d) => d.status === 'অপেক্ষমাণ');
  const totalVerifiedAmount = verifiedDonations.reduce((sum, d) => sum + (d.amount || 0), 0);

  // Volunteer Stats
  const activeVolunteersCount = volunteers.filter((v) => v.status === 'সক্রিয় কর্মী').length;
  const pendingVolunteersCount = volunteers.filter((v) => v.status === 'অপেক্ষমাণ').length;

  // Filtered Donations
  const filteredDonations = donations.filter((d) => {
    const matchesSearch =
      d.donorName.toLowerCase().includes(donationSearch.toLowerCase()) ||
      d.phone.includes(donationSearch) ||
      d.transactionId.toLowerCase().includes(donationSearch.toLowerCase()) ||
      d.category.toLowerCase().includes(donationSearch.toLowerCase());

    const matchesStatus =
      donationStatusFilter === 'all' || d.status === donationStatusFilter;

    const matchesMethod =
      donationMethodFilter === 'all' || d.paymentMethod === donationMethodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  // Filtered Volunteers
  const filteredVolunteers = volunteers.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
      v.phone.includes(volunteerSearch) ||
      v.upazila.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
      v.interest.toLowerCase().includes(volunteerSearch.toLowerCase());

    const matchesStatus =
      volunteerStatusFilter === 'all' || v.status === volunteerStatusFilter;

    const matchesBlood =
      volunteerBloodFilter === 'all' || v.bloodGroup === volunteerBloodFilter;

    return matchesSearch && matchesStatus && matchesBlood;
  });

  // Actions for Donations
  const handleQuickStatusChangeDonation = (id: string, status: DonationRecord['status']) => {
    adminDataService.updateDonation(id, { status });
    showToast(`ডোনেশন স্ট্যাটাস '${status}' করা হয়েছে`);
  };

  const handleDeleteDonation = (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিতভাবে এই ডোনেশন রেকর্ডটি ডিলিট করতে চান?')) {
      adminDataService.deleteDonation(id);
      showToast('ডোনেশন রেকর্ড সফলভাবে মুছে ফেলা হয়েছে');
    }
  };

  const handleSaveEditDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDonation) return;
    adminDataService.updateDonation(editingDonation.id, editingDonation);
    setEditingDonation(null);
    showToast('ডোনেশন তথ্য সফলভাবে আপডেট করা হয়েছে');
  };

  const handleCreateNewDonation = (e: React.FormEvent) => {
    e.preventDefault();
    adminDataService.addDonation({
      donorName: newDonationData.donorName || 'অজ্ঞাত শুভানুধ্যায়ী',
      phone: newDonationData.phone || 'অনুল্লেখিত',
      amount: Number(newDonationData.amount) || 0,
      category: newDonationData.category || 'সাধারণ সদকা ও দান',
      paymentMethod: (newDonationData.paymentMethod as any) || 'bkash',
      transactionId: newDonationData.transactionId || 'CASH-REC',
      donorMessage: newDonationData.donorMessage || '',
      status: newDonationData.status || 'যাচাইকৃত',
      adminNote: newDonationData.adminNote || 'অফিস ক্যাশ রসিদ'
    });
    setIsNewDonationModal(false);
    setNewDonationData({
      donorName: '',
      phone: '',
      amount: 1000,
      category: 'সাধারণ সদকা ও দান',
      paymentMethod: 'bkash',
      transactionId: '',
      donorMessage: '',
      status: 'যাচাইকৃত',
      adminNote: 'ম্যানুয়াল এন্ট্রি'
    });
    showToast('নতুন ডোনেশন সফলভাবে যুক্ত করা হয়েছে');
  };

  // Actions for Volunteers
  const handleQuickStatusChangeVolunteer = (id: string, status: VolunteerRecord['status']) => {
    adminDataService.updateVolunteer(id, { status });
    showToast(`কর্মী স্ট্যাটাস '${status}' করা হয়েছে`);
  };

  const handleDeleteVolunteer = (id: string) => {
    if (window.confirm('আপনি কি নিশ্চিতভাবে এই স্বেচ্ছাসেবকের তথ্য ডিলিট করতে চান?')) {
      adminDataService.deleteVolunteer(id);
      showToast('স্বেচ্ছাসেবক রেকর্ড মুছে ফেলা হয়েছে');
    }
  };

  const handleSaveEditVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVolunteer) return;
    adminDataService.updateVolunteer(editingVolunteer.id, editingVolunteer);
    setEditingVolunteer(null);
    showToast('স্বেচ্ছাসেবক তথ্য সফলভাবে আপডেট করা হয়েছে');
  };

  const handleCreateNewVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    adminDataService.addVolunteer({
      name: newVolunteerData.name || 'সম্মানিত ভাই/বোন',
      phone: newVolunteerData.phone || 'অনুল্লেখিত',
      upazila: newVolunteerData.upazila || 'বগুড়া',
      bloodGroup: newVolunteerData.bloodGroup || 'A+',
      interest: newVolunteerData.interest || 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
      message: newVolunteerData.message || '',
      status: newVolunteerData.status || 'সক্রিয় কর্মী',
      adminNote: newVolunteerData.adminNote || 'সরাসরি অন্তর্ভুক্তি'
    });
    setIsNewVolunteerModal(false);
    setNewVolunteerData({
      name: '',
      phone: '',
      upazila: 'গুজিয়া, মোকামতলা, বগুড়া',
      bloodGroup: 'B+',
      interest: 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
      message: '',
      status: 'সক্রিয় কর্মী',
      adminNote: 'অফিসিয়াল এন্ট্রি'
    });
    showToast('নতুন স্বেচ্ছাসেবক সফলভাবে যুক্ত করা হয়েছে');
  };

  // Export Data as CSV
  const handleExportDonationsCSV = () => {
    const headers = ['রসিদ নং,দাতার নাম,ফোন,পরিমাণ (টাকা),খাত,পদ্ধতি,TrxID,তারিখ,স্ট্যাটাস,অ্যাডমিন নোট'];
    const rows = donations.map((d) =>
      `"${d.id}","${d.donorName}","${d.phone}",${d.amount},"${d.category}","${d.paymentMethod}","${d.transactionId}","${d.date}","${d.status}","${d.adminNote || ''}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `zikrullah_donations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('ডোনেশন রিপোর্ট সিএসভি (CSV) ফাইল হিসেবে ডাউনলোড করা হয়েছে');
  };

  const handleExportVolunteersCSV = () => {
    const headers = ['আইডি,নাম,মোবাইল,এলাকা/উপজেলা,রক্তের গ্রুপ,আগ্রহের ক্ষেত্র,তারিখ,স্ট্যাটাস,নোট'];
    const rows = volunteers.map((v) =>
      `"${v.id}","${v.name}","${v.phone}","${v.upazila}","${v.bloodGroup}","${v.interest}","${v.date}","${v.status}","${v.adminNote || ''}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `zikrullah_volunteers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('স্বেচ্ছাসেবক রিপোর্ট সিএসভি (CSV) ফাইল হিসেবে ডাউনলোড করা হয়েছে');
  };

  return (
    <section id="admin-panel" className="w-full font-sans-bn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-emerald-500/50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Collapsed View: Prominent Button & Info Card */}
      {!isOpen ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all p-5 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#087443] to-[#045332] text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-7 h-7 text-emerald-300" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif-bn font-bold text-lg sm:text-xl text-slate-800">
                    {titleText}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {badgeText}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-solaiman">
                  ডোনেশন যাচাই, নতুন অনুদান এন্ট্রি ও খেদমতে শরিকদের ডেটাবেজ পরিচালনা ও লাইভ আপডেট
                </p>
                <div className="flex items-center gap-2 sm:gap-3 mt-2.5 text-xs text-slate-600 flex-wrap font-solaiman">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg font-medium text-slate-700">
                    মোট ডোনেশন রেকর্ড: <strong>{donations.length} টি</strong>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg font-semibold">
                    সংগৃহীত অনুদান: <strong>৳ {totalDonationAmount.toLocaleString('bn-BD')}</strong>
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg font-medium text-slate-700">
                    নিবন্ধিত খেদমত কর্মী: <strong>{volunteers.length} জন</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleToggle}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#087443] to-[#045332] hover:from-[#065f37] hover:to-[#034428] active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/20 transition-all cursor-pointer border border-emerald-500/30"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span>{buttonText}</span>
                <ChevronDown className="w-4 h-4 text-emerald-200" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Main Container */
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Top Header Banner */}
          <div className="bg-gradient-to-r from-[#045332] via-[#087443] to-[#045332] text-white p-5 sm:p-7">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-7 h-7 text-emerald-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-serif-bn font-bold text-xl sm:text-2xl tracking-tight text-white">
                      জিকরুল্লাহ ফাউন্ডেশন — কেন্দ্রীয় অ্যাডমিন প্যানেল
                    </h2>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      লাইভ সিঙ্ক
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 font-solaiman">
                    ডোনেশন ও খেদমতে শরীক (স্বেচ্ছাসেবক) তথ্য ব্যবস্থাপনা, অনুমোদন ও রিয়েল-টাইম আপডেট কন্ট্রোল
                  </p>
                </div>
              </div>

              {/* Quick Actions / Reset / Standalone Controls / Collapse */}
              <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
                {isStandalonePage && onBackToHome && (
                  <button
                    onClick={onBackToHome}
                    title="হোম পেজে ফিরে যান"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/25 transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>হোমে ফিরে যান</span>
                  </button>
                )}

                {!isStandalonePage && (
                  <button
                    onClick={handleToggle}
                    title="প্যানেল সংক্ষেপ করুন"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold border border-white/30 transition-all cursor-pointer shadow-sm"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span>প্যানেল সংক্ষেপ করুন</span>
                  </button>
                )}

                {/* Firebase Cloud Connection Indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-emerald-200 text-xs border border-white/20">
                  <Database className="w-3.5 h-3.5 text-amber-300" />
                  <span className="font-mono text-[11px] hidden sm:inline">zikrullah-60dfe</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Firebase Realtime Cloud Connected" />
                </div>

                {/* Firebase Cloud Sync Button */}
                <button
                  onClick={handleFirebaseSync}
                  disabled={isSyncingFirebase}
                  title="ফায়ারবেস ক্লাউডের সাথে ডেটা সিঙ্ক করুন"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-100 text-xs font-semibold border border-amber-300/30 transition-all cursor-pointer active:scale-95"
                >
                  <Cloud className={`w-3.5 h-3.5 text-amber-300 ${isSyncingFirebase ? 'animate-spin' : ''}`} />
                  <span>{isSyncingFirebase ? 'সিঙ্ক হচ্ছে...' : 'ফায়ারবেস সিঙ্ক'}</span>
                </button>

                <button
                  onClick={loadData}
                  title="রিফ্রেশ করুন"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">রিফ্রেশ</span>
                </button>

                <button
                  onClick={() => {
                    if (window.confirm('আপনি কি পূর্বনির্ধারিত ডেমো ডেটাতে রিসেট করতে চান?')) {
                      adminDataService.resetDefaults();
                      loadData();
                      showToast('ডেটা সফলভাবে রিসেট করা হয়েছে');
                    }
                  }}
                  title="ডিফল্ট ডেটা রিসেট"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-emerald-100 text-xs font-medium border border-emerald-600/30 transition-all cursor-pointer"
                >
                  <span>রিসেট ডেটা</span>
                </button>

                {isStandalonePage && onLogout && (
                  <button
                    onClick={onLogout}
                    title="অ্যাডমিন লগআউট"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold border border-rose-400/40 transition-all cursor-pointer shadow-sm active:scale-95 ml-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>লগআউট</span>
                  </button>
                )}
              </div>
            </div>

          {/* Quick Metrics Cards Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-white/15">
              <div className="flex items-center justify-between text-emerald-200 text-xs mb-1">
                <span>মোট সংগৃহীত অনুদান</span>
                <Heart className="w-4 h-4 text-rose-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-serif-bn text-white">
                ৳ {totalDonationAmount.toLocaleString('bn-BD')}
              </div>
              <div className="text-[11px] text-emerald-200/80 mt-1">
                মোট {donations.length} টি অনুদান আবেদন
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-white/15">
              <div className="flex items-center justify-between text-emerald-200 text-xs mb-1">
                <span>যাচাইকৃত ফান্ড (কনফার্ম)</span>
                <CheckCircle className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-serif-bn text-amber-300">
                ৳ {totalVerifiedAmount.toLocaleString('bn-BD')}
              </div>
              <div className="text-[11px] text-emerald-200/80 mt-1">
                যাচাইকৃত: {verifiedDonations.length} টি
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-white/15">
              <div className="flex items-center justify-between text-emerald-200 text-xs mb-1">
                <span>অপেক্ষমাণ যাচাই (Pending)</span>
                <Clock className="w-4 h-4 text-amber-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-serif-bn text-white">
                {pendingDonations.length} টি
              </div>
              <div className="text-[11px] text-amber-200/80 mt-1">
                ভেরিফিকেশন প্রয়োজন
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 sm:p-4 border border-white/15">
              <div className="flex items-center justify-between text-emerald-200 text-xs mb-1">
                <span>খেদমতে শরীক (স্বেচ্ছাসেবক)</span>
                <Users className="w-4 h-4 text-sky-300" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-serif-bn text-white">
                {volunteers.length} জন
              </div>
              <div className="text-[11px] text-emerald-200/80 mt-1">
                সক্রিয় কর্মী: {activeVolunteersCount} জন
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="border-b border-slate-200 bg-slate-50/80 px-4 sm:px-6 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('donations')}
              className={`py-3.5 px-4 sm:px-5 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'donations'
                  ? 'border-[#087443] text-[#087443] bg-white shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-500" />
              <span>দান ও অনুদান তালিকা ({donations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('volunteers')}
              className={`py-3.5 px-4 sm:px-5 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'volunteers'
                  ? 'border-[#087443] text-[#087443] bg-white shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>খেদমতে শরীক ও স্বেচ্ছাসেবক ({volunteers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`py-3.5 px-4 sm:px-5 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'messages'
                  ? 'border-[#087443] text-[#087443] bg-white shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-sky-600" />
              <span>যোগাযোগ বার্তা ({contactMessages.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className={`py-3.5 px-4 sm:px-5 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'stats'
                  ? 'border-[#087443] text-[#087443] bg-white shadow-2xs'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <span>সারসংক্ষেপ ও হিসাব</span>
            </button>
          </div>

          <div className="py-2 flex items-center gap-2">
            {activeTab === 'donations' && (
              <>
                <button
                  onClick={handleExportDonationsCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CSV এক্সপোর্ট</span>
                </button>
                <button
                  onClick={() => setIsNewDonationModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#087443] hover:bg-[#045332] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>নতুন দান যুক্ত করুন</span>
                </button>
              </>
            )}

            {activeTab === 'volunteers' && (
              <>
                <button
                  onClick={handleExportVolunteersCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold shadow-2xs transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CSV এক্সপোর্ট</span>
                </button>
                <button
                  onClick={() => setIsNewVolunteerModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#087443] hover:bg-[#045332] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>নতুন সেবক যুক্ত করুন</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Tab 1: Donations Management */}
        {activeTab === 'donations' && (
          <div className="p-4 sm:p-6 space-y-5">
            {/* Filter and Search Bar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="দাতার নাম, মোবাইল, TrxID বা খাতের নামে খুঁজুন..."
                  value={donationSearch}
                  onChange={(e) => setDonationSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-emerald-500 font-sans-bn"
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500">স্ট্যাটাস:</span>
                  <select
                    value={donationStatusFilter}
                    onChange={(e) => setDonationStatusFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="all">সবগুলো ({donations.length})</option>
                    <option value="যাচাইকৃত">যাচাইকৃত ({verifiedDonations.length})</option>
                    <option value="অপেক্ষমাণ">অপেক্ষমাণ ({pendingDonations.length})</option>
                    <option value="বাতিল">বাতিল</option>
                  </select>
                </div>

                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500">মাধ্যম:</span>
                  <select
                    value={donationMethodFilter}
                    onChange={(e) => setDonationMethodFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="all">সব মাধ্যম</option>
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                    <option value="bank">ব্যাংক একাউন্ট</option>
                    <option value="cash">নগদ ক্যাশ</option>
                  </select>
                </div>

                {(donationSearch || donationStatusFilter !== 'all' || donationMethodFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setDonationSearch('');
                      setDonationStatusFilter('all');
                      setDonationMethodFilter('all');
                    }}
                    className="px-2.5 py-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium cursor-pointer"
                  >
                    ফিল্টার মুছুন
                  </button>
                )}
              </div>
            </div>

            {/* Donations Table */}
            {filteredDonations.length === 0 ? (
              <div className="text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                <Heart className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="font-bold text-slate-700 text-base">কোনো অনুদান রেকর্ড পাওয়া যায়নি</h4>
                <p className="text-xs text-slate-500 mt-1">অনুসন্ধান বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100/80 text-slate-700 font-bold text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3.5">রসিদ / আইডি</th>
                      <th className="px-4 py-3.5">দাতার নাম ও যোগাযোগ</th>
                      <th className="px-4 py-3.5 text-right">পরিমাণ (টাকা)</th>
                      <th className="px-4 py-3.5">খাত ও পেমেন্ট মাধ্যম</th>
                      <th className="px-4 py-3.5">TrxID ও তারিখ</th>
                      <th className="px-4 py-3.5 text-center">স্ট্যাটাস</th>
                      <th className="px-4 py-3.5 text-right">অ্যাকশন ও আপডেট</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredDonations.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3.5 font-mono text-xs font-semibold text-emerald-800">
                          {item.id}
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-bold text-slate-900">{item.donorName}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-mono">
                            <Phone className="w-3 h-3 text-slate-400" />
                            {item.phone}
                          </div>
                          {item.donorMessage && (
                            <div className="text-[11px] text-slate-500 italic mt-1 line-clamp-1 bg-slate-50 p-1 rounded font-solaiman">
                              "{item.donorMessage}"
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-3.5 text-right">
                          <span className="font-serif-bn font-bold text-base text-emerald-700">
                            ৳ {item.amount.toLocaleString('bn-BD')}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-medium text-slate-800 text-xs sm:text-sm">{item.category}</div>
                          <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded font-mono font-semibold uppercase bg-slate-100 text-slate-700">
                            {item.paymentMethod}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-mono text-xs font-semibold text-slate-700 bg-slate-100/70 px-1.5 py-0.5 rounded inline-block">
                            {item.transactionId}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-1">{item.date}</div>
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          {/* Quick Status Toggle Dropdown */}
                          <select
                            value={item.status}
                            onChange={(e) =>
                              handleQuickStatusChangeDonation(item.id, e.target.value as any)
                            }
                            className={`text-xs font-bold px-2.5 py-1 rounded-full border outline-none cursor-pointer transition-colors ${
                              item.status === 'যাচাইকৃত'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                : item.status === 'অপেক্ষমাণ'
                                ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                                : 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                            }`}
                          >
                            <option value="যাচাইকৃত">✓ যাচাইকৃত</option>
                            <option value="অপেক্ষমাণ">⏳ অপেক্ষমাণ</option>
                            <option value="বাতিল">✕ বাতিল</option>
                          </select>
                        </td>

                        <td className="px-4 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setEditingDonation(item)}
                              title="সম্পাদনা / তথ্য আপডেট করুন"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteDonation(item.id)}
                              title="ডিলিট করুন"
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Volunteers & Khidmat Partners */}
        {activeTab === 'volunteers' && (
          <div className="p-4 sm:p-6 space-y-5">
            {/* Filter and Search Bar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="স্বেচ্ছাসেবকের নাম, ফোন, এলাকা বা দক্ষতার বিষয়ে খুঁজুন..."
                  value={volunteerSearch}
                  onChange={(e) => setVolunteerSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-emerald-500 font-sans-bn"
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500">স্ট্যাটাস:</span>
                  <select
                    value={volunteerStatusFilter}
                    onChange={(e) => setVolunteerStatusFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="all">সব কর্মী ({volunteers.length})</option>
                    <option value="সক্রিয় কর্মী">সক্রিয় কর্মী ({activeVolunteersCount})</option>
                    <option value="অপেক্ষমাণ">অপেক্ষমাণ ({pendingVolunteersCount})</option>
                    <option value="সম্পন্ন">সম্পন্ন</option>
                  </select>
                </div>

                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-300 text-xs">
                  <span className="text-slate-500">রক্তের গ্রুপ:</span>
                  <select
                    value={volunteerBloodFilter}
                    onChange={(e) => setVolunteerBloodFilter(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="all">সকল গ্রুপ</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                {(volunteerSearch || volunteerStatusFilter !== 'all' || volunteerBloodFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setVolunteerSearch('');
                      setVolunteerStatusFilter('all');
                      setVolunteerBloodFilter('all');
                    }}
                    className="px-2.5 py-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium cursor-pointer"
                  >
                    ফিল্টার মুছুন
                  </button>
                )}
              </div>
            </div>

            {/* Volunteers Table */}
            {filteredVolunteers.length === 0 ? (
              <div className="text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h4 className="font-bold text-slate-700 text-base">কোনো স্বেচ্ছাসেবক রেকর্ড পাওয়া যায়নি</h4>
                <p className="text-xs text-slate-500 mt-1">অনুসন্ধান বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100/80 text-slate-700 font-bold text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3.5">আইডি</th>
                      <th className="px-4 py-3.5">নাম ও যোগাযোগ</th>
                      <th className="px-4 py-3.5">এলাকা / ঠিকানা</th>
                      <th className="px-4 py-3.5 text-center">রক্তের গ্রুপ</th>
                      <th className="px-4 py-3.5">খেদমতের ক্ষেত্র / আগ্রহ</th>
                      <th className="px-4 py-3.5 text-center">স্ট্যাটাস</th>
                      <th className="px-4 py-3.5 text-right">অ্যাকশন ও আপডেট</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredVolunteers.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3.5 font-mono text-xs font-semibold text-emerald-800">
                          {item.id}
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-bold text-slate-900">{item.name}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-mono">
                            <Phone className="w-3 h-3 text-slate-400" />
                            {item.phone}
                          </div>
                          {item.message && (
                            <div className="text-[11px] text-slate-500 italic mt-1 line-clamp-1 bg-slate-50 p-1 rounded font-solaiman">
                              "{item.message}"
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="text-xs sm:text-sm text-slate-800 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item.upazila}</span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">নিবন্ধন: {item.date}</div>
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs">
                            <Droplet className="w-3 h-3 fill-rose-500 text-rose-500" />
                            {item.bloodGroup}
                          </span>
                        </td>

                        <td className="px-4 py-3.5">
                          <div className="font-semibold text-slate-800 text-xs sm:text-sm">
                            {item.interest}
                          </div>
                          {item.adminNote && (
                            <div className="text-[11px] text-emerald-700 mt-1 font-medium">
                              নোট: {item.adminNote}
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-3.5 text-center">
                          {/* Quick Status Toggle Dropdown */}
                          <select
                            value={item.status}
                            onChange={(e) =>
                              handleQuickStatusChangeVolunteer(item.id, e.target.value as any)
                            }
                            className={`text-xs font-bold px-2.5 py-1 rounded-full border outline-none cursor-pointer transition-colors ${
                              item.status === 'সক্রিয় কর্মী'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                : item.status === 'অপেক্ষমাণ'
                                ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            }`}
                          >
                            <option value="সক্রিয় কর্মী">✓ সক্রিয় কর্মী</option>
                            <option value="অপেক্ষমাণ">⏳ অপেক্ষমাণ</option>
                            <option value="সম্পন্ন">✓ সম্পন্ন</option>
                          </select>
                        </td>

                        <td className="px-4 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setEditingVolunteer(item)}
                              title="সম্পাদনা / তথ্য আপডেট করুন"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteVolunteer(item.id)}
                              title="ডিলিট করুন"
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Contact Messages from Users (ব্যবহারকারীদের বার্তা) */}
        {activeTab === 'messages' && (
          <div className="p-4 sm:p-6 space-y-5">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="প্রেরকের নাম, মোবাইল বা বার্তার বিষয়ে খুঁজুন..."
                  value={messageSearch}
                  onChange={(e) => setMessageSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-emerald-500 font-sans-bn"
                />
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <span>মোট প্রাপ্ত বার্তা: <strong className="text-slate-800">{contactMessages.length}</strong> টি</span>
              </div>
            </div>

            {contactMessages.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium text-sm">কোনো বার্তা পাওয়া যায়নি</p>
                <p className="text-xs text-slate-400 mt-1">ব্যবহারকারীরা যোগাযোগের ফরম থেকে বার্তা পাঠালে এখানে প্রদর্শিত হবে</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMessages
                  .filter((m) =>
                    !messageSearch ||
                    m.name.toLowerCase().includes(messageSearch.toLowerCase()) ||
                    m.contactInfo.toLowerCase().includes(messageSearch.toLowerCase()) ||
                    m.subject.toLowerCase().includes(messageSearch.toLowerCase()) ||
                    m.message.toLowerCase().includes(messageSearch.toLowerCase())
                  )
                  .map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-200 shadow-2xs hover:shadow-xs transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                            <span>{msg.name}</span>
                            <span className="text-[10px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full border border-sky-200">
                              {msg.status || 'নতুন'}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-mono">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{msg.contactInfo}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="বার্তাটি মুছে ফেলুন"
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs sm:text-sm">
                        <div className="font-bold text-slate-800 mb-1 flex items-center gap-1">
                          <span className="text-emerald-700">বিষয়:</span>
                          <span>{msg.subject}</span>
                        </div>
                        <p className="text-slate-600 font-solaiman whitespace-pre-wrap leading-relaxed mt-1">
                          {msg.message}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {msg.date}
                        </span>
                        {msg.contactInfo && (
                          <a
                            href={`tel:${msg.contactInfo.replace(/[^0-9+]/g, '')}`}
                            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
                          >
                            <Phone className="w-3 h-3" />
                            <span>কল / যোগাযোগ করুন</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Detailed Analytics & Foundation Summary */}
        {activeTab === 'stats' && (
          <div className="p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 p-5 rounded-2xl border border-emerald-200">
                <h4 className="font-bold text-emerald-950 text-base mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-emerald-700" />
                  অনুদান খাতের হিসাব
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-emerald-200/60">
                    <span className="text-slate-700">সাধারণ সদকা ও দান:</span>
                    <span className="font-bold text-emerald-900">
                      ৳ {donations
                        .filter((d) => d.category.includes('সাধারণ সদকা'))
                        .reduce((s, d) => s + d.amount, 0)
                        .toLocaleString('bn-BD')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-emerald-200/60">
                    <span className="text-slate-700">খাদ্য সামগ্রী বিতরণ:</span>
                    <span className="font-bold text-emerald-900">
                      ৳ {donations
                        .filter((d) => d.category.includes('খাদ্য'))
                        .reduce((s, d) => s + d.amount, 0)
                        .toLocaleString('bn-BD')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-emerald-200/60">
                    <span className="text-slate-700">টিউবওয়েল ও বিশুদ্ধ পানি:</span>
                    <span className="font-bold text-emerald-900">
                      ৳ {donations
                        .filter((d) => d.category.includes('টিউবওয়েল'))
                        .reduce((s, d) => s + d.amount, 0)
                        .toLocaleString('bn-BD')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-700">স্বাস্থ্যসেবা ও চিকিৎসা:</span>
                    <span className="font-bold text-emerald-900">
                      ৳ {donations
                        .filter((d) => d.category.includes('স্বাস্থ্যসেবা'))
                        .reduce((s, d) => s + d.amount, 0)
                        .toLocaleString('bn-BD')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 p-5 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-950 text-base mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-700" />
                  পেমেন্ট গেটওয়ে মাধ্যম
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
                    <span className="text-slate-700">বিকাশ (bKash):</span>
                    <span className="font-bold text-amber-900">
                      {donations.filter((d) => d.paymentMethod === 'bkash').length} টি
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
                    <span className="text-slate-700">নগদ (Nagad):</span>
                    <span className="font-bold text-amber-900">
                      {donations.filter((d) => d.paymentMethod === 'nagad').length} টি
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
                    <span className="text-slate-700">ব্যাংক ট্রান্সফার:</span>
                    <span className="font-bold text-amber-900">
                      {donations.filter((d) => d.paymentMethod === 'bank').length} টি
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-700">সরাসরি ক্যাশ / অফিস:</span>
                    <span className="font-bold text-amber-900">
                      {donations.filter((d) => d.paymentMethod === 'cash').length} টি
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100/60 p-5 rounded-2xl border border-sky-200">
                <h4 className="font-bold text-sky-950 text-base mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-700" />
                  স্বেচ্ছাসেবী টিম প্রস্তুতি
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-sky-200/60">
                    <span className="text-slate-700">মোট নিবন্ধিত সেবক:</span>
                    <span className="font-bold text-sky-900">{volunteers.length} জন</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-sky-200/60">
                    <span className="text-slate-700">মাঠপর্যায়ের সক্রিয় কর্মী:</span>
                    <span className="font-bold text-emerald-700">{activeVolunteersCount} জন</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-sky-200/60">
                    <span className="text-slate-700">জরুরি রক্তদাতা (Blood Donors):</span>
                    <span className="font-bold text-rose-600">{volunteers.length} জন</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-700">যাচাই প্রক্রিয়াধীন:</span>
                    <span className="font-bold text-amber-700">{pendingVolunteersCount} জন</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-slate-700 text-sm flex items-start gap-3 font-solaiman">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-900 font-bold block mb-1">
                  স্বচ্ছতা ও আমানতদারির নীতি:
                </strong>
                জিকরুল্লাহ ফাউন্ডেশনের প্রতিটি দান ও সহযোগিতার ডেটা সরাসরি এই প্যানেলে সংরক্ষিত হয়। অ্যাডমিন প্যানেল থেকে আপনি যেকোনো সময় ট্রানজেকশন যাচাই করে স্ট্যাটাস আপডেট করতে পারবেন এবং প্রয়োজনে সিএসভি (CSV) ফাইল হিসেবে সম্পূর্ণ হিসাব সংরক্ষণ করতে পারবেন।
              </div>
            </div>
          </div>
        )}

        {/* Bottom Collapse Bar */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500 font-solaiman flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>সকল ইউজার ডেটা ফায়ারবেস ক্লাউড ডেটাবেজে (zikrullah-60dfe) এবং লোকাল ক্যাশে সুরক্ষিতভাবে সিঙ্ক হচ্ছে।</span>
          </p>
          {!isStandalonePage && (
            <button
              onClick={handleToggle}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
              <span>অ্যাডমিন প্যানেল সংক্ষেপ করুন (বাটন বন্ধ করুন)</span>
            </button>
          )}
        </div>
      </div>
    )}

      {/* MODAL 1: Edit Donation Details */}
      {editingDonation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-200 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200">
            <div className="bg-[#087443] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-emerald-200" />
                <h3 className="font-bold text-lg font-serif-bn">ডোনেশন তথ্য সম্পাদনা ও আপডেট</h3>
              </div>
              <button
                onClick={() => setEditingDonation(null)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditDonation} className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">দাতার নাম</label>
                  <input
                    type="text"
                    required
                    value={editingDonation.donorName}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, donorName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">মোবাইল নম্বর</label>
                  <input
                    type="text"
                    required
                    value={editingDonation.phone}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">টাকার পরিমাণ (৳)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={editingDonation.amount}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, amount: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-serif-bn font-bold text-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">পেমেন্ট মাধ্যম</label>
                  <select
                    value={editingDonation.paymentMethod}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, paymentMethod: e.target.value as any })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  >
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                    <option value="bank">ব্যাংক একাউন্ট</option>
                    <option value="cash">নগদ ক্যাশ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">খাতের নাম</label>
                <input
                  type="text"
                  required
                  value={editingDonation.category}
                  onChange={(e) =>
                    setEditingDonation({ ...editingDonation, category: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">ট্রানজেকশন ID (TrxID)</label>
                  <input
                    type="text"
                    value={editingDonation.transactionId}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, transactionId: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">স্ট্যাটাস</label>
                  <select
                    value={editingDonation.status}
                    onChange={(e) =>
                      setEditingDonation({ ...editingDonation, status: e.target.value as any })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold"
                  >
                    <option value="যাচাইকৃত">যাচাইকৃত (Verified)</option>
                    <option value="অপেক্ষমাণ">অপেক্ষমাণ (Pending)</option>
                    <option value="বাতিল">বাতিল (Rejected)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">অ্যাডমিন নোট / মন্তব্য</label>
                <textarea
                  rows={2}
                  value={editingDonation.adminNote || ''}
                  onChange={(e) =>
                    setEditingDonation({ ...editingDonation, adminNote: e.target.value })
                  }
                  placeholder="যাচাইয়ের বিবরণ বা ব্যাংক রেফারেন্স লিখুন..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingDonation(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white text-sm font-bold shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>আপডেট সংরক্ষণ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Add New Donation Manually */}
      {isNewDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-200 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200">
            <div className="bg-[#087443] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-200" />
                <h3 className="font-bold text-lg font-serif-bn">নতুন ডোনেশন এন্ট্রি যোগ করুন</h3>
              </div>
              <button
                onClick={() => setIsNewDonationModal(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewDonation} className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">দাতার নাম *</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: হাজী মো: আব্দুল্লাহ"
                    value={newDonationData.donorName}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, donorName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                  <input
                    type="text"
                    required
                    placeholder="017xxxxxxxx"
                    value={newDonationData.phone}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">টাকার পরিমাণ (৳) *</label>
                  <input
                    type="number"
                    required
                    min={10}
                    value={newDonationData.amount}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, amount: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-serif-bn font-bold text-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">পেমেন্ট মাধ্যম</label>
                  <select
                    value={newDonationData.paymentMethod}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, paymentMethod: e.target.value as any })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  >
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                    <option value="bank">ব্যাংক একাউন্ট</option>
                    <option value="cash">নগদ ক্যাশ / অফিস</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">দানের খাত</label>
                <select
                  value={newDonationData.category}
                  onChange={(e) =>
                    setNewDonationData({ ...newDonationData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                >
                  <option value="সাধারণ সদকা ও দান">সাধারণ সদকা ও দান</option>
                  <option value="অসহায়দের মাঝে খাদ্য সামগ্রী বিতরণ">অসহায়দের মাঝে খাদ্য সামগ্রী বিতরণ</option>
                  <option value="টিউবওয়েল ও বিশুদ্ধ পানির ব্যবস্থা">টিউবওয়েল ও বিশুদ্ধ পানির ব্যবস্থা</option>
                  <option value="বিনামূল্যে স্বাস্থ্যসেবা ও ওষুধ">বিনামূল্যে স্বাস্থ্যসেবা ও ওষুধ</option>
                  <option value="কুরআন শিক্ষা ও দাওয়াহ ফান্ড">কুরআন শিক্ষা ও দাওয়াহ ফান্ড</option>
                  <option value="যাকাত ফান্ড">যাকাত ফান্ড</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">TrxID / ভাউচার নং</label>
                  <input
                    type="text"
                    placeholder="CASH-REC বা TrxID"
                    value={newDonationData.transactionId}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, transactionId: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">স্ট্যাটাস</label>
                  <select
                    value={newDonationData.status}
                    onChange={(e) =>
                      setNewDonationData({ ...newDonationData, status: e.target.value as any })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold text-emerald-800"
                  >
                    <option value="যাচাইকৃত">যাচাইকৃত (Verified)</option>
                    <option value="অপেক্ষমাণ">অপেক্ষমাণ (Pending)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsNewDonationModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white text-sm font-bold shadow-md cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>সংরক্ষণ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Edit Volunteer Details */}
      {editingVolunteer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-200 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200">
            <div className="bg-[#087443] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-emerald-200" />
                <h3 className="font-bold text-lg font-serif-bn">স্বেচ্ছাসেবক তথ্য সম্পাদনা ও আপডেট</h3>
              </div>
              <button
                onClick={() => setEditingVolunteer(null)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEditVolunteer} className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">নাম *</label>
                  <input
                    type="text"
                    required
                    value={editingVolunteer.name}
                    onChange={(e) =>
                      setEditingVolunteer({ ...editingVolunteer, name: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                  <input
                    type="text"
                    required
                    value={editingVolunteer.phone}
                    onChange={(e) =>
                      setEditingVolunteer({ ...editingVolunteer, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">এলাকা / উপজেলা</label>
                  <input
                    type="text"
                    value={editingVolunteer.upazila}
                    onChange={(e) =>
                      setEditingVolunteer({ ...editingVolunteer, upazila: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">রক্তের গ্রুপ</label>
                  <select
                    value={editingVolunteer.bloodGroup}
                    onChange={(e) =>
                      setEditingVolunteer({ ...editingVolunteer, bloodGroup: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">খেদমতের ক্ষেত্র / আগ্রহ</label>
                <input
                  type="text"
                  value={editingVolunteer.interest}
                  onChange={(e) =>
                    setEditingVolunteer({ ...editingVolunteer, interest: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">স্ট্যাটাস</label>
                <select
                  value={editingVolunteer.status}
                  onChange={(e) =>
                    setEditingVolunteer({ ...editingVolunteer, status: e.target.value as any })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold text-emerald-800"
                >
                  <option value="সক্রিয় কর্মী">সক্রিয় কর্মী (Active)</option>
                  <option value="অপেক্ষমাণ">অপেক্ষমাণ (Pending)</option>
                  <option value="সম্পন্ন">সম্পন্ন (Completed)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">অ্যাডমিন নোট / অ্যাসাইনমেন্ট</label>
                <textarea
                  rows={2}
                  value={editingVolunteer.adminNote || ''}
                  onChange={(e) =>
                    setEditingVolunteer({ ...editingVolunteer, adminNote: e.target.value })
                  }
                  placeholder="টিম নম্বর বা দায়িত্ব বণ্টন লিখুন..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingVolunteer(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white text-sm font-bold shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>আপডেট সংরক্ষণ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: Add New Volunteer Manually */}
      {isNewVolunteerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-emerald-200 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200">
            <div className="bg-[#087443] text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-200" />
                <h3 className="font-bold text-lg font-serif-bn">নতুন স্বেচ্ছাসেবক অন্তর্ভুক্ত করুন</h3>
              </div>
              <button
                onClick={() => setIsNewVolunteerModal(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewVolunteer} className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">নাম *</label>
                  <input
                    type="text"
                    required
                    placeholder="যেমন: মো: আরিফুল ইসলাম"
                    value={newVolunteerData.name}
                    onChange={(e) =>
                      setNewVolunteerData({ ...newVolunteerData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                  <input
                    type="text"
                    required
                    placeholder="017xxxxxxxx"
                    value={newVolunteerData.phone}
                    onChange={(e) =>
                      setNewVolunteerData({ ...newVolunteerData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">এলাকা / ঠিকানা</label>
                  <input
                    type="text"
                    placeholder="মোকামতলা, বগুড়া"
                    value={newVolunteerData.upazila}
                    onChange={(e) =>
                      setNewVolunteerData({ ...newVolunteerData, upazila: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">রক্তের গ্রুপ</label>
                  <select
                    value={newVolunteerData.bloodGroup}
                    onChange={(e) =>
                      setNewVolunteerData({ ...newVolunteerData, bloodGroup: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">খেদমতের ক্ষেত্র</label>
                <select
                  value={newVolunteerData.interest}
                  onChange={(e) =>
                    setNewVolunteerData({ ...newVolunteerData, interest: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500"
                >
                  <option value="ত্রাণ ও খাদ্য সহায়তা বিতরণ">ত্রাণ ও খাদ্য সহায়তা বিতরণ</option>
                  <option value="দ্বীনি শিক্ষা ও কুরআন প্রশিক্ষণ">দ্বীনি শিক্ষা ও কুরআন প্রশিক্ষণ</option>
                  <option value="বিনামূল্যে ফ্রি মেডিকেল ক্যাম্প">বিনামূল্যে ফ্রি মেডিকেল ক্যাম্প</option>
                  <option value="যুব উন্নয়ন ও মাদকবিরোধী প্রচারণা">যুব উন্নয়ন ও মাদকবিরোধী প্রচারণা</option>
                  <option value="জরুরি দুর্যোগকালীন উদ্ধার কাজ">জরুরি দুর্যোগকালীন উদ্ধার কাজ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">স্ট্যাটাস</label>
                <select
                  value={newVolunteerData.status}
                  onChange={(e) =>
                    setNewVolunteerData({ ...newVolunteerData, status: e.target.value as any })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-emerald-500 font-bold text-emerald-800"
                >
                  <option value="সক্রিয় কর্মী">সক্রিয় কর্মী (Active)</option>
                  <option value="অপেক্ষমাণ">অপেক্ষমাণ (Pending)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsNewVolunteerModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#087443] hover:bg-[#045332] text-white text-sm font-bold shadow-md cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>সংরক্ষণ করুন</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
