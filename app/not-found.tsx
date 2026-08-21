export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col justify-center px-4 py-20">
      <a href="/" className="font-display text-xl font-extrabold text-night">
        Gozo Quad Tours
      </a>
      <h1 className="mt-8 font-display text-4xl font-extrabold">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        That address is not on this site. Start from the homepage or pick a
        vehicle.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/"
          className="inline-flex w-fit rounded-full bg-rust px-4 py-2 text-sm font-extrabold text-white hover:bg-rust-2"
        >
          Homepage
        </a>
        <a
          href="/self-drive-or-passenger"
          className="inline-flex w-fit rounded-full border border-rule px-4 py-2 text-sm font-extrabold text-ink hover:bg-sand-2"
        >
          Who drives?
        </a>
      </div>
    </main>
  );
}
