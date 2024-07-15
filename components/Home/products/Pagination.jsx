const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex space-x-2">
            {currentPage > 1 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    قبلی
                </button>
            )}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 ${page === currentPage ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded">
                    بعدی
                </button>
            )}
        </div>
    )
}

export default Pagination