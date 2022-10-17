import Image from 'next/image'

function Documentation(){
    return(<>
        <div className="p-6 text-center drop-shadow text-white bg-[#141617]">
            <h1 className="font-bold mb-4">Documentation</h1>
            <Image src='/static/ramen.gif' alt="Install" width="350px" height="300px" />
            <p className="mt-6">🚀 See You Space Cowboy 🚀</p>
        </div>
    </>)
}

export default Documentation;