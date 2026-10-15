export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  objectives?: string[];
  targetAmount: number;
  raisedAmount: number;
  beneficiaries: string;
  location: string;
  image: string;
  status: 'চলমান' | 'সম্পন্ন' | 'আসন্ন';
  iconType?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  date: string;
}

export interface DonationData {
  donorName: string;
  phone: string;
  amount: number;
  category: string;
  paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'bank';
  transactionId?: string;
  notes?: string;
}

export interface PrayerTime {
  nameBn: string;
  nameEn: string;
  time: string;
  isNext?: boolean;
}
