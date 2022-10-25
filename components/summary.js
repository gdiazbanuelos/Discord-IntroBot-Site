import Image from 'next/image'

function Summary(){
    return(<>
        <div className="p-6 drop-shadow text-white bg-[#56BBFF] text-center">
            <h1 className="font-bold mb-4 text-2xl">Join Discord with some jazz, literally!</h1>
            <Image src='/static/ed.gif' alt="Sax" width="350px" height="300px"/>
            <p className="mt-6 font-bold text-2xl">When a user joins a Discord voice channel,
            the bot joins in and plays a short sound byte!</p>
        </div>
    </>)
}

export default Summary;