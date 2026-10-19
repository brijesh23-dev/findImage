import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFoundPage = () => (
  <main className="mode grid min-h-screen place-items-center px-6 py-16">
    <section className="w-full max-w-xl text-center" aria-labelledby="not-found-title">
      <p className="font-Inter text-8xl font-semibold leading-none text-teal-700 dark:text-teal-300">
        404
      </p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-teal-800 dark:text-teal-200">
        Page not found
      </p>
      <h1 id="not-found-title" className="mt-3 text-3xl font-semibold">
        This page isn’t in the gallery.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        The address may be incorrect, or the page may have moved. Head back to search and find something worth keeping.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-300 dark:text-neutral-950 dark:hover:bg-teal-200 dark:focus-visible:outline-teal-300"
        >
          <FiArrowLeft aria-hidden="true" />
          Return to search
        </Link>
        <Link
          to="/collection"
          className="min-h-11 content-center text-sm font-medium underline decoration-teal-600 underline-offset-4 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:decoration-teal-300 dark:hover:text-teal-200 dark:focus-visible:outline-teal-300"
        >
          Open collection
        </Link>
      </div>
    </section>
  </main>
);

export default NotFoundPage;