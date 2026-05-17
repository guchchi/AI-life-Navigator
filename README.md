# AI Life Navigator ✨

An intelligent, professional-grade AI decision assistant that converts ambitious goals into step-by-step life execution plans. 
**A Product by Ayush Paul Labs.**

---

## 👨‍💻 Creator: Ayush Paul
**Student Builder | Robotics Enthusiast | AI Explorer | Product Creator**

I built this tool to help students navigate their futures using technology. As an INSPIRE MANAK Awardee and World Robotics Olympiad National Competitor, I realized the gap between ambition and execution is often just a lack of clarity. 

🔗 **Connect with me:** [Portfolio](https://ayushpaul.vercel.app) | [LinkedIn](https://www.linkedin.com/in/paulayush/) | [GitHub](https://github.com/guchchi)

---

## 🌐 Live Demo
*Link to be added upon Vercel deployment.*

---

## ⚠️ Problem Statement
Today's students and builders face a unique set of challenges:
1. **Confusion:** Not knowing where to start.
2. **Information Overload:** Infinite tutorials, but no structure.
3. **No Roadmap:** Missing the sequential link between where they are and where they want to be.

---

## 💡 Solution: AI Life Navigator
**AI-powered roadmap generation.** By leveraging advanced Large Language Models (Google Gemini), AI Life Navigator acts as a strategic mentor—synthesizing a concrete, actionable roadmap tailored to your exact aspirations. It converts raw ambition into structured action.

---

## ✨ Features
- **Intelligent Roadmap Generation:** Context-aware strategies tailored to specific goals.
- **Interactive Visual Timeline:** Output is not just text—it's a mission briefing with animated step indicators.
- **"Live Thinking" AI Effect:** See the AI's thought process (Understanding -> Strategy -> Structuring) in real-time.
- **Empty State Intelligence:** Smart starter prompts to eliminate the "blank page" problem.
- **Export Capabilities:** Instantly download your generated execution plans as Markdown.
- **Ecosystem Integration:** Fully integrated into the Ayush Paul Labs portfolio aesthetic.

---

## 🛠 Tech Stack
- **Frontend Framework:** Next.js (App Router, React 19)
- **Styling:** Tailwind CSS (Typography, Forms, Container Queries)
- **AI Engine:** Google Gemini API (`@google/genai` SDK)
- **Icons:** Material Symbols & Lucide React
- **Content Rendering:** React Markdown with custom timeline styling

---

## 📐 Architecture
1. **User Goal Submission:** Client-side form captures aspirations.
2. **Secure Server Action:** Next.js API route securely authenticates with Google Gemini without exposing API keys.
3. **Prompt Engineering:** Specialized "Expert Strategist" system prompt enforces rigid markdown structuring.
4. **Timeline Rendering:** Client-side parser converts markdown into the dynamic vertical timeline.

---

## 📸 Screenshots
> *Add images to the `/public/screenshots` folder.*
- **Landing Page & Creator Profile:** `![Landing Page](/screenshots/hero.png)`
- **Generated Roadmap Timeline:** `![Roadmap Output](/screenshots/roadmap.png)`
- **Creator Details:** `![Creator Details](/screenshots/creator.png)`
- **Visual Timeline:** `![Visual Timeline](/screenshots/timeline.png)`

---

## 🚀 How to Run (Environment Setup)

1. Clone the repository:
   ```bash
   git clone https://github.com/guchchi/ai-life-navigator.git
   cd ai-life-navigator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup Environment Variables:
   Rename `.env.example` to `.env.local` and add your Google Gemini API Key.
   ```env
   GEMINI_API_KEY="your-api-key-here"
   ```

4. Start Development Server:
   ```bash
   npm run dev
   ```

---

## 🔮 Future Vision (Product Roadmap)
- **Phase 1 (Current):** AI Planning Engine
- **Phase 2:** Personal Memory System
- **Phase 3:** Skill Tracking Dashboard
- **Phase 4:** AI Mentor Mode
- **Phase 5:** Ecosystem Integration

---

## 🌍 Ecosystem Philosophy
*AI Life Navigator* is built under the philosophy that AI shouldn't just write code or text for us—it should act as a strategic mentor that empowers human execution. 

Built with intention. Part of [Ayush Paul Labs](https://ayushpaul.vercel.app/lab).
