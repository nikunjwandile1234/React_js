export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/2nikunj.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           I build my days with logic and late-night code,
                           Turning doubts into drafts, ideas into load.
                            From basics to breakthroughs, I stay in the grind,
                           Learning fast, failing forward, sharpening mind
                        </p>
                        <p className="mt-4 text-gray-600">
                         With patience as power and purpose in sight,
                         I chase clean solutions, make chaos feel right.
                        Step by step, line by line, I rise and I learn—
                         Not waiting for chances, I earn every turn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}