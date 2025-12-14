import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">南投縣技職教育協會</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              致力於推動 AI、數位轉型與技能培育，為地方產業與人才搭建橋樑。
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">聯絡資訊</h3>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>Email: contact@nttvea.org.tw</li>
              <li>電話: 049-2xxxxxx</li>
              <li>地址: 南投縣南投市...</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">關注我們</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Line@</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nantou County Technical and Vocational Education Association. All rights reserved.
        </div>
      </div>
    </footer>
  );
};