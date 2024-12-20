import React from "react";


// RESUME HERE LOOK AT THE TXT FILE AS WELL
//  add user log in

function ProjectsMenu ({setIsProjectMenu}){
    return (
        <>
            <div className="absolute bottom-0 right-0 w-[100vw] h-40 bg-c1 flex text-c4 z-50 shadow-xl">

                <div className="flex justify-evenly items-center flex-grow">
                    <div className="flex flex-col items-center mx-10 mb-10">
                        <div className="border-b border-c2">
                            GB
                        </div>
                        <div className="flex flex-col items-center hover:text-c2 hover:font-bold" onClick={() => window.open('https://ancient-ravine-47549.herokuapp.com', '_blank')}>
                            <span>Gear</span><span>Box</span>
                        </div>
                        <div className="hover:text-c2 hover:font-bold w-full flex flex-col items-center" onClick={() => window.open('https://github.com/chasehaye/carapp', '_blank')}>
                            app
                        </div>
                    </div>    

                    <div className="flex flex-col items-center mx-10">
                        <div className="border-b border-c2" onClick={() => window.open('https://github.com/chasehaye', '_blank')}>
                            AMM
                        </div>
                        <div className="flex flex-col items-center hover:text-c2 hover:font-bold" onClick={() => window.open('https://amm-client-3d528c57617a.herokuapp.com', '_blank')}>
                            <span>Anime</span><span>Manga</span><span>Manwha</span>
                        </div>
                        <div className="hover:text-c2 hover:font-bold w-full flex flex-col items-center" onClick={() => window.open('https://github.com/chasehaye/amm-frontend', '_blank')}>
                            front
                        </div>
                        <div className="hover:text-c2 hover:font-bold flex flex-col items-center" onClick={() => window.open('https://github.com/chasehaye/amm', '_blank')}>
                            backend
                        </div>
                    </div>  

                    <div className="flex flex-col items-center mx-10 mb-10">
                        <div className="border-b border-c2" >
                            JT
                        </div>
                        <div className="flex flex-col items-center hover:text-c2 hover:font-bold" onClick={() => window.open('https://job-tracker-e607c98177f5.herokuapp.com', '_blank')}>
                            <span>Job</span><span>Track</span>
                        </div>
                        <div className="hover:text-c2 hover:font-bold w-full flex flex-col items-center" onClick={() => window.open('https://github.com/chasehaye/job_tracker', '_blank')}>
                            app
                        </div>
                    </div>       

                </div>

                <div className="cursor-pointer flex py-4 justify-center items-center hover:text-c2 pr-4" onClick={() => setIsProjectMenu(false)}>
                    close
                </div>
            </div>
        </>
    )
}

export default ProjectsMenu;