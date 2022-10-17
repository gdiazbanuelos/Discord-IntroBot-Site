import Image from 'next/image'

function About(){
    return(<>
        <div className="p-6 text-center drop-shadow text-white bg-[#9899FF]">
            <h1 className="font-bold mb-4">About</h1>
            <Image src='/static/run.gif' alt="Install" width="350px" height="300px"/>
            <p className="mt-6">Me!</p>
        </div>
    </>)
}

export default About;