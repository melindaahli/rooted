import Heart from "../assets/heart.svg";

function FavoritePlant(props: any) {
    return (
        <div className="plant-card z-0 flex-shrink-0" >
            <div className="relative inline-block z-0">
                <img src={props.fakeplant} className="pt-[32px] z-10"/>
                <img src={Heart} alt="heart" className="scale-30 absolute top-1/8 left-1/4 
                            translate-x-1/3 -translate-y-2/5
                            m-0 font-bold z-50" />
            </div>
        </div>
    )
}

export default FavoritePlant;