export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-900">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-blue-700 sm:text-5xl">
            Pagina no encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no hemos podido encontrar la página que estás buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primay-blue-700"
            >
              Volver a la pagina inicial
            </a>
            <a href="#" className="text-sm font-semibold text-blue-600">
              Comunicarse con el soporte técnico{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
