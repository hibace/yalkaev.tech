// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-dark text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Nick Ialkaev</p>
        <div className="mt-2 md:mt-0 space-x-4">
          <a href="https://t.me/yalkaev" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}