

# Recruitment CRM — MVP Plan

## Overview
A modern recruitment CRM portal inspired by the dashboard screenshot you shared — dark sidebar, clean cards, charts, and a professional green/black/white color scheme. Built with user authentication and role-based access for 20+ recruiters.

---

## Phase 1: Foundation & Authentication
- **Login/Signup system** with email-based authentication (Supabase)
- **Role-based access**: Admin, Manager, Recruiter roles
- **User profiles** with name, avatar, team assignment
- **App layout** with collapsible dark sidebar navigation matching the reference design

## Phase 2: Dashboard & Business Overview
- **Main dashboard** with KPI cards: Total Clients, Active Placements, Revenue, Pipeline Value
- **Sales overview chart** (monthly revenue/profit bar chart)
- **Upcoming schedule** widget with calendar and meeting list
- **Activity feed** showing recent team actions

## Phase 3: Contact & Account Management
- **Clients directory** — company records with contacts, notes, and interaction history
- **Candidate database** — candidate profiles with status tracking
- **Client contact forms** — customizable intake forms for new client inquiries
- **Search and filter** across all contacts

## Phase 4: Pipeline Management
- **Kanban-style pipeline board** with draggable stages (e.g., Prospect → Outreach → Meeting → Terms Agreed → Placement → Invoice)
- **Deal cards** showing value, client, assigned recruiter, and stage
- **Pipeline analytics** — conversion rates between stages, average time per stage

## Phase 5: Sales Tools & Automation
- **Email templates** — create, edit, and organize reusable email templates for outreach
- **Call scripts** — step-by-step guided scripts for cold calls and client conversations with branching prompts
- **Training courses** — onboarding content and best practice guides for the team
- **Guidance for success** — tips and playbooks accessible from the sidebar

## Phase 6: Reporting & Forecasting
- **Reports dashboard** with filterable charts: revenue by month, placements by recruiter, pipeline velocity
- **Forecasting view** — projected revenue based on pipeline stage probabilities
- **Export capabilities** for key reports

## Phase 7: Collaboration Features
- **Team activity log** — see what colleagues are working on
- **Notes and mentions** on deals and contacts
- **Shared templates and scripts** across the team

---

## Design Direction
- Dark sidebar with green accent color (matching reference image)
- Clean white content area with card-based layouts
- Professional, minimal UI with clear data hierarchy
- Responsive for desktop use (primary) with tablet support

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind + shadcn/ui + Recharts
- **Backend**: Supabase (auth, database, row-level security, edge functions)
- **Charts**: Recharts for dashboards and reporting

