import { Form } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function CreateJob({ countries, jobLevels }) {
    const { errors } = usePage().props;

    // FUTURE: Set location to user's location.
    // const [locationFlag, setLocationFlag] = useState();
    console.log(jobLevels);
    return (
        <>
            <Form
                action="/jobs/create"
                method="post"
                className="inert:opacity-50 inert:pointer-events-none self-start w-full flex flex-col gap-3"
                disableWhileProcessing
                resetOnSuccess
            >
                {/* Job Details */}

                {/* Title */}
                <div>
                    <h1 className="font-semibold w-full font-helvetica text-3xl">
                        Title
                    </h1>
                    <input
                        type="text"
                        name="title"
                        placeholder="e.g Software Engineer"
                        className="input my-2 py-5 text-md w-full"
                        required
                    />
                    {errors.title && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.title}
                        </div>
                    )}
                </div>

                {/* Company */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Company
                    </h1>
                    <input
                        type="text"
                        name="company"
                        placeholder="e.g Meta"
                        className="input my-2 py-5 text-md w-full"
                        required
                    />
                    {errors.company && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.company}
                        </div>
                    )}
                </div>

                {/* Industry */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Industry
                    </h1>
                    <input
                        type="text"
                        name="industry"
                        placeholder="e.g Technology"
                        className="input my-2 py-5 text-md w-full"
                        required
                    />
                    {errors.industry && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.industry}
                        </div>
                    )}
                </div>

                {/* Job Level */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Level
                    </h1>
                    <select
                        name="job_level"
                        className="select my-2 w-full"
                        defaultValue={jobLevels[0].id}
                        required
                    >
                        {jobLevels.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>
                                    {item.title}
                                </option>
                            );
                        })}
                    </select>
                    {errors.job_level && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.job_level}
                        </div>
                    )}
                </div>

                {/* Type */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Type
                    </h1>
                    <select
                        name="type"
                        className="select my-2 w-full"
                        defaultValue="Full-time"
                        required
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Casual">Casual</option>
                        <option value="Contractor">Contractor</option>
                    </select>
                    {errors.type && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.type}
                        </div>
                    )}
                </div>

                {/* Countries */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Location
                    </h1>
                    <select
                        name="location"
                        className="select my-2 w-full"
                        defaultValue="6"
                        required
                    >
                        {countries.map((country) => {
                            return (
                                <option
                                    className="country-flag"
                                    key={country.id}
                                    value={country.id}
                                >
                                    {country.name}
                                </option>
                            );
                        })}
                    </select>
                    {errors.location && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.location}
                        </div>
                    )}
                </div>

                {/* Location type */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Location type{" "}
                        <span className="text-sm font-helvetica text-zinc-500">
                            optional
                        </span>
                    </h1>
                    <select
                        name="location_type"
                        className="select my-2 w-full"
                        defaultValue="On-site"
                    >
                        <option value="On-site">On-Site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                    {errors.location_type && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.location_type}
                        </div>
                    )}
                </div>

                {/* Status */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Status
                    </h1>
                    <select
                        name="status"
                        className="select my-2 w-full"
                        defaultValue="Pending"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Ghosted">Ghosted</option>
                    </select>
                    {errors.status && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.status}
                        </div>
                    )}
                </div>

                {/* Dates */}
                <div className="flex flex-col md:flex-row md:justify-evenly gap-5">
                    {/* Date applied */}
                    <div className="w-full">
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Date applied
                        </h1>
                        <input
                            type="date"
                            name="date_applied"
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.date_applied && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.date_applied}
                            </div>
                        )}
                    </div>

                    {/* Closing date */}
                    <div className="w-full">
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Closing date
                        </h1>
                        <input
                            type="date"
                            name="closing_date"
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.closing_date && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.closing_date}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn bg-blue-800 font-helvetica tracking-wide text-lg text-white"
                >
                    Create job
                </button>
            </Form>
        </>
    );
}
