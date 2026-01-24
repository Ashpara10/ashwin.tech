
const Work = () => {
    const works = [
        { title: "Frontend Developer Intern", company: "Betterstacks", from: "2024-06-01", to: "2024-09-20", icon: "/stacks.png", },
        { title: "Fullstack Developer Intern", company: "Betterstacks", from: "2025-02-01", to: Date.now(), icon: "/stacks.png" }
    ]
    return (
        <section className='max-w-xl mx-auto'>
            <h2 className="w-full text-left text-xl tracking-tight dark:text-white">
                Work Experience
            </h2>

            <div className='mt-6 space-y-6'>
                {works.map((work, index) => (
                    <div key={index} className='flex flex-row'>
                        <img className='rounded-full size-8' src={work.icon} alt={work.company} />
                        <div className='ml-2'>
                            <h3 className="dark:text-white font-medium">{work.title} @{work.company}</h3>
                            <div className="flex flex-row gap-2">
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{new Date(work.from).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}</span>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">-</span>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{work.to === Date.now() ? "Present" : new Date(work.to).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work