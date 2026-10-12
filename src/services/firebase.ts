import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'firebase/firestore';
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  update,
  remove
} from 'firebase/database';
import type { DonationRecord, VolunteerRecord } from './adminDataService';

// User-provided Firebase Configuration for zikrullah-60dfe
export const firebaseConfig = {
  apiKey: "AIzaSyD4VfC4TBkab3UhmmpLlhWXo_NLxsdPWDw",
  authDomain: "zikrullah-60dfe.firebaseapp.com",
  databaseURL: "https://zikrullah-60dfe-default-rtdb.firebaseio.com",
  projectId: "zikrullah-60dfe",
  storageBucket: "zikrullah-60dfe.firebasestorage.app",
  messagingSenderId: "611206702896",
  appId: "1:611206702896:web:a98f63860695971b6dcaf5"
};

// Initialize Firebase App singleton
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore & Realtime Database
export const firestore = getFirestore(app);
export const rtdb = getDatabase(app);

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

/**
 * Firebase Service helpers for saving and synchronizing user data in real-time
 */
export const firebaseService = {
  config: firebaseConfig,

  // 1. SAVE DONATION TO FIREBASE (Firestore + Realtime Database)
  async saveDonation(donation: DonationRecord): Promise<void> {
    const docId = donation.id || `ZK-${Date.now()}`;
    const payload = {
      ...donation,
      id: docId,
      updatedAt: Date.now()
    };

    // Save to Firestore
    try {
      const donationDocRef = doc(firestore, 'donations', docId);
      await setDoc(donationDocRef, payload, { merge: true });
    } catch (fsErr) {
      console.warn('Firestore donation save warning:', fsErr);
    }

    // Save to Realtime Database
    try {
      const rtdbRef = ref(rtdb, `donations/${docId}`);
      await set(rtdbRef, payload);
    } catch (rtErr) {
      console.warn('Realtime Database donation save warning:', rtErr);
    }
  },

  // 2. UPDATE DONATION IN FIREBASE
  async updateDonation(id: string, updates: Partial<DonationRecord>): Promise<void> {
    try {
      const donationDocRef = doc(firestore, 'donations', id);
      await updateDoc(donationDocRef, { ...updates, updatedAt: Date.now() });
    } catch (fsErr) {
      console.warn('Firestore donation update warning:', fsErr);
    }

    try {
      const rtdbRef = ref(rtdb, `donations/${id}`);
      await update(rtdbRef, { ...updates, updatedAt: Date.now() });
    } catch (rtErr) {
      console.warn('Realtime Database donation update warning:', rtErr);
    }
  },

  // 3. DELETE DONATION FROM FIREBASE
  async deleteDonation(id: string): Promise<void> {
    try {
      const donationDocRef = doc(firestore, 'donations', id);
      await deleteDoc(donationDocRef);
    } catch (fsErr) {
      console.warn('Firestore donation delete warning:', fsErr);
    }

    try {
      const rtdbRef = ref(rtdb, `donations/${id}`);
      await remove(rtdbRef);
    } catch (rtErr) {
      console.warn('Realtime Database donation delete warning:', rtErr);
    }
  },

  // 4. SAVE VOLUNTEER REGISTRATION TO FIREBASE
  async saveVolunteer(volunteer: VolunteerRecord): Promise<void> {
    const docId = volunteer.id || `VOL-${Date.now()}`;
    const payload = {
      ...volunteer,
      id: docId,
      updatedAt: Date.now()
    };

    // Save to Firestore
    try {
      const volunteerDocRef = doc(firestore, 'volunteers', docId);
      await setDoc(volunteerDocRef, payload, { merge: true });
    } catch (fsErr) {
      console.warn('Firestore volunteer save warning:', fsErr);
    }

    // Save to Realtime Database
    try {
      const rtdbRef = ref(rtdb, `volunteers/${docId}`);
      await set(rtdbRef, payload);
    } catch (rtErr) {
      console.warn('Realtime Database volunteer save warning:', rtErr);
    }
  },

  // 5. UPDATE VOLUNTEER IN FIREBASE
  async updateVolunteer(id: string, updates: Partial<VolunteerRecord>): Promise<void> {
    try {
      const volunteerDocRef = doc(firestore, 'volunteers', id);
      await updateDoc(volunteerDocRef, { ...updates, updatedAt: Date.now() });
    } catch (fsErr) {
      console.warn('Firestore volunteer update warning:', fsErr);
    }

    try {
      const rtdbRef = ref(rtdb, `volunteers/${id}`);
      await update(rtdbRef, { ...updates, updatedAt: Date.now() });
    } catch (rtErr) {
      console.warn('Realtime Database volunteer update warning:', rtErr);
    }
  },

  // 6. DELETE VOLUNTEER FROM FIREBASE
  async deleteVolunteer(id: string): Promise<void> {
    try {
      const volunteerDocRef = doc(firestore, 'volunteers', id);
      await deleteDoc(volunteerDocRef);
    } catch (fsErr) {
      console.warn('Firestore volunteer delete warning:', fsErr);
    }

    try {
      const rtdbRef = ref(rtdb, `volunteers/${id}`);
      await remove(rtdbRef);
    } catch (rtErr) {
      console.warn('Realtime Database volunteer delete warning:', rtErr);
    }
  },

  // 7. SAVE CONTACT / USER MESSAGE TO FIREBASE
  async saveContactMessage(msg: Omit<ContactMessageRecord, 'id' | 'timestamp' | 'status' | 'date'> & { id?: string }): Promise<ContactMessageRecord> {
    const docId = msg.id || `MSG-${Date.now()}`;
    const newRecord: ContactMessageRecord = {
      id: docId,
      name: msg.name || 'অজ্ঞাত প্রেরক',
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

    try {
      const docRef = doc(firestore, 'contact_messages', docId);
      await setDoc(docRef, newRecord, { merge: true });
    } catch (e) {
      console.warn('Firestore contact save warning:', e);
    }

    try {
      const rtdbRef = ref(rtdb, `contact_messages/${docId}`);
      await set(rtdbRef, newRecord);
    } catch (e) {
      console.warn('Realtime DB contact save warning:', e);
    }

    return newRecord;
  },

  // 8. DELETE CONTACT MESSAGE FROM FIREBASE
  async deleteContactMessage(id: string): Promise<void> {
    try {
      const docRef = doc(firestore, 'contact_messages', id);
      await deleteDoc(docRef);
    } catch (e) {
      console.warn('Firestore contact delete warning:', e);
    }

    try {
      const rtdbRef = ref(rtdb, `contact_messages/${id}`);
      await remove(rtdbRef);
    } catch (e) {
      console.warn('Realtime DB contact delete warning:', e);
    }
  },

  // 9. REALTIME SUBSCRIBERS (Firestore onSnapshot & Realtime Database onValue)
  subscribeDonations(onData: (donations: DonationRecord[]) => void): () => void {
    const unsubs: (() => void)[] = [];

    // Firestore listener
    try {
      const donationsCol = collection(firestore, 'donations');
      const unsubFs = onSnapshot(
        donationsCol,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: DonationRecord[] = [];
            snapshot.forEach((d) => {
              list.push(d.data() as DonationRecord);
            });
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Firestore donation listener notice:', err);
        }
      );
      unsubs.push(unsubFs);
    } catch (err) {
      console.warn('Firestore donations subscription notice:', err);
    }

    // Realtime Database listener
    try {
      const rtdbDonationsRef = ref(rtdb, 'donations');
      const unsubRtdb = onValue(
        rtdbDonationsRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val && typeof val === 'object') {
            const list: DonationRecord[] = Object.values(val);
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Realtime Database donation listener notice:', err);
        }
      );
      unsubs.push(unsubRtdb);
    } catch (err) {
      console.warn('Realtime Database donations subscription notice:', err);
    }

    return () => {
      unsubs.forEach((u) => {
        try {
          u();
        } catch (_) {}
      });
    };
  },

  subscribeVolunteers(onData: (volunteers: VolunteerRecord[]) => void): () => void {
    const unsubs: (() => void)[] = [];

    // Firestore listener
    try {
      const volunteersCol = collection(firestore, 'volunteers');
      const unsubFs = onSnapshot(
        volunteersCol,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: VolunteerRecord[] = [];
            snapshot.forEach((d) => {
              list.push(d.data() as VolunteerRecord);
            });
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Firestore volunteer listener notice:', err);
        }
      );
      unsubs.push(unsubFs);
    } catch (err) {
      console.warn('Firestore volunteers subscription notice:', err);
    }

    // Realtime Database listener
    try {
      const rtdbVolunteersRef = ref(rtdb, 'volunteers');
      const unsubRtdb = onValue(
        rtdbVolunteersRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val && typeof val === 'object') {
            const list: VolunteerRecord[] = Object.values(val);
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Realtime Database volunteer listener notice:', err);
        }
      );
      unsubs.push(unsubRtdb);
    } catch (err) {
      console.warn('Realtime Database volunteers subscription notice:', err);
    }

    return () => {
      unsubs.forEach((u) => {
        try {
          u();
        } catch (_) {}
      });
    };
  },

  subscribeContactMessages(onData: (messages: ContactMessageRecord[]) => void): () => void {
    const unsubs: (() => void)[] = [];

    // Firestore listener
    try {
      const messagesCol = collection(firestore, 'contact_messages');
      const unsubFs = onSnapshot(
        messagesCol,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: ContactMessageRecord[] = [];
            snapshot.forEach((d) => {
              list.push(d.data() as ContactMessageRecord);
            });
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Firestore contact messages listener notice:', err);
        }
      );
      unsubs.push(unsubFs);
    } catch (err) {
      console.warn('Firestore contact messages subscription notice:', err);
    }

    // Realtime Database listener
    try {
      const rtdbMessagesRef = ref(rtdb, 'contact_messages');
      const unsubRtdb = onValue(
        rtdbMessagesRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val && typeof val === 'object') {
            const list: ContactMessageRecord[] = Object.values(val);
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            onData(list);
          }
        },
        (err) => {
          console.warn('Realtime Database contact messages listener notice:', err);
        }
      );
      unsubs.push(unsubRtdb);
    } catch (err) {
      console.warn('Realtime Database contact messages subscription notice:', err);
    }

    return () => {
      unsubs.forEach((u) => {
        try {
          u();
        } catch (_) {}
      });
    };
  },

  // 10. ONE-TIME FETCH ALL
  async fetchAllRemoteData(): Promise<{
    donations: DonationRecord[];
    volunteers: VolunteerRecord[];
    messages: ContactMessageRecord[];
  }> {
    const result: {
      donations: DonationRecord[];
      volunteers: VolunteerRecord[];
      messages: ContactMessageRecord[];
    } = {
      donations: [],
      volunteers: [],
      messages: []
    };

    try {
      const dSnap = await getDocs(collection(firestore, 'donations'));
      dSnap.forEach((doc) => result.donations.push(doc.data() as DonationRecord));
    } catch (e) {
      console.warn('Fetch donations error:', e);
    }

    try {
      const vSnap = await getDocs(collection(firestore, 'volunteers'));
      vSnap.forEach((doc) => result.volunteers.push(doc.data() as VolunteerRecord));
    } catch (e) {
      console.warn('Fetch volunteers error:', e);
    }

    try {
      const mSnap = await getDocs(collection(firestore, 'contact_messages'));
      mSnap.forEach((doc) => result.messages.push(doc.data() as ContactMessageRecord));
    } catch (e) {
      console.warn('Fetch messages error:', e);
    }

    return result;
  }
};
