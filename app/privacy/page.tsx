export default function PrivacyPolicy() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-headline-lg text-on-surface mb-6">Privacy Policy</h1>
        <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface prose-a:text-primary max-w-none">
          <p>Last updated: May 2026</p>
          <p>
            Welcome to AI Life Navigator, part of the <strong>Ayush Paul Ecosystem</strong>. This Privacy Policy outlines how we handle your data when you use our intelligent roadmap generation tools.
          </p>
          <h2>1. Data Collection & Storage</h2>
          <p>
            <strong>No personal data is stored permanently.</strong> This platform is designed as an educational experimentation project. We do not retain, log, or persist your generated roadmaps or session context in a database.
          </p>
          <h2>2. Third-Party Services</h2>
          <p>
            This application utilizes the <strong>Google Gemini API</strong> to process your requests. The text you input is securely transmitted to Google's servers for processing and returned instantly. All API keys are secured strictly server-side and never exposed to the client.
          </p>
          <h2>3. Data Monetization</h2>
          <p>
            <strong>We do not sell user data.</strong> We have zero interest in monetizing your aspirations or tracking your specific goals. 
          </p>
          <p>
            For privacy inquiries, please visit <a href="https://ayushpaul.vercel.app" target="_blank" rel="noreferrer">ayushpaul.vercel.app</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
