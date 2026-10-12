export interface DonationRecord {
  id: string;
  donorName: string;
  phone: string;
  amount: number;
  category: string;
  paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'bank' | 'cash';
  transactionId: string;
  donorMessage?: string;
  date: string;
  timestamp: number;
  status: 'যাচাইকৃত' | 'অপেক্ষমাণ' | 'বাতিল';
  adminNote?: string;
}

export interface VolunteerRecord {
  id: string;
  name: string;
  phone: string;
  upazila: string;
  bloodGroup: string;
  interest: string;
  message?: string;
  date: string;
  timestamp: number;
  status: 'সক্রিয় কর্মী' | 'অপেক্ষমাণ' | 'সম্পন্ন';
  adminNote?: string;
}

export interface ContactMessageRecord {
  id: string;
  name: string;
  contactInfo: string;
  subject: string;
  message: string;
  date: string;
  timestamp: number;
  status: 'নতুন' | 'পঠিত' | 'সম্পন্ন';
}

const DONATIONS_STORAGE_KEY = 'zikrullah_donations_data_v1';
const VOLUNTEERS_STORAGE_KEY = 'zikrullah_volunteers_data_v1';
const MESSAGES_STORAGE_KEY = 'zikrullah_contact_messages_v1';
export const ADMIN_DATA_EVENT = 'zikrullah_admin_data_updated';

const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'ZK-981240',
    donorName: 'মো: রফিকুল ইসলাম',
    phone: '01712-345678',
    amount: 5000,
    category: 'অসহায়দের মাঝে খাদ্য সামগ্রী বিতরণ',
    paymentMethod: 'bkash',
    transactionId: 'BK9X284M1',
    donorMessage: 'আল্লাহ যেন দান কবুল করেন।',
    date: '১২ অক্টোবর, ২০২৬',
    timestamp: Date.now() - 3600000 * 5,
    status: 'যাচাইকৃত'
  }
];

const INITIAL_VOLUNTEERS: VolunteerRecord[] = [
  {
    id: 'VOL-101',
    name: 'তানভীর আহমেদ রিফাত',
    phone: '01740-112233',
    upazila: 'মোকামতলা, শিবগঞ্জ, বগুড়া',
    bloodGroup: 'B+',
    interest: 'ত্রাণ ও খাদ্য সহায়তা বিতরণ',
    message: 'জরুরি প্রয়োজনে কাজ করতে প্রস্তুত।',
    date: '১২ অক্টোবর, ২০২৬',
    timestamp: Date.now() - 3600000 * 3,
    status: 'সক্রিয় কর্মী'
  }
];

const INITIAL_MESSAGES: ContactMessageRecord[] = [
  {
    id: 'MSG-301',
    name: 'মুহম্মদ কামরুল হাসান',
    contactInfo: '01711-889900',
    subject: 'শীতবস্ত্র বিতরণ প্রস্তাব',
    message: 'আসসালামু আলাইকুম, আমরা কিছু শীতবস্ত্র দিতে চাই।',
    date: '১২ অক্টোবর, ২০২৬',
    timestamp: Date.now() - 3600000 * 7,
    status: 'নতুন'
  }
];

function notifyUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ADMIN_DATA_EVENT));
  }
}

export const adminDataService = {
  getDonations(): DonationRecord[] {
    try {
      const stored = localStorage.getItem(DONATIONS_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(INITIAL_DONATIONS));
      return INITIAL_DONATIONS;
    } catch {
      return INITIAL_DONATIONS;
    }
  },

  addDonation(record: Omit<DonationRecord, 'id' | 'timestamp' | 'status' | 'date'> & { id?: string; date?: string; status?: DonationRecord['status'] }): DonationRecord {
    const list = this.getDonations();
    const newRecord: DonationRecord = {
      id: record.id || 'ZK-' + Math.floor(100000 + Math.random() * 900000),
      donorName: record.donorName || 'অজ্ঞাত শুভানুধ্যায়ী',
      phone: record.phone || 'অনুল্লেখিত',
      amount: record.amount || 0,
      category: record.category || 'সাধারণ সদকা ও দান',
      paymentMethod: record.paymentMethod || 'bkash',
      transactionId: record.transactionId || 'N/A',
      donorMessage: record.donorMessage || '',
      date: record.date || new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      timestamp: Date.now(),
      status: record.status || 'অপেক্ষমাণ',
      adminNote: record.adminNote || 'অনলাইন এন্ট্রি'
    };
    const updated = [newRecord, ...list];
    localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(updated));
    notifyUpdate();
    return newRecord;
  },

  getVolunteers(): VolunteerRecord[] {
    try {
      const stored = localStorage.getItem(VOLUNTEERS_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(INITIAL_VOLUNTEERS));
      return INITIAL_VOLUNTEERS;
    } catch {
      return INITIAL_VOLUNTEERS;
    }
  },

  addVolunteer(record: Omit<VolunteerRecord, 'id' | 'timestamp' | 'status' | 'date'> & { id?: string; date?: string; status?: VolunteerRecord['status'] }): VolunteerRecord {
    const list = this.getVolunteers();
    const newRecord: VolunteerRecord = {
      id: record.id || 'VOL-' + Math.floor(100 + Math.random() * 900),
      name: record.name || 'সম্মানিত ভাই/বোন',
      phone: record.phone || 'অনুল্লেখিত',
      upazila: record.upazila || 'বগুড়া',
      bloodGroup: record.bloodGroup || 'A+',
      interest: record.interest || 'সাধারণ সেবা ও বিতরণ',
      message: record.message || '',
      date: record.date || new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      timestamp: Date.now(),
      status: record.status || 'অপেক্ষমাণ',
      adminNote: record.adminNote || 'নতুন স্বেচ্ছাসেবক আবেদন'
    };
    const updated = [newRecord, ...list];
    localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(updated));
    notifyUpdate();
    return newRecord;
  },

  getContactMessages(): ContactMessageRecord[] {
    try {
      const stored = localStorage.getItem(MESSAGES_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(INITIAL_MESSAGES));
      return INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  },

  addContactMessage(msg: { name: string; contactInfo: string; subject: string; message: string }): ContactMessageRecord {
    const list = this.getContactMessages();
    const newRecord: ContactMessageRecord = {
      id: 'MSG-' + Math.floor(100 + Math.random() * 900),
      name: msg.name || 'অজ্ঞাত শুভানুধ্যায়ী',
      contactInfo: msg.contactInfo || '',
      subject: msg.subject || 'সাধারণ যোগাযোগ',
      message: msg.message || '',
      date: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      timestamp: Date.now(),
      status: 'নতুন'
    };
    const updated = [newRecord, ...list];
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(updated));
    notifyUpdate();
    return newRecord;
  }
};
