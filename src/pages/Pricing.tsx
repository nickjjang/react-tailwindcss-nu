import Assets from "../assets/assets";

const Pricing = () => {
    return (
        <>
        <div className="px-4 lg:container lg:mx-auto">
            <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
                Pricing
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
                <div className="md:p-2 lg:px-10">
                    <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 relative rounded-xl shadow-2xl bg-gray-100 lg:max-w-sm p-10">
                        <img src={Assets.images.markFree} className="w-20 absolute top-0 right-0 transform -translate-y-3" alt="nu free"/>
                        <div className="flex justify-between items-baseline md:max-w-md">
                            <h2 className="font-mont-bold text-2xl md:text3xl">nu.edu</h2>
                        </div>
                        <ul className="list-none mt-10 mb-5 lg:max-w-sm">
                            <li>
                                <img src={Assets.images.iconEdu1} className="icon lg mr-10" alt="Edu"/>
                                <span>Unlimited missions</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu2} className="icon lg mr-10" alt="Edu"/>
                                <span>Mission Store</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu3} className="icon lg mr-10" alt="Edu"/>
                                <span>Basic Analytics</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu4} className="icon lg mr-10" alt="Edu"/>
                                <span>LMS</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu5} className="icon lg mr-10" alt="Edu"/>
                                <span>Skill learning</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu6} className="icon lg mr-10" alt="Edu"/>
                                <span>Event and online learning</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu7} className="icon lg mr-10" alt="Edu"/>
                                <span>Social</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu8} className="icon lg mr-10" alt="Edu"/>
                                <span>Mission editor</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu9} className="icon lg mr-10" alt="Edu"/>
                                <span>Content - CDN</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconEdu10} className="icon lg mr-10" alt="Edu"/>
                                <span>Feature requests</span>
                            </li>
                            <li>
                                <button className="w-full py-3 bg-black active:bg-indigo-800 text-white rounded-xl focus:outline-none">Calculate</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:p-2 lg:px-10 mt-16 md:mt-0">
                    <div className="transition delay-150 duration-300 ease-in-out transform hover:scale-105 relative rounded-xl shadow-2xl bg-gray-100 lg:max-w-sm p-10">
                        <img src={Assets.images.markLxp} className="w-20 absolute top-0 right-0 transform -translate-y-3" alt="nu lxp"/>
                        <div className="flex justify-between items-baseline md:max-w-md">
                            <h2 className="font-mont-bold text-2xl md:text3xl">nu.lxp</h2>
                        </div>

                        <ul className="list-none mt-10 mb-5 lg:max-w-sm">
                            <li>
                                <img src={Assets.images.iconLxp1} className="icon lg mr-10" alt="Edu"/>
                                <span>Event Manager</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp2} className="icon lg mr-10" alt="Lxp"/>
                                <span>Recommendation AI</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp3} className="icon lg mr-10" alt="Lxp"/>
                                <span>Synchronous Learning</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp4} className="icon lg mr-10" alt="Lxp"/>
                                <span>24/7 Support</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp5} className="icon lg mr-10" alt="Lxp"/>
                                <span>FSL for Students</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp6} className="icon lg mr-10" alt="Lxp"/>
                                <span>SSO integration</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp7} className="icon lg mr-10" alt="Lxp"/>
                                <span>MS Office integration</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp8} className="icon lg mr-10" alt="Lxp"/>
                                <span>AI analytics</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp9} className="icon lg mr-10" alt="Lxp"/>
                                <span>Calendar</span>
                            </li>
                            <li>
                                <img src={Assets.images.iconLxp10} className="icon lg mr-10" alt="Lxp"/>
                                <span>Shop Manager</span>
                            </li>
                            <li>
                                <button className="w-full py-3 bg-black active:bg-indigo-800 text-white rounded-xl focus:outline-none">Calculate</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Pricing;