
const DemoWidget = () => {
    const path1 = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    const path2 = 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <div className="grid grid-cols-2 gap-5 h-full">
            <div className="flex flex-col items-center justify-between w-full h-full rounded-lg border border-slate-100 shadow-lg">
            <div className="bg-top bg-no-repeat bg-cover w-full h-full rounded-tr-lg rounded-b-lg bg-primary p-4 flex justify-center items-center"
                    style={{ backgroundImage: `url(${path1})` }}>
                </div>
                <div className="w-full p-4 flex flex-col justify-between items-start">
                    <p className="font-bold">Spend more earn more</p>
                    <p>{'8% Cashback with livi Debit MasterCard'}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full rounded-lg border border-slate-100 shadow-lg">
                <div className="bg-center bg-no-repeat bg-cover w-full h-full rounded-tr-lg rounded-b-lg bg-primary p-4 flex justify-center items-center"
                    style={{ backgroundImage: `url(${path2})` }}>
                </div>
                <div className="w-full p-4 flex flex-col justify-between items-start">
                    <p className="font-bold">Spend more earn more</p>
                    <p>{'8% Cashback with livi Debit MasterCard'}</p>
                </div>
            </div>
        </div>
    )
}

export default DemoWidget