import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

const ErrorState = ({
  title = "We couldn't load this page",
  message = "Something went wrong. Try again in a moment.",
  retryLabel = "Try again",
  onRetry,
}) => (
  <section
    role="alert"
    aria-live="assertive"
    className="mx-auto my-10 flex w-full max-w-xl flex-col items-center px-6 py-8 text-center"
  >
    <div className="mb-5 grid size-12 place-items-center rounded-full border border-rose-700/30 bg-rose-100 text-rose-700 dark:border-rose-300/30 dark:bg-rose-950 dark:text-rose-200">
      <FiAlertTriangle aria-hidden="true" className="text-xl" />
    </div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600 dark:text-neutral-300">
      {message}
    </p>
    <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-300 dark:text-neutral-950 dark:hover:bg-teal-200 dark:focus-visible:outline-teal-300"
      >
        <FiRefreshCw aria-hidden="true" />
        {retryLabel}
      </button>
      <Link
        to="/"
        className="min-h-11 content-center text-sm font-medium underline decoration-teal-600 underline-offset-4 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:decoration-teal-300 dark:hover:text-teal-200 dark:focus-visible:outline-teal-300"
      >
        Back to search
      </Link>
    </div>
  </section>
);

export default ErrorState;