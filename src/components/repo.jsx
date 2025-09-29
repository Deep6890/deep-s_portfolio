import React, { useEffect, useState } from 'react';

function RepoCard({ owner, repo }) {
    const [repoData, setRepoData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/Deep6890/CmDZeN`)
            .then(res => res.json())
            .then(data => setRepoData(data))
            .catch(err => console.error(err));
    }, [owner, repo]);

    if (!repoData) return <div className="text-white">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 rounded-md shadow-lg p-6 font-sans text-gray-100">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-blue-400 hover:underline cursor-pointer">
                    <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
                        {repoData.full_name}
                    </a>
                </h2>
                <div className="flex space-x-4">
                    <button
                        className="flex items-center space-x-1 px-3 py-1 border border-gray-700 rounded hover:bg-gray-800"
                        aria-label="Star this repository"
                    >
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="text-gray-400"
                        >
                            <path d="M8 12.023l-3.716 2.105 1-4.177-3.209-2.79 4.232-.367L8 3.52l1.693 3.274 4.232.367-3.209 2.79 1 4.176z"></path>
                        </svg>
                        <span>{repoData.stargazers_count}</span>
                    </button>
                    <button
                        className="flex items-center space-x-1 px-3 py-1 border border-gray-700 rounded hover:bg-gray-800"
                        aria-label="Fork this repository"
                    >
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="text-gray-400"
                        >
                            <path fillRule="evenodd" d="M5 3.09V1.5a.5.5 0 011 0v1.59a3 3 0 11-1 0z"></path>
                            <path d="M8 3h3.5a.5.5 0 01.5.5v3a3.5 3.5 0 11-2 0V5H8v2.5a3.5 3.5 0 11-2 0v-3a.5.5 0 01.5-.5H8z"></path>
                        </svg>
                        <span>{repoData.forks_count}</span>
                    </button>
                </div>
            </div>
            <p className="mb-4 text-gray-300">{repoData.description}</p>
            {repoData.topics && repoData.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {repoData.topics.map((topic) => (
                        <span
                            key={topic}
                            className="bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-300 font-medium"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            )}
            <div className="border-t border-gray-700 pt-4 text-sm text-gray-400 flex space-x-6">
                <div>
                    Default branch:{" "}
                    <span className="font-medium text-gray-200">{repoData.default_branch}</span>
                </div>
                <div>
                    Open issues:{" "}
                    <span className="font-medium text-gray-200">{repoData.open_issues_count}</span>
                </div>
            </div>
        </div>
    );
}

export default RepoCard;
