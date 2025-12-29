# Lumina Agency - AI-Powered Web Application 🚀

![Lumina Agency Banner](https://via.placeholder.com/1200x400/2e1065/ffffff?text=Lumina+Agency+-+AI+Powered+Solutions)

> A modern, full-stack landing page for a digital agency featuring a fully automated AI response system. This project demonstrates the integration of a **Next.js frontend** with an **n8n automation workflow** powered by **Cohere's LLM**.

## 🔗 Live Demo
[**View Live Site on AWS Amplify**](https://main.d1yjdpfaks0a5m.amplifyapp.com/)

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Deep Purple/Dark Mode UI)
* **Hosting:** AWS Amplify

### Backend & Automation
* **Orchestration:** [n8n](https://n8n.io/) (Self-hosted/Cloud)
* **AI Model:** Cohere (`command-r-plus-08-2024`) via API
* **Email Service:** AWS SES (Simple Email Service)
* **Communication:** Webhooks (REST API)

---

## 💡 How It Works (The Architecture)

The system is designed to provide instant, context-aware responses to potential clients without human intervention.

1.  **User Submission:** A visitor fills out the "Start a Project" form on the Next.js website.
2.  **Webhook Trigger:** The frontend sends a `POST` request with the JSON payload to an **n8n Webhook**.
3.  **AI Processing:**
    * n8n triggers a custom HTTP Request to the **Cohere API**.
    * The system uses the `command-r-plus-08-2024` model.
    * **Prompt Engineering:** A strict system prompt enforces HTML formatting, tone, and the removal of generic placeholders.
4.  **Email Delivery:** The generated response is injected into a branded HTML email template and sent via **AWS SES**.

### Workflow Diagram
```mermaid
graph LR
    A[Client Frontend] -- JSON Data --> B(n8n Webhook)
    B --> C{Cohere AI API}
    C -- Generated HTML --> D[AWS SES Node]
    D -- Branded Email --> E[User Inbox]