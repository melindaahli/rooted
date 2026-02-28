function DashboardView() {
    return (
    <div className="container bg-gradient-to-t from-[#E2F5FB] to-[#CEEDF8]">
        <h1>Welcome back, shart</h1>
        <div className="card bg-base-100 shadow-sm bg-gradient-to-t from-[#FEF9E7] to-white rounded-t-3xl">
            {/* <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure> */}
            <div className="card-body">
                <h2 className="card-title text-left">My Garden</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-circle push-right rounded-full h-30px w-30px">&gt;</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default DashboardView;