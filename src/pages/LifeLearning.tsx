import Assets from "../assets/assets";

const LifeLearning = () => {
    return (
        <>
        <div className="px-4 lg:container lg:mx-auto">
            <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
                Life long learning
            </h1>
            <div className="px-4 mt-24 flex justify-center relative">
                <img src={Assets.images.homeLearning} className="md:w-2/3" alt="Life long learning"/>
                <img src={Assets.images.iconPlay} className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Play" />
            </div>

            <div className="mb-20 flex flex-col justify-center items-center">
                <h1 className="text-center font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36">
                    Lorem Ipsum
                </h1>
                <p className="text-center mt-5">
                    Modular design, personalized learning environment & global applicability.
                </p>
                <p className="text-center mt-5 max-w-3xl">
                    nu is based on a modular micro service structure which makes it easy to expand and adapt the software in the future.
                    Furthermore this structure enables us to implement our software into the existing school environment without difficulty.
                </p>
                
                <div className="mt-20 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconFolder} className="w-8 h-8" alt="AI trained learning"/>
                    <p>AI trained learning</p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconStar} className="w-8 h-8" alt="NextGen technologies"/>
                    <p>NextGen technologies</p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconChart} className="w-8 h-8" alt="Scalability from the root"/>
                    <p>Scalability from the root</p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconClock} className="w-8 h-8" alt="Decades of experience in developing HUBs"/>
                    <p>Decades of experience in developing HUBs</p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconNote} className="w-8 h-8" alt="Personalised AI recommendation"/>
                    <p>Personalised AI recommendation</p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center">
                    <img src={Assets.images.iconRoll} className="w-8 h-8" alt="Designed for world-wide roll-out"/>
                    <p>Designed for world-wide roll-out</p>
                </div>
            </div>
        </div>
      </>
    );
};

export default LifeLearning;