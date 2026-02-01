import { Form } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function CreateJob({ countries }) {
    const { errors } = usePage().props;

    // FUTURE: Set location to user's location.
    // const [locationFlag, setLocationFlag] = useState();

    console.log(countries);

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

                {/* Type */}
                <div>
                    <h1 className="font-helvetica font-semibold text-2xl">
                        Type
                    </h1>
                    <select
                        name="type"
                        className="select my-2 w-full"
                        defaultValue="FULL_TIME"
                        required
                    >
                        <option value="FULL_TIME">Full-time</option>
                        <option value="PART_TIME">Part-time</option>
                        <option value="CASUAL">Casual</option>
                        <option value="CONTRACTOR">Contractor</option>
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
                        name="locationType"
                        className="select my-2 w-full"
                        defaultValue="ON_SITE"
                    >
                        <option value="ON_SITE">On-Site</option>
                        <option value="HYBRID">Hybrid</option>
                        <option value="REMOTE">Remote</option>
                    </select>
                    {errors.locationType && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                            {errors.locationType}
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
                        defaultValue="PENDING"
                    >
                        <option value="PENDING">Pending</option>
                        <option value="INTERVIEW">Interview</option>
                        <option value="OFFER">Offer</option>
                        <option value="REJECTED">Rejected</option>
                        <option value="GHOSTED">Ghosted</option>
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
                            name="dateApplied"
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.dateApplied && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.dateApplied}
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
                            name="closingDate"
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.closingDate && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.closingDate}
                            </div>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn bg-blue-800 font-helvetica tracking-wide text-lg"
                >
                    Create job
                </button>
            </Form>
        </>
    );
}
