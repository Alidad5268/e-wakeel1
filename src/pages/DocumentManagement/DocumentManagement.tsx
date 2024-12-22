import React, { useState } from "react";

interface Document {
  id: number;
  title: string;
  type: string;
  date: string;
  imageSrc: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Confidentiality Agreement",
    type: "Contract",
    date: "August 5, 2024",
    imageSrc:
      "https://cdn.slidesharecdn.com/ss_thumbnails/legaldocumentsonline-1231237333736279-1-thumbnail.jpg?width=640&height=640&fit=bounds", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Rental Agreement - Jane Smith",
    type: "Authorization",
    date: "July 25, 2024",
    imageSrc:
      "https://cdn.slidesharecdn.com/ss_thumbnails/legaldocumentsonline-1231237333736279-1-thumbnail.jpg?width=640&height=640&fit=bounds",
  },
  {
    id: 3,
    title: "Non-Disclosure Agreement",
    type: "Case Deal",
    date: "September 5, 2024",
    imageSrc:
      "https://cdn.slidesharecdn.com/ss_thumbnails/legaldocumentsonline-1231237333736279-1-thumbnail.jpg?width=640&height=640&fit=bounds",
  },
];

const DocumentManagement: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocuments, setFilteredDocuments] =
    useState<Document[]>(documents);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      setFilteredDocuments(documents);
    } else {
      setFilteredDocuments(
        documents.filter((doc) =>
          doc.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="flex mt-20">
      {/* Sidepane */}
      <div className="w-64 bg-gray-50 border-r p-4 hidden md:block overflow-y-auto">
        <button className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600">
          Upload New Document
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">My Documents</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              View All Documents
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Starred Documents
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Affidavit of Support
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Rental Agreement
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Folders</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Active Cases
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Contracts & Agreements
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">
              Litigation Documents
            </li>
          </ul>
          <button className="mt-4 px-4 py-2 rounded-lg cursor-pointer w-full bg-gray-200">
            Show More
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Search and Sort Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[79%]"
            />
            <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
              Sort By
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
              Filter By
            </button>
          </div>
        </div>

        <h2 className="mt-8 text-lg font-semibold">Uploaded Documents</h2>
        <p className="text-gray-500">Recent</p>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="relative group border rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={doc.imageSrc}
                alt={doc.title}
                className="rounded-t-lg w-full h-40 object-cover bg-cover cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-gray-500 text-sm">{doc.type}</p>
                <p className="text-gray-400 text-xs">Created: {doc.date}</p>
              </div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity">
                <button
                  onClick={() => setSelectedDocument(doc)}
                  className="bg-white rounded-full p-2 hover:scale-110 transition"
                  title="View"
                >
                  👁️
                </button>
                <button
                  className="bg-white rounded-full p-2 hover:scale-110 transition"
                  title="Star"
                >
                  ⭐
                </button>
                <button
                  className="bg-white rounded-full p-2 hover:scale-110 transition"
                  title="Download"
                >
                  ⬇️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Document Preview Modal */}
        {selectedDocument && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-h-[90vh] overflow-y-auto shadow-lg relative">
              <button
                onClick={() => setSelectedDocument(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✖
              </button>
              <h3 className="text-xl font-bold">{selectedDocument.title}</h3>
              <p className="mt-2 text-gray-500">{selectedDocument.type}</p>
              <img
                src={selectedDocument.imageSrc}
                alt={selectedDocument.title}
                className="mt-4 rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentManagement;
