export default function Case() {
    return (
        <>
            <div className="bg-gray-100 p-4">
                <h2 className="text-3xl font-bold text-center mb-4">成功案例</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="case1.jpg" className="w-full h-48 object-cover" alt="..."/>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">案例名称</h3>
                            <p className="text-gray-600 mt-1">案例描述...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
