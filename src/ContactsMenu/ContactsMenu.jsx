import { useState } from 'react'

function ContactsMenu ({ setIsContactsMenu }){

    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [showGitHuB, setShowGitHub] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);


    return (
        <>
            <div className="absolute top-0 left-0 w-40 bg-c1 text-c4 h-[100vh] z-50 flex flex-col shadow-xl">
                <div className="cursor-pointer flex py-4 justify-center hover:text-c2" onClick={() => setIsContactsMenu(false)}>
                    close
                </div>
                <div className="flex flex-col justify-evenly items-center flex-grow">
                    <div className="flex-shrink-0">
                        <button className="w-full hover:text-c3 hover:font-bold" onClick={() => setShowEmail(prevState => !prevState)}>Email</button>
                        <div className={`w-full mt-2 text-center border-t border-c3 h-[30px]`}>
                            <div className={`${showEmail ? 'block' : 'hidden'}`}>
                                chasehayejoc<br/>@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="w-full hover:text-c3 hover:font-bold" onClick={() => setShowPhone(prevState => !prevState)}>Phone</button>
                        <div className={`w-full mt-2 text-center border-t border-c3 h-[30px]`}>
                            <div className={`${showPhone ? 'block' : 'hidden'}`}>
                                805-794-5988
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="w-full hover:text-c3 hover:font-bold" onClick={() => setShowGitHub(prevState => !prevState)}>github</button>
                        <div className={`w-full mt-2 text-center border-t border-c3 h-[30px]`}>
                            <div className={`${showGitHuB ? 'block' : 'hidden'}`}>
                                <div 
                                onClick={() => window.open('https://github.com/chasehaye', '_blank')}
                                className="cursor-pointer hover:text-c2 hover:font-bold">
                                    /chasehaye
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="w-full hover:text-c3 hover:font-bold" onClick={() => setShowLinkedIn(prevState => !prevState)}>Linkedin</button>
                        <div className={`w-full mt-2 text-center border-t border-c3 h-[30px]`}>
                            <div className={`${showLinkedIn ? 'block' : 'hidden'}`}>
                                <div 
                                onClick={() => window.open('https://www.linkedin.com/in/chase-haye/', '_blank')}
                                className="cursor-pointer hover:text-c2 hover:font-bold">
                                    /chase-haye
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col">
                        <div className='flex text-center mb-2'>
                            Quickest ways <br/> to connect
                        </div>
                        <div>
                            1. text
                        </div>
                        <div>
                            2. email
                        </div>
                        <div>
                            3. call
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactsMenu;