
async function loadEmpren() {

  const res = await fetch('http://localhost:3000/api/empresas',{ cache: 'no-store' })
  const data = await res.json()
  return data
}

async function cuponera() {
  const empren = await loadEmpren();

  return (
    <div className="derecha">
          <div className="cuponera">
            <h1 className=" text-green-500 fs-1 mb-3">Cuponera</h1>
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Yo Quiero!</button>
            <img src="/img/Cuponera.png" alt="..."/>
          </div>
          <div className="tiendas">
          <h1 className=" text-green-500 fs-1 mb-3">Tiendas</h1>
            <div className="template-tienda">
            {empren.map((empren) => (
              <div className="card-em">
                <a href={empren.link}><img src={empren.logo} alt="" className="card-img-top"/></a>
              </div>
            ))}
            </div>
          </div>
        </div>
  )
}
export default cuponera;