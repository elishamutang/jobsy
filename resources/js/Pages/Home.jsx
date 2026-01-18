import { ModalLink } from "@inertiaui/modal-react";
import Actions from "../Components/Actions";

export default function Home() {
    const exampleJobs = [
        {
            id: 1,
            title: "Software Engineer",
            type: "Engineering",
            company: "Meta",
            dateApplied: "18/01/2026",
            closingDate: null,
            industry: "Technology",
            location: "Sydney, Australia",
            locationType: "Remote",
            currentStage: [],
            status: "Waiting response",
        },
    ];

    return (
        <>
            <Actions />

            {/* List of jobs */}
            <section className="my-10">
                {exampleJobs.map((item, index) => {
                    return <ModalLink key={index}>{item.title}</ModalLink>;
                })}
            </section>
        </>
    );
}
