import Heart from "../assets/heart.svg";

function HealthScoreHeart(props:any) {
    return (
    <div className="relative inline-block">
        <p className="absolute top-1/2 left-1/2 
                          -translate-x-1/2 -translate-y-1/2 
                          m-0 font-bold z-10">{props.score}</p> 
        <img src={Heart} alt="heart" className="scale-70 z-0" />
    </div>
    );
}

export default HealthScoreHeart;