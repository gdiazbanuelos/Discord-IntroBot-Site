import Image from 'next/image'

function Install(){
    return(<>
        <div className="p-6 text-center drop-shadow text-white bg-[#FF9999]">
            <h1 className="font-bold mb-4 text-3xl">Install the bot</h1>
            <Image src='/static/chill.gif' alt="Install" width="350px" height="300px"/>
            
            <ol className='list-decimal mt-6 text-2xl space-y-2'>
                <li>Download the <a href='https://github.com/gdiazbanuelos/Discord-IntroBot'
                target="_blank" className='text-blue underline'>source code</a>
                </li>
                <li>
                    Fill out the users.json file
                </li>
                <li>
                    Open bot.py and fill in for #YOUR_DATA
                </li>
            </ol>
        </div>
    </>)
}

export default Install;