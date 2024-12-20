import React from "react";
import aws from '../assets/aws.png';
import c from '../assets/c-.png';
import css from '../assets/css-3.png';
import django from '../assets/django.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import nodejs from '../assets/node-js.png';
import python from '../assets/python.png';
import tailwindcss from '../assets/tailwindcss.png';
import postgresql from '../assets/postgres.png';
import js from '../assets/js.png';
import github from '../assets/github.png';
import heroku from '../assets/heroku.png';
import reagent from '../assets/physics.png';



function TechnologiesMenu ({setIsTechnologiesMenu}){
    return (
        <>
            <div className="absolute bottom-0 right-0 w-40 bg-c1 h-[100vh] z-50 flex flex-col text-c4 shadow-xl">
                <div className="flex flex-col justify-evenly items-center flex-grow pt-4 gap-4">
                    <div className="flex gap-3">
                        <img src={js} alt="JS" className="h-12 w-12" />
                        <img src={c} alt="C/C++" className="h-12 w-12" />
                    </div>
                    <div className="flex gap-3">
                        <img src={html} alt="HTML" className="h-12 w-12" />
                        <img src={java} alt="Java" className="h-12 w-12" />
                    </div>
                    <div className="flex gap-3">
                        <img src={css} alt="CSS" className="h-12 w-12" />
                        <img src={python} alt="Python" className="h-12 w-12" />
                    </div>
                    <div className="flex gap-3">
                        <img src={nodejs} alt="Node" className="h-12 w-12" />
                        <img src={django} alt="django" className="h-12 w-12"/>
                    </div>
                    <div className="flex gap-3">
                        <img src={reagent} alt="React" className="h-12 w-12" />
                        <img src={postgresql} alt="postgreSQL" className="h-12 w-12" />
                    </div>
                    <div className="flex gap-3">
                        <img src={tailwindcss} alt="tailwind" className="h-12 w-12" />
                        <img src={python} alt="Python" className="h-12 w-12" />
                    </div>
                    <div className="flex gap-3">
                        <img src={heroku} alt="Heroku" className="h-12 w-12" />
                        <img src={github} alt="github" className="h-12 w-12" />
                    </div>
                </div>
                <div className="cursor-pointer flex py-4 justify-center hover:text-c2" onClick={() => setIsTechnologiesMenu(false)}>
                    close
                </div>
            </div>
        </>
    )
}

export default TechnologiesMenu;