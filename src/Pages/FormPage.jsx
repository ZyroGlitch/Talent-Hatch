import React, { useState } from 'react';
import axios from 'axios';

export default function FormPage() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // Handle file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            alert('Please select a PDF file.');
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (file && name) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('uploaded_resume', file);

            try {
                // Send the form data to n8n webhook
                const response = await axios.post(
                    'https://bentagud.app.n8n.cloud/webhook-test/talent_hatch', // Webhook URL
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data', // Ensure correct header for file upload
                        },
                    }
                );

                // Check the response status from n8n
                if (response.status === 200) {
                    // Display the response from the webhook
                    console.log('Response from n8n:', response.data);
                    setResponseMessage(`Success: ${response.data.message}`);
                } else {
                    alert('Error submitting form.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            }
        } else {
            alert('Please fill in all fields and upload a PDF.');
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Submit Your Form</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                    <label className="block text-sm font-semibold">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Upload PDF:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit Form
                </button>
            </form>

            {/* Display the response message */}
            {responseMessage && (
                <div className="mt-4 text-center text-green-600">{responseMessage}</div>
            )}
        </div>
    );
}