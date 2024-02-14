import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props){
    const {index, title, description} = props
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}



export default function Generator(props) {
    const {muscles, setMuscles, poison, setPoison, goal, setGoal} = props
    const [showModal, setShowModal] = useState(false)
    
    
    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {

        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
    
        if(muscles.length > 2){
            return
        }
    
        if(poison !== 'individual'){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
    
         setMuscles([...muscles, muscleGroup])
         if(muscles.length === 2){
            setShowModal(false)
         }
    }


  return (
    <div className="min-h-screen ">
        <SectionWrapper 
            header={"generate your workout"}
            title={['It\'s', 'Huge', 'O\'clock' ]}
            >
            <Header index={'01'} title={'Pick your poison'}
                description = {'Select the workout you wish to enjoy'}/>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button 
                        onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }}
                        key={typeIndex} 
                        className={'bg-gray-950 border-2 px-4 py-3 rounded-md  hover:border-yellow-400 ' + (type === poison ? 'border-yellow-500' : 'border-yellow-200')}>
                            <p className="capitalize ">
                                {type.replaceAll('_'," ")}
                            </p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'} title={'Lock on targets'}
                description = {'Select the muscles judged for annihilation'}/>
            <div className="bg-gray-950  border border-solid border-yellow-200 
            rounded-md flex flex-col hover:border-yellow-500">
                <button 
                onClick={toggleModal}
                className="py-3 relative flex items-center justify-center">
                    <p className="uppercase text-xl">
                        {muscles.length === 0 ? 
                        'Select muscle groups': muscles.join(' - ')}
                        </p>
                    <i className='fa-solid fa-caret-down absolute right-3 
                    top-1/2 -translate-y-1/2'></i>
                </button>
                {showModal && (
                    <div className="flex flex-col px-3 pb=3"> 
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button 
                                onClick={() => {
                                    updateMuscles(muscleGroup)
                                }}
                                className="hover:text-yellow-400 py-1 text-lg"
                                key={muscleGroupIndex}>
                                    <p className={"uppercase duration-200 " 
                                    + (muscles.includes(muscleGroup) ? 
                                    'text-yellow-400' : '')}>
                                        {muscleGroup.replaceAll('_', ' ')}
                                    </p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Become Juggernaut'}
                description = {'Select tour ultimate objective'}/>
            <div className="grid grid-cols-3 gap-6">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button 
                        onClick={() => {
                            setGoal(scheme)
                        }}
                        key={schemeIndex} 
                        className={'bg-gray-950 border-2 py-3 rounded-md  hover:border-yellow-400 ' + (scheme === goal ? 'border-yellow-500' : 'border-yellow-200')}>
                            <p className="capitalize ">
                                {scheme.replaceAll('_'," ")}
                            </p>
                        </button>
                    )
                })} 
            </div>

            <Button text={'Formulate'}  />
        </SectionWrapper>
    </div>
  )
}
