import { useState, useEffect, useRef } from 'react';

export default function LinkExerciceType({ hardata, finished, logResults, empty, setEmpty, setIndex, index, setLogResults, validation, setValidation, changed, setChanged, setError, setSuccess }) {
    
    const [firstColumnSelected, setFirstColumnSelected] = useState(null)
    const [secondColumnSelected, setSecondColumnSelected] = useState(null)
    const [shuffledSecondColumn, setShuffledSecondColumn] = useState([])

    useEffect(() => {
        // Initialiser le tableau mélangé une seule fois
        const shuffledColumn = [...hardata.data.map(item => item.output.value)].sort(() => Math.random() - 0.5);
        setShuffledSecondColumn(shuffledColumn);
    }, [hardata.data]);

    const [linkedPairs, setLinkedPairs] = useState([])
    const [unlinkedPairs, setUnlinkedPairs] = useState([])

    useEffect(() => {
        if (unlinkedPairs.length > 0) {
            const timeoutId = setTimeout(() => {
                setUnlinkedPairs([]);
            }, 60);
            return () => clearTimeout(timeoutId);
        }
    }, [unlinkedPairs]);

    useEffect(() => {
        if (firstColumnSelected !== null || secondColumnSelected !== null || linkedPairs.length > 0) {
            setChanged(false);
        } else {
            setChanged(true);
        }
    }, [firstColumnSelected, secondColumnSelected, linkedPairs, setChanged]);

    const handleFirstColumnClick = (index) => {
        if (secondColumnSelected !== null) {
            setFirstColumnSelected(index);
            checkLink(index, secondColumnSelected);
        } else {
            setFirstColumnSelected(firstColumnSelected === index ? null : index);
        }
    }

    const handleSecondColumnClick = (index) => {
        if (firstColumnSelected !== null) {
            setSecondColumnSelected(index);
            checkLink(firstColumnSelected, index);
        } else {
            setSecondColumnSelected(secondColumnSelected === index ? null : index);
        }
    }

    const checkLink = (firstIndex, secondIndex) => {
        const selectedFirstColumnWord = hardata.data[firstIndex].input.value;
        const selectedSecondColumnWord = shuffledSecondColumn[secondIndex];

        const linkedWord = hardata.data.find(item => item.input.value === selectedFirstColumnWord).output.value;

        if (linkedWord === selectedSecondColumnWord) {
            const newLinkedPairs = [...linkedPairs, [firstIndex, secondIndex]];
            setLinkedPairs(newLinkedPairs);
            setFirstColumnSelected(null);
            setSecondColumnSelected(null);

            // Set success message
            setSuccess({ state: true, text: "Bravo, vous avez trouvé une paire !" });
        } else {
            const newUnlinkedPairs = [...unlinkedPairs, [firstIndex, secondIndex]];
            setUnlinkedPairs(newUnlinkedPairs);
            setTimeout(() => {
                setFirstColumnSelected(null);
                setSecondColumnSelected(null);
            }, 60);

            // Set error message
            setError({ state: true, text: "Désolé, cette paire ne correspond pas." });
        }

        if (linkedPairs.length === hardata.data.length - 1) {
            // Set validation state
            setValidation(true);
        }
    }

    const continueButtonRef = useRef(null);

    useEffect(() => {
        if (validation && !logResults && !finished && continueButtonRef.current) {
            continueButtonRef.current.click();
        }
    }, [validation, logResults, finished, continueButtonRef]);

    return (
        <>
            <div className="flex flex-row w-[1000px] py-8 h-full gap-8 bg-gray-700">
                <div className="flex flex-col flex-1 h-full w-full gap-6">
                    {/* Mapper sur le premier groupe */}
                    {hardata.data.map((item, index) => (
                        <button
                            key={index}
                            className={`flex text-center justify-center items-center p-4 border-2 border-gray-500 rounded-xl ${linkedPairs.some(pair => pair[0] === index) ? 'bg-green-500' : firstColumnSelected === index ? 'bg-blue-500' : unlinkedPairs.some(pair => pair[0] === index) ? 'bg-red-500' : ''}`}
                            onClick={() => handleFirstColumnClick(index)}
                            disabled={linkedPairs.some(pair => pair[0] === index)}
                        >
                            {item.input.value}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col flex-1 h-full w-full gap-6">
                    {/* Mapper sur le deuxième groupe */}
                    {shuffledSecondColumn.map((item, index) => (
                        <button
                            key={index}
                            className={`flex text-center justify-center items-center p-4 border-2 border-gray-500 rounded-xl ${linkedPairs.some(pair => pair[1] === index) ? 'bg-green-500' : secondColumnSelected === index ? 'bg-blue-500' : unlinkedPairs.some(pair => pair[1] === index) ? 'bg-red-500' : ''}`}
                            onClick={() => handleSecondColumnClick(index)}
                            disabled={linkedPairs.some(pair => pair[1] === index)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            {hardata.settings.footer === false ?
                ""
                :
                <div className={`flex flex-row h-[140px] ${validation === true ? "bg-gray-800" : "bg-gray-900"} w-screen items-center justify-center border-t-2 border-gray-500`}>
                    <div className={`flex-row h-full ${validation === false && finished === false && logResults === false ? "flex" : "hidden"} w-[1000px] justify-end items-center`}>
                        <button disabled={empty} onClick={() => { setValidation(true), setEmpty(true) }} className={`flex flex-col w-[125px] text-center items-center justify-center px-4 py-2.5 rounded-xl border-2 border-gray-500 ${empty === true ? "opacity-25 bg-gray-500" : "bg-green-500"} border-b-4`}>Vérifier</button>
                    </div>
                    <div className={`flex-row h-full ${validation === true && finished === false && logResults === false ? "flex" : "hidden"} w-[1000px] justify-end items-center`}>
                        <button ref={continueButtonRef} className='flex flex-col w-[125px] bg-green-500 text-center items-center justify-center px-4 py-2.5 rounded-xl border-2 border-green-700 border-b-4'>Continue</button>
                    </div>
                    <div className={`flex-row h-full ${finished === true && logResults === false ? "flex" : "hidden"} w-[1000px] justify-end items-center`}>
                        <button onClick={() => { setIndex(index + 1), setLogResults(true) }} className='flex flex-col w-[125px] bg-green-500 text-center items-center justify-center px-4 py-2.5 rounded-xl border-2 border-green-700 border-b-4'>Résultats</button>
                    </div>
                    <div className={`flex-row h-full ${logResults === true ? "flex" : "hidden"} w-[1000px] justify-end items-center`}>
                        <button onClick={() => { router.push('/en/me/learn') }} className='flex flex-col w-[125px] bg-green-500 text-center items-center justify-center px-4 py-2.5 rounded-xl border-2 border-green-700 border-b-4'>Terminer</button>
                    </div>
                </div>
            }
        </>
    )
}
