import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <Section id="apply" className="bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="text-center py-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
          準備好分享您的專業了嗎？
        </h2>
        <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
          立即填寫線上講師招募表單，成為南投技職教育協會的一份子，一起為在地培育更多人才。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="outline" 
            className="bg-white text-orange-700 hover:bg-orange-50 border-transparent text-lg px-8 py-4 font-bold"
            onClick={() => window.alert("此為展示按鈕，實際將連結至 Google 表單")}
          >
            填寫招募表單
          </Button>
        </div>
      </div>
    </Section>
  );
};