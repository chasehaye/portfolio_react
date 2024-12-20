import { useState, useEffect } from 'react'
import ProjectsMenu from './ProjectsMenu/ProjectsMenu'
import TechnologiesMenu from './TechnologiesMenu/TechnologiesMenu'
import ContactsMenu from './ContactsMenu/ContactsMenu'
import ResumeMenu from './ResumeMenu/ResumeMenu'

function App() {
  const [isContactsMenu , setIsContactsMenu] = useState(false);
  const [isResumeMenu, setIsResumeMenu] = useState(false);
  const [isProjectMenu, setIsProjectMenu] = useState(false);
  const [isTechnologiesMenu, setIsTechnologiesMenu] = useState(false);

  useEffect(() => {
    if (isContactsMenu) {
      setIsResumeMenu(false);
      setIsProjectMenu(false);
      setIsTechnologiesMenu(false);
    }
  }, [isContactsMenu]);
  
  useEffect(() => {
    if (isResumeMenu) {
      setIsContactsMenu(false);
      setIsProjectMenu(false);
      setIsTechnologiesMenu(false);
    }
  }, [isResumeMenu]);
  
  useEffect(() => {
    if (isProjectMenu) {
      setIsContactsMenu(false);
      setIsResumeMenu(false);
      setIsTechnologiesMenu(false);
    }
  }, [isProjectMenu]);
  
  useEffect(() => {
    if (isTechnologiesMenu) {
      setIsContactsMenu(false);
      setIsResumeMenu(false);
      setIsProjectMenu(false);
    }
  }, [isTechnologiesMenu]);


  function handleClick1(event) {
    const div = event.target;
    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x > y) {
      setIsResumeMenu(true);
    } else {
      setIsContactsMenu(true);
    }
  }

  function handleClick2(event) {
    const div = event.target;
    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x > y) {
      setIsTechnologiesMenu(true);
    } else {
      setIsProjectMenu(true);
    }
  }

  return (
    <>

    <div className="absolute top-0 left-0">
      <div className="w-40 h-40 bg-c4 cursor-pointer" onClick={handleClick1}></div>
      <div className="absolute top-0 left-40 w-64 h-40 bg-c4 cursor-pointer flex items-center justify-center hover:text-c2 text-xl border-c1 border-r border-b" onClick={() => setIsResumeMenu(true)}><span>Resume</span></div>
      {isResumeMenu && (
        <ResumeMenu 
          setIsResumeMenu={setIsResumeMenu}
        />
      )}
      <div className="absolute top-40 left-0 w-40 h-64 bg-c4 cursor-pointer flex items-center justify-center hover:text-c2 text-xl border-c1 border-b border-r" onClick={() => setIsContactsMenu(true)}><span className="transform -rotate-90">Contacts</span></div>
      {isContactsMenu && (
        <ContactsMenu
          setIsContactsMenu={setIsContactsMenu}
        />
      )}
    </div>

  
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex flex-col text-c2 border-4 border-c1 shadow-c3">
      <div className='text-center text-8xl mb-1 border-b border-c2 pb-4'>Chase</div>
      <div className='text-center text-8xl'>Haye</div>
    </div>

    <div className="absolute bottom-0 right-0 cursor-pointer">
      <div className="w-40 h-40 bg-c4" onClick={handleClick2}></div>
      <div className="absolute bottom-0 right-40 w-64 h-40 bg-c4 cursor-pointer flex items-center justify-center hover:text-c2 text-xl border-c1 border-t border-l" onClick={() => setIsProjectMenu(true)}>Projects</div>
      {isProjectMenu && (
        <ProjectsMenu
          setIsProjectMenu={setIsProjectMenu}
        />
      )}
      <div className="absolute bottom-40 right-0 w-40 h-64 bg-c4 cursor-pointer flex items-center justify-center hover:text-c2 text-xl border-c1 border-t border-l" onClick={() => setIsTechnologiesMenu(true)}><span className="transform rotate-90">Technologies</span></div>
      {isTechnologiesMenu && (
        <TechnologiesMenu setIsTechnologiesMenu={setIsTechnologiesMenu} />
      )}
    </div>

    </>
  )
}

export default App
