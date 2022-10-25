import Image from 'next/image'

function Documentation(){
    return(<>
        <div className="p-6 text-center drop-shadow text-white bg-[#141617]">
            <h1 className="font-bold mb-4 text-2xl">Running the bot</h1>
            <Image src='/static/ramen.gif' alt="Install" width="350px" height="300px" />
            
            <ol className='list-decimal mt-6 mx-2 text-2xl space-y-2'>
                <li>
                    docker build .
                </li>
                <li>
                    Note the build ID from the step above
                </li>
                <li>
                    docker run buildID
                </li>
            </ol>

            <p className='text-2xl mt-10'>
                To test the bot, type ?bot ping in the Discord server,
                it will respond pong!
            </p>
        </div>
    </>)
}

export default Documentation;