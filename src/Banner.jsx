import bannerimage from "../public/banner.jpg"
const Banner = () => {
    return (
        <div className="my-10  rounded-3xl" style={{backgroundImage:`url(${bannerimage})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'700px'}}>
          <div className="text-center py-28">
            <h1 className="text-orange-600 text-[50px] font-bold p-8">Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="p-6 text-white text-[20px]">
            Join us and discover why more than just a restaurant - a destination for food lovers,<br/> where every bite tells a story and every visit creates cherished memories.
            </p>
            <div className="py-7 flex justify-center gap-4">
            <button className="btn bg-[#0BE58A] border-none rounded-3xl text-[#150B2B] text-[20px] font-bold ">Explore Now</button>
            <button className="btn rounded-3xl border-[2px] bg-transparent text-[#FFF] text-[20px] font-bold ">Our Feedback</button>
            </div>

          </div>
        </div>

    );
};

export default Banner;