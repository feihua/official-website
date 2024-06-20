export default function Service() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">服务名称</h3>
                        <p className="text-gray-600 mt-1">服务描述...</p>
                    </div>
                </div>
            </div>
        </>
    );
}
