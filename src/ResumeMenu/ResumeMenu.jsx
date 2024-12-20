import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js';

function ResumeMenu ({setIsResumeMenu}){


    const pdfFilePath = '../assets/resume.pdf'
    const handleClick = () => {
        window.open(pdfFilePath, '_blank');
      };

    return (
        <>
            <div className="absolute z-50 top-0 h-40 w-[100vw] flex bg-c1 text-c4 shadow-xl">
                <div className="cursor-pointer flex py-4 justify-center items-center hover:text-c2 pl-4" onClick={() => setIsResumeMenu(false)}>
                    close
                </div>
                <div className="mx-auto flex justify-center items-center text-2xl cursor-pointer hover:text-c2 hover:font-bold" onClick={handleClick}>
                    Resume
                </div>
            </div>
        </>
    )
}

export default ResumeMenu;