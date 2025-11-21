import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
        {title}
      </h2>
      {subtitle && (
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-amber-500"></div>
          <p className="text-slate-400 text-lg font-light tracking-wide">{subtitle}</p>
          <div className="h-[1px] w-12 bg-amber-500"></div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;