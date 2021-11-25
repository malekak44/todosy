// import Loader from './Loader';
// import EmptyList
import React from 'react';
import Guide from './Guide';
import Filter from './Filter';
import InnerList from './InnerList';
import { useGlobalContext } from '../../context/AppContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Wrapper = () => {
    const { todos, setTodos } = useGlobalContext();
    // const [isError, setIsError] = useState(false);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedTodos = reorder(
            todos,
            result.source.index,
            result.destination.index
        )

        setTodos(updatedTodos);
    }

    // if(loading) return <Loader/>
    // if(isError) return <EmptyList isError={true}/>
    // if(todos.length ===0) return <EmptyList/>

    return (
        <>
            <section className="todos__wrapper">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                className={`todo__list ${snapshot.isDraggingOver ? 'dragging' : ''}`}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <InnerList todos={todos} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <Filter />
            </section>
            <Guide />
        </>
    );
};

export default Wrapper;