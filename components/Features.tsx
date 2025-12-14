import React from 'react';
import { Section } from './Section.tsx';
import { FeatureItem } from '../types.ts';
import { Building2, MonitorPlay, Award, HeartHandshake } from 'lucide-react';

export const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "自有訓練基地",
      description: "提供穩定、可長期規劃的實體教學場域，讓您無需為場地奔波。",
      icon: <Building2 className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 2,
      title: "完整專業設備",
      description: "配置高品質電腦、影音與技職實作工具，教學設備一應俱全。",
      icon: <MonitorPlay className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 3,
      title: "TTQS 品質保證",
      description: "具備多年政府專案經驗與系統化教學支援，流程專業有保障。",
      icon: <Award className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 4,
      title: "深具社會影響力",
      description: "專注於偏鄉與弱勢族群，讓您的專業不只是教學，更是改變生命。",
      icon: <HeartHandshake className="h-8 w-8 text-orange-600" />,
    },
  ];

  return (
    <Section id="features" className="bg-orange-50/50">
      <div className="text-center mb-16">
        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Why Choose Us?</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          為何選擇我們？四大核心優勢
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-orange-100">
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg mb-5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};