export type Role = "DONOR" | "CHARITY" | "ADMIN"; // Adjust based on ROLES enum

export type User = {
  id: number;
  email: string;
  role: Role;
  expoPushToken: string;
  charity?: Charity;
  donor?: Donor;
};

export type Donor = {
  id: number;
  phone: string;
  name: string;
  email: string;
  address: string;
  imgId?: string;
  imgUrl?: string;
  deletedAt?: Date | null;
  user: User;
  volunteers?: Volunteer[];
  lat?: string;
  lng?: string;
  transactions?: Transaction[];
};

export type Charity = {
  id: number;
  phone: string;
  name: string;
  email: string;
  address: string;
  deletedAt?: Date | null;
  imgUrl: string;
  imgId: string;
  user: User;
  donation?: Donation;
  events?: EventEntity[];
  transactions?: Transaction[];
  canReceiveFunds: boolean;
};

export type EventEntity = {
  id: number;
  name: string;
  date: Date;
  // location: string;
  lat: string;
  lng: string;
  description: string;
  deletedAt?: Date;
  charity: Charity;
  volunteers?: Volunteer[];
  imgsUrl: string[]; // make it mandatory
  imgsId?: string[];
  finished: boolean;
};

export type Upload = {
  id: number;
  name: string;
  path: string;
  type: "IMAGE" | "DOCUMENT" | "VIDEO"; // Extend as per fileTypes
  mime: string;
  size: number;
  createDate: Date;
  updateDate: Date;
  deletedAt: Date | null;
};

export type Category = {
  id: number;
  name: string;
  donation?: Donation;
};

export type Donation = {
  id: number;
  name: string;
  quality: string;
  imgsUrl?: string[];
  imgsId?: string[];
  charity: Charity;
  category: Category;
  categoryId: number;
  donor: Donor;
  lng: string;
  lat: string;
  description: string;
};

export type Volunteer = {
  id: number;
  donor: Donor;
  event: EventEntity;
  joinedAt: Date;
  role?: string;
  status: "ACCEPTED" | "IDLE" | "REJECTED";
};

export type PaymentMethod = "VISA" | "MASTERCARD";

export type Transaction = {
  id: number;
  donor: Donor;
  charity: Charity;
  amount: number;
  paymentMethod: PaymentMethod;
  createdAt: Date;
};

export type Notification = {
  id: number;
  message: string;
  donor?: Donor;
  charity?: Charity;
  recipientExpoPushToken: string;
  createdAt: Date;
};
export type QualityValue =
  | "like_new"
  | "very_good"
  | "good"
  | "acceptable"
  | "needs_repair";
export type QualityOptions = { label: string; value: QualityValue }[];
export type QualityMap = Record<QualityValue, number>;
