import Image from 'next/image'

function Install(){
    return(<>
        <div className="p-6 text-center drop-shadow text-white bg-[#FF9999]">
            <h1 className="font-bold mb-4">Install the bot</h1>
            <Image src='/static/chill.gif' alt="Install" width="350px" height="300px"/>
            <p className="mt-6">🤠 Howdy Cowboy 🤠</p>
        </div>
    </>)
}

export default Install;