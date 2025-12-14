import React from 'react';
import { Section } from './Section';
import { RoleItem } from '../types';
import { CheckCircle2, Award } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const roles: RoleItem[] = [
    {
      id: 1,
      title: "AI / 數位技能講師",
      description: "熟悉生成式 AI、程式設計、數位行銷或辦公室應用軟體教學。",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI工具", "程式開發", "數位行銷"]
    },
    {
      id: 2,
      title: "烘焙 / 餐飲 / 技能講師",
      description: "具備專業證照，能帶領學員進行實作練習，培養即戰力。",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["中西餐烹飪", "烘焙實作", "飲品調製"]
    },
    {
      id: 3,
      title: "準講師與助教",
      description: "具備熱忱但經驗較少者，我們提供培訓與見習機會。",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["教學熱忱", "願意學習", "協助課堂"]
    },
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          我們在找你嗎？招募對象
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          無論你是資深專家還是充滿熱忱的新手，我們都有適合你的位置。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {roles.map((role) => (
          <div key={role.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="h-48 w-full overflow-hidden">
                <img src={role.image} alt={role.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{role.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {role.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" /> 必要條件
                </h4>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        具備該領域實務經驗與專業知識
                    </li>
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        良好的溝通表達能力
                    </li>
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        願意配合協會課程 SOP 與行政流程
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-2" /> 加分條件
                </h4>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        具備相關教學經驗
                    </li>
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        擁有個人作品集或實戰案例
                    </li>
                    <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2"></span>
                        能使用 AI 工具輔助教學與教材製作
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </Section>
  );
};