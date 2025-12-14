import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Classroom teaching"
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          成為改變的力量
          <span className="block text-blue-300 mt-2 text-2xl sm:text-4xl">南投縣技職教育協會講師招募</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-100 mb-10 leading-relaxed">
          我們致力於為講師提供穩定的教學環境與專業支持，共同為偏鄉及弱勢族群提供高品質的技能培訓。
          加入我們，推動「AI x 數位轉型 x 技能培育」的使命。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
            立即加入我們
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            了解更多優勢
          </Button>
        </div>
      </div>
    </div>
  );
};