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
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setExcelData(jsonData);
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
            const uniqueValuesSet = new Set(excelData.map(row=> row[criteria]).filter(Boolean));
            setUniqueValues(Array.from(uniqueValuesSet));
        } else {
            setUniqueValues([]);
        }
    };

    const handleValueChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const formatValue = (value) => {
        if (typeof value === 'string' && value.startsWith('http')) {
            return `<a href="${value}" target="_blank" class="text-blue-600 hover:underline">${value}</a>`;
        }
        return value;
    };

    const matchingData = excelData.filter(row => row[selectedCriteria] === selectedValue);

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4 text-black">View Sharkathon Registration Details ({excelData.length} Teams)</h2>

<div className="flex gap-12">
<div className="mb-4">
                <h3 className="text-xl font-semibold text-black">Select Search Criteria</h3>
                <select 
                    onChange={handleCriteriaChange} 
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                >
                    <option value="">Select Criteria</option>
                    <option value="Team Name ">Team Name</option>
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

            {/* Display Selected Entry Details */}
            <div className="details">
                {matchingData.length > 0 && <h3 className="text-xl font-semibold text-black">Details</h3>}
                {matchingData.map((entry, index) => (
                    <div key={index} className="entry mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                        {Object.entries(entry).map(([key, value]) => (
                            <div key={key} className="detail-item mb-2">
                                <span className="label font-medium text-black">{key}:</span>
                                <span 
                                    className="value ml-2 text-black" 
                                    dangerouslySetInnerHTML={{ __html: formatValue(value) }} 
                                />
                            </div>
                        ))}
                        {index < matchingData.length - 1 && <hr className="my-2 border-gray-200"/>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SharkathonRegistration;
