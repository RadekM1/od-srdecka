

const WhereToFindUs = () =>{
    return(
        <div className="bg-[#061E4C] text-center pb-10 flex justify-center w-full ">
            <div className="flex  flex-col self-centers max-w-6xl px-2 text-xl  w-full self-center md:flex-row">
                <div className="w-full h-full self-center justify-center">
                    <div className="flex z-10  justify-center items-center w-full flex-row ">
                        <div className="text-white font-abhaya text-2xl flex-col self-center flex-grow  h-full">
                            <div>Najdete nás v centru Kašavy naproti</div>
                            <div>kostela sv. Kateřiny. Zaparkovat</div>
                            <div>můžete u obecního úřadu.</div>
                            <div className="mt-8">Toš sa ozvěte, rády vám napečeme.</div>
                            <div className="justify-center flex mt-6">
                                <img src="/index/heart-icon.svg" alt="ikona srdce" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center">
                    <div className="flex justify-center flex-row w-full">
                        <div
                        className="flex h-full flex-col justify-center  w-full  items-center"
                        >
                            <div 
                            className="flex h-full justify-center  w-full  items-center">
                                <img
                                className=" object-scale-down w-2/3 md:w-full p-2 duration-300 ease-in-out self-center flex"
                                src="/index/mapa.png"
                                alt="fotka teamu"
                                />
                            </div>
                        </div>
                        <div className="flex items-end self-end h-full ">
                            <div className=" hidden md:block flex-col flex-grow justify-end items-end h-full">
                                <div className="flex self-end mb-3">
                                    <img src="/bocni-srdecka-bila.svg" alt="boční grafika srdcí" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhereToFindUs