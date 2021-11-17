import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { listBugs, listCards } from '../utils/api';
import Bugs from '../views/bugs/bugs';
import Cards from '../views/cards/cards';

const ProjectById = props => {
    const { projects } = props;
    const { id } = useParams();

    const [currentProject, setCurrentProject] = useState({});
    const [bugsForCurrentProject, setBugsForCurrentProject] = useState([]);
    const [cardsForCurrentProject, setCardsForCurrentProject] = useState([]);
    const [toggleBugsAndCards, setToggleBugsAndCards] = useState("cards");

    useEffect(() => {
        setCurrentProject({});
        const projectFromParams = projects.find((project) => project.project_id === Number(id));
        setCurrentProject(projectFromParams);
    }, [projects, id]);

    useEffect(() => {
        if (toggleBugsAndCards === "bugs") {
            setBugsForCurrentProject([]);
        } else if (toggleBugsAndCards === "cards") {
            setCardsForCurrentProject([]);
        }

        const abortController = new AbortController();

        async function fetchListsFromAPI() {
            try {
                if (toggleBugsAndCards === "cards") {
                    const cards = await listCards(abortController.signal);
                    const cardsByProjectId = cards.filter((card) => card.project_id === Number(id));
                    setCardsForCurrentProject(cardsByProjectId);
                } else if (toggleBugsAndCards === "bugs") {
                    const bugs = await listBugs(abortController.signal);
                    const bugsByProjectId = bugs.filter((card) => card.project_id === Number(id));
                    setBugsForCurrentProject(bugsByProjectId);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchListsFromAPI();
    }, [toggleBugsAndCards, id]);

    const bugsAndCardsToggleHandler = (event) => {
        event.preventDefault();
        (toggleBugsAndCards === "cards" ? setToggleBugsAndCards("bugs") : setToggleBugsAndCards("cards"));
    }

    return (
        <>
            <section className="item item2">
                <h2>
                    <button onClick={bugsAndCardsToggleHandler}>
                        {toggleBugsAndCards === "cards" ? <>View Bugs</> : <>View Cards</>}
                    </button>
                    {currentProject.project_name}
                </h2>
                <Cards cards={cardsForCurrentProject} />
                {toggleBugsAndCards === "bugs" && <Bugs bugs={bugsForCurrentProject} />}
            </section>
        </>
    );
}

export default withAuthenticationRequired(ProjectById);