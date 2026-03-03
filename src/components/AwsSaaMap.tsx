import React, { useState, useMemo } from 'react';
import keywordsData from '../assets/data/aws-saa-keywords.json';

const AwsSaaMap = () => {
    const [search, setSearch] = useState('');
    const [testMode, setTestMode] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const cats = new Set(keywordsData.map(item => item.category));
        return ['All', ...Array.from(cats)];
    }, []);

    const filteredKeywords = useMemo(() => {
        return keywordsData.filter(item => {
            const matchesSearch = item.keyword.toLowerCase().includes(search.toLowerCase()) ||
                item.answer.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory]);

    return (
        <div className="my-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-6">
                <input
                    type="text"
                    placeholder="키워드 또는 서비스 검색..."
                    className="w-full md:max-w-xs px-4 py-2 rounded border border-skin-line bg-skin-fill focus:outline-none focus:ring-1 focus:ring-skin-accent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-4 items-center">
                    <select
                        className="px-3 py-2 rounded border border-skin-line bg-skin-fill focus:outline-none"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <label className="flex items-center cursor-pointer gap-2">
                        <input
                            type="checkbox"
                            checked={testMode}
                            onChange={() => setTestMode(!testMode)}
                            className="w-4 h-4 accent-skin-accent"
                        />
                        <span className="text-sm">암기 모드 (정답 가리기)</span>
                    </label>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-skin-line">
                            <th className="py-2 px-4 font-bold text-skin-base">키워드 (질문)</th>
                            <th className="py-2 px-4 font-bold text-skin-base text-center">정답 (서비스)</th>
                            <th className="py-2 px-4 font-bold text-skin-base text-right">카테고리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredKeywords.length > 0 ? filteredKeywords.map((item, index) => (
                            <tr key={index} className="border-b border-skin-line hover:bg-skin-card-muted transition-colors">
                                <td className="py-3 px-4 text-skin-base">{item.keyword}</td>
                                <td className="py-3 px-4 text-center">
                                    <span className={`px-2 py-1 rounded transition-all duration-300 ${testMode ? 'bg-skin-accent text-skin-accent cursor-pointer hover:bg-opacity-80' : 'bg-transparent text-skin-accent'}`}>
                                        {testMode ? '클릭해서 보기' : item.answer}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-right text-sm text-skin-base opacity-80">{item.category}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3} className="py-8 text-center text-skin-base opacity-60">일치하는 키워드가 없습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <p className="mt-4 text-xs italic opacity-60">
                * "암기 모드"가 켜져 있으면 정답이 가려집니다. 정답을 확인하려면 해당 영역을 마우스로 가리키거나 클릭하세요 (또는 모드를 끄세요).
            </p>
        </div>
    );
};

export default AwsSaaMap;
