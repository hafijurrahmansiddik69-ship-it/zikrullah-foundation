import { firebaseService, ContactMessageRecord } from './firebase';

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

const DONATIONS_STORAGE_KEY = 'zikrullah_donations_data_v1';
const VOLUNTEERS_STORAGE_KEY = 'zikrullah_volunteers_data_v1';
const MESSAGES_STORAGE_KEY = 'zikrullah_contact_messages_v1';
export const ADMIN_DATA_EVENT = 'zikrullah_admin_data_updated';

// Known Demo Data Identifiers to delete & purge
export const DEMO_DONATION_IDS = ['ZK-981240', 'ZK-981241', 'ZK-981242', 'ZK-981243'];
export const DEMO_VOLUNTEER_IDS = ['VOL-101', 'VOL-102', 'VOL-103'];
export const DEMO_MESSAGE_IDS = ['MSG-301'];

const DEMO_DONOR_NAMES = ['রফিকুল ইসলাম', 'গোপন দানকারী', 'মামুন', 'নাসরিন আক্তার'];
const DEMO_VOLUNTEER_NAMES = ['রিফাত', 'ইমরান হোসাইন', 'শামীম রেজা'];
const DEMO_MESSAGE_NAMES = ['কামরুল হাসান'];

export function isDemoDonation(d: DonationRecord): boolean {
  if (!d) return false;
  if (DEMO_DONATION_IDS.includes(d.id)) return true;
  if (DEMO_DONOR_NAMES.some((name) => d.donorName && d.donorName.includes(name))) return true;
  return false;
}

export function isDemoVolunteer(v: VolunteerRecord): boolean {
  if (!v) return false;
  if (DEMO_VOLUNTEER_IDS.includes(v.id)) return true;
  if (DEMO_VOLUNTEER_NAMES.some((name) => v.name && v.name.includes(name))) return true;
  return false;
}

export function isDemoMessage(m: ContactMessageRecord): boolean {
  if (!m) return false;
  if (DEMO_MESSAGE_IDS.includes(m.id)) return true;
  if (DEMO_MESSAGE_NAMES.some((name) => m.name && m.name.includes(name))) return true;
  return false;
}

// Initial defaults are now EMPTY - No demo data
const INITIAL_DONATIONS: DonationRecord[] = [];
const INITIAL_VOLUNTEERS: VolunteerRecord[] = [];
const INITIAL_MESSAGES: ContactMessageRecord[] = [];

function notifyUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(ADMIN_DATA_EVENT));
  }
}

let isFirebaseInitialized = false;

export const adminDataService = {
  // Purge any residual demo data from localStorage and Firebase cloud
  async clearAllDemoData(): Promise<{ success: boolean; removedCount: number }> {
    let removed = 0;
    try {
      // 1. Clean donations in localStorage
      const storedDonations = localStorage.getItem(DONATIONS_STORAGE_KEY);
      if (storedDonations) {
        const parsed: DonationRecord[] = JSON.parse(storedDonations);
        const filtered = parsed.filter((d) => !isDemoDonation(d));
        removed += parsed.length - filtered.length;
        localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(filtered));
      }

      // 2. Clean volunteers in localStorage
      const storedVolunteers = localStorage.getItem(VOLUNTEERS_STORAGE_KEY);
      if (storedVolunteers) {
        const parsed: VolunteerRecord[] = JSON.parse(storedVolunteers);
        const filtered = parsed.filter((v) => !isDemoVolunteer(v));
        removed += parsed.length - filtered.length;
        localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(filtered));
      }

      // 3. Clean messages in localStorage
      const storedMessages = localStorage.getItem(MESSAGES_STORAGE_KEY);
      if (storedMessages) {
        const parsed: ContactMessageRecord[] = JSON.parse(storedMessages);
        const filtered = parsed.filter((m) => !isDemoMessage(m));
        removed += parsed.length - filtered.length;
        localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(filtered));
      }

      // 4. Delete demo IDs from Firebase cloud
      for (const id of DEMO_DONATION_IDS) {
        await firebaseService.deleteDonation(id).catch(() => {});
      }
      for (const id of DEMO_VOLUNTEER_IDS) {
        await firebaseService.deleteVolunteer(id).catch(() => {});
      }
      for (const id of DEMO_MESSAGE_IDS) {
        await firebaseService.deleteContactMessage(id).catch(() => {});
      }
    } catch (err) {
      console.warn('Clear demo data error:', err);
    }

    notifyUpdate();
    return { success: true, removedCount: removed };
  },

  // Clear all data completely (for fresh start)
  async clearAllData(): Promise<void> {
    try {
      const donations = this.getDonations();
      const volunteers = this.getVolunteers();
      const messages = this.getContactMessages();

      localStorage.removeItem(DONATIONS_STORAGE_KEY);
      localStorage.removeItem(VOLUNTEERS_STORAGE_KEY);
      localStorage.removeItem(MESSAGES_STORAGE_KEY);

      for (const d of donations) {
        await firebaseService.deleteDonation(d.id).catch(() => {});
      }
      for (const v of volunteers) {
        await firebaseService.deleteVolunteer(v.id).catch(() => {});
      }
      for (const m of messages) {
        await firebaseService.deleteContactMessage(m.id).catch(() => {});
      }
    } catch (e) {
      console.warn('Clear all data notice:', e);
    }
    notifyUpdate();
  },

  // Initialize Realtime Firebase listeners
  initFirebaseSync() {
    if (isFirebaseInitialized || typeof window === 'undefined') return;
    isFirebaseInitialized = true;

    // Run auto-purge of demo data on startup
    this.clearAllDemoData().catch(() => {});

    // Listen to Firebase donations in real-time
    firebaseService.subscribeDonations((remoteDonations) => {
      if (remoteDonations) {
        try {
          const current = this.getDonations();
          const currentMap = new Map(current.map((item) => [item.id, item]));

          // Only merge non-demo entries
          remoteDonations
            .filter((item) => !isDemoDonation(item))
            .forEach((item) => {
              currentMap.set(item.id, item);
            });

          const merged = Array.from(currentMap.values()).sort(
            (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
          );
          localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(merged));
          notifyUpdate();
        } catch (e) {
          console.warn('Sync donations to local storage error:', e);
        }
      }
    });

    // Listen to Firebase volunteers in real-time
    firebaseService.subscribeVolunteers((remoteVolunteers) => {
      if (remoteVolunteers) {
        try {
          const current = this.getVolunteers();
          const currentMap = new Map(current.map((item) => [item.id, item]));

          remoteVolunteers
            .filter((item) => !isDemoVolunteer(item))
            .forEach((item) => {
              currentMap.set(item.id, item);
            });

          const merged = Array.from(currentMap.values()).sort(
            (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
          );
          localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(merged));
          notifyUpdate();
        } catch (e) {
          console.warn('Sync volunteers to local storage error:', e);
        }
      }
    });

    // Listen to Firebase contact messages in real-time
    firebaseService.subscribeContactMessages((remoteMessages) => {
      if (remoteMessages) {
        try {
          const current = this.getContactMessages();
          const currentMap = new Map(current.map((item) => [item.id, item]));

          remoteMessages
            .filter((item) => !isDemoMessage(item))
            .forEach((item) => {
              currentMap.set(item.id, item);
            });

          const merged = Array.from(currentMap.values()).sort(
            (a, b) => (b.timestamp || 0) - (a.timestamp || 0)
          );
          localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(merged));
          notifyUpdate();
        } catch (e) {
          console.warn('Sync messages to local storage error:', e);
        }
      }
    });
  },

  // Sync all current non-demo local data up to Firebase
  async syncAllToFirebase(): Promise<{ success: boolean; count: number }> {
    let count = 0;
    try {
      const donations = this.getDonations().filter((d) => !isDemoDonation(d));
      for (const d of donations) {
        await firebaseService.saveDonation(d);
        count++;
      }
      const volunteers = this.getVolunteers().filter((v) => !isDemoVolunteer(v));
      for (const v of volunteers) {
        await firebaseService.saveVolunteer(v);
        count++;
      }
      const messages = this.getContactMessages().filter((m) => !isDemoMessage(m));
      for (const m of messages) {
        await firebaseService.saveContactMessage(m);
        count++;
      }
      return { success: true, count };
    } catch (err) {
      console.warn('Firebase batch sync warning:', err);
      return { success: false, count };
    }
  },

  // DONATIONS
  getDonations(): DonationRecord[] {
    try {
      const stored = localStorage.getItem(DONATIONS_STORAGE_KEY);
      if (stored) {
        const parsed: DonationRecord[] = JSON.parse(stored);
        const filtered = parsed.filter((d) => !isDemoDonation(d));
        if (filtered.length !== parsed.length) {
          localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(filtered));
        }
        return filtered;
      }
      localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(INITIAL_DONATIONS));
      return INITIAL_DONATIONS;
    } catch {
      return INITIAL_DONATIONS;
    }
  },

  addDonation(
    record: Omit<DonationRecord, 'id' | 'timestamp' | 'status' | 'date'> & {
      id?: string;
      date?: string;
      status?: DonationRecord['status'];
    }
  ): DonationRecord {
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
      date:
        record.date ||
        new Date().toLocaleDateString('bn-BD', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
      timestamp: Date.now(),
      status: record.status || 'অপেক্ষমাণ',
      adminNote: record.adminNote || 'অনলাইন এন্ট্রি'
    };

    const updated = [newRecord, ...list];
    try {
      localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save donation locally', e);
    }
    notifyUpdate();

    // Send user donation data directly to Firebase in real-time
    firebaseService.saveDonation(newRecord).catch((err) => {
      console.warn('Firebase save donation notice:', err);
    });

    return newRecord;
  },

  updateDonation(id: string, updates: Partial<DonationRecord>): DonationRecord | null {
    const list = this.getDonations();
    let updatedItem: DonationRecord | null = null;
    const updatedList = list.map((item) => {
      if (item.id === id) {
        updatedItem = { ...item, ...updates };
        return updatedItem;
      }
      return item;
    });

    if (updatedItem) {
      try {
        localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(updatedList));
      } catch (e) {
        console.error('Failed to update donation', e);
      }
      notifyUpdate();

      // Update in Firebase in real-time
      firebaseService.updateDonation(id, updates).catch((err) => {
        console.warn('Firebase update donation notice:', err);
      });
    }
    return updatedItem;
  },

  deleteDonation(id: string): boolean {
    const list = this.getDonations();
    const filtered = list.filter((item) => item.id !== id);
    if (filtered.length !== list.length) {
      try {
        localStorage.setItem(DONATIONS_STORAGE_KEY, JSON.stringify(filtered));
      } catch (e) {
        console.error('Failed to delete donation', e);
      }
      notifyUpdate();

      // Delete from Firebase in real-time
      firebaseService.deleteDonation(id).catch((err) => {
        console.warn('Firebase delete donation notice:', err);
      });
      return true;
    }
    return false;
  },

  // VOLUNTEERS
  getVolunteers(): VolunteerRecord[] {
    try {
      const stored = localStorage.getItem(VOLUNTEERS_STORAGE_KEY);
      if (stored) {
        const parsed: VolunteerRecord[] = JSON.parse(stored);
        const filtered = parsed.filter((v) => !isDemoVolunteer(v));
        if (filtered.length !== parsed.length) {
          localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(filtered));
        }
        return filtered;
      }
      localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(INITIAL_VOLUNTEERS));
      return INITIAL_VOLUNTEERS;
    } catch {
      return INITIAL_VOLUNTEERS;
    }
  },

  addVolunteer(
    record: Omit<VolunteerRecord, 'id' | 'timestamp' | 'status' | 'date'> & {
      id?: string;
      date?: string;
      status?: VolunteerRecord['status'];
    }
  ): VolunteerRecord {
    const list = this.getVolunteers();
    const newRecord: VolunteerRecord = {
      id: record.id || 'VOL-' + Math.floor(100 + Math.random() * 900),
      name: record.name || 'সম্মানিত ভাই/বোন',
      phone: record.phone || 'অনুল্লেখিত',
      upazila: record.upazila || 'বগুড়া',
      bloodGroup: record.bloodGroup || 'A+',
      interest: record.interest || 'সাধারণ সেবা ও বিতরণ',
      message: record.message || '',
      date:
        record.date ||
        new Date().toLocaleDateString('bn-BD', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
      timestamp: Date.now(),
      status: record.status || 'অপেক্ষমাণ',
      adminNote: record.adminNote || 'নতুন স্বেচ্ছাসেবক আবেদন'
    };

    const updated = [newRecord, ...list];
    try {
      localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save volunteer locally', e);
    }
    notifyUpdate();

    // Send volunteer user data directly to Firebase in real-time
    firebaseService.saveVolunteer(newRecord).catch((err) => {
      console.warn('Firebase save volunteer notice:', err);
    });

    return newRecord;
  },

  updateVolunteer(id: string, updates: Partial<VolunteerRecord>): VolunteerRecord | null {
    const list = this.getVolunteers();
    let updatedItem: VolunteerRecord | null = null;
    const updatedList = list.map((item) => {
      if (item.id === id) {
        updatedItem = { ...item, ...updates };
        return updatedItem;
      }
      return item;
    });

    if (updatedItem) {
      try {
        localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(updatedList));
      } catch (e) {
        console.error('Failed to update volunteer', e);
      }
      notifyUpdate();

      // Update in Firebase in real-time
      firebaseService.updateVolunteer(id, updates).catch((err) => {
        console.warn('Firebase update volunteer notice:', err);
      });
    }
    return updatedItem;
  },

  deleteVolunteer(id: string): boolean {
    const list = this.getVolunteers();
    const filtered = list.filter((item) => item.id !== id);
    if (filtered.length !== list.length) {
      try {
        localStorage.setItem(VOLUNTEERS_STORAGE_KEY, JSON.stringify(filtered));
      } catch (e) {
        console.error('Failed to delete volunteer', e);
      }
      notifyUpdate();

      // Delete from Firebase in real-time
      firebaseService.deleteVolunteer(id).catch((err) => {
        console.warn('Firebase delete volunteer notice:', err);
      });
      return true;
    }
    return false;
  },

  // CONTACT MESSAGES
  getContactMessages(): ContactMessageRecord[] {
    try {
      const stored = localStorage.getItem(MESSAGES_STORAGE_KEY);
      if (stored) {
        const parsed: ContactMessageRecord[] = JSON.parse(stored);
        const filtered = parsed.filter((m) => !isDemoMessage(m));
        if (filtered.length !== parsed.length) {
          localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(filtered));
        }
        return filtered;
      }
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
      date: new Date().toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      timestamp: Date.now(),
      status: 'নতুন'
    };

    const updated = [newRecord, ...list];
    try {
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save message', e);
    }
    notifyUpdate();

    // Push to Firebase in real-time
    firebaseService.saveContactMessage(newRecord).catch((err) => {
      console.warn('Firebase contact save notice:', err);
    });

    return newRecord;
  },

  deleteContactMessage(id: string): boolean {
    const list = this.getContactMessages();
    const filtered = list.filter((item) => item.id !== id);
    if (filtered.length !== list.length) {
      try {
        localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(filtered));
      } catch (e) {
        console.error('Failed to delete message', e);
      }
      notifyUpdate();

      // Delete from Firebase in real-time
      firebaseService.deleteContactMessage(id).catch((err) => {
        console.warn('Firebase delete message notice:', err);
      });
      return true;
    }
    return false;
  },

  // Reset to empty
  resetDefaults() {
    this.clearAllDemoData().catch(() => {});
  }
};

// Initialize Firebase sync on load & auto-purge demo data
if (typeof window !== 'undefined') {
  adminDataService.initFirebaseSync();
}
