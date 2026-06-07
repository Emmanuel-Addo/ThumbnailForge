type DashboardPlaceholderProps = {
  title: string;
  subtitle: string;
};

export default function DashboardPlaceholder({ title, subtitle }: DashboardPlaceholderProps) {
  return (
    <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full">
      <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 border border-green-150 dark:border-green-900/30">
        <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-2xl font-black tracking-tight mb-2 text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-0">
        {subtitle}
      </p>
    </div>
  );
}
