import { useState, useEffect } from 'react';

export default function LinkExerciceType({ data, changed, setChanged }) {
    const [firstColumnSelected, setFirstColumnSelected] = useState(null);
    const [secondColumnSelected, setSecondColumnSelected] = useState(null);
    const [shuffledSecondColumn, setShuffledSecondColumn] = useState([...data.map(item => item[1])]);
    const [linkedPairs, setLinkedPairs] = useState([]);
    const [unlinkedPairs, setUnlinkedPairs] = useState([]);
    const [initialSecondColumnOrder] = useState([...data.map(item => item[1])]);

    useEffect(() => {
        setShuffledSecondColumn([...initialSecondColumnOrder]);
    }, [initialSecondColumnOrder]);

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
        const selectedFirstColumnWord = data[firstIndex][0];
        const selectedSecondColumnWord = shuffledSecondColumn[secondIndex];

        const linkedWord = data.find(item => item[0] === selectedFirstColumnWord)[1];

        if (linkedWord === selectedSecondColumnWord) {
            const newLinkedPairs = [...linkedPairs, [firstIndex, secondIndex]];
            setLinkedPairs(newLinkedPairs);
            setFirstColumnSelected(null);
            setSecondColumnSelected(null);
        } else {
            const newUnlinkedPairs = [...unlinkedPairs, [firstIndex, secondIndex]];
            setUnlinkedPairs(newUnlinkedPairs);
            setTimeout(() => {
                setFirstColumnSelected(null);
                setSecondColumnSelected(null);
            }, 60);
        }

        if (linkedPairs.length === data.length - 1) {
            alert("Toutes les cartes sont sélectionnées !");
        }
    }

    return (
        <div className="flex flex-row w-[1000px] py-8 h-full gap-8">
            <div className="flex flex-col flex-1 h-full w-full gap-6">
                {/* Mapper sur le premier groupe */}
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`flex text-center justify-center items-center p-4 border-2 border-gray-500 rounded-xl ${linkedPairs.some(pair => pair[0] === index) ? 'bg-green-500' : firstColumnSelected === index ? 'bg-blue-500' : unlinkedPairs.some(pair => pair[0] === index) ? 'bg-red-500' : ''}`}
                        onClick={() => handleFirstColumnClick(index)}
                        disabled={linkedPairs.some(pair => pair[0] === index)}
                    >
                        {item[0]}
                    </button>
                ))}
            </div>
            <div className="flex flex-col flex-1 h-full w-full gap-6">
                {/* Mapper sur le deuxième groupe */}
                {initialSecondColumnOrder.map((item, index) => (
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
    )
}
