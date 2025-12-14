import React from 'react';
import { Section } from './Section';
import { StepItem } from '../types';
import { FileText, Search, Users, Presentation, GraduationCap } from 'lucide-react';

export const Process: React.FC = () => {
  const steps: StepItem[] = [
    {
      id: 1,
      stepNumber: "01",
      title: "線上報名",
      description: "填寫招募表單，提交您的基本資料與履歷。",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: 2,
      stepNumber: "02",
      title: "書面審查",
      description: "審閱您的專業經驗、作品集與應徵動機。",
      icon: <Search className="h-6 w-6" />,
    },
    {
      id: 3,
      stepNumber: "03",
      title: "專業面談",
      description: "約 20-30 分鐘，深入了解您的專業與特質。",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 4,
      stepNumber: "04",
      title: "現場試教",
      description: "約 10-15 分鐘，展現您的教學風格。",
      icon: <Presentation className="h-6 w-6" />,
    },
    {
      id: 5,
      stepNumber: "05",
      title: "正式錄取",
      description: "完成培訓後，納入協會講師人才庫。",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  return (
    <Section className="bg-orange-950 text-white" dark>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          加入我們的五個步驟
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-orange-200 mx-auto">
          簡單透明的流程，開啟您的教學職涯。
        </p>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-orange-800 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-orange-900 rounded-full flex items-center justify-center border-4 border-orange-600 group-hover:border-orange-400 transition-colors duration-300 z-10 mb-6 shadow-xl">
                <div className="text-white">
                    {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.stepNumber}. {step.title}</h3>
              <p className="text-orange-200 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};