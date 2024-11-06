import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const SharkathonRegistration = () => {
    const FILE_URL = 'registration-data/Sharkathon Registration.xlsx';
    const [excelData, setExcelData] = useState([]);
    const [selectedCriteria, setSelectedCriteria] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [uniqueValues, setUniqueValues] = useState([]);

    useEffect(() => {
        const loadExcelFile = async () => {
            try {
                const response = await fetch(FILE_URL);
                const data = await response.arrayBuffer();
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: false });

                const savedData = localStorage.getItem('sharkathonData');
                if (savedData) {
                    setExcelData(JSON.parse(savedData)); 
                } else {
                    setExcelData(jsonData); 
                }
            } catch (error) {
                console.error('Error loading the Excel file:', error);
            }
        };

        loadExcelFile();
    }, []);

    const handleCriteriaChange = (e) => {
        const criteria = e.target.value;
        setSelectedCriteria(criteria);
        setSelectedValue('');

        if (criteria) {
            const uniqueValuesSet = new Set(excelData.map(row => row[criteria]).filter(Boolean));
            setUniqueValues(Array.from(uniqueValuesSet));
        } else {
            setUniqueValues([]);
        }
    };

    const handleValueChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleAttendanceChange = (teamName) => {
        const updatedData = excelData.map(row =>
            row['Team Name'] === teamName
                ? { ...row, Attended: !row.Attended }
                : row
        );
        setExcelData(updatedData);
        
        // Save the updated data to localStorage
        localStorage.setItem('sharkathonData', JSON.stringify(updatedData));
    };

    const downloadUpdatedExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, workbook.SheetNames[0]);
        XLSX.writeFile(workbook, 'Sharkathon Registration.xlsx');
    };

    const matchingData = excelData.filter(row => row[selectedCriteria] === selectedValue);

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4 text-black">
                Sharkathon Registration Details ({excelData.length} Teams)
            </h2>

            <div className="flex gap-12">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black">Select Search Criteria</h3>
                    <select
                        onChange={handleCriteriaChange}
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="">Select Criteria</option>
                        <option value="Team Name">Team Name</option>
                        <option value="Team Lead Name">Team Lead Name</option>
                    </select>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black">Select Value</h3>
                    <select
                        value={selectedValue}
                        onChange={handleValueChange}
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="">Select Value</option>
                        {uniqueValues.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={downloadUpdatedExcel}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
                Download Updated Excel
            </button>

            <div className="mt-6">
                {matchingData.length > 0 && (
                    <h3 className="text-xl font-semibold text-black">Details</h3>
                )}
                {matchingData.map((entry, index) => (
                    <div key={index} className="entry mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                        {Object.entries(entry).map(([key, value]) => (
                            <div key={key} className="detail-item mt-2 flex justify-between">
                                <span className="label font-medium text-black">{key}:</span>
                                <span className={`ml-2 text-black`}>
                                    {typeof value === 'string' && value.startsWith('http') ? (
                                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {value}
                                        </a>
                                    ) : (
                                        value
                                    )}
                                </span>

                                {key === "Attended" && (
                                    <button
                                        onClick={() => handleAttendanceChange(entry['Team Name'])}
                                        className={`px-6 py-2 w-72 text-white font-bold rounded-md transition-colors duration-200 ${entry.Attended ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                                    >
                                        {entry.Attended ? 'Attended' : 'Not Attended'}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SharkathonRegistration;
