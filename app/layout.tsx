import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import PageShell from '../components/PageShell';
import ContactButton from '../components/ContactButton';

export const metadata: Metadata = {
  title: 'duckydev - Portfolio',
  description: 'Roblox backend & frontend developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        {/* Floating top nav */}
        <Header />

        {/* Page transition shell */}
        <PageShell>{children}</PageShell>

        {/* Footer / Contact */}
        <footer id="contact" className="container section">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <div className="flex gap-3 flex-wrap">
            {/* Discord popup: replace the user id + handle */}
            <ContactButton
              label="Discord"
              headline="Discord"
              display="@duckydev"
              copyValue="@duckydev"
              linkUrl="https://discord.com/users/830602168699846667"
              linkLabel="Link"
            />

            {/* Email popup: replace with your email */}
            <ContactButton
              label="Email"
              headline="Email"
              display="alternateducky5@gmail.com"
              copyValue="alternateducky5@gmail.com"
            />
          </div>

          <p className="opacity-70 mt-6">
            © {new Date().getFullYear()} DuckyDev. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
