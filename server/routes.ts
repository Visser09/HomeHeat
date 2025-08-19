import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertComfortClubApplicationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, id: inquiry.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit inquiry" 
        });
      }
    }
  });

  // Get contact inquiries (for admin use)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  // Comfort Club application submission
  app.post("/api/comfort-club", async (req, res) => {
    try {
      const validatedData = insertComfortClubApplicationSchema.parse(req.body);
      const application = await storage.createComfortClubApplication(validatedData);
      res.json({ success: true, id: application.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid application data", 
          details: error.errors 
        });
      } else {
        console.error("Error creating comfort club application:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit application" 
        });
      }
    }
  });

  // Get comfort club applications (for admin use)
  app.get("/api/comfort-club-applications", async (req, res) => {
    try {
      const applications = await storage.getComfortClubApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching comfort club applications:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch applications" 
      });
    }
  });

  // Update comfort club application status
  app.patch("/api/comfort-club/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        res.status(400).json({ 
          success: false, 
          error: "Status is required and must be a string" 
        });
        return;
      }

      const updated = await storage.updateComfortClubApplicationStatus(id, status);
      
      if (!updated) {
        res.status(404).json({ 
          success: false, 
          error: "Application not found" 
        });
        return;
      }

      res.json({ success: true, application: updated });
    } catch (error) {
      console.error("Error updating application status:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to update application status" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
