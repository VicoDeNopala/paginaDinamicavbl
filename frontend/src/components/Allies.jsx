function Allies() {
  const aliados = [
    {
      nombre: "Cexart Callejas",
      imagen:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNiMGIwYjAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjU3MSAxSDExTDEgMTh2NC41YS41LjUgMCAwIDAgLjUuNWg5LjM4N2wtNC4yNDItOC4wMTJ6bS0xLjk4NyAyMkgyMi41YS41LjUgMCAwIDAgLjUtLjV2LTYuNzVIOC43NDZ6TTIzIDE0LjI1VjEuNWEuNS41IDAgMCAwLS41LS41aC02LjIwNWwtNC40OCA3LjkwOGwzLjExNiA1LjM0MnptLTEyLjA0MS0zLjgzMmwyLjIzNSAzLjgzMkg4Ljc4N3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KPC9zdmc+Cg==",
      descripcion: "Diseñador grafico de CansinoRock.",
    },
    {
      nombre: "Jesús Flores",
      imagen:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgoJPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNiMGIwYjAiIGQ9Ik0yMCA0aC0zLjE3TDE1IDJIOUw3LjE3IDRINGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJtMCAxNEg0VjZoNC4wNWwxLjgzLTJoNC4yNGwxLjgzIDJIMjB6TTEyIDdhNSA1IDAgMCAwLTUgNWE1IDUgMCAwIDAgNSA1YTUgNSAwIDAgMCA1LTVhNSA1IDAgMCAwLTUtNW0wIDhhMyAzIDAgMCAxLTMtM2EzIDMgMCAwIDEgMy0zYTMgMyAwIDAgMSAzIDNhMyAzIDAgMCAxLTMgMyIgLz4KPC9zdmc+Cg==",
      descripcion: "Fotografo oficial de rock clásico.",
    },
    {
      nombre: "Miguel Garcia Callejas",
      imagen:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTQgMTQiPgoJPHBhdGggZD0iTTAgMGgxNHYxNEgweiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTIuNzQ2IDQuNTA0bC4yOTQtLjAxM3EuNzU2LS4wMzQgMS41MzQtLjA2M3EuMDE1LjE4NS4wMzUuMzY2Yy4wNTIuNDguNDQzLjg2NC45MjMuOTE0Yy4zMjQuMDM0LjY1Ni4wNjIuOTk1LjA2MnMuNjctLjAyOC45OTUtLjA2MmMuNDgtLjA1Ljg3LS40MzQuOTIzLS45MTRxLjAyLS4xOC4wMzUtLjM2NnEuNzc4LjAyOCAxLjUzNC4wNjNsLjI5NC4wMTN2LS4wNWMwLS44MjQtLjA5NC0xLjYyNy0uMTg0LTIuNDAxbC0uMDE0LS4xMjRjLS4wNTYtLjQ4LS40NC0uODYtLjkyLS45MTNMOC45NzUuOTkyYy0uNzktLjA4OC0xLjYwOS0uMTgtMi40NDctLjE4UzQuODcuOTA1IDQuMDguOTkybC0uMjE3LjAyNGMtLjQ4LjA1My0uODYzLjQzNC0uOTIuOTEzbC0uMDEzLjEyNGMtLjA5Ljc3NC0uMTg0IDEuNTc3LS4xODQgMi40eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgoJCTxwYXRoIGZpbGw9IiNkN2UwZmYiIGQ9Ik00LjYwOSA0Ljc5NGMuMDUyLjQ4LjQ0My44NjQuOTIzLjkxNGMuMzI0LjAzNC42NTYuMDYyLjk5NS4wNjJzLjY3LS4wMjguOTk1LS4wNjJjLjQ4LS4wNS44Ny0uNDM0LjkyMy0uOTE0cS4wMi0uMTguMDM1LS4zNjZxLjc3Ny4wMjggMS41MzQuMDYzbC43My4wMzFjLjQ1LjAxOS44NC4zMy45MTguNzczYy4wOTcuNTQuMTI4IDEuMDA0LjA5NSAxLjQ5NGExLjU1IDEuNTUgMCAwIDEtLjUxIDEuMDQ1cS4xMzMuMjQ0LjIwOC41MTdjLjA3My4yNjcuMTQ5LjUxNy4yMjIuNzZjLjIxMy43MDkuNDA2IDEuMzUyLjQ2NyAyLjEyNGMuMDc0Ljk0Ny0uNzUgMS42NjgtMS42OTcgMS43MzZsLS4wMzMuMDAyYy0xLjI1NS4wOS0yLjU1NS4xODMtMy44ODcuMTgzcy0yLjYzMi0uMDkzLTMuODg4LS4xODNsLS4wMzItLjAwMmMtLjk0OC0uMDY4LTEuNzcxLS43OS0xLjY5Ny0xLjczNmMuMDYtLjc3Mi4yNTQtMS40MTUuNDY3LTIuMTIzYy4wNzMtLjI0NC4xNDgtLjQ5NC4yMjItLjc2cS4wNzYtLjI3NC4yMDctLjUxOGExLjU2IDEuNTYgMCAwIDEtLjUxLTEuMDQ1YTYgNiAwIDAgMSAuMDk1LTEuNDk0Yy4wNzktLjQ0My40Ny0uNzU0LjkxOC0uNzczbC43MzEtLjAzMXEuNzU3LS4wMzQgMS41MzQtLjA2M3EuMDE1LjE4NS4wMzUuMzY2IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzQxNDdkNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC42MDkgNC43OTRjLjA1Mi40OC40NDMuODY0LjkyMy45MTRjLjMyNC4wMzQuNjU2LjA2Mi45OTUuMDYycy42Ny0uMDI4Ljk5NS0uMDYyYy40OC0uMDUuODctLjQzNC45MjMtLjkxNHEuMDItLjE4LjAzNS0uMzY2cS43NzcuMDI4IDEuNTM0LjA2M2wuNzMuMDMxYy40NS4wMTkuODQuMzMuOTE4Ljc3M2MuMDk3LjU0LjEyOCAxLjAwNC4wOTUgMS40OTRhMS41NSAxLjU1IDAgMCAxLS41MSAxLjA0NXEuMTMzLjI0NC4yMDguNTE3Yy4wNzMuMjY3LjE0OS41MTcuMjIyLjc2Yy4yMTMuNzA5LjQwNiAxLjM1Mi40NjcgMi4xMjRjLjA3NC45NDctLjc1IDEuNjY4LTEuNjk3IDEuNzM2bC0uMDMzLjAwMmMtMS4yNTUuMDktMi41NTUuMTgzLTMuODg3LjE4M3MtMi42MzItLjA5My0zLjg4OC0uMTgzbC0uMDMyLS4wMDJjLS45NDgtLjA2OC0xLjc3MS0uNzktMS42OTctMS43MzZjLjA2LS43NzIuMjU0LTEuNDE1LjQ2Ny0yLjEyM2MuMDczLS4yNDQuMTQ4LS40OTQuMjIyLS43NnEuMDc2LS4yNzQuMjA3LS41MThhMS41NiAxLjU2IDAgMCAxLS41MS0xLjA0NWE2IDYgMCAwIDEgLjA5NS0xLjQ5NGMuMDc5LS40NDMuNDctLjc1NC45MTgtLjc3M2wuNzMxLS4wMzFxLjc1Ny0uMDM0IDEuNTM0LS4wNjNxLjAxNS4xODUuMDM1LjM2NiIgLz4KCQk8cGF0aCBzdHJva2U9IiM0MTQ3ZDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExLjY1NiA1LjMwNGguNjczVjIuNzQyaC44OW0tOS4yMzEgNy44MzZoLS43OW04LjE5Mi0yLjQ4NEgxLjY3M201LjE0MyAyLjQ4NGgtLjc5bTMuNjM0IDBoLS43OW0xLjQzOC02LjEyNWMwLS44NjctLjEwNC0xLjcxMS0uMTk4LTIuNTI0Yy0uMDU2LS40OC0uNDQtLjg2LS45Mi0uOTEzQzguMzM1LjkyMSA3LjQ0My44MTMgNi41MjguODEzUzQuNzIuOTIgMy44NjMgMS4wMTZjLS40OC4wNTMtLjg2My40MzQtLjkyLjkxM2MtLjA5NC44MTMtLjE5NyAxLjY1Ny0uMTk3IDIuNTI0IiAvPgoJPC9nPgo8L3N2Zz4K",
      descripcion: "Cronista oficial.",
    },
  ];

  return (
    <section id="aliados" className="container py-5">
      <h2 className="text-center mb-5">Clientes y Aliados Estratégicos</h2>

      <div className="row g-4">
        {aliados.map((aliado, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-dark text-light h-100 shadow">
              <img
                src={aliado.imagen}
                className="card-img-top"
                alt={aliado.nombre}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{aliado.nombre}</h5>

                <p className="card-text">{aliado.descripcion}</p>

                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                >
                  Visitar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Allies;
