import RightArrow from '../assets/arrow_right.svg';

function DashboardView() {
    return (
    <div className="container blue_background">
        <div className="header h-[324px]">
            <p className="text-[39px] text-left pt-[25px] pl-[15px]">welcome back, shart</p>
        </div>
        <div className="card bg-base-100 shadow-sm flex bg-gradient-to-t from-[#FEF9E7] to-white rounded-t-3xl w-[440px] h-[632px]">
            <div className="tan_card">
                <header className="mx-auto flex items-center justify-between w-[350px] bg-black">
                   <h2 className="text-left text-[20px]">My Garden</h2>
                    <div className="card-actions">
                        <img src={RightArrow} className=""/>
                        {/* <button className="btn btn-circle push-right rounded-full h-30px w-30px">&gt;</button> */}
                    </div>
                </header>
                
            </div>
        </div>
    </div>
    );
}

export default DashboardView;