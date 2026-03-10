import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRef } from "react";


const UrlForm = () => {

    const urlRef = useRef(null);
    const [url, setUrl] = useState('')
    const [shortenedUrl, setShortenedUrl] = useState('')

    const handleShorten = async () => {

        const { data } = await axios.post('http://localhost:8000/api/create/', { url })
        setShortenedUrl(data)

    }

    const handleCopy = () => {
        urlRef.current.select(); // select text
        navigator.clipboard.writeText(urlRef.current.value); // copy
    };
 

    return (
        <>
            <div className="space-y-4">

                <input
                    type="url"
                    placeholder="Enter your long URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />

                <button
                    onClick={handleShorten}
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                    Shorten URL
                </button>
            </div>

            {shortenedUrl && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Shortened URL:</p>

                    <div className="flex gap-3">
                        <input
                            ref={urlRef}
                            value={shortenedUrl}
                            readOnly
                            className="flex-1 px-3 py-2 border rounded font-mono text-indigo-600"
                        />

                        <button
                            onClick={handleCopy}
                            className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Copy
                        </button>
                      
                    </div>
                </div>
            )}

        </>
    )
}

export default UrlForm