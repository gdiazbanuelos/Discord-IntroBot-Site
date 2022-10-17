import Image from 'next/image'

function Summary(){
    return(<>
        <div className="p-6 drop-shadow text-white bg-[#56BBFF] text-center">
            <h1 className="font-bold mb-4">Join Discord with some jazz, literally!</h1>
            <Image src='/static/ed.gif' alt="Sax" width="350px" height="300px"/>
            <p className="mt-6">💃 My little dancer 💃</p>
        </div>
    </>)
}

export default Summary;