import { 
  type User, 
  type InsertUser, 
  type ContactInquiry, 
  type InsertContactInquiry,
  type ComfortClubApplication,
  type InsertComfortClubApplication
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  createComfortClubApplication(application: InsertComfortClubApplication): Promise<ComfortClubApplication>;
  getComfortClubApplications(): Promise<ComfortClubApplication[]>;
  updateComfortClubApplicationStatus(id: string, status: string): Promise<ComfortClubApplication | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private comfortClubApplications: Map<string, ComfortClubApplication>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.comfortClubApplications = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { 
      ...insertInquiry,
      service: insertInquiry.service || null,
      message: insertInquiry.message || null,
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createComfortClubApplication(insertApplication: InsertComfortClubApplication): Promise<ComfortClubApplication> {
    const id = randomUUID();
    const application: ComfortClubApplication = {
      ...insertApplication,
      address: insertApplication.address || null,
      systemCount: insertApplication.systemCount || null,
      systemTypes: insertApplication.systemTypes || null,
      message: insertApplication.message || null,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.comfortClubApplications.set(id, application);
    return application;
  }

  async getComfortClubApplications(): Promise<ComfortClubApplication[]> {
    return Array.from(this.comfortClubApplications.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async updateComfortClubApplicationStatus(id: string, status: string): Promise<ComfortClubApplication | undefined> {
    const application = this.comfortClubApplications.get(id);
    if (application) {
      const updated = { ...application, status };
      this.comfortClubApplications.set(id, updated);
      return updated;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
