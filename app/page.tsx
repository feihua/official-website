import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">公司名称</Link>
                <div className="flex items-center">
                    <Link href="/" className="px-4">首页</Link>
                    <Link href={"/me"} className="px-4">关于我们</Link>
                    <Link href={"/service"} className="px-4">服务</Link>
                    <Link href={"/case"} className="px-4">案例</Link>
                    <Link href={"/connect"} className="px-4">联系</Link>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded">免费咨询</button>
                </div>
            </nav>

            <div className="carousel relative shadow-md rounded-lg overflow-hidden">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <img src="/a.jpg" className="block w-full" alt="..."/>
                    <img src="/a.jpg" className="block w-full" alt="..."/>
                </div>
                <button className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <button className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>


            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <p>© 2023 公司名称. 保留所有权利.</p>
                    <div>
                        <a href="#" className="text-white hover:underline mx-2">隐私政策</a>
                        <a href="#" className="text-white hover:underline mx-2">使用条款</a>
                        <a href="#" className="text-white hover:underline mx-2">联系我们</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
