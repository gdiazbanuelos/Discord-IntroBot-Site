function DynamicHeader() {
    return (<>
        <header className="p-8 pb-3 text-center">
            <div>
                <h1 className="text-center font-bold text-3xl">Discord Intro Bot</h1>
            </div>

            <div className="flex justify-center space-x-6 mt-6">
                <div>Install</div>
                <div>Documentation</div>
                <div>About</div>
            </div>
        </header>
    </>)
}

export default DynamicHeader;